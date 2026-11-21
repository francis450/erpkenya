import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Clock,
  FileCheck2,
  FileText,
  ListChecks,
  Receipt,
  ShoppingCart,
  Tags,
  Users,
  AlertTriangle
} from 'lucide-react';
import { CalendlyButton, CALENDLY_URLS } from '@/components/CalendlyWidget';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';

const faqs = [
  {
    q: "Is ERP Kenya a KRA-authorised eTIMS integrator?",
    a: "No. ERP Kenya implements and supports ERPNext. The connection between ERPNext and KRA's eTIMS is provided by an approved integrator, and we set up ERPNext so that every invoice it sends is complete and correct. We tell you this upfront so you know exactly who is responsible for each part."
  },
  {
    q: "Do I need to change how I create invoices?",
    a: "Very little. You raise invoices in ERPNext as usual. The difference is that customer KRA PINs and item tax details have to be right, because eTIMS invoices cannot be edited once KRA has received them. We clean up customer and item records during data migration so this is in place from day one."
  },
  {
    q: "How are credit notes and returns handled?",
    a: "A return is raised in ERPNext as a credit note against the original invoice, and it goes to eTIMS through the same connection. Because eTIMS invoices cannot be cancelled or edited, a credit note is the only way to correct one, so we set up the credit note process during implementation."
  },
  {
    q: "Does it work for point of sale?",
    a: "Yes. Counter sales made through ERPNext's point of sale are sent through the same connection as other invoices. The number of tills and branches affects the integrator's setup, so we confirm these with you before quoting."
  },
  {
    q: "What does the eTIMS connection cost?",
    a: "The integrator's fees are separate from the ERP implementation and depend mainly on how many invoices you issue each month, along with your number of branches and tills. We quote it separately so you can see it on its own line, and the ERPNext setup work is part of your implementation."
  },
  {
    q: "What happens if KRA's eTIMS system is unavailable?",
    a: "Approved integration solutions are built to hold invoices and send them once the connection is back. We confirm how your integrator handles this during setup, and you can see each invoice's eTIMS status in ERPNext."
  }
];

