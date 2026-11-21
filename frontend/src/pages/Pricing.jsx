import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  ArrowRight,
  Users,
  Puzzle,
  Database,
  Plug,
  GraduationCap,
  Server,
  Cloud,
  HardDrive,
} from 'lucide-react';
import { CalendlyButton, CALENDLY_URLS } from '@/components/CalendlyWidget';
import { LeadFormDialog } from '@/components/LeadFormDialog';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';

const costFactors = [
  {
    icon: <Users size={22} />,
    title: "Number of Users",
    desc: "There are no per-user licence fees, but more users means more roles to set up and more people to train.",
  },
  {
    icon: <Puzzle size={22} />,
    title: "Modules You Need",
    desc: "Finance, HR & Payroll, Inventory, Manufacturing, CRM, and Analytics can be set up together or added in phases as you grow.",
  },
  {
    icon: <Database size={22} />,
    title: "Data Migration",
    desc: "Moving years of records from spreadsheets or a legacy system takes more setup time than a clean start.",
  },
  {
    icon: <Plug size={22} />,
    title: "Customization & Integrations",
    desc: "M-Pesa paybills, KRA eTIMS, bank feeds, and industry-specific workflows all affect implementation scope.",
  },
  {
    icon: <GraduationCap size={22} />,
    title: "Training & Change Management",
    desc: "Getting a team off spreadsheets and into a new system properly takes structured onboarding, not just a login email.",
  },
  {
    icon: <Server size={22} />,
    title: "Hosting & Support Tier",
    desc: "Cloud hosting with ongoing support carries a different cost profile than a one-time on-premise deployment.",
  },
];

const faqs = [
  {
    q: "How much does ERP software cost in Kenya?",
    a: "It depends on your user count, the modules you need, and how much customization and data migration is involved. There's no single market-wide number — a 5-person retail shop and a 200-employee manufacturer have very different scopes. We give every prospective client a written quote based on their actual requirements after a short discovery call.",
  },
  {
    q: "Do you charge per user, per module, or a flat fee?",
    a: "There are no per-user licence fees: ERPNext is open source, for any number of users. Your quote is a fixed implementation fee built from the modules, data and set-up you need, plus monthly hosting and support. Every line is itemised before you commit.",
  },
  {
    q: "If ERPNext is open source, what am I paying for?",
    a: "The software is free to use, but setting it up for your business is not. You pay for configuration, data migration, statutory setup, training and go-live support, and then for hosting and support once you're live. You can also self-host and we're happy to explain what that involves.",
  },
  {
    q: "What's included in an implementation quote?",
    a: "Discovery and scoping, module configuration, data migration, statutory setup (PAYE, NSSF, SHIF, Housing Levy, and setting up ERPNext for eTIMS), integrations, user training, and a defined support period after go-live. The eTIMS integrator's own fees are quoted separately.",
  },
  {
    q: "How long does ERP implementation take in Kenya?",
    a: "Straightforward single-module rollouts (like payroll alone) can go live in weeks. Multi-module implementations with data migration and integrations typically take longer — we'll give you a realistic timeline as part of your quote, not a generic estimate.",
  },
];

const quoteLines = [
  { item: "Software licence", basis: "KES 0", detail: "ERPNext and Frappe HR are open source. No licence fees for any number of users, now or as you grow." },
  { item: "Implementation", basis: "One-time", detail: "Scoping, configuration, data migration, statutory setup, training and go-live support, priced from the modules and data in scope." },
  { item: "Hosting", basis: "Monthly", detail: "Cloud or hybrid hosting, backups and maintenance. Not needed if you run fully on your own server." },
  { item: "Support", basis: "Monthly", detail: "Help for your team, fixes and updates after go-live, with a named contact." },
  { item: "eTIMS integrator", basis: "Separate", detail: "The approved integrator's connection to KRA is quoted on its own line, based mainly on your monthly invoice volume." },
  { item: "Custom work", basis: "Only if needed", detail: "Most businesses run on standard features. Anything custom is scoped and priced separately, so you can decide." },
];

