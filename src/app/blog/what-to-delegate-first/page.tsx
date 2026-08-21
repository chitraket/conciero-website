import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "What to Delegate First as a Founder: The 5-Task Sequence",
  description:
    "The 5 tasks every founder should delegate first: calendar, inbox triage, document chasing, expense approvals under $500, and travel logistics. Plus 5 to never delegate in month 1.",
  path: "/blog/what-to-delegate-first",
  keywords: [
    "what to delegate first",
    "founder delegation tasks",
    "delegate to executive assistant",
    "tasks to delegate to EA",
    "founder time management",
  ],
});

const delegateFirst = [
  {
    title: "1. Calendar coordination",
    body: [
      "Especially across time zones. This is the highest-frequency operational work a founder does, and it has almost zero reversibility risk. If the EA books a meeting badly, you can move it.",
      "The rule to give: any calendar conflict under 4 hours of impact is the EA's decision. Above 4 hours, she flags it to you with a recommended resolution.",
      "Most founders reclaim 3 to 5 hours per week by delegating calendar within the first 2 weeks.",
    ],
  },
  {
    title: "2. Inbox triage",
    body: [
      "Note: not full inbox management. Triage only.",
      "A good triage system uses three buckets. Urgent means needs founder today. Waiting means founder needed but not today. FYI means founder never needs to see this.",
      "Your EA reads every email that comes in, tags it into a bucket, drafts responses for anything obvious, and gives you back an inbox that is already prioritised when you open it.",
      "Do not delegate full inbox response in the first 30 days. Delegate only triage. Response comes later, when the EA has enough context to represent your voice.",
      "Typical time reclaimed: 5 to 8 hours per week by end of month 1.",
    ],
  },
  {
    title: "3. Document chasing",
    body: [
      "Contracts. NDAs. Onboarding paperwork. Signed proposals. Vendor forms. The founder should never be the person chasing a signature. This is pure follow-through work with no strategic component.",
      "Give the EA a shared folder or Notion board where every open document lives with a status: awaiting signature, awaiting review, closed. She checks it daily. She chases whoever is holding it up. The founder sees the status board weekly.",
      'This is the delegation that generates the biggest "how did I not do this earlier" reaction from founders. It also delivers about 2 to 3 hours per week back.',
    ],
  },
  {
    title: "4. Expense approvals under $500",
    body: [
      "This is the most contested item on the list. Founders resist it because it feels like losing control.",
      "Run the numbers first. In a typical week, how many expense approvals under $500 come through you? Most founders find 8 to 15 per week. How many of those have you ever said no to? For most founders, the answer is under 5%.",
      "If you approve 95% of these requests, the requests do not need you. They need a written rule.",
      "Give your ops lead or finance person authority up to $500. Set the escalation rule: any single expense over $500, any monthly total for a category over $3,000, or anything to a new vendor comes to you.",
      "Time reclaimed: 1 to 2 hours per week, plus the elimination of context-switching cost which is usually larger than the raw time saved.",
    ],
  },
  {
    title: "5. Travel logistics",
    body: [
      "Booking flights, hotels, ground transport, meeting logistics on the road.",
      "The rule that works: give the EA your travel constraints, not the steps.",
      'Instead of: "Book me a flight to Dubai for Tuesday."',
      'Say: "I need to be in Dubai for a client meeting on Wednesday morning. Direct flights only. Land by 6 PM Tuesday. Hotel within 15 minutes of the office. Budget up to $1,800 for flight, $400 for hotel."',
      "Now she decides. You see the calendar invite.",
      "This single reframe (constraints, not steps) applies to most delegation and is worth training your team to use across every role.",
    ],
  },
];

const doNotDelegate = [
  {
    title: "1. Direct client communication",
    body: "Not in the first 30 days. The EA does not have enough context yet to represent your voice, tone, or business relationships. Hand off client scheduling and prep, keep the direct written communication yourself. This changes by month 3, when the EA has the context.",
  },
  {
    title: "2. Hiring decisions",
    body: "The EA can schedule interviews. She can source candidates. She can format offer letters. She cannot decide who to hire. Hiring is one of the highest-consequence decisions a founder makes, and it does not meet the low-reversibility test.",
  },
  {
    title: "3. Strategic email responses",
    body: "Investor updates. Partnership discussions. Any email where the response reshapes a relationship. Keep these until at least month 6.",
  },
  {
    title: "4. Financial oversight",
    body: "Monthly reconciliation, cash position review, forecasting. This work needs the founder's judgement about what to worry about. Delegate the operational admin (invoice submission, expense categorisation) but not the review.",
  },
  {
    title: "5. Anything client-facing on paid accounts",
    body: "Customer success touchpoints. Renewal conversations. Escalation resolution. These decisions have long reversibility windows (a bad renewal call can cost a customer 6 months later). Keep them until you have a specific customer success function.",
  },
];

