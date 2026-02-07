import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Building2, 
  ChefHat, 
  Cog, 
  HardHat, 
  Heart,
  Landmark, 
  LayoutGrid, 
  ShoppingBag, 
  ShoppingCart, 
  Stethoscope,
  Truck, 
  Users2, 
  Warehouse 
} from 'lucide-react';
import { CalendlyButton, CALENDLY_URLS } from '@/components/CalendlyWidget';
import { Link } from 'react-router-dom';

export default function Industries() {
  const industries = [
    {
      title: "Manufacturing",
      icon: <FactoryIcon size={40} />,
      description: "From raw materials to finished goods, track every shilling of value add.",
      details: ["Bill of Materials (BOM)", "Wastage Tracking", "Production Scheduling", "Batch Traceability"],
      color: "blue",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Distribution & Wholesale",
      icon: <Truck size={40} />,
      description: "Keep your fleet moving and your warehouse organized.",
      details: ["Route Sales Management", "Van Sales", "Multi-warehouse stock", "Driver Reconciliation"],
      color: "orange",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Retail & Supermarkets",
      icon: <ShoppingCart size={40} />,
      description: "Speed up checkout and stop inventory shrinkage.",
      details: ["Fast POS System", "Loyalty Programs", "Shelf-life Management", "Barcode Integration"],
      color: "green",
      image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Service Industry",
      icon: <BriefcaseIcon size={40} />,
      description: "Turn time into money with project-based billing.",
      details: ["Project Costing", "Timesheets", "Recurring Invoicing", "Contract Management"],
      color: "purple",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Construction & Engineering",
      icon: <HardHat size={40} />,
      description: "Manage sites, materials, and labor costs in real-time.",
      details: ["Site Inventory", "Project Budgeting", "Subcontractor Management", "Equipment Tracking"],
      color: "yellow",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Agribusiness",
      icon: <WheatIcon size={40} />,
      description: "Farm to fork traceability and cost management.",
      details: ["Harvest Tracking", "Input Management", "Outgrower Management", "Biological Asset Tracking"],
      color: "emerald",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Non-Profit & NGOs",
      icon: <Heart size={40} />,
      description: "Track every donation and ensure transparency in operations.",
      details: ["Grant Management", "Donor Reporting", "Project Budgeting", "Beneficiary Tracking"],
      color: "rose",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Healthcare & Pharmacy",
      icon: <Stethoscope size={40} />,
      description: "Manage patient records, pharmacy stock, and clinic operations.",
      details: ["Patient Management", "Pharmacy Inventory", "Expiry Tracking", "Insurance Billing"],
      color: "cyan",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-6 border-cyan-500 text-cyan-400">
               Sector Specific Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Built for Kenya's <span className="text-cyan-400">Engine Room.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Generic software fails when reality hits. Whether you manufacture, distribute, or serve—ERPKenya speaks your specific industry language.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white border-0">
                Explore Your Industry
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors z-10" />
                    <img 
                        src={industry.image} 
                        alt={industry.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 z-20 text-white flex items-center gap-3">
                        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                            {React.cloneElement(industry.icon, { size: 24 })}
                        </div>
                        <h3 className="text-xl font-bold">{industry.title}</h3>
                    </div>
                </div>
                <CardContent className="pt-6 flex-grow">
                  <p className="text-muted-foreground mb-6 text-base">
                    {industry.description}
                  </p>
                  <ul className="space-y-2">
                    {industry.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm font-medium">
                            <div className={`w-1.5 h-1.5 rounded-full bg-${industry.color}-500`} />
                            {detail}
                        </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="border-t pt-4">
                     <Link to="/contact" className="w-full">
                        <Button variant="ghost" className="w-full justify-between hover:bg-slate-100 group-hover:text-primary">
                            See Case Studies <ArrowRight size={16} />
                        </Button>
                     </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Trust Section */}
      <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold mb-12">Trusted by Leaders Across Industries</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
                  {/* Placeholders for logos */}
                  <div className="flex items-center justify-center p-6 border rounded-xl bg-slate-50 dark:bg-slate-900">
                      <span className="font-bold text-xl text-slate-500">Nairobi Mfg.</span>
                  </div>
                  <div className="flex items-center justify-center p-6 border rounded-xl bg-slate-50 dark:bg-slate-900">
                      <span className="font-bold text-xl text-slate-500">Coastal Distributors</span>
                  </div>
                  <div className="flex items-center justify-center p-6 border rounded-xl bg-slate-50 dark:bg-slate-900">
                      <span className="font-bold text-xl text-slate-500">Highland Agrovets</span>
                  </div>
                  <div className="flex items-center justify-center p-6 border rounded-xl bg-slate-50 dark:bg-slate-900">
                      <span className="font-bold text-xl text-slate-500">City Retailers</span>
                  </div>
              </div>
          </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-cyan-900/20 blur-3xl rounded-full transform translate-x-1/2"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't see your industry?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Our ERP is modular. We configure it to fit your unique workflow, not the other way around.
          </p>
          <div className="flex justify-center">
            <CalendlyButton 
                text="Consult with an Industry Expert" 
                url={CALENDLY_URLS.demo}
                className="bg-cyan-600 hover:bg-cyan-500 text-white text-lg px-8 py-6 h-auto font-semibold border-0 shadow-xl shadow-cyan-900/50"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Icons
function FactoryIcon({ size, className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>
    )
}

function BriefcaseIcon({ size, className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    )
}

function WheatIcon({ size, className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 9a9.96 9.96 0 0 1 2.83-7.07l.17-.17a.24.24 0 0 1 .34 0l.17.17A9.96 9.96 0 0 1 12.59 9"/><path d="M12 2a10 10 0 0 1 .17 14.14l-.17.17a.25.25 0 0 1-.36 0l-.17-.17A10 10 0 0 1 4.41 9"/><path d="M12 12a10 10 0 0 1 10 10"/><path d="m22 22-10-10"/></svg>
    )
}