export default function KraEtims() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const painPoints = [
    {
      icon: <AlertTriangle size={24} />,
      problem: "Invoices That Can't Be Fixed",
      description: "Once KRA receives an eTIMS invoice it can't be edited. A wrong PIN or tax code means a credit note and a fresh invoice."
    },
    {
      icon: <Clock size={24} />,
      problem: "Double Entry",
      description: "Raising invoices in one system and again on the eTIMS portal wastes hours and invites mismatches."
    },
    {
      icon: <FileText size={24} />,
      problem: "Unclear Responsibility",
      description: "Between your team, your software vendor and KRA, nobody is sure who fixes what when an invoice is rejected."
    }
  ];

  const setup = [
    {
      icon: <Receipt size={24} />,
      title: "Tax Templates",
      description: "VAT categories and tax templates set up for your products and services, including exempt and zero-rated items.",
      color: "blue"
    },
    {
      icon: <Tags size={24} />,
      title: "Item Records",
      description: "Every stock and service item set up with the classification and unit details eTIMS invoices need.",
      color: "green"
    },
    {
      icon: <Users size={24} />,
      title: "Customer PINs",
      description: "KRA PINs captured on customer records during migration, so business customers can claim your invoices as expenses.",
      color: "navy"
    },
    {
      icon: <FileCheck2 size={24} />,
      title: "Credit Notes",
      description: "Returns and corrections raised as credit notes against the original invoice, the only correction eTIMS accepts.",
      color: "blue"
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "Point of Sale",
      description: "Counter sales on ERPNext's point of sale set up to go through the same eTIMS connection as other invoices.",
      color: "green"
    },
    {
      icon: <ListChecks size={24} />,
      title: "Testing Before Go-Live",
      description: "Sample invoices, credit notes and POS sales tested end to end before you start trading on the new system.",
      color: "navy"
    }
  ];

  const responsibilities = [
    {
      who: "Your team",
      does: "Raises invoices and credit notes in ERPNext, and keeps customer PINs and item details up to date."
    },
    {
      who: "ERP Kenya",
      does: "Implements ERPNext and sets up tax templates, items, customers, credit notes and POS so every invoice is eTIMS-ready. Coordinates the setup and testing with the integrator."
    },
    {
      who: "Approved integrator",
      does: "Provides and maintains the certified connection between ERPNext and KRA's eTIMS, and supports that connection."
    },
    {
      who: "KRA",
      does: "Receives and validates each invoice, and returns the control number and QR code that appear on it."
    }
  ];

  const colorMap = {
    blue: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-600 dark:text-blue-400" },
    green: { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-600 dark:text-green-400" },
    navy: { bg: "bg-slate-200 dark:bg-slate-700/40", text: "text-slate-700 dark:text-slate-300" }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SEO
        title="eTIMS for ERPNext: How It Works & Who Does What"
        description="How ERPNext connects to KRA eTIMS through an approved integrator: what ERP Kenya sets up, who is responsible for what, the timeline and how costs work."
        canonical="/kra-etims"
        jsonLd={faqJsonLd}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Solutions", url: "/solutions" },
          { name: "KRA eTIMS" },
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto relative z-10 px-4 md:px-6">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-green-500/10 text-green-400 hover:bg-green-500/20 border-green-500/50">
              KRA eTIMS
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              eTIMS on ERPNext, <span className="text-green-400">Through an Approved Integrator.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Raise invoices in ERPNext and they reach KRA through a certified eTIMS connection. ERP Kenya sets up ERPNext so every invoice is complete and correct, and we tell you upfront who does what.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CalendlyButton
                text="Talk Through Your eTIMS Setup"
                url={CALENDLY_URLS.demo}
                className="text-lg h-14 px-8 bg-green-600 hover:bg-green-700 text-white shadow-xl shadow-green-900/20 border-0"
              />
              <Link to="/solutions">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800">
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
            <h2 className="text-2xl font-bold tracking-tight mb-2">Where eTIMS Goes Wrong</h2>
            <p className="text-muted-foreground">Most eTIMS problems start with the data in your system, not the connection to KRA.</p>
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

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your team works in ERPNext. The approved integrator carries each invoice to KRA.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Raise the Invoice", desc: "Create a sales invoice, credit note or POS sale in ERPNext as you normally would." },
              { step: "2", title: "Sent Through the Integrator", desc: "The invoice goes to KRA's eTIMS through the approved integrator's certified connection." },
              { step: "3", title: "KRA Confirms", desc: "KRA returns the control number and QR code, which appear on the invoice you send your customer." }
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

      {/* Who Does What */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Who Does What</h2>
            <p className="text-lg text-muted-foreground">
              Four parties touch every eTIMS invoice. Here is what each one is responsible for.
            </p>
          </div>
          <div className="divide-y divide-slate-200 dark:divide-slate-700 border border-slate-200 dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-900 overflow-hidden">
            {responsibilities.map((row) => (
              <div key={row.who} className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 p-6">
                <div className="font-semibold text-slate-900 dark:text-white">{row.who}</div>
                <div className="sm:col-span-2 text-muted-foreground">{row.does}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What ERP Kenya Sets Up */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">What ERP Kenya Sets Up</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The connection only works if the data behind each invoice is right. This is the part we handle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {setup.map((feature, index) => (
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

      {/* Timeline and Cost */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">Timeline</h2>
            <p className="text-muted-foreground mb-4">
              eTIMS is set up alongside your ERPNext implementation, not after it. The integrator's onboarding with KRA runs in parallel with configuration and data migration.
            </p>
            <p className="text-muted-foreground">
              Invoices, credit notes and POS sales are tested end to end before go-live, so eTIMS goes live on the same day as the rest of the system.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">Cost</h2>
            <p className="text-muted-foreground mb-4">
              The integrator's fees are quoted separately from the ERP implementation. They depend mainly on how many invoices you issue each month, and on your number of branches and tills.
            </p>
            <p className="text-muted-foreground">
              Setting up ERPNext for eTIMS is part of your implementation. See{' '}
              <Link to="/pricing" className="text-primary underline underline-offset-2 font-medium">what drives ERP cost</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((item) => (
              <div key={item.q}>
                <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-green-900/20 blur-3xl rounded-full transform translate-x-1/2"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Get eTIMS Right From Day One</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join 500+ Kenyan businesses keeping their books eTIMS-ready. We'll walk you through the setup, who does what, and how the costs work.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CalendlyButton
              text="Book a Free Consultation"
              url={CALENDLY_URLS.demo}
              className="bg-green-600 hover:bg-green-500 text-white text-lg px-8 py-6 h-auto font-semibold border-0 shadow-xl shadow-green-900/50"
            />
            <Link to="/resources/year-end-tax-checklist-kenya-2026">
              <Button variant="outline" size="lg" className="h-auto py-6 px-8 text-lg bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800">
                Read: Year-End Tax Checklist
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