const sequence = [
  ["Week 1.", "Delegate calendar coordination and inbox triage. Nothing else. Give the EA time to learn your patterns before adding scope."],
  ["Week 2.", "Add document chasing and expense approvals under $500. These are low-risk additions that produce visible relief."],
  ["Week 3.", "Add travel logistics with constraint-based briefs."],
  ["Week 4.", "Review what has been working. Add one more scope item based on what feels most painful now. Common week 4 additions: vendor coordination, meeting prep, weekly reporting."],
];

const faqs = [
  {
    q: "What is the first task a founder should delegate?",
    a: "Calendar coordination. It has the highest frequency, lowest reversibility risk, and clearest success conditions of any founder task. Most founders reclaim 3 to 5 hours per week within 2 weeks of delegating calendar to an EA with authority.",
  },
  {
    q: "How long does it take to delegate effectively?",
    a: "Meaningful delegation takes about 30 to 60 days for the first phase. Full operational delegation (where the founder is no longer the routing layer for routine decisions) typically takes 90 days. Founders who try to compress this timeline usually end up with rework, missed briefings, and a damaged EA relationship.",
  },
  {
    q: "Should I delegate inbox management in the first month?",
    a: "Delegate inbox triage in the first month. Do not delegate inbox response until at least month 3. Triage means someone else reads, tags, and prioritises your inbox. Response means someone else writes on your behalf. Triage is safe from day 1. Response requires context the EA does not have yet.",
  },
  {
    q: "Can I delegate strategic tasks to my EA?",
    a: "Not in the first 60 days. Strategic tasks require deep business context, decision-making judgment, and often external relationships. These come after operational tasks are handled reliably. A typical timeline: operational delegation months 1-3, coordination delegation months 3-6, strategic delegation months 6+.",
  },
  {
    q: "What tasks should I never delegate?",
    a: "Hiring final decisions, direct investor communication, cash position review, and any client conversation where relationship reshape happens. These require founder judgment that cannot be reliably outsourced to an EA. A chief of staff can take on some of these, but only after 12+ months of context.",
  },
  {
    q: "How do I know if I am delegating too fast?",
    a: "Three signals. First, the EA asks the same questions repeatedly (context gap). Second, you are correcting more than 20% of her work (briefing gap). Third, you find yourself redoing things after she completes them (trust gap). Any of these three means slow down. Add scope only when the current scope is running clean.",
  },
  {
    q: "What is the difference between task delegation and decision delegation?",
    a: "Task delegation means someone else does the work. Decision delegation means someone else chooses what work to do. Most founders start with task delegation and never move to decision delegation. This is why they still feel overwhelmed after hiring an EA. Real capacity comes from decision delegation, which requires an authority document.",
  },
];

