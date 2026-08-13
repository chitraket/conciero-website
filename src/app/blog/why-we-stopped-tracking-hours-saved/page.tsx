import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "Why We Stopped Tracking Hours Saved (And What We Track Instead) | Conciero Blog",
  description:
    "Every VA company sells hours saved. We stopped. Across 47 founders, we track decisions cleared instead, the median moves from 6 to 74/week in 90 days. Here is why this metric matters more.",
  path: "/blog/why-we-stopped-tracking-hours-saved",
  keywords: [
    "hours saved metric",
    "decisions cleared",
    "executive assistant metrics",
    "founder delegation metrics",
    "operational scaling",
  ],
});

const steps = [
  {
    title: "Step 1.",
    body: "Open a simple sheet with three columns: date, decision type, who decided.",
  },
  {
    title: "Step 2.",
    body: "Once a week, ask each team member to add the 3 to 5 biggest decisions they made without you that week. Vendor renewals, hiring stages moved, expense approvals, calendar swaps, client thread closures.",
  },
  {
    title: "Step 3.",
    body: "Count the total at the end of the week. That is your baseline.",
  },
  {
    title: "Step 4.",
    body: "Do this for 4 weeks. Watch the number.",
  },
];

const dataPoints = [
  { label: "Week 1 average:", value: "6 decisions cleared without the founder." },
  { label: "Week 4 average:", value: "31 decisions cleared." },
  { label: "Week 12 average:", value: "74 decisions cleared." },
];

