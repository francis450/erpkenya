import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  Cloud,
  Coins,
  Landmark,
  ShieldCheck,
  ShoppingCart,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { LeadFormDialog } from '@/components/LeadFormDialog';
import { CalendlyButton, CALENDLY_URLS } from '@/components/CalendlyWidget';
import { SEO } from '@/components/SEO';

const faqs = [
  {
    q: "Can we move from QuickBooks?",
    a: "Yes. We bring across your opening balances, monthly balances for the current year, and your customer, supplier and item lists, so reporting carries on without a gap.",
  },
  {
    q: "What does it cost?",
    a: "ERPNext has no licence fees for any number of users. You pay a one-time implementation fee, then monthly hosting and support. After a short scoping call we send an itemised quote with every assumption written down.",
  },
  {
    q: "Cloud or on-premise?",
    a: "Either, or a hybrid of the two. You choose where the system runs, the database is yours, and you can take a full copy at any time.",
  },
  {
    q: "How long does implementation take?",
    a: "It depends on how many modules, locations and companies are in scope. You get a dated plan with your quote, with go-live usually timed around your year end.",
  },
  {
    q: "Is eTIMS included?",
    a: "Setting up ERPNext for eTIMS is part of the implementation. The connection to KRA is provided by an approved integrator and quoted separately, so you can see it on its own line.",
  },
];

const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ERP Kenya",
    url: "https://erpkenya.com",
    logo: "https://erpkenya.com/favicon.ico",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+254-757-185189",
      contactType: "sales",
      areaServed: "KE",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.linkedin.com/company/erp-kenya/",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Karen",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ERP Kenya",
    url: "https://erpkenya.com",
    description: "ERPNext implementation for Kenyan businesses: accounts, stock and payroll in one system, with no licence fees.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  },
];

const signs = [
  "You bill in KES and USD, and month-end is spent fixing exchange rates.",
  "Stock and serial numbers live in Excel, not in your books.",
  "Payroll, leave and statutory deductions are done outside your accounts.",
  "Related companies invoice each other, and nobody's balances agree.",
];

const modules = [
  { icon: Landmark, title: "Finance & Accounting", text: "General ledger, payables, receivables, bank reconciliation and fixed assets.", accent: "border-t-primary", iconClass: "text-primary" },
  { icon: Coins, title: "Multi-Currency & Multi-Company", text: "KES and USD side by side, and inter-company invoicing between related companies.", accent: "border-t-secondary", iconClass: "text-secondary" },
  { icon: Boxes, title: "Inventory & Purchasing", text: "Serial and batch tracking, multiple locations, and three-way matching of orders, deliveries and invoices.", accent: "border-t-navy", iconClass: "text-slate-700" },
  { icon: ShoppingCart, title: "Point of Sale", text: "Counter sales that update stock and the books as they happen.", accent: "border-t-primary", iconClass: "text-primary" },
  { icon: Users, title: "Payroll & HR", text: "PAYE, NSSF, SHIF, Housing Levy, leave and P9s, calculated in the order the law requires.", accent: "border-t-secondary", iconClass: "text-secondary" },
  { icon: BarChart3, title: "Management Dashboards", text: "The business at a glance for directors, without the day-to-day detail.", accent: "border-t-navy", iconClass: "text-slate-700" },
];

const steps = [
  { n: "1", title: "Finance first, then the rest", text: "Start with your accounts and add stock, point of sale and payroll in phases, or take them all live together." },
  { n: "2", title: "A fixed, itemised quote", text: "Every line priced and every assumption written down: users, items, locations and companies. No surprise costs later." },
  { n: "3", title: "A go-live that fits your calendar", text: "We plan around your year end, so P9s aren't split, opening stock comes from a proper count, and opening balances are clean." },
];

