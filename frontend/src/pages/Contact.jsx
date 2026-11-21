import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { CalendlyButton } from '@/components/CalendlyWidget';
import { SEO } from '@/components/SEO';
import { QuoteForm } from '@/components/QuoteForm';

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ERP Kenya",
  url: "https://erpkenya.com",
  telephone: "+254-757-185189",
  email: "contact@erpkenya.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Karen",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SEO
        title="Contact Us: ERP Quote or Demo in Nairobi"
        description="Request an itemised ERP quote or book a demo with ERP Kenya in Karen, Nairobi. Call +254 757 185 189 or email contact@erpkenya.com."
        canonical="/contact"
        jsonLd={contactJsonLd}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact" },
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto relative z-10 px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Get an <span className="text-primary">Itemised Quote.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
             Tell us how your business trades and we'll send an itemised quote with every assumption written down. Or call, email or book a demo below.
          </p>
        </div>
      </section>

      {/* Quote request */}
      <section id="quote" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Request an Itemised Quote</h2>
            <p className="text-muted-foreground text-lg">
              These are the details we need to price your implementation. It takes about three minutes.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
            
            {/* Contact Info & Value Prop - Centered */}
            <div className="max-w-4xl mx-auto flex flex-col gap-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground text-lg">
                  We are based right here in Nairobi, understanding the local heartbeat of business.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <Card className="border-t-4 border-t-primary shadow-lg hover:translate-y-[-5px] transition-transform duration-300">
                  <CardContent className="pt-8 flex flex-col items-center text-center gap-4">
                    <div className="p-4 bg-primary/10 rounded-full text-primary">
                      <MapPin size={32} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Visit Our Office</h3>
                      <p className="text-muted-foreground">Karen, Nairobi, Kenya</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-t-secondary shadow-lg hover:translate-y-[-5px] transition-transform duration-300">
                  <CardContent className="pt-8 flex flex-col items-center text-center gap-4">
                    <div className="p-4 bg-secondary/10 rounded-full text-secondary">
                      <Mail size={32} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Email Us</h3>
                      <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">contact@erpkenya.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-t-navy shadow-lg hover:translate-y-[-5px] transition-transform duration-300">
                  <CardContent className="pt-8 flex flex-col items-center text-center gap-4">
                    <div className="p-4 bg-slate-200 dark:bg-slate-700/40 rounded-full text-slate-700 dark:text-slate-300">
                      <Phone size={32} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Call Us</h3>
                      <p className="text-muted-foreground text-lg font-medium">+254 757 185 189</p>
                      <p className="text-xs text-muted-foreground mt-1">Mon-Fri, 8am - 6pm EAT</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-slate-900 text-white p-10 rounded-2xl relative overflow-hidden mt-4 text-center shadow-2xl">
                 <div className="absolute right-0 top-0 w-40 h-40 bg-primary/20 blur-3xl rounded-full"></div>
                 <div className="absolute left-0 bottom-0 w-40 h-40 bg-secondary/20 blur-3xl rounded-full"></div>

                 <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                        <Clock className="text-primary" /> Fast Response Promise
                    </h3>
                    <p className="text-slate-300 mb-8 max-w-xl mx-auto text-lg">
                        We hate waiting too. Reach out and you'll hear from a real human (not a bot) within 2 business hours.
                    </p>
                    <div className="flex justify-center">
                        <CalendlyButton
                            text="Skip the email, Book a Call Now"
                            className="bg-primary hover:bg-primary/90 border-0 text-lg px-8 py-6 h-auto shadow-lg shadow-primary/50"
                        />
                    </div>
                 </div>
              </div>
            </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
