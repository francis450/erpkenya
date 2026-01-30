#!/usr/bin/env python3
"""
Backend API Testing Script
Tests the FastAPI backend endpoints for leads and subscription functionality.
"""

import requests
import json
import os
from datetime import datetime

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

def test_leads_endpoint():
    """Test POST /api/leads endpoint"""
    print("\n=== Testing POST /api/leads ===")
    
    backend_url = get_backend_url()
    if not backend_url:
        print("❌ Could not get backend URL from frontend/.env")
        return False
        
    url = f"{backend_url}/api/leads"
    
    # Test data as specified in the review request
    test_data = {
        "name": "Test",
        "email": "test@test.com", 
        "company": "Test Co",
        "form_type": "demo"
    }
    
    try:
        print(f"Making request to: {url}")
        print(f"Request body: {json.dumps(test_data, indent=2)}")
        
        response = requests.post(url, json=test_data, timeout=10)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response Headers: {dict(response.headers)}")
        
        if response.status_code == 200:
            try:
                response_json = response.json()
                print(f"Response JSON: {json.dumps(response_json, indent=2)}")
                
                # Verify expected response structure
                if "message" in response_json and "id" in response_json:
                    print("✅ POST /api/leads - SUCCESS: Returns 200 OK with expected JSON structure")
                    return True
                else:
                    print("❌ POST /api/leads - FAILED: Missing expected fields in response")
                    return False
                    
            except json.JSONDecodeError:
                print(f"❌ POST /api/leads - FAILED: Invalid JSON response: {response.text}")
                return False
        else:
            print(f"❌ POST /api/leads - FAILED: Expected 200 OK, got {response.status_code}")
            print(f"Response text: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ POST /api/leads - FAILED: Request error: {e}")
        return False

def test_leads_with_interests():
    """Test POST /api/leads endpoint with interests field"""
    print("\n=== Testing POST /api/leads with interests ===")
    
    backend_url = get_backend_url()
    if not backend_url:
        print("❌ Could not get backend URL from frontend/.env")
        return False
        
    url = f"{backend_url}/api/leads"
    
    # Test data as specified in the review request
    test_data = {
        "name": "AI Tester",
        "email": "ai@test.com",
        "company": "Tech Corp",
        "form_type": "ai_demo",
        "interests": ["predictive", "copilot"]
    }
    
    try:
        print(f"Making request to: {url}")
        print(f"Request body: {json.dumps(test_data, indent=2)}")
        
        response = requests.post(url, json=test_data, timeout=10)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response Headers: {dict(response.headers)}")
        
        if response.status_code == 200:
            try:
                response_json = response.json()
                print(f"Response JSON: {json.dumps(response_json, indent=2)}")
                
                # Verify expected response structure
                if "message" in response_json and "id" in response_json:
                    print("✅ POST /api/leads with interests - SUCCESS: Returns 200 OK with expected JSON structure")
                    return True
                else:
                    print("❌ POST /api/leads with interests - FAILED: Missing expected fields in response")
                    return False
                    
            except json.JSONDecodeError:
                print(f"❌ POST /api/leads with interests - FAILED: Invalid JSON response: {response.text}")
                return False
        else:
            print(f"❌ POST /api/leads with interests - FAILED: Expected 200 OK, got {response.status_code}")
            print(f"Response text: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ POST /api/leads with interests - FAILED: Request error: {e}")
        return False

def test_subscribe_endpoint():
    """Test POST /api/subscribe endpoint"""
    print("\n=== Testing POST /api/subscribe ===")
    
    backend_url = get_backend_url()
    if not backend_url:
        print("❌ Could not get backend URL from frontend/.env")
        return False
        
    url = f"{backend_url}/api/subscribe"
    
    # Test data as specified in the review request
    test_data = {
        "email": "test@test.com"
    }
    
    try:
        print(f"Making request to: {url}")
        print(f"Request body: {json.dumps(test_data, indent=2)}")
        
        response = requests.post(url, json=test_data, timeout=10)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response Headers: {dict(response.headers)}")
        
        if response.status_code == 200:
            try:
                response_json = response.json()
                print(f"Response JSON: {json.dumps(response_json, indent=2)}")
                
                # Verify expected response structure
                if "message" in response_json:
                    print("✅ POST /api/subscribe - SUCCESS: Returns 200 OK with expected JSON structure")
                    return True
                else:
                    print("❌ POST /api/subscribe - FAILED: Missing expected fields in response")
                    return False
                    
            except json.JSONDecodeError:
                print(f"❌ POST /api/subscribe - FAILED: Invalid JSON response: {response.text}")
                return False
        else:
            print(f"❌ POST /api/subscribe - FAILED: Expected 200 OK, got {response.status_code}")
            print(f"Response text: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ POST /api/subscribe - FAILED: Request error: {e}")
        return False

def main():
    """Run all backend tests"""
    print("🚀 Starting Backend API Tests")
    print(f"Timestamp: {datetime.now().isoformat()}")
    
    # Test both endpoints
    leads_result = test_leads_endpoint()
    subscribe_result = test_subscribe_endpoint()
    
    # Summary
    print("\n" + "="*50)
    print("📊 TEST SUMMARY")
    print("="*50)
    print(f"POST /api/leads: {'✅ PASS' if leads_result else '❌ FAIL'}")
    print(f"POST /api/subscribe: {'✅ PASS' if subscribe_result else '❌ FAIL'}")
    
    overall_success = leads_result and subscribe_result
    print(f"\nOverall Result: {'✅ ALL TESTS PASSED' if overall_success else '❌ SOME TESTS FAILED'}")
    
    return overall_success

if __name__ == "__main__":
    main()