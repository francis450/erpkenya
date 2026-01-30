# API Contracts

## Overview
Backend: FastAPI (Port 8001)
Frontend: React (Port 3000)
Database: MongoDB

## Data Models

### Lead
Collection: `leads`
| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Auto-generated |
| `name` | String | Full Name |
| `email` | String | Email Address |
| `company` | String | Company Name |
| `phone` | String | Phone Number (optional) |
| `message` | String | Message content |
| `form_type` | String | 'demo', 'contact', 'general' |
| `created_at` | DateTime | Submission timestamp |

### Subscriber
Collection: `subscribers`
| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Auto-generated |
| `email` | String | Email Address |
| `created_at` | DateTime | Subscription timestamp |

## API Endpoints

### 1. Submit Lead / Request Demo
- **Endpoint:** `POST /api/leads`
- **Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Kenya Ltd",
  "phone": "+254700000000",
  "message": "Interested in ERP",
  "form_type": "demo"
}
```
- **Response (200 OK):**
```json
{
  "message": "Lead submitted successfully",
  "id": "507f1f77bcf86cd799439011"
}
```

### 2. Subscribe to Newsletter
- **Endpoint:** `POST /api/subscribe`
- **Request Body:**
```json
{
  "email": "john@example.com"
}
```
- **Response (200 OK):**
```json
{
  "message": "Subscribed successfully",
  "id": "507f1f77bcf86cd799439012"
}
```
