import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "Virtual Assistant vs Executive Assistant: Which Do You Actually Need? | Conciero Blog",
  description:
    "Virtual assistant vs executive assistant: the real difference is authority, not location or title. Compare pricing, scope, and continuity to figure out which one you actually need.",
  path: "/blog/virtual-assistant-vs-executive-assistant",
  keywords: [
    "virtual assistant vs executive assistant",
    "VA vs EA",
    "executive assistant authority",
    "when to hire an executive assistant",
    "virtual assistant scope",
  ],
});

const differences = [
  {
    title: "1. Authority",
    body: [
      'A virtual assistant executes against instructions. If the founder says "book a flight to Dubai," the VA books the flight. If the flight has a complication, she asks.',
      "An executive assistant makes decisions within documented authority. If the founder needs to be in Dubai, the EA looks at the constraints (dates, budget, preferences on file) and books the flight. Complications are resolved within her authority ceiling. The founder sees the calendar invite, not the decision process.",
      "This difference compounds. Over a year, the VA generates a stream of small questions the founder has to answer. The EA generates decisions the founder never sees.",
    ],
  },
  {
    title: "2. Scope of work",
    body: [
      "A virtual assistant typically handles specific task categories: calendar entries, data entry, travel booking, expense submission, basic email responses. The scope is defined by what she can do, not by what problems she can solve.",
      "An executive assistant typically handles operational problem areas: inbox triage across all incoming communication, calendar management including conflict resolution, vendor coordination end-to-end, meeting prep and follow-up, cross-functional coordination between team members. The scope is defined by outcomes, not tasks.",
    ],
  },
  {
    title: "3. Continuity",
    body: [
      "A virtual assistant is often shared across multiple clients through her agency. If she is unavailable, someone else picks up her work, sometimes with continuity gaps.",
      "An executive assistant works exclusively for one executive (or a small group of executives at the same company). She is the single point of continuity. Premium managed services provide backup coverage during her absence, but the primary relationship is one-to-one.",
    ],
  },
  {
    title: "4. Communication style",
    body: [
      "A virtual assistant typically operates through a task management system or a ticketing structure. Requests come in, get executed, get closed. Communication is transactional.",
      "An executive assistant operates in a partnership rhythm. Weekly briefings, monthly business context updates, ongoing conversations about priorities. Communication is continuous.",
    ],
  },
  {
    title: "5. Business context",
    body: [
      "A virtual assistant does not need deep business context to execute tasks. She needs task specifications.",
      "An executive assistant is expected to internalise the business enough to make judgment calls that match the founder's priorities. This requires ongoing context: who the customers are, what the strategic priorities are, what tradeoffs the founder makes, which relationships matter most.",
    ],
  },
];

const vaSigns = [
  "Your work is largely task-based (execution against clear instructions)",
  "You have specific administrative burden (data entry, scheduling, travel) but not decision routing overload",
  "You are early stage (under 5 to 8 team members) and still figuring out what to delegate",
  "Your budget is under $2,000/month",
  "You want to test delegation before making a bigger commitment",
];

const eaSigns = [
  "You feel like every decision routes through you",
  "Your calendar has 8+ approval requests per week you always say yes to",
  "You have hired VAs before and outgrown them within 6 months",
  "Your team is 15+ people and you cannot step away for 3 days without operational breakage",
  "Your budget can support $3,000+ per month",
  "You are ready to establish an authority document",
];

const signals = [
  {
    title: "Signal 1: The task list is growing faster than the VA can handle.",
    body: "If you keep adding scope and she keeps needing more clarification, you have outgrown task-based delegation. You need someone who can decide.",
  },
  {
    title: "Signal 2: The same operational issues keep resurfacing.",
    body: "Vendor renewals get missed. Calendar conflicts keep escalating. Documents keep getting lost in follow-up. This means execution is not the bottleneck. Decision routing is.",
  },
  {
    title: "Signal 3: You are still the routing layer for everything.",
    body: "Even with the VA, you cannot take a real vacation. Every day still starts with your inbox. If the person you hired to reduce your operational load is still requiring your input daily, the model is wrong.",
  },
];

