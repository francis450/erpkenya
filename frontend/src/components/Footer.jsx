import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) return;
    setLoading(true);
    try {
      await axios.post(`${API}/subscribe`, { email });
      toast.success("Subscribed successfully!");
      setEmail('');
    } catch (error) {
        if (error.response?.status === 400 || error.response?.data?.message === "Already subscribed") {
             toast.info("You are already subscribed.");
        } else {
             toast.error("Subscription failed. Please try again.");
        }
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
               <div className="h-8 w-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="font-bold text-xl text-white">ERP Kenya</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering Kenyan businesses with world-class ERP solutions tailored for local compliance, manufacturing, and growth.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.linkedin.com/company/erp-kenya/" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Solutions</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/solutions" className="hover:text-primary transition-colors">Manufacturing</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">Distribution</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">Agriculture</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">Financial Management</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Contact Us</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Karen, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+254757185189">+254 757 185189</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:contact@erpkenya.com">contact@erpkenya.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Stay Updated</h3>
            <p className="text-slate-400 text-sm">Get the latest insights on KRA compliance and business trends.</p>
            <div className="flex flex-col gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-900 border-slate-800 focus:ring-primary text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button onClick={handleSubscribe} disabled={loading} className="w-full bg-primary hover:bg-primary/90">
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} ERP Kenya. All rights reserved. Proudly Kenyan 🇰🇪</p>
        </div>
      </div>
    </footer>
  );
}
