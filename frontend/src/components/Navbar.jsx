import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Menu, Banknote, Box, Users, Smartphone, Factory, BarChart3, ShieldCheck, ArrowRight } from "lucide-react";

import { LeadFormDialog } from '@/components/LeadFormDialog';

const solutionLinks = [
  { name: "HR & Payroll", path: "/solutions/hr-payroll", desc: "Payroll, PAYE/NSSF/SHIF compliance, leave & performance", icon: Users, color: "text-primary" },
  { name: "Manufacturing", path: "/manufacturing", desc: "BOM, work orders & production costing", icon: Factory, color: "text-secondary" },
  { name: "KRA eTIMS", path: "/kra-etims", desc: "eTIMS through an approved integrator", icon: ShieldCheck, color: "text-navy" },
  { name: "Financial Management", path: "/solutions/finance", desc: "KES & USD, inter-company, M-Pesa & bank reconciliation", icon: Banknote, color: "text-primary" },
  { name: "Inventory & Warehousing", path: "/solutions#inventory", desc: "Batch tracking, multi-warehouse transfers", icon: Box, color: "text-secondary" },
  { name: "CRM & Sales", path: "/solutions#crm", desc: "Lead pipeline, quotations & invoicing", icon: Smartphone, color: "text-navy" },
  { name: "Analytics & BI", path: "/solutions#analytics", desc: "Self-service dashboards & reporting", icon: BarChart3, color: "text-primary" },
  { name: "Moving from QuickBooks", path: "/quickbooks-to-erpnext", desc: "What migrates and when to switch", icon: ArrowRight, color: "text-secondary" },
  { name: "Implementation", path: "/implementation", desc: "Step-by-step plan, who does what", icon: ShieldCheck, color: "text-navy" },
  { name: "Cloud, On-Premise or Hybrid", path: "/deployment", desc: "Hosting, data ownership & security", icon: Box, color: "text-primary" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: "Pricing", path: "/pricing" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="ERP Kenya Logo" className="h-8 w-8 object-contain" />
          <span className="font-bold text-xl tracking-tight text-slate-900">ERP Kenya</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-4 py-2"
          >
            Home
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground bg-transparent">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[520px] grid-cols-2 gap-1 p-4">
                    {solutionLinks.map((item) => (
                      <NavigationMenuLink key={item.name} asChild>
                        <Link
                          to={item.path}
                          className="flex items-start gap-3 rounded-lg p-3 hover:bg-accent transition-colors"
                        >
                          <item.icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${item.color}`} />
                          <span>
                            <span className="block text-sm font-medium text-foreground">{item.name}</span>
                            <span className="block text-xs text-muted-foreground mt-0.5">{item.desc}</span>
                          </span>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                  <div className="border-t px-4 py-3">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/solutions"
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                      >
                        View All Solutions <ArrowRight size={14} />
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {navItems.filter((item) => item.name !== "Home").map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-4 py-2"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Log In
            </Button>
            <LeadFormDialog 
              triggerText="Request Demo" 
              triggerClass="bg-primary hover:bg-primary/90 text-white shadow-lg" 
            />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col mt-8">
                <Link
                  to="/"
                  className="text-lg font-medium hover:text-primary py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                <Accordion type="single" collapsible>
                  <AccordionItem value="solutions" className="border-b-0">
                    <AccordionTrigger className="text-lg font-medium py-2 hover:no-underline hover:text-primary">
                      Solutions
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-3 pl-2">
                        {solutionLinks.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
                            onClick={() => setIsOpen(false)}
                          >
                            <item.icon className={`w-4 h-4 flex-shrink-0 ${item.color}`} />
                            {item.name}
                          </Link>
                        ))}
                        <Link
                          to="/solutions"
                          className="text-sm font-medium text-primary hover:underline"
                          onClick={() => setIsOpen(false)}
                        >
                          View All Solutions →
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {navItems.filter((item) => item.name !== "Home").map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-lg font-medium hover:text-primary py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 flex flex-col gap-2">
                    <Button variant="outline" className="w-full justify-center">Log In</Button>
                    <LeadFormDialog 
                      triggerText="Request Demo" 
                      triggerClass="w-full justify-center bg-primary hover:bg-primary/90 text-white" 
                    />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