const faqs = [
  {
    q: "What is the difference between a virtual assistant and an executive assistant?",
    a: "A virtual assistant executes tasks against instructions. An executive assistant makes decisions within documented authority. The difference is scope of authority, not location or seniority. A virtual assistant handles calendar entries, data entry, travel booking. An executive assistant handles inbox triage, calendar management, vendor coordination, meeting prep, and cross-functional operational coordination.",
  },
  {
    q: "Is a virtual assistant cheaper than an executive assistant?",
    a: "On monthly fees, yes. VAs typically cost $500 to $2,500 per month. EAs typically cost $3,000 to $12,000 per month. On true cost including founder time invested, the gap narrows significantly. A VA who requires 8 hours per week of founder briefing has a true cost about 60% higher than the monthly fee. An EA requiring 2 hours per week has a much smaller true cost markup.",
  },
  {
    q: "Can a virtual assistant become an executive assistant?",
    a: "Sometimes, but usually not through the same service. The skill of executing tasks and the skill of making judgment calls are related but different. A talented VA can grow into an EA role, but this typically requires a change in service model (from task-based to relationship-based) and a change in authority structure. Most founders end up making a change to a different provider rather than upgrading their existing VA relationship.",
  },
  {
    q: "At what point should I upgrade from a VA to an EA?",
    a: "Three signals: your task list is growing faster than the VA can handle, the same operational issues keep resurfacing, and you are still the routing layer for most decisions despite having a VA. When two of these three are true, plan the transition. Most founders find the move easier if they run both for 30 days rather than switching cold.",
  },
  {
    q: "Do I need an executive assistant if I only have a small team?",
    a: "Probably not. Founders under 8 team members typically get more value from a virtual assistant than an executive assistant. The reason: at small team sizes, there are not enough recurring operational decisions to justify the higher cost of an EA. The threshold is roughly 15 to 20 team members, though it varies by industry and founder work pattern.",
  },
  {
    q: "Can a virtual assistant handle confidential information?",
    a: "They can, with proper NDAs and vetting. The bigger question is whether they should. Confidential work (board communication, HR matters, investor coordination) typically benefits from the deeper relationship and continuity of an executive assistant, not because VAs are unreliable but because context matters heavily for these tasks. Most companies keep confidential work with an EA or in-house team member rather than a shared VA.",
  },
  {
    q: "Is there a middle option between VA and EA?",
    a: "Yes. Dedicated virtual EAs offer a middle ground. She works exclusively for you, provides relationship-based support, but at a lower cost than premium managed EA services. Cost typically $1,500 to $5,000 per month. Best for founders in the 8 to 15 team member range who are outgrowing task-based VAs but not yet ready for a full managed service.",
  },
];

