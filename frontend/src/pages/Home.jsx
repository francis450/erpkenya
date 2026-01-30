import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2, Factory, TrendingUp, ShieldCheck, Truck, Users, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LeadFormDialog } from '@/components/LeadFormDialog';
import { CalendlyButton, CALENDLY_URLS } from '@/components/CalendlyWidget';

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ 
                backgroundImage: 'url("https://images.unsplash.com/photo-1741991110666-88115e724741")', // Nairobi Skyline
            }}
        >
            <div className="absolute inset-0 bg-slate-950/70"></div> 
        </div>

        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-6 border-primary/50 text-primary-foreground bg-primary/20 px-4 py-1 text-sm uppercase tracking-wider backdrop-blur-sm">
            The #1 ERP for Kenyan Businesses
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mb-6">
             Stop Guessing. <span className="text-primary">Start Scaling.</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mb-10 leading-relaxed">
            Eliminate operational chaos with a cloud ERP tailored for KRA compliance, M-Pesa payments, and local manufacturing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <CalendlyButton 
                text="Schedule Your Strategy Session" 
                url={CALENDLY_URLS.demo}
                className="text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20"
            />
            <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent">
              See How It Works
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <Link to="/ai-features">
                <Button size="sm" variant="ghost" className="text-white hover:text-cyan-300 hover:bg-white/10 text-sm flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    New: AI Co-Pilot for Distributors
                </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits / Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-t-4 border-t-primary shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                        <Factory className="h-10 w-10 text-primary mb-2" />
                        <CardTitle>Agile Manufacturing</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        Real-time inventory tracking and AI-driven production planning designed for local factories.
                    </CardContent>
                </Card>
                <Card className="border-t-4 border-t-secondary shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                        <ShieldCheck className="h-10 w-10 text-secondary mb-2" />
                        <CardTitle>100% KRA Compliance</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        Automated VAT calculations, eTIMS integration support, and regulatory reporting built-in.
                    </CardContent>
                </Card>
                <Card className="border-t-4 border-t-accent shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                        <TrendingUp className="h-10 w-10 text-accent mb-2" />
                        <CardTitle>Scalable Growth</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        From SME to Enterprise. Manage multi-currency transactions for East African trade effortlessly.
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      {/* Industry Solutions - Visual Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Tailored for Key Industries</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">We understand the unique challenges of the Kenyan market, from farm to factory.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Manufacturing */}
                <div className="group relative overflow-hidden rounded-xl h-[400px] cursor-pointer">
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/60 transition-colors z-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1717386255773-1e3037c81788" 
                        alt="Manufacturing" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">Manufacturing</h3>
                        <p className="text-slate-200 text-sm mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            Optimize production lines and reduce waste with smart MRP.
                        </p>
                        <span className="text-primary font-medium flex items-center gap-2 group-hover:text-white transition-colors">
                            Learn More <ArrowRight size={16} />
                        </span>
                    </div>
                </div>

                 {/* Agriculture */}
                <div className="group relative overflow-hidden rounded-xl h-[400px] cursor-pointer">
                     <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/60 transition-colors z-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1602020277972-99978250c8bd" 
                        alt="Agriculture" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">Agriculture</h3>
                        <p className="text-slate-200 text-sm mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            Track yield from farm to export. Perfect for Tea & Coffee.
                        </p>
                        <span className="text-secondary font-medium flex items-center gap-2 group-hover:text-white transition-colors">
                            Learn More <ArrowRight size={16} />
                        </span>
                    </div>
                </div>

                 {/* Logistics */}
                <div className="group relative overflow-hidden rounded-xl h-[400px] cursor-pointer">
                     <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/60 transition-colors z-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1740914994657-f1cdffdc418e" 
                        alt="Logistics" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">Logistics</h3>
                        <p className="text-slate-200 text-sm mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            Fleet management and supply chain visibility across East Africa.
                        </p>
                         <span className="text-primary font-medium flex items-center gap-2 group-hover:text-white transition-colors">
                            Learn More <ArrowRight size={16} />
                        </span>
                    </div>
                </div>

                 {/* Distribution */}
                <div className="group relative overflow-hidden rounded-xl h-[400px] cursor-pointer">
                     <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/60 transition-colors z-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                        alt="Distribution" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">Distribution</h3>
                         <p className="text-slate-200 text-sm mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            Warehouse optimization and route planning.
                        </p>
                        <span className="text-primary font-medium flex items-center gap-2 group-hover:text-white transition-colors">
                            Learn More <ArrowRight size={16} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* M-Pesa Integration Showcase */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500 via-slate-900 to-slate-900"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                    <Badge className="bg-green-600 text-white hover:bg-green-700 mb-4 px-3 py-1">
                        New Feature
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Seamless <span className="text-green-500">M-Pesa</span> Integration
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                        Reconcile payments in seconds. Your customers pay via M-Pesa, and the transaction is automatically recorded in your ERP finance module. No more manual data entry.
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3">
                            <CheckCircle2 className="text-green-500 h-6 w-6" />
                            <span>Instant Payment Verification</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle2 className="text-green-500 h-6 w-6" />
                            <span>Automatic Receipt Generation</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle2 className="text-green-500 h-6 w-6" />
                            <span>Works with Paybill & Till Numbers</span>
                        </li>
                    </ul>

                    <Button className="bg-green-600 hover:bg-green-700 text-white border-0">
                        See How It Works
                    </Button>
                </div>
                
                {/* Visual Representation of M-Pesa Flow */}
                <div className="w-full md:w-1/2 bg-slate-800 rounded-xl p-8 border border-slate-700 shadow-2xl">
                    <div className="flex flex-col space-y-6">
                        <div className="flex items-center justify-between p-4 bg-slate-900 rounded-lg border border-slate-700">
                             <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                                    <Users size={20} className="text-slate-400"/>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400">Customer</p>
                                    <p className="font-semibold">Simba Logistics Ltd</p>
                                </div>
                             </div>
                             <div className="text-right">
                                <p className="text-sm text-slate-400">Invoice #INV-2025-001</p>
                                <p className="font-bold text-white">KES 45,000.00</p>
                             </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="h-8 w-px bg-slate-700"></div>
                        </div>

                        <div className="p-4 bg-green-900/20 border border-green-900/50 rounded-lg flex items-center gap-4">
                             <div className="h-12 w-12 rounded bg-green-600 flex items-center justify-center shrink-0">
                                <span className="font-bold text-white text-xs">M-PESA</span>
                             </div>
                             <div>
                                <p className="text-green-400 font-medium">Payment Received</p>
                                <p className="text-xs text-green-300/70">Transaction ID: QDH45K9L2M • Just now</p>
                             </div>
                             <div className="ml-auto">
                                <Badge className="bg-green-500/20 text-green-400 border-0">Verified</Badge>
                             </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="h-8 w-px bg-slate-700"></div>
                        </div>

                         <div className="p-4 bg-slate-900 rounded-lg border border-slate-700">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
                                <p className="text-sm font-medium text-blue-400">ERP Action: Auto-Reconciliation</p>
                            </div>
                            <p className="text-xs text-slate-500">
                                Ledger updated. Receipt #REC-8892 generated and emailed to client.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Accordion Features */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Intelligence Engineered</h2>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-medium">
                            Cloud ERP for Remote Access
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                            Access your business data from anywhere—whether you're at the Nairobi HQ, the Mombasa port, or a farm in Nakuru. Our cloud infrastructure ensures 99.9% uptime and data security.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-medium">
                            Supply Chain Visibility
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                             Get end-to-end visibility of your supply chain. Track shipments, manage warehouse levels, and predict demand with tools built for the complexities of East African logistics.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-medium">
                            AI Co-Pilot & Analytics
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                             Make data-driven decisions. Our AI assistant helps identify cost-saving opportunities and forecasts market trends specific to the Kenyan economy.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
                Join 500+ Kenyan companies using our ERP to scale faster and stay compliant.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <LeadFormDialog 
                    triggerText="Schedule Your Demo" 
                    triggerClass="bg-white text-primary hover:bg-blue-50 h-14 px-8 text-lg font-semibold"
                    triggerVariant="secondary"
                 />
                <Button size="lg" className="bg-transparent border border-white text-white hover:bg-white/10 h-14 px-8 text-lg">
                    Contact Sales
                </Button>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
