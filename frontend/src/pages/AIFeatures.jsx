import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AIChatSimulator } from '@/components/AIChatSimulator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { BrainCircuit, LineChart, Zap, ShieldAlert, CheckCircle2, Bot } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function AIFeatures() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interests: []
  });

  const aiFeatures = [
    { id: "predictive", label: "Predictive Analytics & Forecasting" },
    { id: "automation", label: "Intelligent Process Automation (IPA)" },
    { id: "copilot", label: "AI Co-Pilot / Virtual Assistant" },
    { id: "anomaly", label: "Anomaly Detection & Security" }
  ];

  const handleInterestChange = (checked, id) => {
    if (checked) {
      setFormData(prev => ({ ...prev, interests: [...prev.interests, id] }));
    } else {
      setFormData(prev => ({ ...prev, interests: prev.interests.filter(item => item !== id) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, {
        ...formData,
        form_type: 'ai_demo',
        message: `Interested in AI features: ${formData.interests.join(', ')}`
      });
      toast.success("AI Demo request received! We'll be in touch.");
      setFormData({ name: '', email: '', company: '', interests: [] });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        {/* Abstract Tech Background */}
        <div className="absolute inset-0 opacity-20">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-900/50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-white">
              <Badge variant="outline" className="mb-6 border-cyan-400/50 text-cyan-300 px-4 py-1 text-sm uppercase tracking-wider">
                <BrainCircuit className="w-4 h-4 mr-2 inline" />
                Intelligence Engineered
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                The First <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AI-Powered ERP</span> for Kenya.
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                Move from reactive to proactive. Leverage agentic AI to automate KRA filings, forecast supply chain disruptions, and reconcile M-Pesa payments instantly.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white border-none h-14 px-8 text-lg">
                  Book an AI Demo
                </Button>
                <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800 h-14 px-8 text-lg">
                  View Case Studies
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
                <AIChatSimulator />
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Plan */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-16 text-slate-900">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-slate-50 border-4 border-white shadow-xl flex items-center justify-center mb-6">
                        <span className="text-3xl font-bold text-slate-300">1</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Identify Your Pain</h3>
                    <p className="text-slate-600 px-4">Manual KRA reporting? Stockouts at the port? We pinpoint where AI can save you money.</p>
                </div>
                <div className="flex flex-col items-center">
                     <div className="w-24 h-24 rounded-full bg-cyan-50 border-4 border-white shadow-xl flex items-center justify-center mb-6">
                        <span className="text-3xl font-bold text-cyan-500">2</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">See AI Solve It</h3>
                    <p className="text-slate-600 px-4">Our Co-Pilot automates the workflow. Watch M-Pesa payments reconcile themselves.</p>
                </div>
                <div className="flex flex-col items-center">
                     <div className="w-24 h-24 rounded-full bg-blue-50 border-4 border-white shadow-xl flex items-center justify-center mb-6">
                        <span className="text-3xl font-bold text-primary">3</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Get Started</h3>
                    <p className="text-slate-600 px-4">Book a free assessment. We deploy the AI modules tailored to your industry.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Detailed Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">2026-Ready Capabilities</h2>
                <p className="text-lg text-slate-600">Built for the future of African business.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Feature 1 */}
                <Card className="border-l-4 border-l-cyan-500 shadow-md hover:shadow-xl transition-all">
                    <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-cyan-100 rounded-lg">
                                <LineChart className="h-6 w-6 text-cyan-600" />
                            </div>
                            <CardTitle>Predictive Analytics & Forecasting</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-slate-600 mb-4">
                            Don't guess. Know. Our AI analyzes historical data and external factors like Mombasa port delays or weather patterns to predict demand.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-slate-700">
                                <CheckCircle2 size={16} className="text-green-500" /> Prevent stockouts before they happen
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700">
                                <CheckCircle2 size={16} className="text-green-500" /> Forecast cash flow for better planning
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Feature 2 */}
                <Card className="border-l-4 border-l-blue-500 shadow-md hover:shadow-xl transition-all">
                    <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <Zap className="h-6 w-6 text-blue-600" />
                            </div>
                            <CardTitle>Intelligent Process Automation</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-slate-600 mb-4">
                            Hyper-automation for the boring stuff. We combine AI with RPA to handle end-to-end workflows without human intervention.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-slate-700">
                                <CheckCircle2 size={16} className="text-green-500" /> Auto-reconcile M-Pesa & Bank statements
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700">
                                <CheckCircle2 size={16} className="text-green-500" /> Generate & File KRA eTIMS invoices
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Feature 3 */}
                <Card className="border-l-4 border-l-purple-500 shadow-md hover:shadow-xl transition-all">
                    <CardHeader>
                         <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <Bot className="h-6 w-6 text-purple-600" />
                            </div>
                            <CardTitle>AI Co-Pilot (Sidekick)</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-slate-600 mb-4">
                            Your 24/7 business consultant. Ask questions in natural language (English or Swahili) and get instant, data-backed answers.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-slate-700">
                                <CheckCircle2 size={16} className="text-green-500" /> "What is my top selling product in Kisumu?"
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700">
                                <CheckCircle2 size={16} className="text-green-500" /> "Draft a purchase order for supplies."
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Feature 4 */}
                <Card className="border-l-4 border-l-red-500 shadow-md hover:shadow-xl transition-all">
                    <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-red-100 rounded-lg">
                                <ShieldAlert className="h-6 w-6 text-red-600" />
                            </div>
                            <CardTitle>Anomaly Detection</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-slate-600 mb-4">
                            Catch fraud and errors instantly. The AI scans for unusual patterns in expenses or inventory movement.
                        </p>
                         <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-slate-700">
                                <CheckCircle2 size={16} className="text-green-500" /> Flag duplicate invoices or unusual prices
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700">
                                <CheckCircle2 size={16} className="text-green-500" /> Supply chain disruption alerts
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      {/* Lead Gen Form Section */}
      <section className="py-20 bg-slate-900 text-white" id="demo-form">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4">Book Your AI Demo</h2>
                    <p className="text-slate-400">
                        Select the features you're interested in, and we'll prepare a custom demo environment for you.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input 
                                id="name" 
                                placeholder="John Doe" 
                                className="bg-slate-900 border-slate-600 text-white" 
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Work Email</Label>
                            <Input 
                                id="email" 
                                type="email" 
                                placeholder="john@company.com" 
                                className="bg-slate-900 border-slate-600 text-white"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required 
                            />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="company">Company Name</Label>
                            <Input 
                                id="company" 
                                placeholder="Acme Logistics Ltd" 
                                className="bg-slate-900 border-slate-600 text-white" 
                                value={formData.company}
                                onChange={(e) => setFormData({...formData, company: e.target.value})}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Label className="text-lg">Which capabilities interest you?</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {aiFeatures.map((feature) => (
                                <div key={feature.id} className="flex items-center space-x-3 p-4 rounded-lg border border-slate-700 bg-slate-900/50 hover:bg-slate-700/50 transition-colors cursor-pointer" onClick={() => handleInterestChange(!formData.interests.includes(feature.id), feature.id)}>
                                    <Checkbox 
                                        id={feature.id} 
                                        checked={formData.interests.includes(feature.id)}
                                        onCheckedChange={(checked) => handleInterestChange(checked, feature.id)}
                                        className="border-slate-500 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                                    />
                                    <label
                                        htmlFor={feature.id}
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-slate-200"
                                    >
                                        {feature.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button type="submit" size="lg" disabled={loading} className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold h-14 text-lg shadow-lg">
                        {loading ? "Submitting..." : "Schedule My AI Assessment"}
                    </Button>
                </form>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