const related = [
  {
    title: "The Authority Document: A 1-Page Template That Changed Everything",
    href: "/blog/authority-document-delegation-template",
  },
  {
    title: "7 Signs You Need an Executive Assistant (Even If You Do Not Feel Ready)",
    href: "/blog/signs-you-need-an-executive-assistant",
  },
  {
    title: "Why We Stopped Tracking Hours Saved (And What We Track Instead)",
    href: "/blog/why-we-stopped-tracking-hours-saved",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Virtual Assistant vs Executive Assistant: Which Do You Actually Need?",
          description:
            "Virtual assistant vs executive assistant: the real difference is authority, not location or title. Compare pricing, scope, and continuity to figure out which one you actually need.",
          image: "https://conciero.co/assets/blog/virtual-assistant-vs-executive-assistant-hero.png",
          author: { "@type": "Organization", name: "Conciero" },
          publisher: {
            "@type": "Organization",
            name: "Conciero",
            logo: {
              "@type": "ImageObject",
              url: "https://conciero.co/assets/logo-X1-8k2Vp.png",
            },
          },
          mainEntityOfPage: "https://conciero.co/blog/virtual-assistant-vs-executive-assistant",
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

      <article className="pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link className="flex w-fit items-center text-accent hover:text-accent/80 mb-6" href="/resources" aria-label="Back to Resources">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <span className="text-sm text-muted-foreground">Founder Operations &middot; 8 minute read</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6 text-foreground">
              Virtual Assistant vs Executive Assistant: Which Do You Actually Need?
            </h1>

            <div className="rounded-2xl border border-border shadow-luxury overflow-hidden mb-8">
              <Image
                src="/assets/blog/virtual-assistant-vs-executive-assistant-hero.png"
                alt="Two comparison cards side by side, one marked with dashes and one marked with checkmarks, separated by a VS badge"
                width={1200}
                height={630}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <div className="bg-secondary/30 border-l-[3px] border-accent rounded-r-lg p-5 mb-8">
              <span className="block text-xs font-bold text-accent uppercase tracking-wide mb-2">Summary</span>
              <p className="text-muted-foreground m-0">
                The difference between a virtual assistant and an executive assistant is not location or seniority.
                It is scope of authority. Virtual assistants execute tasks against instructions. Executive
                assistants make decisions within documented authority. Founders under 10 employees typically need a
                virtual assistant. Founders between 15 and 75 employees typically need an executive assistant.
                Getting this choice wrong is one of the most expensive early hires a founder makes.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Why the labels confuse founders</h2>
              <p className="text-muted-foreground mb-4">
                The terms &quot;virtual assistant&quot; and &quot;executive assistant&quot; get used interchangeably
                in most content. This is misleading. The categories describe fundamentally different services.
              </p>
              <p className="text-muted-foreground mb-4">
                A virtual assistant is defined by delivery mode: remote work, typically hourly, task-based, often
                shared across multiple clients. &quot;Virtual&quot; describes how the work is delivered.
              </p>
              <p className="text-muted-foreground mb-4">
                An executive assistant is defined by role: dedicated support to a specific executive, with authority
                to make decisions within a defined scope, focused on operational continuity. &quot;Executive&quot;
                describes the level of decision authority.
              </p>
              <p className="text-muted-foreground mb-4">
                A virtual EA is possible. A remote-based dedicated assistant with authority to make decisions is not
                a contradiction. But the majority of &quot;virtual assistants&quot; advertised by task-based
                agencies are not executive assistants regardless of what they call themselves.
              </p>
              <p className="text-muted-foreground mb-6">
                Understand the distinction and the hiring decision becomes clearer.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The 5 real differences</h2>
              <div className="space-y-6 mb-6">
                {differences.map((d) => (
                  <div key={d.title} className="bg-secondary/30 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-foreground mb-3">{d.title}</h3>
                    {d.body.map((p, i) => (
                      <p key={i} className="text-muted-foreground mb-3 last:mb-0">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Which one do you actually need?</h2>
              <p className="text-muted-foreground mb-6">
                The decision depends less on your title or team size than on your work pattern. Use this
                diagnostic.
              </p>

              <h3 className="text-lg font-bold text-foreground mb-3">Signs you need a virtual assistant</h3>
              <ul className="space-y-2 mb-6">
                {vaSigns.map((s) => (
                  <li key={s} className="text-muted-foreground">
                    {s}
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-bold text-foreground mb-3">Signs you need an executive assistant</h3>
              <ul className="space-y-2 mb-6">
                {eaSigns.map((s) => (
                  <li key={s} className="text-muted-foreground">
                    {s}
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-bold text-foreground mb-3">The tricky middle</h3>
              <p className="text-muted-foreground mb-6">
                Many founders sit in between. Team of 8 to 15, some operational overload but not overwhelming,
                budget flexible. In this range, we recommend starting with a dedicated virtual EA rather than either
                extreme. The dedicated virtual EA has more capability than a task-based VA but does not require the
                full commitment of a premium managed service.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">When to move from VA to EA</h2>
              <p className="text-muted-foreground mb-4">
                Most founders who successfully hire a VA end up needing to make the move to an EA within 12 to 18
                months. Three signals tell you it is time.
              </p>
              <div className="space-y-4 mb-6">
                {signals.map((s) => (
                  <p key={s.title} className="text-muted-foreground mb-0">
                    <strong className="text-foreground">{s.title}</strong> {s.body}
                  </p>
                ))}
              </div>
              <p className="text-muted-foreground mb-6">
                When you see two of these three signals, plan the transition. Most founders find the transition
                easier if they hire the EA before firing the VA, running both for 30 days.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The cost comparison founders miss</h2>
              <p className="text-muted-foreground mb-4">
                When founders compare VA and EA pricing, they usually compare monthly fees. This misses the actual
                cost.
              </p>
              <p className="text-muted-foreground mb-4">
                A $1,500/month VA who requires 8 hours of founder time per week for briefing, correction, and rework
                has a true cost of roughly $2,500/month at typical founder opportunity cost.
              </p>
              <p className="text-muted-foreground mb-4">
                A $4,500/month EA who requires 2 hours of founder time per week has a true cost of roughly
                $5,000/month.
              </p>
              <p className="text-muted-foreground mb-4">
                On paper: VA is cheaper. In practice: the difference is $2,500 vs $5,000, not $1,500 vs $4,500.
              </p>
              <p className="text-muted-foreground mb-3">What you get for the extra $2,500:</p>
              <ul className="space-y-2 mb-6">
                <li className="text-muted-foreground">6 hours of founder time back per week (about 25 hours per month)</li>
                <li className="text-muted-foreground">Decisions cleared without your involvement</li>
                <li className="text-muted-foreground">Continuity if the EA is unavailable</li>
                <li className="text-muted-foreground">A system built around the person, not just the person</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                Whether that is worth $2,500 depends on your stage. For a solo founder or founder under 5 employees,
                probably not. For a founder running 25 people, almost always.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">When neither is right</h2>
              <p className="text-muted-foreground mb-4">
                One case is worth naming: founders who feel overwhelmed but should not hire either.
              </p>
              <p className="text-muted-foreground mb-4">
                If you have not yet articulated what you would delegate, do not hire yet. Spend 2 weeks doing the
                pre-work first. Write the &quot;What good looks like&quot; document. Identify the 3 recurring
                decisions you would let someone else make. Only then start hiring.
              </p>
              <p className="text-muted-foreground mb-6">
                Founders who hire while unclear typically fire within 6 months and blame the person. The system was
                the problem.
              </p>
            </div>

            <div className="bg-charcoal text-charcoal-foreground rounded-xl p-7 my-10">
              <p className="text-charcoal-foreground/80 mb-4">
                We run 30-minute readiness calls with founders to figure out whether their operational needs are
                task-based or decision-based. That distinction determines which model actually helps. No pitch. Just
                an honest look at the numbers.
              </p>
              <Button asChild variant="accent">
                <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer">
                  Book a 30-minute readiness call
                </a>
              </Button>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
              <div className="divide-y divide-border">
                {faqs.map((f) => (
                  <div key={f.q} className="py-5">
                    <h3 className="text-base font-bold text-foreground mb-2">{f.q}</h3>
                    <p className="text-muted-foreground m-0">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <h2 className="text-2xl font-bold text-foreground mb-5">Related reading</h2>
              <ul className="space-y-3">
                {related.map((r) => (
                  <li key={r.href} className="border border-border rounded-xl p-4">
                    <Link href={r.href} className="font-bold text-foreground hover:text-accent flex items-center justify-between gap-4">
                      {r.title}
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
