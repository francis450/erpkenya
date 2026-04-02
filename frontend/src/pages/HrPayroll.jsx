import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Calculator, 
  CalendarDays, 
  CheckCircle2, 
  ClipboardCheck, 
  DollarSign, 
  FileText, 
  ShieldCheck, 
  Smartphone, 
  UserCheck, 
  Users
} from 'lucide-react';
import { CalendlyButton, CALENDLY_URLS } from '@/components/CalendlyWidget';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';

export default function HrPayroll() {
  const hrPayrollJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ERP Kenya HR & Payroll Module",
    description: "Payroll software for Kenya with automated KRA PAYE, NSSF, NHIF, and Housing Levy compliance. Employee self-service, leave management, and P9 form generation.",
    brand: { "@type": "Brand", name: "ERP Kenya" },
    url: "https://erpkenya.com/solutions/hr-payroll"
  };

  const features = [
    {
      icon: <Calculator size={24} />,
      title: "Automated Payroll Processing",
      description: "Run payroll in minutes, not hours. Gross-to-net calculations, overtime, allowances, and deductions — all computed automatically based on your company policy.",
      color: "purple"
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Statutory Compliance",
      description: "PAYE, NSSF, NHIF, Housing Levy, and NITA — all calculated per the latest KRA rates. When the Finance Act changes rates, we update your system automatically.",
      color: "green"
    },
    {
      icon: <FileText size={24} />,
      title: "P9 & Statutory Reports",
      description: "Generate P9 forms, NSSF schedules, NHIF reports, and PAYE returns in one click. Formatted exactly how KRA and statutory bodies expect them.",
      color: "blue"
    },
    {
      icon: <Smartphone size={24} />,
      title: "Employee Self-Service",
      description: "Employees view payslips, request leave, update personal details, and download P9 forms from their phone. Less HR admin, happier staff.",
      color: "cyan"
    },
    {
      icon: <CalendarDays size={24} />,
      title: "Leave Management",
      description: "Annual leave, sick leave, maternity/paternity — all tracked with approval workflows. Balances update automatically. No more spreadsheet leave trackers.",
      color: "amber"
    },
    {
      icon: <UserCheck size={24} />,
      title: "Performance Management",
      description: "Set KPIs, run appraisal cycles, and link performance to compensation. Track probation periods, confirmations, and promotion histories.",
      color: "pink"
    }
  ];

  const complianceItems = [
    { name: "KRA PAYE", desc: "Automatic tax band calculations with personal relief" },
    { name: "NSSF Tier I & II", desc: "Current rates applied with employee + employer split" },
    { name: "NHIF", desc: "Graduated scale deductions based on gross salary" },
    { name: "Housing Levy", desc: "1.5% employer + 1.5% employee as per Finance Act" },
    { name: "NITA", desc: "National Industrial Training Authority contributions" },
    { name: "Helb", desc: "HELB loan deductions for applicable employees" }
  ];

  const colorMap = {
    purple: { bg: "bg-purple-100 dark:bg-purple-900/30", text: "text-purple-600 dark:text-purple-400" },
    green: { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-600 dark:text-green-400" },
    blue: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-600 dark:text-blue-400" },
    cyan: { bg: "bg-cyan-100 dark:bg-cyan-900/30", text: "text-cyan-600 dark:text-cyan-400" },
    amber: { bg: "bg-amber-100 dark:bg-amber-900/30", text: "text-amber-600 dark:text-amber-400" },
    pink: { bg: "bg-pink-100 dark:bg-pink-900/30", text: "text-pink-600 dark:text-pink-400" }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SEO
        title="Payroll Software Kenya | HR Management with KRA, NSSF & NHIF Compliance"
        description="Payroll software built for Kenya. Automated PAYE, NSSF, NHIF, and Housing Levy calculations. Employee self-service, leave management, P9 forms, and statutory reporting."
        canonical="/solutions/hr-payroll"
        jsonLd={hrPayrollJsonLd}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Solutions", url: "/solutions" },
          { name: "HR & Payroll" },
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto relative z-10 px-4 md:px-6">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 border-purple-500/50">
              HR & Payroll Kenya
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Payroll That <span className="text-purple-400">Understands Kenya.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Stop wrestling with PAYE calculations and statutory deadlines. ERP Kenya automates payroll processing with KRA, NSSF, NHIF, and Housing Levy compliance built in — not bolted on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CalendlyButton 
                text="See Payroll in Action" 
                url={CALENDLY_URLS.demo}
                className="text-lg h-14 px-8 bg-purple-600 hover:bg-purple-700 text-white shadow-xl shadow-purple-900/20 border-0"
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

      {/* Stats Bar */}
      <section className="py-12 bg-purple-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">500+</div>
              <div className="text-purple-100 text-sm md:text-base">Companies using our payroll</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">10min</div>
              <div className="text-purple-100 text-sm md:text-base">Average payroll run time</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">100%</div>
              <div className="text-purple-100 text-sm md:text-base">Statutory compliance rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">0</div>
              <div className="text-purple-100 text-sm md:text-base">KRA penalties for our clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Everything HR & Payroll in One System</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From hiring to retiring — manage your people and payroll without spreadsheets.
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

      {/* Compliance Deep Dive */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-green-500/10 text-green-600 border-green-500/50">Statutory Compliance</Badge>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Every Kenyan Deduction. Automated.</h2>
                <p className="text-muted-foreground mb-8">
                  Kenyan payroll isn't just about calculating salaries. It's about getting PAYE bands right, splitting NSSF tiers correctly, and filing with every statutory body on time. We handle all of it.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {complianceItems.map((item, index) => (
                    <div key={index} className="flex gap-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-sm">{item.name}</span>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-900 rounded-2xl p-8 text-white">
                <h3 className="text-lg font-semibold mb-6 text-slate-300">Sample Payslip Breakdown</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-400">Basic Salary</span>
                    <span className="font-mono">KES 80,000</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-400">House Allowance</span>
                    <span className="font-mono">KES 15,000</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2 text-red-400">
                    <span>PAYE</span>
                    <span className="font-mono">- KES 18,480</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2 text-red-400">
                    <span>NSSF (Tier I + II)</span>
                    <span className="font-mono">- KES 2,160</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2 text-red-400">
                    <span>NHIF</span>
                    <span className="font-mono">- KES 1,700</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2 text-red-400">
                    <span>Housing Levy (1.5%)</span>
                    <span className="font-mono">- KES 1,425</span>
                  </div>
                  <div className="flex justify-between pt-2 text-lg font-bold text-green-400">
                    <span>Net Pay</span>
                    <span className="font-mono">KES 71,235</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4">* Illustrative example. Actual deductions vary by employee circumstances.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Self-Service */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-cyan-500/10 text-cyan-600 border-cyan-500/50">Employee Self-Service</Badge>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Empower Your Employees. Free Up HR.</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Your employees handle routine tasks themselves. Your HR team focuses on strategy, not paperwork.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <FileText size={32} />, title: "Payslips & P9", desc: "Employees download payslips and P9 forms instantly from their phone. No more HR requests." },
                { icon: <CalendarDays size={32} />, title: "Leave Requests", desc: "Apply for leave, check balances, and view approval status — all in the self-service portal." },
                { icon: <ClipboardCheck size={32} />, title: "Profile Updates", desc: "Bank details, emergency contacts, next of kin — employees update their own records." }
              ].map((item, index) => (
                <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                  <div className="w-14 h-14 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 text-cyan-600">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-purple-900/20 blur-3xl rounded-full transform translate-x-1/2"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Payroll Shouldn't Be This Hard</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Switch to payroll software that was built for Kenyan businesses. Run your first payroll in under 10 minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CalendlyButton 
              text="Book a Payroll Demo" 
              url={CALENDLY_URLS.demo}
              className="bg-purple-600 hover:bg-purple-500 text-white text-lg px-8 py-6 h-auto font-semibold border-0 shadow-xl shadow-purple-900/50"
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
