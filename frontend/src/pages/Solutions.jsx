import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowRight, 
  Banknote, 
  BarChart3, 
  Box, 
  Briefcase, 
  Calculator, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Globe, 
  LayoutDashboard, 
  ShieldCheck, 
  Smartphone, 
  Truck, 
  Users 
} from 'lucide-react';
import { CalendlyButton, CALENDLY_URLS } from '@/components/CalendlyWidget';

export default function Solutions() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto relative z-10 px-4 md:px-6 text-center">
          <Badge className="mb-6 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border-cyan-500/50">
            Comprehensive Suite
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto mb-6">
            Every Challenge Has a Solution. <br />
            <span className="text-primary">We Built Yours.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop stitching together disconnected apps. Get a unified "Hero's Toolkit" designed to defeat operational chaos and turn your biggest obstacles into assets.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <CalendlyButton 
                text="Get a Demo of the Suite" 
                url={CALENDLY_URLS.demo}
                className="text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20"
            />
          </div>
        </div>
      </section>

      {/* Problem/Solution Grid - "The Villain vs The Hero" */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Conquer Your Business Battles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              You are the hero of this story. We just provide the legendary weapons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Finance */}
            <Card className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-cyan-500">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center mb-4 text-cyan-600 dark:text-cyan-400">
                  <Banknote size={24} />
                </div>
                <CardTitle className="text-xl">Financial Management</CardTitle>
                <CardDescription>The Villain: Cash Flow Confusion</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Automated M-Pesa & Bank Reconciliation</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Real-time P&L and Balance Sheets</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Multi-currency handling for imports</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Inventory */}
            <Card className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4 text-orange-600 dark:text-orange-400">
                  <Box size={24} />
                </div>
                <CardTitle className="text-xl">Inventory & Warehousing</CardTitle>
                <CardDescription>The Villain: Stockouts & Pilferage</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Batch & Expiry Tracking</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Multi-warehouse transfers</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Automated reordering levels</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* HR */}
            <Card className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-purple-500">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                  <Users size={24} />
                </div>
                <CardTitle className="text-xl">HR & Payroll</CardTitle>
                <CardDescription>The Villain: Compliance Headaches</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">One-click KRA, NSSF, NHIF Reports</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Employee Self-Service Portal</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Performance & Leave Management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

             {/* CRM */}
             <Card className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-pink-500">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center mb-4 text-pink-600 dark:text-pink-400">
                  <Smartphone size={24} />
                </div>
                <CardTitle className="text-xl">CRM & Sales</CardTitle>
                <CardDescription>The Villain: Missed Opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Lead tracking pipeline</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Automated Quotations & Invoicing</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Customer loyalty management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

             {/* Manufacturing */}
             <Card className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-amber-500">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mb-4 text-amber-600 dark:text-amber-400">
                  <FactoryIcon size={24} />
                </div>
                <CardTitle className="text-xl">Manufacturing</CardTitle>
                <CardDescription>The Villain: Production Wastage</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Bill of Materials (BOM) Management</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Work Order Tracking</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Production costing analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

             {/* Reporting */}
             <Card className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-indigo-500">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                  <BarChart3 size={24} />
                </div>
                <CardTitle className="text-xl">Analytics & BI</CardTitle>
                <CardDescription>The Villain: Blind Decision Making</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Self-service dashboards</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Scheduled email reports</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Real-time analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive with Tabs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight mb-10 text-center">Why ERPKenya is Different</h2>
            <Tabs defaultValue="compliance" className="w-full max-w-4xl mx-auto">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                    <TabsTrigger value="compliance">Local Compliance</TabsTrigger>
                    <TabsTrigger value="mobile">Mobile First</TabsTrigger>
                    <TabsTrigger value="cloud">Secure Cloud</TabsTrigger>
                    <TabsTrigger value="support">Local Support</TabsTrigger>
                </TabsList>
                <TabsContent value="compliance" className="p-6 border rounded-lg mt-6 bg-slate-50 dark:bg-slate-900">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-bold mb-4">Built for Kenya, Not adapted for it.</h3>
                            <p className="text-muted-foreground mb-4">Unlike global ERPs where you have to struggle with plugins for KRA TIMS or local payroll taxes, we have it built in.</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/> <span>eTIMS Integration Ready</span></li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/> <span>Statutory Reports (NSSF, NHIF, PAYE)</span></li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/> <span>Withholding Tax Management</span></li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <ShieldCheck size={120} className="text-slate-200" />
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="mobile" className="p-6 border rounded-lg mt-6 bg-slate-50 dark:bg-slate-900">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                         <div className="md:w-1/2">
                            <h3 className="text-2xl font-bold mb-4">Run your business from anywhere.</h3>
                            <p className="text-muted-foreground mb-4">Your sales team is in the field, not in the office. Give them the tools to sell, invoice, and collect cash on the go.</p>
                            <Button variant="outline">Learn about our Mobile App</Button>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <Smartphone size={120} className="text-slate-200" />
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="cloud" className="p-6 border rounded-lg mt-6 bg-slate-50 dark:bg-slate-900">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-bold mb-4">Enterprise Security for everyone.</h3>
                            <p className="text-muted-foreground mb-4">No need for expensive servers or IT teams. We handle the backups, the security, and the uptime.</p>
                        </div>
                         <div className="md:w-1/2 flex justify-center">
                            <Globe size={120} className="text-slate-200" />
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="support" className="p-6 border rounded-lg mt-6 bg-slate-50 dark:bg-slate-900">
                     <div className="flex flex-col md:flex-row gap-6 items-center">
                         <div className="md:w-1/2">
                            <h3 className="text-2xl font-bold mb-4">We are right here in Nairobi.</h3>
                            <p className="text-muted-foreground mb-4">When you call, we pick up. No ticketing systems that go to a call center on another continent.</p>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <Users size={120} className="text-slate-200" />
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to equip your business with superpowers?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Join 500+ Kenyan businesses who have switched from chaos to clarity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <CalendlyButton 
                text="Book Your Free Demo" 
                url={CALENDLY_URLS.demo}
                className="bg-white text-primary hover:bg-slate-100 text-lg px-8 py-6 h-auto font-semibold"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Icon component needed for the manufacturing card since it wasn't imported from lucide-react in the implementation above
function FactoryIcon({ size, className }) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={size} 
            height={size} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={className}
        >
            <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
            <path d="M17 18h1" />
            <path d="M12 18h1" />
            <path d="M7 18h1" />
        </svg>
    )
}
