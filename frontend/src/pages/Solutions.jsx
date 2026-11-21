import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Banknote,
  BarChart3,
  Box,
  CheckCircle2,
  Factory,
  ShoppingCart,
  Smartphone,
  Users,
} from 'lucide-react';
import { CalendlyButton, CALENDLY_URLS } from '@/components/CalendlyWidget';
import { LeadFormDialog } from '@/components/LeadFormDialog';
import { SEO } from '@/components/SEO';

const modules = [
  {
    id: "financial",
    icon: Banknote,
    title: "Financial Management",
    items: ["General ledger, payables and receivables", "KES and USD, with exchange differences posted", "Inter-company invoicing", "Bank and M-Pesa reconciliation", "Fixed asset register and depreciation"],
    link: { to: "/solutions/finance", label: "Explore Financial Management" },
    accent: "border-t-primary",
  },
  {
    id: "inventory",
    icon: Box,
    title: "Inventory & Purchasing",
    items: ["Serial and batch tracking", "Multiple warehouses and locations", "Three-way matching of orders, deliveries and invoices", "Reorder levels and landed costs"],
    link: { to: "/resources/inventory-management-strategies", label: "Read the inventory guide" },
    accent: "border-t-secondary",
  },
  {
    id: "pos",
    icon: ShoppingCart,
    title: "Point of Sale",
    items: ["Counter sales that update stock and the books", "M-Pesa, cash and card payments", "eTIMS-ready receipts", "End-of-day cash-up per till"],
    accent: "border-t-navy",
  },
  {
    id: "hr",
    icon: Users,
    title: "HR & Payroll",
    items: ["PAYE, NSSF, SHIF and Housing Levy", "P9s and statutory schedules", "Leave management", "Employee self-service"],
    link: { to: "/solutions/hr-payroll", label: "Explore HR & Payroll" },
    accent: "border-t-primary",
  },
  {
    id: "crm",
    icon: Smartphone,
    title: "CRM & Sales",
    items: ["Leads and opportunities", "Quotations, sales orders and invoices", "Customer statements and credit limits"],
    accent: "border-t-secondary",
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    items: ["Bills of materials", "Work orders", "Production costing"],
    link: { to: "/manufacturing", label: "Explore Manufacturing" },
    accent: "border-t-navy",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Reports & Dashboards",
    items: ["Profit and loss, balance sheet and cash flow", "Management dashboards for directors", "Scheduled email reports"],
    accent: "border-t-primary",
  },
];

const phases = [
  { title: "Phase 1: Finance", text: "Accounts, multi-currency, inter-company and fixed assets, with clean opening balances." },
  { title: "Phase 2: Operations", text: "Inventory, purchasing, point of sale and payroll, posting straight into the same ledger." },
  { title: "Phase 3: Growth", text: "CRM, manufacturing, more companies or more branches, added without a new system." },
];

export default function Solutions() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SEO
        title="ERP Solutions Kenya: Finance, Payroll, Inventory"
        description="ERPNext modules for Kenyan businesses: finance, multi-currency, inventory, POS, HR & payroll, CRM, manufacturing and reports, with no licence fees."
        canonical="/solutions"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Solutions" },
        ]}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto relative z-10 px-4 md:px-6 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-primary/50">
            Modules
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto mb-6">
            One ERP for Finance, <span className="text-primary">Stock and People.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every module runs on ERPNext and posts into the same set of books. Start with finance and add the rest when you're ready, with no licence fees as you grow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <LeadFormDialog
              triggerText="Request an Itemised Quote"
              triggerClass="text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20"
            />
            <CalendlyButton
              text="Book a Demo"
              url={CALENDLY_URLS.demo}
              className="text-lg h-14 px-8 border border-slate-600 bg-transparent text-slate-200 hover:bg-slate-800"
            />
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">The Modules</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pick what you need now. Everything shares one database, so nothing has to be keyed in twice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map(({ id, icon: Icon, title, items, link, accent }) => (
              <Card key={id} id={id} className={`hover:shadow-lg transition-all duration-300 border-t-4 ${accent} scroll-mt-24 flex flex-col`}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    <Icon size={24} />
                  </div>
                  <CardTitle className="text-xl">{title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    {items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {link && (
                    <Link to={link.to} className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium mt-5">
                      {link.label} <ArrowRight size={14} />
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Phased roadmap */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Start With Finance, Grow From There</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A phased rollout spreads the work and the cost, without a second system or a second migration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {phases.map((p) => (
              <div key={p.title} className="p-6 rounded-2xl border bg-slate-50 dark:bg-slate-900">
                <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-12">
            <Link to="/implementation" className="inline-flex items-center gap-1 text-primary font-medium hover:underline">How we implement <ArrowRight size={16} /></Link>
            <Link to="/quickbooks-to-erpnext" className="inline-flex items-center gap-1 text-primary font-medium hover:underline">Moving from QuickBooks <ArrowRight size={16} /></Link>
            <Link to="/deployment" className="inline-flex items-center gap-1 text-primary font-medium hover:underline">Cloud, on-premise or hybrid <ArrowRight size={16} /></Link>
            <Link to="/kra-etims" className="inline-flex items-center gap-1 text-primary font-medium hover:underline">How eTIMS works <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get an Itemised Quote for the Modules You Need</h2>
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
