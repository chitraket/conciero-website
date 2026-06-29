import type { Metadata } from "next";
import { Mail, Phone, MapPin, CalendarCheck, ArrowRight } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact Conciero | Hire Virtual Assistant Services",
  description:
    "Contact Conciero to hire expert virtual assistant and business support services. Get reliable support for operations, admin tasks, and global business growth.",
  path: "/contact",
  keywords: [
    "contact conciero",
    "virtual assistant inquiry",
    "VA services contact",
    "book consultation",
  ],
});

const faqs = [
  {
    question: "How quickly will I hear back?",
    answer:
      "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please use our WhatsApp chat for immediate assistance.",
  },
  {
    question: "Can I schedule a demo?",
    answer:
      "Absolutely! Book a free 15-minute call using our Calendly link and our team will walk you through everything at your convenience.",
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer:
      "Yes, we work with enterprise clients to create tailored solutions that fit their specific needs. Contact our sales team to discuss your requirements.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />

      <section className="pt-28 pb-8 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in-up">
              Let&apos;s Talk
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Have questions? Want to request a demo? We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact details + contact form */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Get In Touch</h2>
              <div className="space-y-3">
                {/* Email */}
                <div className="group flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card transition-all duration-200 hover:border-accent/40 hover:shadow-sm">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-accent/10 transition-all duration-200 group-hover:bg-accent">
                    <Mail className="w-5 h-5 text-accent transition-colors duration-200 group-hover:text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Email Us</p>
                    <p className="font-semibold">care@conciero.co</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground transition-all duration-200 group-hover:text-accent group-hover:translate-x-1 shrink-0" />
                </div>

                {/* Schedule */}
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card transition-all duration-200 hover:border-accent/40 hover:shadow-sm"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-accent/10 transition-all duration-200 group-hover:bg-accent">
                    <CalendarCheck className="w-5 h-5 text-accent transition-colors duration-200 group-hover:text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Schedule a Meeting</p>
                    <p className="font-semibold">Free 15-min Discovery Call</p>
                    <p className="text-xs text-accent mt-0.5">Book on Calendly</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground transition-all duration-200 group-hover:text-accent group-hover:translate-x-1 shrink-0" />
                </a>

                {/* Call */}
                <a
                  href="tel:+13373372363"
                  className="group flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card transition-all duration-200 hover:border-accent/40 hover:shadow-sm"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-accent/10 transition-all duration-200 group-hover:bg-accent">
                    <Phone className="w-5 h-5 text-accent transition-colors duration-200 group-hover:text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Call Us</p>
                    <p className="font-semibold">+1 337 337 2363</p>
                    <p className="text-xs text-accent mt-0.5">Click to call now</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground transition-all duration-200 group-hover:text-accent group-hover:translate-x-1 shrink-0" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919187116589"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card transition-all duration-200 hover:border-[#25D366]/40 hover:shadow-sm"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-[#25D366]/10 transition-all duration-200 group-hover:bg-[#25D366]">
                    <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" className="fill-[#25D366] transition-colors duration-200 group-hover:fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.533 5.847L0 24l6.335-1.508A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Chat on WhatsApp</p>
                    <p className="font-semibold">+91 91871 16589</p>
                    <p className="text-xs text-[#25D366] mt-0.5">Chat with us now</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground transition-all duration-200 group-hover:text-[#25D366] group-hover:translate-x-1 shrink-0" />
                </a>

                {/* Availability */}
                <div className="group flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card transition-all duration-200 hover:border-accent/40 hover:shadow-sm">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-accent/10 transition-all duration-200 group-hover:bg-accent">
                    <MapPin className="w-5 h-5 text-accent transition-colors duration-200 group-hover:text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Availability</p>
                    <p className="font-semibold">24/7 Virtual Support</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Serving Global Clients</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground transition-all duration-200 group-hover:text-accent group-hover:translate-x-1 shrink-0" />
                </div>
              </div>
              <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
                <h3 className="text-lg font-bold mb-3 text-accent">
                  We&apos;re Always Available
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-muted-foreground">
                      B2B Support:{" "}
                      <span className="font-semibold text-foreground">24/7</span>
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-muted-foreground">
                      B2C Support:{" "}
                      <span className="font-semibold text-foreground">24/7</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-card border border-border/50">
              <h2 className="text-xl font-bold mb-2">
                Send us a Message
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Tell us about your needs and we&apos;ll get back to you within 24
                hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
            Common Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-card rounded-xl p-6 shadow-soft"
              >
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
