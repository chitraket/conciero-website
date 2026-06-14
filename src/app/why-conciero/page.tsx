import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Clock,
  ShieldCheck,
  User,
  Building2,
  Briefcase,
  ArrowRight,
} from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { WhyConciero } from "@/components/sections/WhyConciero";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Why Conciero",
  description:
    "Why Conciero is different: senior-level assistants with 10+ years' experience, proactive partner-level support, and AI-driven efficiency for individuals, founders, and global businesses.",
  path: "/why-conciero",
  keywords: [
    "why conciero",
    "senior virtual assistant",
    "proactive assistant",
    "premium concierge",
    "experienced virtual assistant",
  ],
});

const stats = [
  { Icon: Award, value: "10+", label: "Years average experience" },
  { Icon: Clock, value: "24h", label: "To get started" },
  { Icon: ShieldCheck, value: "100%", label: "Senior, pre-vetted talent" },
];

const audiences = [
  {
    Icon: User,
    title: "Individuals & Founders",
    body: "Reclaim your time with a proactive assistant who handles your inbox, calendar, travel, errands, and day-to-day admin.",
    href: "/virtual-assistant",
    cta: "Explore Virtual Assistants",
  },
  {
    Icon: Building2,
    title: "Businesses & Teams",
    body: "Scale operations with dedicated assistants and concierge support that plug straight into how your team already works.",
    href: "/b2b-services",
    cta: "See B2B Services",
  },
  {
    Icon: Briefcase,
    title: "Agencies & Enterprises",
    body: "Enterprise-grade support with senior talent, security, and compliance built in — ready to white-label or scale.",
    href: "/enterprise",
    cta: "View Enterprise",
  },
];

const faqs = [
  {
    q: "What makes Conciero different from other VA services?",
    a: "We work exclusively with senior professionals (10+ years' experience on average), not entry-level staff. Our assistants are proactive partners who anticipate needs, and you approve your match before anything starts.",
  },
  {
    q: "How experienced are your assistants?",
    a: "Every assistant is pre-vetted and senior-level, averaging more than a decade of real-world experience across executive support, operations, and concierge work.",
  },
  {
    q: "Is there a long-term commitment?",
    a: "No. You begin with a 7-day free trial and continue on flexible terms — scale hours up or down, change tasks, or pause whenever your needs change.",
  },
  {
    q: "How do you keep my information secure?",
    a: "Every assistant works under a strict NDA, and we follow security and compliance best practices to protect your data and confidentiality at every step.",
  },
  {
    q: "What if I need a different assistant?",
    a: "You interview and approve your assistant up front, and if anything changes you get unlimited free replacements at no extra cost.",
  },
];

export default function WhyConcieroPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      {/* Hero */}
      <section className="pt-28 pb-4 lg:pt-32 lg:pb-6 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground mb-3 tracking-wide">
              The Conciero Difference
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight text-foreground">
              Why Conciero
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Senior talent, proactive support, and AI-driven efficiency — built
              by founders who understand exactly what modern leaders need.
            </p>
          </div>
        </div>
      </section>

      {/* Reasons grid (shared with the homepage) */}
      <WhyConciero />

      {/* Stats band */}
      <section className="py-12 md:py-16" style={{ backgroundColor: "rgb(196, 163, 90)" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
            {stats.map(({ Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-3" style={{ color: "rgb(26, 26, 26)" }}>
                  <Icon className="w-7 h-7" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: "rgb(26, 26, 26)" }}>
                  {value}
                </div>
                <p className="text-sm" style={{ color: "rgba(26, 26, 26, 0.75)" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-foreground leading-tight">
              Built for People Who Value Their Time
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Whether you&apos;re a founder, a growing team, or an enterprise,
              Conciero adapts to how you work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {audiences.map(({ Icon, title, body, href, cta }) => (
              <div
                key={title}
                className="bg-card rounded-xl p-5 md:p-6 shadow-card hover:shadow-luxury transition-all duration-300 border border-border/50 flex flex-col"
              >
                <div className="text-accent mb-3 md:mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {body}
                </p>
                <Link
                  href={href}
                  className="text-accent font-medium text-sm flex items-center gap-1.5 hover:gap-2.5 transition-all"
                >
                  {cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-foreground leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Why founders and teams choose Conciero.
              </p>
            </div>
            <Accordion
              type="single"
              collapsible
              className="bg-card rounded-xl px-5 md:px-6 shadow-card border border-border/50"
            >
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-base text-foreground">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
              Ready to delegate with confidence?
            </h2>
            <p className="text-muted-foreground mb-6">
              Book a free consultation and we&apos;ll match you with the right
              assistant — includes a 7-day free trial, no credit card required.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild variant="accent" size="lg">
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