const howWeQuote = [
  "A short scoping call about how you trade: users, companies, currencies, stock and payroll.",
  "We send an itemised quote with every assumption written down: users, items, locations and companies.",
  "You confirm or correct the assumptions.",
  "We issue a final, fixed quote and a dated plan.",
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SEO
        title="ERP Pricing Kenya: Costs & Custom Quotes"
        description="How much does ERP software cost in Kenya? What drives the price, what's in an itemised quote, and how payment works. No licence fees with ERPNext."
        canonical="/pricing"
        jsonLd={faqJsonLd}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Pricing" },
        ]}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-950">
        <div className="container mx-auto relative z-10 px-4 md:px-6 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-primary/50">
            Pricing
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto mb-6">
            How Much Does ERP Software Cost in Kenya?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            There's no single sticker price — the honest answer depends on your team size, the modules you need, and how much of your existing data has to move. Here's what actually drives the number, and how to get a real quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <LeadFormDialog
              triggerText="Request a Custom Quote"
              triggerClass="text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20"
            />
            <CalendlyButton
              text="Book a Demo Instead"
              url={CALENDLY_URLS.demo}
              className="text-lg h-14 px-8 border border-slate-600 bg-transparent text-slate-200 hover:bg-slate-800"
            />
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">What Actually Drives ERP Cost</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six factors determine your quote — none of them are guesswork once we understand your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {costFactors.map((factor, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    {factor.icon}
                  </div>
                  <CardTitle className="text-xl">{factor.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{factor.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's in a quote */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/50">Your Quote</Badge>
            <h2 className="text-3xl font-bold tracking-tight mb-4">What's in an ERP Kenya Quote</h2>
            <p className="text-lg text-muted-foreground">
              Every quote is itemised, so you can see exactly what each part costs and why.
            </p>
          </div>
          <div className="divide-y divide-slate-200 border border-slate-200 rounded-2xl bg-white dark:bg-slate-900 overflow-hidden">
            {quoteLines.map((line) => (
              <div key={line.item} className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 p-6">
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">{line.item}</div>
                  <div className="text-sm text-primary font-medium mt-1">{line.basis}</div>
                </div>
                <div className="sm:col-span-2 text-muted-foreground">{line.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we quote + payment options */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">How We Quote</h2>
            <ol className="space-y-4">
              {howWeQuote.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold shrink-0">{i + 1}</span>
                  <span className="text-muted-foreground pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">Payment Options</h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl border bg-white dark:bg-slate-900">
                <h3 className="font-semibold mb-1">Pay upfront</h3>
                <p className="text-muted-foreground text-sm">The implementation fee paid in stages through the project, then monthly hosting and support.</p>
              </div>
              <div className="p-5 rounded-xl border bg-white dark:bg-slate-900">
                <h3 className="font-semibold mb-1">Spread the cost</h3>
                <p className="text-muted-foreground text-sm">A smaller payment upfront, with the balance spread over 12 months alongside hosting and support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud vs On-Premise */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/50">Deployment Model</Badge>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Cloud vs. On-Premise ERP Cost in Kenya</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The deployment model you choose changes the shape of your costs, not just the total.{' '}
                <Link to="/deployment" className="text-primary underline underline-offset-2">Compare the options</Link>.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl border bg-slate-50 dark:bg-slate-900">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  <Cloud size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Cloud ERP</h3>
                <p className="text-muted-foreground">
                  Lower upfront cost, predictable recurring billing, and we handle hosting, backups, and uptime. Best fit for businesses that want to move fast without hiring IT infrastructure staff.
                </p>
              </div>
              <div className="p-8 rounded-2xl border bg-slate-50 dark:bg-slate-900">
                <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700/40 rounded-lg flex items-center justify-center mb-4 text-slate-700 dark:text-slate-300">
                  <HardDrive size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">On-Premise ERP</h3>
                <p className="text-muted-foreground">
                  Higher upfront investment in servers and IT capacity, but full control over where your data lives. Usually makes sense for larger organizations with existing infrastructure and compliance requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Pricing Questions, Answered</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/20 blur-3xl rounded-full transform translate-x-1/2"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Get a Quote Built Around Your Business</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Tell us your user count and the modules you're considering — we'll come back with a real number, not a range.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <LeadFormDialog
              triggerText="Request a Custom Quote"
              triggerClass="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto font-semibold border-0 shadow-xl shadow-primary/50"
            />
            <Link to="/resources/erp-software-cost-kenya-pricing-guide">
              <Button variant="outline" size="lg" className="h-auto py-6 px-8 text-lg bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800">
                Read: Full Cost Guide <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