const industries = [
  { title: "Import, Trading & Distribution", text: "Multi-currency purchasing, serial-tracked stock and landed costs.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=75&w=800", alt: "Distribution warehouse", accent: "text-primary" },
  { title: "Manufacturing", text: "Bills of materials, work orders and production costing.", img: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?auto=format&fit=crop&q=75&w=800", alt: "Manufacturing facility", accent: "text-secondary", to: "/manufacturing" },
  { title: "Logistics", text: "Costs and billing per job, across East Africa.", img: "https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?auto=format&fit=crop&q=75&w=800", alt: "Logistics and supply chain", accent: "text-primary" },
  { title: "Agriculture", text: "From farm intake to export, with batch tracking.", img: "https://images.unsplash.com/photo-1602020277972-99978250c8bd?auto=format&fit=crop&q=75&w=800", alt: "Agriculture farm", accent: "text-secondary" },
  { title: "NGOs & Non-Profits", text: "Project and donor reporting.", img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=75&w=800", alt: "NGO and non-profit team", accent: "text-primary" },
  { title: "Healthcare & Pharmacy", text: "Pharmacy stock with batch and expiry tracking.", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=75&w=800", alt: "Healthcare professionals", accent: "text-secondary" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SEO
        title="ERP Software Kenya: KRA eTIMS & M-Pesa Cloud ERP"
        description="Kenya's #1 ERP for growing businesses: accounts, stock and payroll in one system, no licence fees and a fixed, itemised quote. Join 500+ Kenyan businesses."
        canonical="/"
        jsonLd={homeJsonLd}
      />
      <Navbar />
      <main id="main-content">

      {/* Hero */}
      <section className="relative min-h-[600px] w-full flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1741991110666-88115e724741?auto=format&fit=crop&w=1600&q=75"
              alt="Nairobi Skyline"
              width="1600"
              height="600"
              fetchpriority="high"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-slate-950/75"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-6 border-primary/50 text-primary-foreground bg-primary/20 px-4 py-1 text-sm uppercase tracking-wider backdrop-blur-sm">
            The #1 ERP for Kenyan Businesses
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mb-6">
            Your Accounts, Stock and Payroll <span className="text-primary">in One System.</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mb-10 leading-relaxed">
            ERPNext set up for Kenyan businesses that have outgrown QuickBooks and spreadsheets. No licence fees, a fixed itemised quote, and a go-live planned around your year end.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <LeadFormDialog
              triggerText="Request an Itemised Quote"
              triggerClass="text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20"
            />
            <CalendlyButton
              text="Book a Demo"
              url={CALENDLY_URLS.demo}
              className="text-lg h-14 px-8 border border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
            />
          </div>
        </div>
      </section>

      {/* Signs you've outgrown QuickBooks */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
         <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-blue-300 text-sm font-medium mb-6">
                        <span>Outgrown QuickBooks?</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Signs You've Outgrown Your Accounting Software
                    </h2>
                    <ul className="space-y-4 mb-8">
                        {signs.map((s) => (
                          <li key={s} className="flex items-start gap-3">
                              <CheckCircle2 className="text-blue-400 shrink-0 mt-0.5" />
                              <span className="text-slate-200">{s}</span>
                          </li>
                        ))}
                    </ul>
                    <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                        ERP Kenya brings all of this into one system, so month-end is a review, not a rebuild.
                    </p>
                    <Link to="/solutions">
                        <Button className="bg-primary hover:bg-primary/90 text-white border-none">
                            See the Modules <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
                <div className="md:w-1/2">
                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 p-2">
                         <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=75&w=800"
                            alt="Finance dashboard with reports and charts"
                            width="800"
                            height="450"
                            loading="lazy"
                            decoding="async"
                            className="rounded-lg w-full"
                         />
                         <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur p-4 rounded-lg border border-slate-700">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                <p className="text-sm font-medium text-green-400">Month-end close</p>
                            </div>
                            <p className="text-xs text-slate-300">
                                Bank and M-Pesa reconciled. Stock valued. Payroll posted. Reports ready for review.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* What you get */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">One System for Finance, Stock and People</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">Everything a growing Kenyan business runs on, in one set of books.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {modules.map(({ icon: Icon, title, text, accent, iconClass }) => (
                  <Card key={title} className={`border-t-4 ${accent} shadow-sm hover:shadow-md transition-shadow`}>
                      <CardHeader>
                          <Icon className={`h-10 w-10 ${iconClass} mb-2`} />
                          <CardTitle>{title}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-muted-foreground">{text}</CardContent>
                  </Card>
                ))}
            </div>
        </div>
      </section>

      {/* How we work */}
      <section id="how-we-work" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">No Licence Fees. No Surprises.</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">How we take you from spreadsheets to one system.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                {steps.map((s) => (
                  <div key={s.n}>
                      <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center text-xl font-bold mb-5">{s.n}</div>
                      <h3 className="font-semibold text-xl mb-3 text-slate-900">{s.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{s.text}</p>
                  </div>
                ))}
            </div>
            <p className="text-center text-sm text-slate-500 mt-12">
                ERPNext is open source, so there are no licence fees for any number of users.{' '}
                <Link to="/pricing" className="text-primary underline underline-offset-2">See what drives the cost</Link>.
            </p>
        </div>
      </section>

      {/* Your system, your data */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl flex flex-col md:flex-row items-center gap-8">
            <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
                <Cloud className="h-8 w-8 text-blue-300" />
            </div>
            <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Cloud, On-Premise or Hybrid.</h2>
                <p className="text-slate-300 text-lg">
                    You choose where the system runs. The database is yours, and you can take a full copy at any time.
                </p>
            </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Tailored for Key Industries</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">Set up for how Kenyan businesses actually trade, from the port to the shop floor.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industries.map((ind) => (
                  <Link key={ind.title} to={ind.to || "/industries"} aria-label={`${ind.title} ERP solutions`} className="group relative overflow-hidden rounded-xl h-[400px] block">
                      <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/60 transition-colors z-10"></div>
                      <img
                          src={ind.img}
                          alt={ind.alt}
                          width="800"
                          height="400"
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                          <h3 className="text-2xl font-bold text-white mb-2">{ind.title}</h3>
                          <p className="text-slate-200 text-sm mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                              {ind.text}
                          </p>
                          <span className={`${ind.accent} font-medium flex items-center gap-2 group-hover:text-white transition-colors`}>
                              Learn More <ArrowRight size={16} />
                          </span>
                      </div>
                  </Link>
                ))}
            </div>
        </div>
      </section>

      {/* M-Pesa */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500 via-slate-900 to-slate-900"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                    <Badge className="bg-green-600 text-white hover:bg-green-700 mb-4 px-3 py-1">
                        M-Pesa
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

                    <Link to="/resources/automated-mpesa-reconciliation">
                        <Button className="bg-green-600 hover:bg-green-700 text-white border-0">
                            See How It Works <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>

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

      {/* eTIMS */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl flex flex-col md:flex-row items-center gap-8">
            <div className="h-16 w-16 rounded-2xl bg-green-100 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-8 w-8 text-green-600" />
            </div>
            <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-slate-900">eTIMS Without the Guesswork</h2>
                <p className="text-slate-600 text-lg">
                    Invoices reach KRA through an approved integrator. We set up ERPNext so each one is right first time, and tell you who does what.
                </p>
            </div>
            <Link to="/kra-etims" className="shrink-0">
                <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                    How eTIMS Works <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Questions Finance Teams Ask</h2>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((f, i) => (
                      <AccordionItem key={f.q} value={`faq-${i}`}>
                          <AccordionTrigger className="text-lg font-medium text-left">{f.q}</AccordionTrigger>
                          <AccordionContent className="text-slate-600">{f.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get an Itemised Quote for Your Business</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
                Join 500+ Kenyan companies using our ERP to scale faster and stay compliant.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <LeadFormDialog
                    triggerText="Schedule Your Demo"
                    triggerClass="bg-white text-primary hover:bg-blue-50 h-14 px-8 text-lg font-semibold"
                    triggerVariant="secondary"
                 />
                <Link to="/contact">
                    <Button size="lg" className="bg-transparent border border-white text-white hover:bg-white/10 h-14 px-8 text-lg w-full sm:w-auto">
                        Contact Sales
                    </Button>
                </Link>
            </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
