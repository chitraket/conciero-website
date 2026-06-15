import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  Users,
  Rocket,
  Workflow,
  Gauge,
  ShieldCheck,
  Crown,
  ClipboardList,
  Headset,
  Check,
  type LucideIcon,
} from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
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
    "From first call to fully delegated in 3–5 days. See exactly how Conciero matches you with a dedicated operator, project manager, and specialist bench, runs a risk-free trial week, and keeps your operations running long term.",
  path: "/how-it-works",
  keywords: [
    "how it works",
    "virtual assistant onboarding",
    "hire a dedicated operator",
    "delegate operations",
    "free trial assistant",
    "executive operator process",
    "scale without hiring",
  ],
});

type Phase = {
  num: string;
  Icon: LucideIcon;
  title: string;
  timing: string;
  body: string;
  points: string[];
};

const phases: Phase[] = [
  {
    num: "01",
    Icon: Compass,
    title: "Share Your Requirements",
    timing: "Day 0 · ~15 minutes",
    body: "We start with a short discovery call to understand your scope, priorities, working style, and the tasks slowing you down — no lengthy forms, no sales pressure.",
    points: [
      "Map the work you want off your plate",
      "Agree on tools, time zones, and communication style",
      "Define what success looks like in week one",
    ],
  },
  {
    num: "02",
    Icon: Users,
    title: "We Match & Shortlist",
    timing: "Within 24 hours",
    body: "Conciero hand-picks 1–2 pre-vetted operators suited to your needs from a pool where fewer than 3% of applicants are accepted.",
    points: [
      "Senior operators with 5–15 years of experience",
      "Matched on skill set, industry, and working style",
      "Backed by a project manager and account manager",
    ],
  },
  {
    num: "03",
    Icon: ClipboardList,
    title: "You Interview & Approve",
    timing: "Your schedule",
    body: "Meet the operator, ask anything, and approve the person you want to work with. No pressure and no obligation to continue.",
    points: [
      "You make the final call on fit",
      "Swap the shortlist if it isn't right",
      "Nothing starts until you say yes",
    ],
  },
  {
    num: "04",
    Icon: Rocket,
    title: "Onboarding & Go-Live",
    timing: "Days 3–5 · Free trial week begins",
    body: "Your operator, PM, and account manager go live and the operations transfer begins immediately — all inside a one-week free trial.",
    points: [
      "Guided handover of tools, inboxes, and SOPs",
      "First tasks delegated from day one",
      "No onboarding fee, no contract, no credit card",
    ],
  },
  {
    num: "05",
    Icon: Workflow,
    title: "Ongoing, Flexible Operations",
    timing: "Every week after",
    body: "Your project manager keeps every workstream moving and your account manager owns the relationship. Scale up or down monthly as your needs change.",
    points: [
      "Weekly reporting and proactive prioritisation",
      "Add service lines without new hiring",
      "1-week replacement guarantee, always",
    ],
  },
];

type Included = { Icon: LucideIcon; title: string; body: string };

const included: Included[] = [
  {
    Icon: Crown,
    title: "Dedicated Executive Operator",
    body: "A senior operator running your calendar, inbox, travel, gatekeeping, and daily priorities — not a generalist.",
  },
  {
    Icon: ClipboardList,
    title: "Senior Project Manager",
    body: "Oversees execution across every active workstream so nothing falls through when you step away.",
  },
  {
    Icon: Headset,
    title: "Account Manager",
    body: "A single point of accountability for the relationship, escalations, and continuity.",
  },
  {
    Icon: Users,
    title: "Specialist Bench",
    body: "Design, research, recruiting, technical builds, and automations available on demand.",
  },
];

const trialTerms = [
  "One week free",
  "No credit card",
  "No onboarding fee",
  "No long-term contract",
  "1-week replacement guarantee",
  "Scale up or down monthly",
];

type Assurance = { Icon: LucideIcon; title: string; body: string };

const assurances: Assurance[] = [
  {
    Icon: ShieldCheck,
    title: "Continuity built in",
    body: "When your operator is unavailable, the PM and account manager keep operations running — without interruption or owner involvement.",
  },
  {
    Icon: Gauge,
    title: "Flexible by the month",
    body: "Scale hours up or down, add tasks, or switch focus as your priorities evolve. No long-term lock-in.",
  },
];