const faqs = [
  {
    q: "What does decisions cleared mean exactly?",
    a: "A decision cleared is any operational decision made by someone other than the founder, where the founder did not see the request and did not need to approve. The decision is documented, but the founder is not in the loop. Examples include vendor renewals approved by the ops lead, calendar conflicts resolved by the EA, and expense approvals processed by the finance person.",
  },
  {
    q: "How is this different from delegating tasks?",
    a: "Delegating tasks means handing off the work. Delegating decisions means handing off the authority to choose. A founder can delegate the task of evaluating three vendor quotes but keep the decision of which to pick. That is task delegation, not decision delegation. Decision delegation is what actually changes capacity.",
  },
  {
    q: "Should I be worried about losing control if my team makes more decisions?",
    a: "Control is not the same as oversight. A founder who has documented authority rules, clear escalation paths, and weekly decision reports has more control than a founder who personally approves everything. The former sees the patterns. The latter sees the individual approvals and misses the system.",
  },
  {
    q: "Why does the median move from 6 to 74 decisions per week?",
    a: "The 6 represents what was happening before any explicit authority was given. The 74 represents what happens when authority is documented, owners are named, and ceilings are clear. The increase is not magic. It is structural. The team always could have made these decisions. They just did not have permission.",
  },
  {
    q: "Can decisions cleared be tracked for solo founders without a team?",
    a: "Not in the same way. Solo founders should track something different: decisions automated by rules. For example, recurring expenses under a certain amount that go through automatically without the founder reviewing. The principle is the same. Reduce the decisions that route through one head.",
  },
  {
    q: "How long does it take to see the decisions cleared number move?",
    a: "Most clients see meaningful movement by week 4. The biggest jumps happen between week 4 and week 12, when the team has internalised the authority document and stopped reflexively escalating. By month 6, the number plateaus around 70-90 cleared decisions per week for most companies in our sample.",
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
    title: "Virtual Assistant vs Executive Assistant: Which Do You Actually Need?",
    href: "/blog/virtual-assistant-vs-executive-assistant",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Why We Stopped Tracking Hours Saved (And What We Track Instead)",
          description:
            "Every VA company sells hours saved. We stopped. Across 47 founders, we track decisions cleared instead, the median moves from 6 to 74/week in 90 days. Here is why this metric matters more.",
          image: "https://conciero.co/assets/blog/why-we-stopped-tracking-hours-saved-hero.png",
          author: { "@type": "Organization", name: "Conciero" },
          publisher: {
            "@type": "Organization",
            name: "Conciero",
            logo: {
              "@type": "ImageObject",
              url: "https://conciero.co/assets/logo-X1-8k2Vp.png",
            },
          },
          mainEntityOfPage: "https://conciero.co/blog/why-we-stopped-tracking-hours-saved",
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
            <span className="text-sm text-muted-foreground">Founder Operations &middot; 6 minute read</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6 text-foreground">
              Why We Stopped Tracking Hours Saved (And What We Track Instead)
            </h1>

            <div className="rounded-2xl border border-border shadow-luxury overflow-hidden mb-8">
              <Image
                src="/assets/blog/why-we-stopped-tracking-hours-saved-hero.png"
                alt="A bar chart trending upward from a low placeholder bar to a tall gold bar labeled 6 to 74"
                width={1200}
                height={630}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <div className="bg-secondary/30 border-l-[3px] border-accent rounded-r-lg p-5 mb-8">
              <span className="block text-xs font-bold text-accent uppercase tracking-wide mb-2">Summary</span>
              <p className="text-muted-foreground m-0">
                Every virtual assistant company sells hours saved. We tracked the same metric for our first 18
                months. Then we noticed it was telling us the wrong story about what actually changes a founder&apos;s
                life. Today we track decisions cleared without the founder. The median client moves from 6 cleared
                decisions per week to 74 by month 3. That number tells you whether a company is actually scaling, or
                just whether the founder is taking longer lunches.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The metric every VA company sells you</h2>
              <p className="text-muted-foreground mb-4">
                Walk through the website of any virtual assistant company in 2026. You will see the same promise.
              </p>
              <p className="text-muted-foreground mb-4">
                <em>Save 15 hours a week.</em> <em>Reclaim 20 hours of your time.</em> <em>Get 10 hours back to focus
                on what matters.</em>
              </p>
              <p className="text-muted-foreground mb-4">
                The number changes. The promise does not. Hours saved is the default metric of the entire industry.
              </p>
              <p className="text-muted-foreground mb-6">We sold this for 18 months. Then we stopped.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Why hours saved is a misleading metric</h2>
              <p className="text-muted-foreground mb-4">
                Hours saved is an output metric. It measures something that happened after the work was done. It
                tells you how the founder spent her time afterward.
              </p>
              <p className="text-muted-foreground mb-4">It does not tell you whether the company got better.</p>
              <p className="text-muted-foreground mb-4">
                Here is a real example. A founder we worked with in year 1 told us, six months in, that we had saved
                her 22 hours per week. She was thrilled. Her team was not.
              </p>
              <p className="text-muted-foreground mb-4">
                Her team told us she was still the bottleneck. She still approved every vendor renewal, still
                resolved every calendar conflict, still personally made every hiring decision. She was just doing it
                faster because we had cleaned up her calendar and inbox.
              </p>
              <p className="text-muted-foreground mb-6">
                The 22 hours she got back went to her family and her health, both of which mattered. But the company
                had not changed. It was still a company that ran on one person&apos;s attention. When that founder
                eventually scaled past 30 employees, the operational pain returned with vengeance. The hours saved
                did not transfer to her team&apos;s capacity to make decisions. She had bought herself time, not
                capacity.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What changed</h2>
              <p className="text-muted-foreground mb-4">
                In month 19, we started running a different metric on a few clients. We called it decisions cleared.
              </p>
              <p className="text-muted-foreground mb-4">
                A decision cleared is any operational decision that was made by someone other than the founder, that
                the founder did not see before, during, or after. The decision happened. The work moved forward. The
                founder was not the routing layer.
              </p>
              <p className="text-muted-foreground mb-6">
                We started counting these weekly for one client. Then five. Then everyone. The numbers told a
                different story than hours saved.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What the data shows</h2>
              <p className="text-muted-foreground mb-4">
                Across 47 client onboardings in the last 12 months, we tracked decisions cleared per week.
              </p>
              <div className="bg-secondary/30 rounded-xl p-5 mb-4 space-y-2">
                {dataPoints.map((d) => (
                  <p key={d.label} className="text-muted-foreground mb-0">
                    <strong className="text-foreground">{d.label}</strong> {d.value}
                  </p>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                Some clients move faster. Some take longer. The pattern is consistent. Founders who actively delegate
                decisions, not just tasks, see their team&apos;s capacity multiply by roughly 10x in 90 days.
              </p>
              <p className="text-muted-foreground mb-4">
                This matters because decisions cleared is a system metric. It measures whether the inside of the
                company is changing.
              </p>
              <p className="text-muted-foreground mb-4">
                If hours saved goes up but decisions cleared stays at 6, the founder is just delegating menial work
                while still personally approving everything strategic. Eventually the company hits a ceiling.
              </p>
              <p className="text-muted-foreground mb-6">
                If decisions cleared goes up, the company is genuinely scaling. The founder is no longer required for
                routine operations. The EA, ops lead, and team have authority to act. The company can run when the
                founder is on a flight, sick, or out of reach.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How to start tracking this yourself</h2>
              <p className="text-muted-foreground mb-4">You do not need software. You need a spreadsheet and 5 minutes a week.</p>
              <div className="space-y-3 mb-4">
                {steps.map((s) => (
                  <p key={s.title} className="text-muted-foreground mb-0">
                    <strong className="text-foreground">{s.title}</strong> {s.body}
                  </p>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                Most founders are shocked at week 1. The number is almost always lower than they think.
              </p>
              <p className="text-muted-foreground mb-6">
                Most founders are shocked at week 4. If they have been delegating with authority (not just delegating
                tasks), the number has usually doubled.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Why this is the better metric for premium service</h2>
              <p className="text-muted-foreground mb-4">
                Hours saved is the right metric for commodity virtual assistant work. If a founder hires a $15-an-hour
                overseas assistant to handle scheduling, hours saved is the only metric that matters. The
                relationship is transactional.
              </p>
              <p className="text-muted-foreground mb-4">
                Decisions cleared is the right metric for premium operational support. Founders working with us are
                not buying time. They are buying capacity. The capacity to step away from their company without it
                breaking. The capacity to think strategically without being interrupted by approval requests.
              </p>
              <p className="text-muted-foreground mb-6">
                That capacity is invisible to hours-saved measurement. It only becomes visible when you track the
                actual structural shift inside the company.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What this means for hiring</h2>
              <p className="text-muted-foreground mb-4">
                If you are interviewing virtual assistant or executive assistant services, ask one question.
              </p>
              <p className="text-muted-foreground mb-4">
                <em>How will I know if this is working?</em>
              </p>
              <p className="text-muted-foreground mb-4">
                If the answer is some version of &quot;you will get hours back&quot;, the service is selling
                commodity work.
              </p>
              <p className="text-muted-foreground mb-4">
                If the answer involves measuring how the team&apos;s autonomy changes, the service is selling
                capacity.
              </p>
              <p className="text-muted-foreground mb-4">
                Both have their place. Be honest with yourself about which one you actually need.
              </p>
              <p className="text-muted-foreground mb-6">
                Most founders we talk to want capacity but ask for hours because that is the only language the
                industry has taught them to use. Once they understand the distinction, the conversation about what
                they actually want from operational support gets much more useful.
              </p>
            </div>

            <div className="bg-charcoal text-charcoal-foreground rounded-xl p-7 my-10">
              <p className="text-charcoal-foreground/80 mb-4">
                We share a simple decision tracking template with every founder during onboarding. If you want it, we
                offer a 30-minute call to walk through how to set up the measurement for your team.
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
