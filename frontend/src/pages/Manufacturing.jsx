import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  BarChart3, 
  CheckCircle2, 
  ClipboardList, 
  Cog, 
  Layers, 
  PackageCheck, 
  ShieldCheck, 
  Timer,
  TrendingUp,
  Wrench
} from 'lucide-react';
import { CalendlyButton, CALENDLY_URLS } from '@/components/CalendlyWidget';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';

export default function Manufacturing() {
  const manufacturingJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ERP Kenya Manufacturing Module",
    description: "Manufacturing ERP software for Kenyan factories — BOM management, production scheduling, quality control, KRA eTIMS compliance, and M-Pesa integration.",
    brand: { "@type": "Brand", name: "ERP Kenya" },
    url: "https://erpkenya.com/manufacturing"
  };

  const features = [
    {
      icon: <Layers size={24} />,
      title: "Bill of Materials (BOM)",
      description: "Define multi-level BOMs with sub-assemblies, raw materials, and cost rollups. Track every shilling of value added from raw material to finished good.",
      color: "amber"
    },
    {
      icon: <ClipboardList size={24} />,
      title: "Work Order Management",
      description: "Create, schedule, and track production work orders from start to finish. Real-time visibility into what's in progress, what's queued, and what's complete.",
      color: "blue"
    },
    {
      icon: <Timer size={24} />,
      title: "Production Scheduling",
      description: "Optimize your shop floor with drag-and-drop scheduling. Balance machine capacity, labour availability, and material readiness to hit delivery dates.",
      color: "green"
    },
    {
      icon: <PackageCheck size={24} />,
      title: "Quality Control",
      description: "Define inspection checkpoints at every production stage. Capture defect data, trigger rework orders, and maintain batch traceability for compliance.",
      color: "purple"
    },
    {
      icon: <Wrench size={24} />,
      title: "Shop Floor Tracking",
      description: "Workers log time and output directly from the factory floor using tablets or phones. No more paper tickets or end-of-day guesswork.",
      color: "orange"
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Production Costing",
      description: "Know your actual production cost per unit — not just estimates. Track material wastage, labour cost, and overheads in real-time to protect your margins.",
      color: "cyan"
    }
  ];

  const stats = [
    { value: "40%", label: "Reduction in production wastage" },
    { value: "3x", label: "Faster order fulfilment" },
    { value: "20hrs", label: "Saved weekly on manual tracking" },
    { value: "99%", label: "Batch traceability accuracy" }
  ];

  const colorMap = {
    amber: { bg: "bg-amber-100 dark:bg-amber-900/30", text: "text-amber-600 dark:text-amber-400" },
    blue: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-600 dark:text-blue-400" },
    green: { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-600 dark:text-green-400" },
    purple: { bg: "bg-purple-100 dark:bg-purple-900/30", text: "text-purple-600 dark:text-purple-400" },
    orange: { bg: "bg-orange-100 dark:bg-orange-900/30", text: "text-orange-600 dark:text-orange-400" },
    cyan: { bg: "bg-cyan-100 dark:bg-cyan-900/30", text: "text-cyan-600 dark:text-cyan-400" }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SEO
        title="Manufacturing ERP Kenya | Production, BOM & Quality Management"
        description="Manufacturing ERP software built for Kenyan factories. Bill of Materials, production scheduling, quality control, shop floor tracking, KRA eTIMS compliance & M-Pesa integration."
        canonical="/manufacturing"
        jsonLd={manufacturingJsonLd}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Industries", url: "/industries" },
          { name: "Manufacturing" },
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-15"></div>
        <div className="container mx-auto relative z-10 px-4 md:px-6">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border-amber-500/50">
              Manufacturing ERP Kenya
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              From Raw Materials to <span className="text-amber-400">Finished Goods.</span> Track Every Shilling.
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Purpose-built manufacturing ERP for Kenyan factories. Manage BOMs, production schedules, quality control, and costing — with KRA eTIMS compliance and M-Pesa reconciliation built in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CalendlyButton 
                text="Get a Manufacturing Demo" 
                url={CALENDLY_URLS.demo}
                className="text-lg h-14 px-8 bg-amber-600 hover:bg-amber-700 text-white shadow-xl shadow-amber-900/20 border-0"
              />
              <Link to="/solutions">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-slate-600 text-slate-300 hover:bg-slate-800">
                  See All Modules <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-amber-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-amber-100 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Everything Your Factory Needs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From raw material intake to finished goods dispatch — one system that speaks manufacturing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 ${colorMap[feature.color].bg} rounded-lg flex items-center justify-center mb-4 ${colorMap[feature.color].text}`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Kenya Factor */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-green-500/10 text-green-600 border-green-500/50">Built for Kenya</Badge>
                <h2 className="text-3xl font-bold tracking-tight mb-6">The Kenya Factor: What Global ERPs Get Wrong</h2>
                <p className="text-muted-foreground mb-6">
                  Global manufacturing ERPs like SAP and Oracle were built for Western factories. They don't natively understand the Kenyan manufacturing environment. We do.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">KRA eTIMS Built In</span>
                      <p className="text-sm text-muted-foreground">Every production invoice submitted automatically to KRA. No plugins, no manual uploads.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">M-Pesa Reconciliation</span>
                      <p className="text-sm text-muted-foreground">Suppliers and customers pay via M-Pesa. Our system matches payments to invoices and POs automatically.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Multi-Currency for Imports</span>
                      <p className="text-sm text-muted-foreground">Handle USD/EUR raw material imports alongside KES operations with automatic exchange rate updates.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Local Support in Nairobi</span>
                      <p className="text-sm text-muted-foreground">When your production line is down, you need someone in your timezone — not a ticket queue overseas.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=800" 
                  alt="Kenyan manufacturing facility" 
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">+40%</div>
                      <div className="text-xs text-muted-foreground">Production Efficiency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case / Process */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From order to delivery — a connected manufacturing workflow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Sales Order", desc: "Customer places an order. System checks available stock and creates a production plan." },
              { step: "2", title: "Production", desc: "Work orders generated from BOM. Materials allocated, shop floor tracks progress in real-time." },
              { step: "3", title: "Quality Check", desc: "Inspection checkpoints validate output. Defects logged, rework triggered automatically." },
              { step: "4", title: "Delivery & Invoice", desc: "Finished goods dispatched. eTIMS invoice submitted to KRA. M-Pesa payment matched." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-amber-900/20 blur-3xl rounded-full transform translate-x-1/2"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Modernize Your Factory?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join Kenyan manufacturers who've cut production wastage by 40% and halved their order fulfilment time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CalendlyButton 
              text="Book a Manufacturing Demo" 
              url={CALENDLY_URLS.demo}
              className="bg-amber-600 hover:bg-amber-500 text-white text-lg px-8 py-6 h-auto font-semibold border-0 shadow-xl shadow-amber-900/50"
            />
            <Link to="/resources/top-erp-software-kenya-2026-comparison">
              <Button variant="outline" size="lg" className="h-auto py-6 px-8 text-lg border-slate-600 text-slate-300 hover:bg-slate-800">
                Read: ERP Comparison Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
