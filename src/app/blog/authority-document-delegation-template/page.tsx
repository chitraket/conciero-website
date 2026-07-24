import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "The Authority Document: 1-Page Delegation Template for Founders | Conciero Blog",
  description:
    "Most delegation fails because founders never define authority. The authority document is a 1-page template (3 columns, 8-10 rows) that solves this in 30 minutes. Used with 47+ founders.",
  path: "/blog/authority-document-delegation-template",
  keywords: [
    "delegation template",
    "authority document",
    "founder delegation",
    "executive assistant authority",
    "decision making framework",
  ],
});

const sampleRows = [
  { decision: "Vendor renewal", owner: "Ops Lead", ceiling: "Up to $5,000 / approved in last 12 months" },
  { decision: "Calendar conflicts", owner: "Senior EA", ceiling: "Under 4 hours of impact" },
  { decision: "Expense approvals", owner: "Finance person", ceiling: "Under $300" },
  { decision: "Travel changes", owner: "Senior EA", ceiling: "Within agreed travel policy" },
  { decision: "Hiring offers", owner: "Founder", ceiling: "Always founder" },
];

const failures = [
  {
    title: "Failure 1: The founder writes the document but never shares it with the team.",
    body: "Without confirmation that the owners understand their authority, nothing changes. The team continues to escalate because they do not know what they are authorised to decide.",
  },
  {
    title: "Failure 2: The ceilings are too low.",
    body: "A $300 vendor approval ceiling means the founder still sees every reasonable invoice. The ceilings should be uncomfortable. If they feel safe, they are not delegating anything.",
  },
  {
    title: "Failure 3: No escalation rule.",
    body: "Authority without an escalation path creates anxiety in the owner. She is afraid to act because she does not know what triggers escalation. Always include the escalation criteria.",
  },
  {
    title: "Failure 4: No review cycle.",
    body: "Companies change every 90 days. The authority document needs to evolve. Without a built-in review, the document goes stale and the team starts ignoring it.",
  },
];

const faqs = [
  {
    q: "What is the authority document and how does it differ from a job description?",
    a: "A job description lists what someone does. The authority document lists what they can decide without asking. Most teams have job descriptions but no authority documents, which is why work moves but decisions still bottleneck through the founder.",
  },
  {
    q: "How long does it take to write the first version of the authority document?",
    a: "Most founders complete a usable first version in 25 to 30 minutes. The second version, written after a week of using it, usually takes longer because the founder realises certain ceilings need adjustment.",
  },
  {
    q: "Who should write the authority document, the founder or the team?",
    a: "The founder writes the first version. The team reviews and confirms understanding. If team members push back on a row, the rule needs clarification. Authority that the team does not understand is not real authority.",
  },
  {
    q: "How often should the authority document be reviewed?",
    a: "Every 30 days for the first 90 days, then quarterly. Additional revisions are triggered by new hires, size milestones, or any decision that went wrong because the rule was unclear.",
  },
  {
    q: "Can the authority document work for remote teams across time zones?",
    a: "Yes. It is especially important for remote teams. Without explicit authority in writing, every decision either waits for synchronous overlap or gets escalated unnecessarily. The document allows decisions to flow asynchronously, which is the entire point of distributed teams.",
  },
  {
    q: "What happens if a team member makes a wrong decision within their authority?",
    a: "Review the rule, not the person. If the rule was clear and the decision was reasonable based on available information, the system worked even if the outcome was poor. If the rule was ambiguous, fix the rule. Authority documents fail when founders punish team members for outcomes that were within their authorised scope.",
  },
  {
    q: "Is the authority document a substitute for hiring a chief of staff?",
    a: "No, but it makes the chief of staff hire much more effective when it does happen. Without an authority document, the chief of staff becomes the founder's project manager. With one, the chief of staff focuses on strategic execution while the operational tail is already handled.",
  },
];

