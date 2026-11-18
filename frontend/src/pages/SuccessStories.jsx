import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CalendlyButton, CALENDLY_URLS } from '@/components/CalendlyWidget';
import { fetchContent } from '@/lib/sanity';
import { ArrowRight, CheckCircle2, Quote, ShoppingCart, Sprout, Briefcase } from 'lucide-react';
import { SEO } from '@/components/SEO';

// Shown only when real, client-approved stories exist (Sanity "successStory").
function StoryCard({ story }) {
  return (
    <div className="flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-64 overflow-hidden relative">
        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {story.industry}
        </div>
        <img
          src={story.image}
          alt={story.company}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
          <h3 className="text-2xl font-bold text-white">{story.company}</h3>
        </div>
      </div>
      <div className="p-8 flex-1 flex flex-col">
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-400 uppercase mb-1">Key Result</h4>
          <p className="text-3xl font-bold text-green-600">{story.metric}</p>
        </div>
        <div className="relative pl-8 mb-6 flex-1">
          <Quote className="absolute left-0 top-0 text-slate-200 h-6 w-6 transform -scale-x-100" />
          <p className="text-slate-600 italic leading-relaxed">"{story.quote}"</p>
        </div>
        <div className="flex items-center gap-3 border-t border-slate-100 pt-6">
          <div className="h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
            {story.author.charAt(0)}
          </div>
          <p className="font-bold text-slate-900 text-sm">{story.author}</p>
        </div>
      </div>
    </div>
  );
}

const useCases = [
  {
    icon: ShoppingCart,
    industry: "Retail & Distribution",
    problem:
      "Hundreds of small M-Pesa payments a day, stock spread across branches or a depot, and every sale needing a KRA eTIMS invoice. End-of-day reconciliation and stock counts eat into the next morning.",
    solution: [
      "Paybill and Till payments arrive through Safaricom's Daraja API and are matched to invoices by account number",
      "One stock ledger across every shop, warehouse and delivery van, with reorder levels per location",
      "Every sales invoice is submitted to KRA eTIMS as it is raised, with no separate upload step",
    ],
    links: [
      { label: "M-Pesa reconciliation guide", to: "/resources/automated-mpesa-reconciliation" },
      { label: "KRA eTIMS integration", to: "/kra-etims" },
    ],
  },
  {
    icon: FactoryIcon,
    industry: "Manufacturing",
    problem:
      "Raw materials bought in dollars, landed through Mombasa with duty and clearing costs, and turned into finished goods whose true unit cost nobody is sure of.",
    solution: [
      "Bills of Materials and work orders that consume raw materials and book finished goods automatically",
      "Landed cost allocation, so freight, duty and clearing charges are added to the value of the stock they relate to",
      "Batch tracking from raw material to finished product, for quality checks and recalls",
    ],
    links: [
      { label: "Manufacturing ERP", to: "/manufacturing" },
      { label: "Inventory management guide", to: "/resources/inventory-management-strategies" },
    ],
  },
  {
    icon: Sprout,
    industry: "Agriculture & Agro-dealers",
    problem:
      "Seed, fertiliser and veterinary products with expiry dates, demand that swings with the planting seasons, and buyers who pay in instalments.",
    solution: [
      "Batch and expiry tracking, so older stock is sold first and expired stock is flagged before it reaches a customer",
      "Reorder levels planned around the long rains and short rains, not last month's average",
      "Customer statements that show partial M-Pesa payments against each invoice",
    ],
    links: [
      { label: "Industry solutions", to: "/industries" },
      { label: "ERP implementation checklist", to: "/resources/erp-implementation-kenya-checklist" },
    ],
  },
  {
    icon: Briefcase,
    industry: "Professional Services & NGOs",
    problem:
      "Payroll is the biggest cost line, statutory rates keep changing, and donor or client reporting needs costs tracked by project.",
    solution: [
      "Payroll that calculates PAYE, NSSF, SHIF and the Housing Levy in the order the law now requires",
      "P9 forms and statutory schedules generated from the same payroll run",
      "Cost centres and projects on every expense, so reports come straight out of the books",
    ],
    links: [
      { label: "HR & Payroll", to: "/solutions/hr-payroll" },
      { label: "Automating NSSF, SHIF & Housing Levy", to: "/resources/automate-nssf-shif-housing-levy-deductions-kenya" },
    ],
  },
];

export default function SuccessStories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function getStories() {
      const data = await fetchContent('successStory');
      setStories(Array.isArray(data) ? data : []);
    }
    getStories();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <SEO
        title="ERP Use Cases for Kenyan Businesses"
        description="How Kenyan retailers, manufacturers, agro-dealers and service firms use ERP Kenya for M-Pesa reconciliation, KRA eTIMS, inventory and payroll."
        canonical="/success-stories"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Use Cases" },
        ]}
      />
      <Navbar />

      <section className="bg-slate-50 py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-slate-900">How Kenyan Businesses Use ERP Kenya</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            The same problems come up in almost every Kenyan business we talk to: M-Pesa payments that won't
            reconcile, stock that doesn't match the books, and compliance rules that keep moving. Here is how
            ERP Kenya handles them in each industry.
          </p>
        </div>
      </section>

      {stories.length > 0 && (
        <section className="py-20 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-slate-900 text-center">Client Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {stories.map((story) => (
              <StoryCard key={story._id} story={story} />
            ))}
          </div>
        </section>
      )}

      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map(({ icon: Icon, industry, problem, solution, links }) => (
            <div key={industry} className="flex flex-col border border-slate-200 rounded-2xl p-8 bg-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Icon className="h-6 w-6" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{industry}</h2>
              </div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase mb-2">The problem</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{problem}</p>
              <h3 className="text-sm font-semibold text-slate-400 uppercase mb-3">How ERP Kenya handles it</h3>
              <ul className="space-y-3 mb-8 flex-1">
                {solution.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-100 pt-6">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80"
                  >
                    {link.label} <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">What a Typical Rollout Looks Like</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Most implementations follow the same path, whatever the industry. We map how money and stock
            actually move through the business, configure ERP Kenya around that, bring across opening balances
            and item lists, connect M-Pesa and KRA eTIMS, and run the old and new systems side by side for a
            short period before switching over.
          </p>
          <p className="text-slate-600 leading-relaxed">
            The step-by-step version, including the mistakes that most often delay go-live, is in our{' '}
            <Link to="/resources/erp-implementation-kenya-checklist" className="text-primary underline underline-offset-2 font-medium">
              ERP implementation checklist
            </Link>
            . For a sense of budget, see{' '}
            <Link to="/pricing" className="text-primary underline underline-offset-2 font-medium">
              what drives ERP pricing in Kenya
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">See It Working on Your Own Processes</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Book a demo and we'll walk through your industry's workflow, from M-Pesa collections to eTIMS invoices.
          </p>
          <div className="flex justify-center">
            <CalendlyButton
              text="Book a Free Demo"
              url={CALENDLY_URLS.demo}
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto font-semibold border-0"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FactoryIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" /><path d="M12 18h1" /><path d="M7 18h1" />
    </svg>
  );
}
