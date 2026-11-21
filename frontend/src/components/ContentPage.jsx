import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { LeadFormDialog } from '@/components/LeadFormDialog';
import { CalendlyButton, CALENDLY_URLS } from '@/components/CalendlyWidget';
import { SEO } from '@/components/SEO';

// Renders a marketing/content page from data, so new pages stay consistent.
// section.type: "cards" | "list" | "steps" | "table" | "text"

function SectionHeading({ title, intro }) {
  return (
    <div className="text-center mb-12 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight mb-4 text-slate-900">{title}</h2>
      {intro && <p className="text-lg text-muted-foreground">{intro}</p>}
    </div>
  );
}

function Cards({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map(({ icon: Icon, title, text }) => (
        <Card key={title} className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            {Icon && (
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                <Icon size={24} />
              </div>
            )}
            <CardTitle className="text-xl">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function List({ items }) {
  return (
    <ul className="max-w-3xl mx-auto space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-slate-700 text-lg">
          <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Steps({ items }) {
  return (
    <ol className="max-w-4xl mx-auto space-y-6">
      {items.map((step, i) => (
        <li key={step.title} className="flex gap-5 p-6 rounded-2xl border bg-white">
          <div className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center font-bold shrink-0">{i + 1}</div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2 text-slate-900">{step.title}</h3>
            {step.text && <p className="text-muted-foreground">{step.text}</p>}
            {(step.you || step.we) && (
              <div className="grid sm:grid-cols-2 gap-4 mt-3 text-sm">
                {step.you && <p><span className="font-semibold text-slate-900">You: </span><span className="text-muted-foreground">{step.you}</span></p>}
                {step.we && <p><span className="font-semibold text-slate-900">ERP Kenya: </span><span className="text-muted-foreground">{step.we}</span></p>}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

function Table({ rows }) {
  return (
    <div className="max-w-4xl mx-auto divide-y divide-slate-200 border border-slate-200 rounded-2xl bg-white overflow-hidden">
      {rows.map((row) => (
        <div key={row.label} className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 p-6">
          <div className="font-semibold text-slate-900">{row.label}</div>
          <div className="sm:col-span-2 text-muted-foreground">{row.text}</div>
        </div>
      ))}
    </div>
  );
}

function Text({ paragraphs }) {
  return (
    <div className="max-w-3xl mx-auto space-y-5 text-lg text-slate-700 leading-relaxed">
      {paragraphs.map((p) => <p key={p}>{p}</p>)}
    </div>
  );
}

const renderers = { cards: Cards, list: List, steps: Steps, table: Table, text: Text };

export function ContentPage({ seo, hero, sections, faqs = [], related = [], cta }) {
  const faqJsonLd = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : undefined;

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SEO {...seo} jsonLd={faqJsonLd} />
      <Navbar />
      <main id="main-content">
        <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/20 blur-3xl rounded-full translate-x-1/3"></div>
          <div className="container mx-auto relative z-10 px-4 md:px-6">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-primary/10 text-blue-300 hover:bg-primary/20 border-primary/50">{hero.badge}</Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{hero.title}</h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">{hero.text}</p>
              <div className="flex flex-col sm:flex-row gap-4">
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
          </div>
        </section>

        {sections.map((s, i) => {
          const Body = renderers[s.type];
          return (
            <section key={s.title} className={`py-20 ${i % 2 === 0 ? 'bg-slate-50' : 'bg-background'}`}>
              <div className="container mx-auto px-4 md:px-6">
                <SectionHeading title={s.title} intro={s.intro} />
                <Body {...s} />
                {s.note && <p className="text-center text-sm text-slate-500 mt-10 max-w-3xl mx-auto">{s.note}</p>}
              </div>
            </section>
          );
        })}

        {faqs.length > 0 && (
          <section className={`py-20 ${sections.length % 2 === 0 ? 'bg-slate-50' : 'bg-background'}`}>
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight mb-10 text-center">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, i) => (
                  <AccordionItem key={f.q} value={`faq-${i}`}>
                    <AccordionTrigger className="text-lg font-medium text-left">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-slate-600 text-base leading-relaxed">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="py-12 border-t bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <h2 className="text-lg font-semibold mb-4 text-slate-900">Related</h2>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {related.map((r) => (
                  <Link key={r.to} to={r.to} className="inline-flex items-center gap-1 text-primary font-medium hover:underline">
                    {r.label} <ArrowRight size={16} />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/20 blur-3xl rounded-full translate-x-1/2"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{cta.title}</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">{cta.text}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <LeadFormDialog
                triggerText="Request an Itemised Quote"
                triggerClass="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto font-semibold border-0"
              />
              <Link to="/contact">
                <Button variant="outline" size="lg" className="h-auto py-6 px-8 text-lg bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800 w-full sm:w-auto">
                  Contact Us
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
