import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  FileCheck2, 
  FileText, 
  Lock, 
  RefreshCcw, 
  ShieldCheck, 
  Zap,
  AlertTriangle
} from 'lucide-react';
import { CalendlyButton, CALENDLY_URLS } from '@/components/CalendlyWidget';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';

export default function KraEtims() {
  const etimsJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ERP Kenya eTIMS Integration",
    description: "KRA eTIMS integrated ERP software for automated tax compliance in Kenya. Real-time invoice submission, audit trail, and compliance reporting.",
    brand: { "@type": "Brand", name: "ERP Kenya" },
    url: "https://erpkenya.com/kra-etims"
  };

  const painPoints = [
    {
      icon: <AlertTriangle size={24} />,
      problem: "Manual Invoice Uploads",
      description: "Logging into the eTIMS portal to manually upload every invoice is time-consuming and error-prone."
    },
    {
      icon: <Clock size={24} />,
      problem: "Deadline Pressure",
      description: "Missing the real-time submission window means penalties and potential KRA audits."
    },
    {
      icon: <FileText size={24} />,
      problem: "Data Mismatches",
      description: "Discrepancies between your books and eTIMS records create compliance red flags."
    }
  ];

  const features = [
    {
      icon: <Zap size={24} />,
      title: "Automatic Invoice Submission",
      description: "Every sales invoice is submitted to KRA eTIMS in real-time as it's created. No manual uploads, no portal logins, no delays.",
      color: "cyan"
    },
    {
      icon: <RefreshCcw size={24} />,
      title: "Real-Time Sync",
      description: "Your ERP and eTIMS are always in sync. Invoice numbers, tax amounts, and customer details match perfectly — no reconciliation needed.",
      color: "blue"
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Complete Audit Trail",
      description: "Every submission is logged with timestamps, status codes, and KRA confirmation numbers. You're always audit-ready.",
      color: "green"
    },
    {
      icon: <FileCheck2 size={24} />,
      title: "Credit Note Handling",
      description: "Returns and credit notes are submitted to eTIMS automatically with proper references to the original invoice.",
      color: "purple"
    },
    {
      icon: <Lock size={24} />,
      title: "Error Recovery",
      description: "If KRA's system is down, invoices queue automatically and retry. You never lose a submission.",
      color: "orange"
    },
    {
      icon: <FileText size={24} />,
      title: "Compliance Reporting",
      description: "Generate eTIMS reconciliation reports, VAT summaries, and withholding tax reports in one click for filing periods.",
      color: "amber"
    }
  ];

  const colorMap = {
    cyan: { bg: "bg-cyan-100 dark:bg-cyan-900/30", text: "text-cyan-600 dark:text-cyan-400" },
    blue: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-600 dark:text-blue-400" },
    green: { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-600 dark:text-green-400" },
    purple: { bg: "bg-purple-100 dark:bg-purple-900/30", text: "text-purple-600 dark:text-purple-400" },
    orange: { bg: "bg-orange-100 dark:bg-orange-900/30", text: "text-orange-600 dark:text-orange-400" },
    amber: { bg: "bg-amber-100 dark:bg-amber-900/30", text: "text-amber-600 dark:text-amber-400" }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SEO
        title="KRA eTIMS Integrated ERP | Automated Tax Compliance Kenya"
        description="KRA eTIMS integrated ERP software for Kenyan businesses. Automatic invoice submission, real-time sync, complete audit trail, and compliance reporting. Stop manual uploads."
        canonical="/kra-etims"
        jsonLd={etimsJsonLd}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Solutions", url: "/solutions" },
          { name: "KRA eTIMS Integration" },
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto relative z-10 px-4 md:px-6">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-green-500/10 text-green-400 hover:bg-green-500/20 border-green-500/50">
              KRA eTIMS Integration
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              eTIMS Compliance on <span className="text-green-400">Autopilot.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Stop manually uploading invoices to the KRA portal. ERP Kenya submits every sales invoice to eTIMS automatically, in real-time, as you create it. Zero effort. Zero penalties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CalendlyButton 
                text="See eTIMS Integration Live" 
                url={CALENDLY_URLS.demo}
                className="text-lg h-14 px-8 bg-green-600 hover:bg-green-700 text-white shadow-xl shadow-green-900/20 border-0"
              />
              <Link to="/solutions">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-slate-600 text-slate-300 hover:bg-slate-800">
                  All Solutions <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 bg-red-50 dark:bg-red-950/20 border-y border-red-100 dark:border-red-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-2">Sound Familiar?</h2>
            <p className="text-muted-foreground">These are the compliance headaches ERP Kenya eliminates.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {painPoints.map((point, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4 text-red-600">
                  {point.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{point.problem}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">How ERP Kenya Handles eTIMS</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Native integration — not a plugin that breaks with every KRA update.
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

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to eTIMS compliance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Create Your Invoice", desc: "Generate a sales invoice in ERP Kenya as you normally would. Add items, customer details, and tax rates." },
              { step: "2", title: "Automatic Submission", desc: "The moment you save, ERP Kenya sends the invoice to KRA eTIMS via secure API. No extra clicks needed." },
              { step: "3", title: "KRA Confirmation", desc: "Receive the eTIMS control number and QR code instantly. Both are printed on your customer's invoice automatically." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg shadow-green-600/20">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Stats */}
      <section className="py-12 bg-green-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">100%</div>
              <div className="text-green-100 text-sm md:text-base">Invoice submission rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">&lt;2s</div>
              <div className="text-green-100 text-sm md:text-base">Submission to KRA confirmation</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">0</div>
              <div className="text-green-100 text-sm md:text-base">Manual portal logins needed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">24/7</div>
              <div className="text-green-100 text-sm md:text-base">Automatic retry on KRA downtime</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ-style Trust Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">What happens when KRA's eTIMS system is down?</h3>
              <p className="text-muted-foreground">Your invoices queue automatically and retry every 5 minutes until KRA confirms receipt. You continue working normally — nothing is lost.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Do I need to change how I create invoices?</h3>
              <p className="text-muted-foreground">No. You create invoices the same way you always have. The eTIMS submission happens automatically in the background.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Is this compliant with the latest KRA requirements?</h3>
              <p className="text-muted-foreground">Yes. We update our eTIMS integration with every KRA API change. Updates are pushed to you automatically — no action required on your end.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Can I see a history of all submissions?</h3>
              <p className="text-muted-foreground">Absolutely. Every submission is logged with the timestamp, KRA control number, status, and response code. Export it for audits in one click.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-green-900/20 blur-3xl rounded-full transform translate-x-1/2"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop Worrying About KRA Compliance</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join 500+ Kenyan businesses who've put eTIMS on autopilot. Focus on growing your business, not filing invoices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CalendlyButton 
              text="Get a Compliance Demo" 
              url={CALENDLY_URLS.demo}
              className="bg-green-600 hover:bg-green-500 text-white text-lg px-8 py-6 h-auto font-semibold border-0 shadow-xl shadow-green-900/50"
            />
            <Link to="/resources/erp-implementation-kenya-checklist">
              <Button variant="outline" size="lg" className="h-auto py-6 px-8 text-lg border-slate-600 text-slate-300 hover:bg-slate-800">
                Read: Implementation Checklist
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