const related = [
  {
    title: "7 Signs You Need an Executive Assistant (Even If You Do Not Feel Ready)",
    href: "/blog/signs-you-need-an-executive-assistant",
  },
  {
    title: "10 Tasks You Should Delegate to a Virtual Assistant Today",
    href: "/blog/ten-tasks-to-delegate",
  },
  {
    title: "AI + Human: The Future of Virtual Assistance",
    href: "/blog/ai-human-future",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "The Authority Document: A 1-Page Template That Changed Everything",
          description:
            "Most delegation fails because founders never define authority. The authority document is a 1-page template (3 columns, 8-10 rows) that solves this in 30 minutes. Used with 47+ founders.",
          image: "https://conciero.co/assets/blog/authority-document-hero.png",
          author: { "@type": "Organization", name: "Conciero" },
          publisher: {
            "@type": "Organization",
            name: "Conciero",
            logo: {
              "@type": "ImageObject",
              url: "https://conciero.co/assets/logo-X1-8k2Vp.png",
            },
          },
          mainEntityOfPage: "https://conciero.co/blog/authority-document-delegation-template",
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
            <span className="text-sm text-muted-foreground">Founder Operations &middot; 7 minute read</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6 text-foreground">
              The Authority Document: A 1-Page Template That Changed Everything
            </h1>

            <div className="rounded-2xl border border-border shadow-luxury overflow-hidden mb-8">
              <Image
                src="/assets/blog/authority-document-hero.png"
                alt="A one-page authority document table with decision, owner, and ceiling columns"
                width={1200}
                height={630}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <div className="bg-secondary/30 border-l-[3px] border-accent rounded-r-lg p-5 mb-8">
              <span className="block text-xs font-bold text-accent uppercase tracking-wide mb-2">Summary</span>
              <p className="text-muted-foreground m-0">
                Most founders cannot delegate effectively because they have not given anyone explicit authority to
                make decisions. The fix is a one-page authority document with three columns: decision type, owner,
                and ceiling. Write it once, revisit every 30 days. Founders who do this consistently report going
                from drowning to clear in 14 days.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The problem with most delegation advice</h2>
              <p className="text-muted-foreground mb-4">
                Every delegation framework on the internet ends in some version of: identify low-value tasks, assign
                them to someone else, focus on what matters.
              </p>
              <p className="text-muted-foreground mb-4">This advice is not wrong. It is incomplete.</p>
              <p className="text-muted-foreground mb-4">
                We have onboarded 47 founders this year. Every single one of them already had a list of things they
                knew they should delegate. The list usually included calendar coordination, vendor follow-ups,
                expense approvals, travel changes, recurring renewals, and operational follow-through. None of these
                were secrets.
              </p>
              <p className="text-muted-foreground mb-4">
                The list did not get cleared because the bottleneck was not identification. The bottleneck was
                authority.
              </p>
              <p className="text-muted-foreground mb-4">
                A founder can give her EA the calendar. The EA will still come back asking which conflict to
                prioritise. The founder can give her ops lead the vendor list. The ops lead will still ask before
                signing the renewal. The work moved. The decision did not.
              </p>
              <p className="text-muted-foreground mb-6">
                What looks like a delegation failure is almost always an authority failure.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What is the authority document</h2>
              <p className="text-muted-foreground mb-4">The authority document is one page. It has three columns.</p>
              <p className="text-muted-foreground mb-2">
                <strong>Column 1: Decision type.</strong> What kind of decision is being made.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Column 2: Owner.</strong> Who can make this decision without asking.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Column 3: Ceiling.</strong> What the limit is. Spending limit, time impact limit, scope limit.
                Above the ceiling, the decision escalates.
              </p>
              <p className="text-muted-foreground mb-6">
                That is the entire structure. Most founders write theirs in about 25 minutes the first time. The
                second version takes longer because they realise they were too cautious in the first one.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">A sample row</h2>
              <p className="text-muted-foreground mb-4">Here is one row from a real client&apos;s authority document. Names changed.</p>
              <div className="not-prose overflow-x-auto mb-6 rounded-xl border border-border">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-secondary/30">
                      <th className="text-left font-bold text-foreground p-3 border-b border-border">Decision type</th>
                      <th className="text-left font-bold text-foreground p-3 border-b border-border">Owner</th>
                      <th className="text-left font-bold text-foreground p-3 border-b border-border">Ceiling</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleRows.map((row) => (
                      <tr key={row.decision}>
                        <td className="p-3 border-b border-border text-muted-foreground">{row.decision}</td>
                        <td className="p-3 border-b border-border text-muted-foreground">{row.owner}</td>
                        <td className="p-3 border-b border-border text-muted-foreground">{row.ceiling}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground mb-4">
                Notice what is happening in row 1. The ops lead can approve any vendor renewal up to $5,000 that has
                been approved in the previous 12 months. Above $5,000, or for new vendors, the decision escalates.
                This is the level of specificity that makes the document actually work.
              </p>
              <p className="text-muted-foreground mb-6">Vague rules fail. Specific rules hold.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How to write yours in 30 minutes</h2>
              <p className="text-muted-foreground mb-4">Do this in one sitting. Closed door. Phone off.</p>
              <p className="text-muted-foreground mb-3">
                <strong>Step 1. List every decision that came through you in the last 7 days.</strong> Use email,
                Slack, and your text history. Be honest. Founders typically find 30 to 50 decisions per week. Most
                are under $1,000 in financial impact.
              </p>
              <p className="text-muted-foreground mb-3">
                <strong>Step 2. Tag each decision with whether it actually needed you.</strong> Use three tags.
                &quot;Needed me&quot; means a decision only the founder could make. &quot;Should not have needed
                me&quot; means the decision was below the level of strategic importance that justifies the
                founder&apos;s time. &quot;Routine&quot; means a decision that follows a clear pattern and could be
                automated through a rule.
              </p>
              <p className="text-muted-foreground mb-3">
                <strong>Step 3. For each routine decision, write the rule.</strong> What ceiling makes sense. Who
                should own it. What is the escalation path.
              </p>
              <p className="text-muted-foreground mb-3">
                <strong>Step 4. Pick the top 8 to 10 decisions and put them in the table.</strong> Do not try to
                write rules for everything. The top 10 cover 70% of the decision queue.
              </p>
              <p className="text-muted-foreground mb-3">
                <strong>Step 5. Share with the named owners.</strong> Each owner should read their rows and confirm
                they understand the authority. If they push back, the rule needs revision.
              </p>
              <p className="text-muted-foreground mb-6">
                <strong>Step 6. Set a 30-day review.</strong> First versions are almost always wrong in one or two
                places. The 30-day review is when you fix them.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The 30-day review cycle</h2>
              <p className="text-muted-foreground mb-4">
                The authority document is not a one-time exercise. It is a living document.
              </p>
              <p className="text-muted-foreground mb-4">Every 30 days, ask three questions.</p>
              <ul className="space-y-2 mb-4">
                <li className="text-muted-foreground italic">What decisions are still coming through me that should not be?</li>
                <li className="text-muted-foreground italic">What decisions are being made without me that should not be?</li>
                <li className="text-muted-foreground italic">What rules need clearer ceilings?</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                The first review usually reveals two things. The founder kept some authority that should have moved
                (out of habit). And the team made some decisions that should have escalated (because the ceiling was
                too high).
              </p>
              <p className="text-muted-foreground mb-4">Both are normal. Both are fixable in 5 minutes.</p>
              <p className="text-muted-foreground mb-6">
                By month 3, the authority document feels permanent. The team operates with it as their reference. The
                founder is no longer the routing layer for routine decisions.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Why most authority documents fail</h2>
              <p className="text-muted-foreground mb-4">The document is simple. The execution is where it breaks.</p>
              <p className="text-muted-foreground mb-4">Here are the four most common failures we see.</p>
              <div className="space-y-4 mb-6">
                {failures.map((f) => (
                  <div key={f.title} className="bg-secondary/30 rounded-xl p-5">
                    <p className="font-bold text-foreground mb-2">{f.title}</p>
                    <p className="text-muted-foreground m-0">{f.body}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What changes when this works</h2>
              <p className="text-muted-foreground mb-4">Founders we have worked with report similar patterns.</p>
              <p className="text-muted-foreground mb-4">
                In week 1, the founder feels uncomfortable. She is approving fewer things and worrying about what is
                going wrong without her watching.
              </p>
              <p className="text-muted-foreground mb-4">
                In week 2, she starts noticing how much time was being lost to small approvals. A typical founder
                reclaims 6 to 9 hours a week in week 2.
              </p>
              <p className="text-muted-foreground mb-4">
                In week 3, the team starts pre-empting. They make decisions, document them, and update the founder
                weekly instead of asking permission daily.
              </p>
              <p className="text-muted-foreground mb-4">
                By week 6, the company runs differently. The founder is no longer the bottleneck for routine work.
                She has more time for strategic work, which is the only kind of work that grows the company.
              </p>
              <p className="text-muted-foreground mb-6">
                The authority document is not a productivity hack. It is the operational layer that makes everything
                else possible.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">When to revise the document</h2>
              <p className="text-muted-foreground mb-4">Four triggers should prompt a revision outside the 30-day review.</p>
              <p className="text-muted-foreground mb-3">
                <strong>A new hire joins the team.</strong> Their authority needs to be added to the document on day
                one, not day 30.
              </p>
              <p className="text-muted-foreground mb-3">
                <strong>The company crosses a size threshold.</strong> Roughly every 10 new people, the document
                needs a full rewrite. The decisions a 12-person company makes are different from a 25-person
                company.
              </p>
              <p className="text-muted-foreground mb-3">
                <strong>A decision goes wrong because the rule was unclear.</strong> Fix the rule immediately. Do not
                wait for the review.
              </p>
              <p className="text-muted-foreground mb-6">
                <strong>The founder takes a real vacation.</strong> Before any extended time off, the authority
                document gets a full audit. Anything that needs the founder during the trip needs to be explicitly
                assigned to someone else with the same authority.
              </p>
            </div>

            <div className="bg-charcoal text-charcoal-foreground rounded-xl p-7 my-10">
              <p className="text-charcoal-foreground/80 mb-4">
                We build the authority document with every founder during their first week at Conciero. If you want
                to see how this looks in practice, we offer a 30-minute decision audit call. No pitch. Just a
                conversation about where decisions are actually getting stuck in your company.
              </p>
              <Button asChild variant="accent">
                <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer">
                  Book a 30-minute decision audit
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
