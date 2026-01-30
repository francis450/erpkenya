import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AIChatSimulator } from '@/components/AIChatSimulator';
import { CalendlyButton, CalendlyEmbed, CALENDLY_URLS } from '@/components/CalendlyWidget';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BrainCircuit, LineChart, Zap, ShieldAlert, CheckCircle2, Bot } from 'lucide-react';

export default function AIFeatures() {

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-900/50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-white">
              <Badge variant="outline" className="mb-6 border-cyan-400/50 text-cyan-300 px-4 py-1 text-sm uppercase tracking-wider">
                <BrainCircuit className="w-4 h-4 mr-2 inline" />
                AI-Powered ERP
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Stop Guessing. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Start Growing.</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                You're losing money to stockouts and manual data entry. Our AI Co-Pilot automates your KRA filings, forecasts supply needs, and matches M-Pesa payments instantly.
              </p>
              <div className="flex flex-wrap gap-4">
                <CalendlyButton 
                    text="Schedule Your AI Strategy Session" 
                    url={CALENDLY_URLS.aiConsult}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white border-none h-14 px-8 text-lg"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
                <AIChatSimulator />
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Plan (BMS) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-16 text-slate-900">Your Simple Plan to Automation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-slate-50 border-4 border-white shadow-xl flex items-center justify-center mb-6">
                        <span className="text-3xl font-bold text-slate-300">1</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Connect Your Data</h3>
                    <p className="text-slate-600 px-4">Link your bank, M-Pesa, and inventory in one click.</p>
                </div>
                <div className="flex flex-col items-center">
                     <div className="w-24 h-24 rounded-full bg-cyan-50 border-4 border-white shadow-xl flex items-center justify-center mb-6">
                        <span className="text-3xl font-bold text-cyan-500">2</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Activate AI Co-Pilot</h3>
                    <p className="text-slate-600 px-4">Let the system predict sales and file taxes automatically.</p>
                </div>
                <div className="flex flex-col items-center">
                     <div className="w-24 h-24 rounded-full bg-blue-50 border-4 border-white shadow-xl flex items-center justify-center mb-6">
                        <span className="text-3xl font-bold text-primary">3</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Scale Without Chaos</h3>
                    <p className="text-slate-600 px-4">Focus on strategy while AI handles the operations.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Detailed Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Capabilities That Save You Time</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-l-4 border-l-cyan-500 shadow-md">
                    <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-cyan-100 rounded-lg">
                                <LineChart className="h-6 w-6 text-cyan-600" />
                            </div>
                            <CardTitle>Predictive Analytics</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-slate-600 mb-4">
                            <strong>Problem:</strong> Stockouts at the port cost you sales.<br/>
                            <strong>Solution:</strong> AI predicts demand based on weather & seasons.
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500 shadow-md">
                    <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <Zap className="h-6 w-6 text-blue-600" />
                            </div>
                            <CardTitle>Intelligent Automation</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-slate-600 mb-4">
                            <strong>Problem:</strong> Manual data entry creates errors.<br/>
                            <strong>Solution:</strong> Auto-reconcile M-Pesa & Bank statements instantly.
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500 shadow-md">
                    <CardHeader>
                         <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <Bot className="h-6 w-6 text-purple-600" />
                            </div>
                            <CardTitle>AI Co-Pilot</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-slate-600 mb-4">
                             <strong>Problem:</strong> Reports are hard to generate.<br/>
                             <strong>Solution:</strong> Just ask, "What were my sales today?"
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-red-500 shadow-md">
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
                            <strong>Problem:</strong> Fraud eats into margins.<br/>
                            <strong>Solution:</strong> AI flags unusual expenses immediately.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      {/* Calendly Inline Section */}
      <section className="py-20 bg-slate-900 text-white" id="demo-form">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Business?</h2>
            <p className="text-slate-400 mb-10">
                Book a free 30-minute consultation. We'll show you exactly how AI applies to your industry.
            </p>
            <CalendlyEmbed url={CALENDLY_URLS.aiConsult} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
