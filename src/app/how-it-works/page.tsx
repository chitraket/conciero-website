import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCall, UserCheck, Rocket, RefreshCw } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { HowItWorks } from "@/components/sections/HowItWorks";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "How It Works",
  description:
    "Get started with Conciero in 24 hours: tell us what you need, get matched with a pre-vetted senior assistant, start a 7-day free trial, and scale as you grow. Here's exactly how our onboarding works.",
  path: "/how-it-works",
  keywords: [
    "how it works",
    "virtual assistant onboarding",
    "hire a virtual assistant",
    "get started conciero",
    "delegate tasks",
    "7-day free trial assistant",
  ],
});

const expectations = [
  {
    Icon: PhoneCall,
    title: "1. A quick discovery call",
    body: "We start with a short call to understand your priorities, working style, and the tasks slowing you down — no lengthy forms or sales pressure.",
  },
  {
    Icon: UserCheck,
    title: "2. Meet your matched assistant",
    body: "Within 24 hours we hand-pick a senior, pre-vetted assistant suited to your needs. You interview them and approve the fit before anything starts.",
  },
  {
    Icon: Rocket,
    title: "3. A risk-free 7-day trial",
    body: "Begin delegating from day one with a 7-day free trial. No upfront commitment and no credit card required — you only continue if you love the results.",
  },
  {
    Icon: RefreshCw,
    title: "4. Ongoing, flexible support",
    body: "Scale hours up or down, add tasks, or switch focus as your needs evolve. Not the right fit? You get unlimited free replacements, always.",
  },
];

const faqs = [
  {
    q: "How fast can I actually get started?",
    a: "Most clients are matched with an assistant and fully onboarded within 24 hours of their discovery call. Simple requirements can move even faster.",
  },
  {
    q: "Do I have to sign a long-term contract?",
    a: "No. You begin with a 7-day free trial and continue on flexible terms. There is no long-term lock-in — adjust or pause whenever your needs change.",
  },
  {
    q: "What if my assistant isn't the right fit?",
    a: "You interview and approve your assistant before starting, and if anything changes you get unlimited free replacements at no extra cost.",
  },
  {
    q: "Can I change my plan or hours later?",
    a: "Yes. You can scale hours up or down, change the type of tasks, or switch services at any time as your priorities evolve.",
  },
  {
    q: "Is my information kept confidential?",
    a: "Absolutely. Every assistant works under a strict NDA, and we follow security and compliance best practices to keep your data safe.",
  },
];

export default function HowItWorksPage() {
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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to get started with Conciero",
          description:
            "Get matched with a senior virtual assistant and start delegating in 24 hours.",
          step: [
            { "@type": "HowToStep", name: "Tell us what you need", text: "Share your priorities on a quick call." },
            { "@type": "HowToStep", name: "Meet & interview your assistant", text: "We match you with a senior, pre-vetted assistant and you approve the fit." },
            { "@type": "HowToStep", name: "Start your 7-day free trial", text: "Experience real impact from day one with no upfront commitment." },
            { "@type": "HowToStep", name: "Ongoing, flexible support", text: "Adjust hours, tasks, or services as your needs evolve." },
          ],
        }}
      />

      {/* Hero */}
      <section className="pt-28 pb-4 lg:pt-32 lg:pb-6 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground mb-3 tracking-wide">
              Simple, Fast Onboarding
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight text-foreground">
              How It Works
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              From first call to fully delegated — start working with a
              pre-vetted senior assistant in as little as 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Animated 4-step timeline (shared with the homepage) */}
      <HowItWorks />

      {/* What to expect — detailed walkthrough */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-foreground leading-tight">
              What to Expect, Step by Step
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              No guesswork. Here&apos;s exactly what happens from the moment you
              reach out to ongoing day-to-day support.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {expectations.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="bg-card rounded-xl p-5 md:p-6 shadow-card hover:shadow-luxury transition-all duration-300 border border-border/50"
              >
                <div className="text-accent mb-3 md:mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {body}
                </p>
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
                Everything you need to know about getting started.
              </p>
            </div>
            <Accordion type="single" collapsible className="bg-card rounded-xl px-5 md:px-6 shadow-card border border-border/50">
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
              Ready to get started?
            </h2>
            <p className="text-muted-foreground mb-6">
              Book a free consultation and meet your assistant within 24 hours.
              Includes a 7-day free trial · No credit card required.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild variant="accent" size="lg">
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Prefer to talk now? Call us at{" "}
              <a href={`tel:${siteConfig.phone}`} className="text-accent font-medium hover:underline">
                {siteConfig.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