const faqs = [
  {
    q: "How fast can I actually get started?",
    a: "Most clients are matched within 24 hours of their discovery call and fully live with their operator, PM, and account manager in 3–5 days.",
  },
  {
    q: "Do I have to sign a long-term contract?",
    a: "No. You begin with a one-week free trial and continue on flexible monthly terms. There is no long-term lock-in — adjust or pause whenever your needs change.",
  },
  {
    q: "What if my operator isn't the right fit?",
    a: "You interview and approve your operator before starting, and if anything changes you get a replacement within one week at no extra cost.",
  },
  {
    q: "What happens if my operator is unavailable?",
    a: "Continuity is built in. Your project manager and account manager keep every workstream running so nothing stalls — no owner involvement required.",
  },
  {
    q: "Can I change my plan, hours, or services later?",
    a: "Yes. Scale hours up or down, change the type of work, or add service lines at any time as your priorities evolve.",
  },
  {
    q: "Is my information kept confidential?",
    a: "Absolutely. Every operator works under a strict NDA, and we follow security and compliance best practices to keep your data safe.",
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
            "Get matched with a dedicated executive operator and a full support team, then go live in 3–5 days.",
          step: phases.map((p) => ({
            "@type": "HowToStep",
            name: p.title,
            text: p.body,
          })),
        }}
      />

      {/* Hero */}
      <section className="bg-charcoal pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Simple, Fast Onboarding
            </p>
            <h1 className="font-serif text-4xl font-light leading-tight text-charcoal-foreground sm:text-5xl lg:text-6xl">
              How It Works
            </h1>
            <p className="mt-5 text-base leading-relaxed text-charcoal-foreground/70 md:text-lg">
              From first call to fully delegated — go live with a dedicated operator,
              project manager, and specialist bench in as little as 3–5 days.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="accent" size="lg">
                <Link href="/contact">Start Your Free Week</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-charcoal-foreground/30 bg-transparent text-charcoal-foreground hover:bg-charcoal-foreground/10 hover:text-charcoal-foreground"
              >
                <Link href="/for-founders">For Founders</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Phased process timeline */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-normal text-foreground md:text-4xl">
              The End-to-End Process
            </h2>
            <p className="mt-3 text-muted-foreground">
              No guesswork. Here is exactly what happens from the moment you reach out to
              ongoing day-to-day operations.
            </p>
          </div>
          <div className="mx-auto max-w-4xl space-y-4">
            {phases.map(({ num, Icon, title, timing, body, points }) => (
              <div
                key={num}
                className="rounded-xl border border-border/60 bg-card p-6 shadow-card transition-shadow hover:shadow-luxury md:p-8"
              >
                <div className="grid gap-5 md:grid-cols-[auto_1fr]">
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-4xl font-light leading-none text-accent">
                      {num}
                    </span>
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-serif text-xl font-medium text-foreground">
                        {title}
                      </h3>
                      <span className="text-xs font-medium uppercase tracking-wider text-accent">
                        {timing}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {body}
                    </p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                      {points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-sm text-foreground">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included from day one */}
      <section className="py-16 md:py-20 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-normal text-foreground md:text-4xl">
              Your Team From Day One
            </h2>
            <p className="mt-3 text-muted-foreground">
              One engagement gives you a full operating team — at the cost of a single role.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {included.map(({ Icon, title, body }) => (
              <div key={title} className="rounded-xl border border-border/60 bg-card p-6 shadow-card">
                <Icon className="mb-3 h-8 w-8 text-accent" />
                <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trial terms + assurances */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-accent/40 bg-accent/10 p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Risk-Free Entry
              </p>
              <h2 className="mb-5 font-serif text-2xl font-normal leading-tight text-foreground md:text-3xl">
                Every engagement starts with a free week.
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {trialTerms.map((term) => (
                  <li key={term} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                      <Check className="h-3 w-3 text-accent" />
                    </span>
                    {term}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              {assurances.map(({ Icon, title, body }) => (
                <div key={title} className="flex gap-4 rounded-xl border border-border/60 bg-card p-6 shadow-card">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">{title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <h2 className="font-serif text-3xl font-normal text-foreground md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-muted-foreground">
                Everything you need to know about getting started.
              </p>
            </div>
            <Accordion
              type="single"
              collapsible
              className="rounded-xl border border-border/50 bg-card px-5 shadow-card md:px-6"
            >
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-base text-foreground">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-charcoal py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-3 font-serif text-3xl font-normal text-charcoal-foreground md:text-4xl">
              Ready to get started?
            </h2>
            <p className="mb-7 text-charcoal-foreground/70">
              Book a free 15-minute call and meet your operator. Includes a one-week free
              trial — no credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild variant="accent" size="lg">
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-charcoal-foreground/30 bg-transparent text-charcoal-foreground hover:bg-charcoal-foreground/10 hover:text-charcoal-foreground"
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
            <p className="mt-5 text-xs text-charcoal-foreground/60">
              Prefer to talk now? Call us at{" "}
              <a href={`tel:${siteConfig.phone}`} className="font-medium text-accent hover:underline">
                {siteConfig.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