const related = [
  {
    title: "The Authority Document: A 1-Page Template That Changed Everything",
    href: "/blog/authority-document-delegation-template",
  },
  {
    title: "Why We Stopped Tracking Hours Saved (And What We Track Instead)",
    href: "/blog/why-we-stopped-tracking-hours-saved",
  },
  {
    title: "How Much Should You Pay an Executive Assistant in 2026?",
    href: "/blog/executive-assistant-cost-2026",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "What Tasks Should a Founder Delegate First? (2026 Guide)",
          description:
            "The 5 tasks every founder should delegate first: calendar, inbox triage, document chasing, expense approvals under $500, and travel logistics. Plus 5 to never delegate in month 1.",
          image: "https://conciero.co/assets/blog/what-to-delegate-first-hero.png",
          author: { "@type": "Organization", name: "Conciero" },
          publisher: {
            "@type": "Organization",
            name: "Conciero",
            logo: {
              "@type": "ImageObject",
              url: "https://conciero.co/assets/logo-X1-8k2Vp.png",
            },
          },
          mainEntityOfPage: "https://conciero.co/blog/what-to-delegate-first",
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

      <JsonLd
        data={breadcrumbSchema([
          { name: "Blog", path: "/resources" },
          { name: "What Tasks Should a Founder Delegate First? (2026 Guide)", path: "/blog/what-to-delegate-first" },
        ])}
      />

      <article className="pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link className="flex w-fit items-center text-accent hover:text-accent/80 mb-6" href="/resources" aria-label="Back to Resources">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <span className="text-sm text-muted-foreground">Founder Operations &middot; 7 minute read</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6 text-foreground">
              What Tasks Should a Founder Delegate First? (2026 Guide)
            </h1>

            <div className="rounded-2xl border border-border shadow-luxury overflow-hidden mb-8">
              <Image
                src="/assets/blog/what-to-delegate-first-hero.png"
                alt="A five-step numbered sequence timeline from week 1 to week 4, the final step highlighted in gold"
                width={1200}
                height={630}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <div className="bg-secondary/30 border-l-[3px] border-accent rounded-r-lg p-5 mb-8">
              <span className="block text-xs font-bold text-accent uppercase tracking-wide mb-2">Summary</span>
              <p className="text-muted-foreground m-0">
                The first tasks a founder should delegate are not the ones taking the most time. They are the ones
                with the highest ratio of decisions-per-minute to strategic value. Start with calendar coordination,
                inbox triage, vendor coordination, expense approvals under $500, and travel logistics. Do not start
                with anything client-facing or hiring-related. Founders who delegate in the right order see 8-12
                hours per week returned within 30 days.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Most delegation advice is written backwards</h2>
              <p className="text-muted-foreground mb-4">
                Every article about what to delegate first tells you to make a list of everything you do and rank it
                by hourly value. The problem with this advice is that it treats delegation as a math exercise.
              </p>
              <p className="text-muted-foreground mb-4">It is not a math exercise. It is a trust exercise.</p>
              <p className="text-muted-foreground mb-4">
                The things you should delegate first are not the things that consume the most time. They are the
                things that meet three criteria: high frequency, low reversibility risk, and clear success
                conditions.
              </p>
              <p className="text-muted-foreground mb-4">
                High frequency means the work happens weekly or daily. That gives your delegate enough repetitions
                to get good at it.
              </p>
              <p className="text-muted-foreground mb-4">
                Low reversibility risk means if the task is done wrong, you can fix it the next day without lasting
                damage.
              </p>
              <p className="text-muted-foreground mb-4">
                Clear success conditions means you can describe what &quot;done well&quot; looks like in writing,
                without having to be there.
              </p>
              <p className="text-muted-foreground mb-6">
                Use these three tests. Everything that passes all three should be delegated within the first 60
                days. Everything that fails one should wait.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The 5 tasks every founder should delegate first</h2>
              <div className="space-y-6 mb-6">
                {delegateFirst.map((d) => (
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

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The 5 tasks founders often try to delegate first, but should not</h2>
              <p className="text-muted-foreground mb-4">
                Equal to knowing what to delegate is knowing what to hold onto in the first 60 days.
              </p>
              <div className="space-y-4 mb-6">
                {doNotDelegate.map((d) => (
                  <div key={d.title} className="rounded-xl border border-border p-5">
                    <h3 className="text-lg font-bold text-foreground mb-2">{d.title}</h3>
                    <p className="text-muted-foreground mb-0">{d.body}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The 30-day delegation sequence</h2>
              <p className="text-muted-foreground mb-4">A concrete order that has worked for most founders we work with.</p>
              <div className="space-y-3 mb-4">
                {sequence.map(([label, value]) => (
                  <p key={label} className="text-muted-foreground mb-0">
                    <strong className="text-foreground">{label}</strong> {value}
                  </p>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                By end of month 1, most founders have reclaimed 8 to 12 hours per week and delegated approximately
                30% of their operational load.
              </p>
              <p className="text-muted-foreground mb-6">
                Do not try to delegate everything at once. Every scope expansion is a trust conversation. Rushing it
                creates rework, which teaches the EA that she cannot be trusted, which reduces future scope.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The single biggest mistake</h2>
              <p className="text-muted-foreground mb-4">
                Delegating what you dislike, instead of what you should not be doing.
              </p>
              <p className="text-muted-foreground mb-4">
                Most founders start delegation by handing off the tasks they personally dislike. This is intuitive
                but wrong.
              </p>
              <p className="text-muted-foreground mb-4">
                The right question is not &quot;what do I hate doing.&quot; The right question is &quot;what have I
                been doing that anyone with reasonable judgment could do?&quot;
              </p>
              <p className="text-muted-foreground mb-4">
                These are often the tasks you enjoy, because they feel productive and give you a sense of control.
                Approving vendor invoices under $500. Reviewing calendar conflicts. Chasing signed contracts.
              </p>
              <p className="text-muted-foreground mb-6">
                Delegating tasks you enjoy is harder than delegating tasks you hate. It is also more valuable. The
                tasks you enjoy but should not be doing are typically the ones eating the most of your strategic
                capacity, because you have been unconsciously prioritising them.
              </p>
            </div>

            <div className="bg-charcoal text-charcoal-foreground rounded-xl p-7 my-10">
              <p className="text-charcoal-foreground/80 mb-4">
                We walk founders through a decision audit in the first week of every engagement. It identifies the 8
                to 10 highest-leverage tasks to delegate first based on your specific work patterns. If you want to
                see how this looks, we offer a 30-minute call.
              </p>
              <Button asChild variant="accent">
                <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer">
                  Book a 30-minute call
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
