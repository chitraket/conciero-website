import type { Metadata } from "next";
import Link from "next/link";
import {
  Crown,
  ClipboardList,
  Users,
  Calendar,
  Target,
  Megaphone,
  Code,
  Share2,
  UserPlus,
  Award,
  Sparkles,
  ShieldCheck,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

// The user-specified SEO title is the full document <title>. We bypass the
// root layout's "%s | Conciero" template (it would double up "Conciero") via
// `title.absolute`, while OG/Twitter use the keyword-rich base title.
const baseTitle =
  "Dedicated Execution Teams for Founders | Virtual Assistants, SDR, Marketing, Web Dev";

export const metadata: Metadata = {
  ...buildMetadata({
    title: baseTitle,
    description:
      "Stop hiring, start delegating. Conciero gives founders a dedicated operator, project manager, and specialist bench that plugs into your business and executes from day one. One week free - no credit card, no contract.",
    path: "/for-founders",
    keywords: [
      "execution team for founders",
      "dedicated executive operator",
      "virtual assistant for founders",
      "outbound SDR service",
      "digital marketing team",
      "web development and automation",
      "scale without hiring",
      "delegate operations",
    ],
  }),
  title: { absolute: `Conciero - ${baseTitle}` },
};

const stats = [
  { num: "<3%", label: "Operator acceptance rate" },
  { num: "3–5", label: "Days to go live" },
  { num: "2.7yr", label: "Avg. client retention" },
  { num: "200+", label: "Platforms mastered" },
];

type Card = { Icon: LucideIcon; title: string; desc: string };

const receives: Card[] = [
  {
    Icon: Crown,
    title: "Dedicated Executive Operator",
    desc: "A senior operator managing your calendar, inbox, travel, gatekeeping, and daily priorities. 5–15 years of experience. Not a generalist.",
  },
  {
    Icon: ClipboardList,
    title: "Senior Project Manager",
    desc: "Overseeing execution across every active workstream. Ensures nothing falls through when you step away.",
  },
  {
    Icon: Users,
    title: "Specialist Bench",
    desc: "Design, research, recruiting, technical builds, and automations - available on demand without additional hiring.",
  },
];

type Service = { num: string; Icon: LucideIcon; name: string; desc: string };

const services: Service[] = [
  {
    num: "01",
    Icon: Calendar,
    name: "Executive & Admin Support",
    desc: "Calendar, inbox, travel, documents, email filtering, and basic financial coordination.",
  },
  {
    num: "02",
    Icon: Target,
    name: "Sales Development",
    desc: "Outbound SDR, list building, multi-channel sequences, reply management, CRM hygiene, meeting booking.",
  },
  {
    num: "03",
    Icon: Megaphone,
    name: "Digital Marketing",
    desc: "SEO, Google/Meta/LinkedIn ads, GHL funnels, content creation, and lifecycle email campaigns.",
  },
  {
    num: "04",
    Icon: Code,
    name: "Web & Automations",
    desc: "WordPress, Webflow, Shopify builds; Zapier, Make, n8n automations; AI integrations.",
  },
  {
    num: "05",
    Icon: Share2,
    name: "Social Media Support",
    desc: "Content creation, Reels, Shorts, publishing, community management, and analytics.",
  },
  {
    num: "06",
    Icon: UserPlus,
    name: "Recruiting & Ops Support",
    desc: "Candidate sourcing, SOP creation, process mapping, and operational documentation.",
  },
];

type Diff = { Icon: LucideIcon; title: string; desc: string };

const differentiators: Diff[] = [
  {
    Icon: Users,
    title: "A team, not an individual",
    desc: "Operator, PM, specialists, and account manager - at the cost of one role. Single-VA arrangements break the moment one person disappears.",
  },
  {
    Icon: Award,
    title: "Career operators only",
    desc: "5–15 years of experience. Alumni of Amazon, Uber, EY, American Express, Marriott, and Emirates. Not gig workers or recent graduates.",
  },
  {
    Icon: Sparkles,
    title: "AI-fluent by default",
    desc: "Operators are trained on ChatGPT, Claude, and modern automation tools - delivering leverage, not just labour.",
  },
  {
    Icon: ShieldCheck,
    title: "Continuity built in",
    desc: "When an operator is unavailable, the PM and account manager keep operations running without interruption or owner involvement.",
  },
];

const steps = [
  {
    num: "01",
    title: "Share Requirements",
    desc: "Tell us your scope, priorities, and working style. Takes 15 minutes.",
  },
  {
    num: "02",
    title: "We Shortlist",
    desc: "Conciero matches you with 1–2 pre-vetted operators suited to your needs.",
  },
  {
    num: "03",
    title: "You Interview & Approve",
    desc: "Meet the operator. Approve who you want. No pressure, no obligation.",
  },
  {
    num: "04",
    title: "Onboarding Begins",
    desc: "Your operator, PM, and account manager are live. Operations transfer begins immediately.",
  },
];

const trialTerms = [
  "No onboarding fee",
  "No long-term contract",
  "Simple 4-step onboarding",
  "1-week replacement guarantee",
  "Scale up or down monthly",
];

const faqs = [
  {
    q: "How is Conciero different from hiring a virtual assistant?",
    a: "A virtual assistant is one person doing one role. Conciero gives you a dedicated executive operator, a senior project manager, an account manager, and an on-demand specialist bench - a complete operating team for roughly the cost of a single hire. If one person is unavailable, your operations never stop.",
  },
  {
    q: "How fast can my team go live?",
    a: "Most founders go live in 3–5 days. You share your requirements in a 15-minute call, we shortlist 1–2 pre-vetted operators within a day, you interview and approve your match, and onboarding begins immediately.",
  },
  {
    q: "What does the free trial include?",
    a: "Every engagement starts with a full week free - no credit card, no onboarding fee, and no contract. You experience the operator, the project manager, and the actual output before committing a single dollar.",
  },
  {
    q: "What kind of work can I delegate?",
    a: "Executive and admin support, outbound sales development, digital marketing, web builds and automations, social media, and recruiting and ops - all under one engagement, drawing on specialists as you need them.",
  },
  {
    q: "What happens if my operator isn't the right fit?",
    a: "You approve your operator before anything starts, and you're covered by a 1-week replacement guarantee. If the fit changes later, your project manager and account manager keep work moving while we re-match you.",
  },
  {
    q: "Can I scale up or down as my needs change?",
    a: "Yes. Scale hours up or down, add service lines, or shift focus on a monthly basis. There's no long-term lock-in - the team flexes with your business.",
  },
];

export default function ForFoundersPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Dedicated execution team for founders",
          provider: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
          },
          areaServed: "Worldwide",
          description:
            "A dedicated executive operator, project manager, and specialist bench that plugs into a founder's business and executes from day one.",
          offers: {
            "@type": "Offer",
            description: "One week free trial. No credit card, no contract.",
            price: "0",
            priceCurrency: "USD",
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: siteConfig.url,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "For Founders",
              item: `${siteConfig.url}/for-founders`,
            },
          ],
        }}
      />
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
      <section className="relative overflow-hidden bg-charcoal pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full border border-accent/15" />
        <div className="pointer-events-none absolute -top-12 -right-12 h-52 w-52 rounded-full border border-accent/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Scale Faster Without Hiring Faster
            </p>
            <h1 className="text-4xl font-bold leading-[1.15] text-charcoal-foreground sm:text-5xl lg:text-6xl">
              You&apos;re scaling fast. Your team{" "}
              <em className="italic text-accent">can&apos;t keep up.</em> Stop
              hiring. <em className="italic text-accent">Start delegating.</em>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-charcoal-foreground/70 md:text-lg">
              Conciero is not a virtual assistant. Not a freelancer platform. It
              is a complete operating system - a dedicated operator, project
              manager, and specialist bench that plugs into your business and
              executes from day one.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="accent" size="lg">
                <Link href="/contact">Start Your Free Week</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-charcoal-foreground/30 bg-transparent text-charcoal-foreground hover:bg-charcoal-foreground/10 hover:text-charcoal-foreground"
              >
                <Link href="/how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-border bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-px md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-8 text-center">
                <div className="text-3xl font-bold text-accent md:text-4xl">
                  {s.num}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border-l-4 border-muted-foreground/40 bg-secondary p-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                The Problem Every Founder Hits
              </p>
              <p className="text-xl leading-relaxed text-foreground">
                You are growing fast but still doing everything yourself -
                inbox, hiring, ops, marketing, admin. Every hour spent on
                execution is an hour not spent on building the business.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-accent bg-accent/10 p-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                What Conciero Changes
              </p>
              <p className="text-xl leading-relaxed text-foreground">
                A Conciero team takes over your operational load - admin,
                outbound sales, marketing, web, recruiting - so you can focus on
                what actually moves the needle. Scale the output without scaling
                the headcount.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What every client receives */}
      <section className="py-16 md:py-20 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            What Every Client Receives
          </p>
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            One subscription. A full operating team.
          </h2>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {receives.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-border/60 bg-card p-8 shadow-card transition-shadow hover:shadow-luxury"
              >
                <Icon className="mb-4 h-9 w-9 text-accent" />
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service lines */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Service Lines
          </p>
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            Everything your business needs, executed.
          </h2>
          <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ Icon, name, desc }) => (
              <div
                key={name}
                className="rounded-xl border border-border/60 bg-card p-6 shadow-card transition-shadow hover:shadow-luxury"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-foreground">
                  {name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 md:py-20 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Why Conciero Is Different
          </p>
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            Not a freelancer. Not a VA.
          </h2>
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            {differentiators.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl border border-border/60 bg-card p-6 shadow-card"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-charcoal py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-2xl font-normal italic leading-relaxed text-charcoal-foreground md:text-3xl">
              <span className="mr-1 text-accent">&ldquo;</span>
              Not a freelancer. Not a VA. A complete operating system -
              AI-fluent, globally distributed, and ready to execute from day
              one. Try it free for a week before spending a single dollar.<span className="ml-0.5 text-accent">&rdquo;</span>
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            How It Works
          </p>
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            Live in 3–5 days.
          </h2>
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ num, title, desc }) => (
              <div
                key={num}
                className="rounded-xl border border-border/60 bg-card p-6 shadow-card"
              >
                <div className="text-3xl font-bold text-accent">{num}</div>
                <div className="my-3 h-0.5 w-8 bg-accent" />
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-foreground">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            >
              See the full process <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trial */}
      <section className="py-16 md:py-20 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl items-center gap-8 rounded-2xl border border-accent/40 bg-accent/10 p-8 md:grid-cols-2 md:p-12">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Risk-Free Entry
              </p>
              <h2 className="mb-3 text-3xl font-bold leading-tight text-foreground">
                One Week Free. No Credit Card. No Contract.
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Every engagement begins with a one-week free trial. Experience
                the team, the process, and the output - before any commitment is
                made.
              </p>
              <div className="mt-6">
                <Button asChild variant="accent" size="lg">
                  <Link href="/contact">Book Your Free Week</Link>
                </Button>
              </div>
            </div>
            <ul className="space-y-3">
              {trialTerms.map((term) => (
                <li
                  key={term}
                  className="flex items-center gap-3 text-sm text-foreground"
                >
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <Check className="h-3 w-3 text-accent" />
                  </span>
                  {term}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Questions Founders Ask
              </p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Frequently Asked Questions
              </h2>
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
            <h2 className="mb-3 text-3xl font-bold text-charcoal-foreground md:text-4xl">
              Ready to stop doing everything yourself?
            </h2>
            <p className="mb-7 text-charcoal-foreground/70">
              Book a 15-minute call and meet your operator. Start delegating
              this week.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild variant="accent" size="lg">
                <Link href="/contact">Start Your Free Week</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-charcoal-foreground/30 bg-transparent text-charcoal-foreground hover:bg-charcoal-foreground/10 hover:text-charcoal-foreground"
              >
                <Link href="/referral-partner">Become a Referral Partner</Link>
              </Button>
            </div>
            <p className="mt-5 text-xs text-charcoal-foreground/60">
              Prefer to talk now? Call us at{" "}
              <a
                href={`tel:${siteConfig.phone}`}
                className="font-medium text-accent hover:underline"
              >
                {siteConfig.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
