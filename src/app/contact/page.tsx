import type { Metadata } from "next";
import { Mail, MessageSquare, MapPin } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
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
      "Absolutely! Use the form above to request a demo, and our team will schedule a personalized walkthrough of our platform at your convenience.",
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

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Get In Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors">
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground">
                      Email Us
                    </h3>
                    <p className="font-medium">care@conciero.co</p>
                  </div>
                </div>
                <a
                  href="tel:+13323016004"
                  className="flex items-center space-x-4 p-4 bg-[#25D366]/10 rounded-xl hover:bg-[#25D366]/20 transition-colors group"
                >
                  <div className="bg-[#25D366] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground">
                      Call us
                    </h3>
                    <p className="font-medium">+1 332-301-6004</p>
                    <p className="text-sm text-[#25D366] font-medium group-hover:underline">
                      Click to call now →
                    </p>
                  </div>
                </a>
                <div className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-xl">
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground">
                      Availability
                    </h3>
                    <p className="font-medium">24/7 Virtual Support</p>
                    <p className="text-sm text-muted-foreground">
                      Serving Global Clients
                    </p>
                  </div>
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
                Schedule a Free Consultation
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

      <section className="py-20 bg-secondary/30">
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
