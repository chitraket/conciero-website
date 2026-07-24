import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "7 Signs You Need an Executive Assistant: The Founder's Diagnostic | Conciero Blog",
  description:
    "The 7 concrete signs you are ready to hire an executive assistant, plus the 3 warning signs that mean you are not. Stop mistaking overwhelmed for ready. Diagnostic + next steps.",
  path: "/blog/signs-you-need-an-executive-assistant",
  keywords: [
    "when to hire an executive assistant",
    "signs you need an EA",
    "executive assistant readiness",
    "founder delegation",
    "hire executive assistant",
  ],
});

const signs = [
  {
    title: "Sign 1: You approve the same kinds of decisions week after week without ever saying no",
    body: [
      'Open your inbox. Search for the word "approve." Count how many approvals came through you in the last 30 days. Now count how many you said no to.',
      "Most founders find they approve between 30 and 80 requests per month. Most say no to fewer than 5%.",
      "If you approve 95%+ of what comes through, the requests do not need you. They need a written rule and an owner. This is the clearest signal that decision routing (not workload) is your bottleneck.",
    ],
  },
  {
    title: "Sign 2: You cannot remember your last uninterrupted evening",
    body: [
      'Not "I work too much." Every founder works too much. This is different.',
      "Can you name a specific evening in the last 4 weeks where your phone was off, you did not check email, and nothing operational reached you? If the answer is no, your operational load has crossed the founder-only threshold. Someone else needs authority to handle what is reaching you after hours.",
    ],
  },
  {
    title: "Sign 3: Your calendar is not being managed by anyone with judgment",
    body: [
      "If your calendar is scheduled by you (or by a task-based VA who executes without decision authority), you are the routing layer for every scheduling conflict. This is one of the highest-frequency operational drains on founder time.",
      "Specifically, if you have found yourself in the last 2 weeks moving meetings around to accommodate other meetings, or explaining why one commitment matters more than another to a scheduler, your calendar needs an owner with authority.",
    ],
  },
  {
    title: "Sign 4: Documents are getting stuck between you and someone else",
    body: [
      "Contracts sitting in your inbox unsigned. Vendor forms unread. Client onboarding paperwork half-completed. Not because the work is complicated. Because nobody owns the follow-through.",
      "If you can name 3 or more open documents right now that are stuck because of your review or signature, and you have not touched them in more than 5 days, your document workflow needs someone with dedicated ownership.",
    ],
  },
  {
    title: "Sign 5: You are missing recurring deadlines",
    body: [
      "Annual software renewals. Compliance filings. Insurance renewals. Contract expirations. Board reporting deadlines.",
      "These are the deadlines that do not appear on a project management tool because they are annual or quarterly. Most founders miss at least one per year and pay a penalty (auto-renewal at the wrong price, late fee, compliance issue).",
      "If you have missed even one recurring deadline in the last 12 months, you need someone whose job is to track them.",
    ],
  },
  {
    title: "Sign 6: You have hired and fired at least one VA or assistant already",
    body: [
      "Counterintuitively, this is a positive signal. It means you have tested the model, learned what does not work, and now know what to look for.",
      "Founders who have never hired any form of operational support often struggle with their first hire because they do not yet know what they need. Founders who have gone through one round of VA hiring, even a failed one, are typically much better positioned to hire successfully the second time.",
      "What you learned from the failed VA hire is data. Use it.",
    ],
  },
  {
    title: "Sign 7: You can articulate 3 specific decisions you would let someone else make",
    body: [
      'This is the readiness signal that matters most. If you can complete the sentence "I would let someone else decide X under Y conditions" three times with concrete details, you are ready.',
    ],
    examples: [
      "I would let my ops lead approve any vendor renewal under $2,000 if it has been approved in the last 12 months",
      "I would let my EA resolve any calendar conflict under 4 hours of impact without checking with me",
      "I would let my finance person process expense approvals under $500 without escalating",
    ],
    after:
      "If you can name three like these with concrete ceilings, you have crossed from overwhelmed into ready. The authority document you would write is already forming in your head.",
  },
];

const warnings = [
  {
    title: 'Warning 1: You cannot describe what "success" would look like at end of week',
    body: [
      'If someone asked you "what would make this week a good one from an operational perspective," and you cannot answer specifically, you are not ready. You will hire someone to do a job you have not defined.',
      'Spend 2 weeks writing the "What good looks like" document before hiring. It is the highest-leverage thing you can do.',
    ],
  },
  {
    title: "Warning 2: You cannot commit to a weekly 25-minute briefing call",
    body: [
      'If your first instinct is "I don\'t have time for that," you are not ready to work with an EA. The weekly briefing call is what makes an EA productive. Without it, she guesses. Guessing produces the mistakes that cause founders to fire EAs and blame the person.',
      "If you cannot commit to the meeting, do not hire yet. Fix your schedule first.",
    ],
  },
  {
    title: "Warning 3: You want someone to take work away without you making decisions about authority",
    body: [
      "Some founders reach for an EA because they want to stop dealing with operational overhead. That is a legitimate desire. But if you also refuse to define what authority the EA has, you will end up doing more work, not less.",
      "Every task an EA takes on generates decisions. Without documented authority, those decisions route back to you. The founder is now handling operational decisions plus explaining her judgment to a second person.",
      "If you are not willing to write authority rules, the hire will fail. Stay with the current setup or start with the authority work first.",
    ],
  },
];

const faqs = [
  {
    q: "How do I know if I am ready to hire an executive assistant?",
    a: "Run through the 7 readiness signals: approving without saying no, missing uninterrupted evenings, unmanaged calendar with judgment, stuck documents, missed recurring deadlines, previous VA experience, and ability to articulate 3 authority rules. If 5+ signals are true and none of the 3 warnings apply, you are ready. If 3+ signals are true and one warning applies, fix the warning first.",
  },
  {
    q: "What is the difference between being overwhelmed and being ready to hire an EA?",
    a: "Being overwhelmed is a feeling. Being ready is a structural state. You can be overwhelmed without being ready if you have not yet defined what authority you would delegate. Hiring while overwhelmed but not ready typically produces a 6-month cycle to firing the EA and blaming the person. Being ready means you can articulate what an EA would decide, not just do.",
  },
  {
    q: "Should I hire an EA if I have never worked with one before?",
    a: "Yes, but start smaller. First-time EA hires often benefit from a dedicated virtual EA rather than jumping straight to a premium managed service or in-house employee. The lower commitment lets you learn what you actually need before making a bigger investment.",
  },
  {
    q: "What happens if I hire an EA before I am ready?",
    a: "Usually one of two patterns. Pattern 1: the EA joins, you cannot articulate scope, she executes tasks without authority, you feel like you are working more not less, you fire her at month 4. Pattern 2: the EA joins, you delegate too fast, mistakes happen, trust breaks down, she leaves at month 6. Both patterns cost about $10,000 to $20,000 in wasted service fees plus 6 months of operational damage.",
  },
  {
    q: "How long does it take to get ready to hire an EA?",
    a: 'Most founders can move from overwhelmed to ready in 2 to 4 weeks of focused pre-work. Write the "What good looks like" document. Identify 3 specific authority rules. Commit to the weekly briefing call. Do these three things and you have crossed the threshold. This pre-work is worth doing even if you do not hire immediately.',
  },
  {
    q: "Is it too early to hire an EA if I only have 5 team members?",
    a: "Probably. Founders under 8 team members typically get more value from a virtual assistant than an executive assistant, because there are not enough recurring operational decisions to justify the EA cost. The threshold is roughly 15 to 20 team members, though it varies by industry.",
  },
  {
    q: "What is the single most important sign that I need an EA now?",
    a: "Sign 1: approving the same kinds of decisions week after week without ever saying no. This signal is measurable, unambiguous, and always indicates that decision routing is the bottleneck. If you approve 30+ requests per month and say no to fewer than 5%, hire.",
  },
];

const related = [
  {
    title: "The Authority Document: A 1-Page Template That Changed Everything",
    href: "/blog/authority-document-delegation-template",
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
          headline: "7 Signs You Need an Executive Assistant (Even If You Do Not Feel Ready)",
          description:
            "The 7 concrete signs you are ready to hire an executive assistant, plus the 3 warning signs that mean you are not. Stop mistaking overwhelmed for ready. Diagnostic + next steps.",
          image: "https://conciero.co/assets/blog/signs-you-need-ea-hero.png",
          author: { "@type": "Organization", name: "Conciero" },
          publisher: {
            "@type": "Organization",
            name: "Conciero",
            logo: {
              "@type": "ImageObject",
              url: "https://conciero.co/assets/logo-X1-8k2Vp.png",
            },
          },
          mainEntityOfPage: "https://conciero.co/blog/signs-you-need-an-executive-assistant",
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
              7 Signs You Need an Executive Assistant (Even If You Do Not Feel Ready)
            </h1>

            <div className="rounded-2xl border border-border shadow-luxury overflow-hidden mb-8">
              <Image
                src="/assets/blog/signs-you-need-ea-hero.png"
                alt="A diagonal readiness checklist with checked signals and one flagged warning"
                width={1200}
                height={630}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <div className="bg-secondary/30 border-l-[3px] border-accent rounded-r-lg p-5 mb-8">
              <span className="block text-xs font-bold text-accent uppercase tracking-wide mb-2">Summary</span>
              <p className="text-muted-foreground m-0">
                Most founders wait too long to hire an executive assistant. The signs of being ready are often
                confused with the signs of being overwhelmed, which are different things. Being overwhelmed does not
                mean you are ready. Being ready means you can articulate what an EA would decide, not just do. This
                piece covers the 7 concrete signals that indicate you have crossed the threshold, plus the 3 warning
                signs that mean you are not ready yet.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">&quot;I know I need help&quot; is not a signal</h2>
              <p className="text-muted-foreground mb-4">
                We get emails from founders every week with some version of this line: &quot;I know I need help, I
                just don&apos;t know where to start.&quot;
              </p>
              <p className="text-muted-foreground mb-4">
                That statement contains no useful information. Every founder over 5 team members feels this way at
                some point. Feeling overwhelmed is not the same as being ready to hire.
              </p>
              <p className="text-muted-foreground mb-4">
                This is where founders make the most expensive mistake: they hire an EA to solve the feeling. Six
                months later they conclude &quot;the EA didn&apos;t work out&quot; because the feeling did not
                change. The problem was that overwhelm was the wrong signal to hire on.
              </p>
              <p className="text-muted-foreground mb-6">
                Ready is different. Ready means you have identified specific decisions you would offload, specific
                rules you would put in writing, and specific relief you are looking for. The signs below are the
                concrete indicators of ready, not the vague feeling of overwhelmed.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The 7 signs you are ready</h2>
              <div className="space-y-6 mb-6">
                {signs.map((s) => (
                  <div key={s.title} className="bg-secondary/30 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3>
                    {s.body.map((p, i) => (
                      <p key={i} className="text-muted-foreground mb-3 last:mb-0">
                        {p}
                      </p>
                    ))}
                    {s.examples && (
                      <ul className="space-y-2 my-3">
                        {s.examples.map((ex) => (
                          <li key={ex} className="text-muted-foreground">
                            {ex}
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.after && <p className="text-muted-foreground mb-0">{s.after}</p>}
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The 3 warning signs that mean you are NOT ready yet</h2>
              <div className="space-y-6 mb-6">
                {warnings.map((w) => (
                  <div key={w.title} className="rounded-xl border border-border p-5">
                    <h3 className="text-lg font-bold text-foreground mb-3">{w.title}</h3>
                    {w.body.map((p, i) => (
                      <p key={i} className="text-muted-foreground mb-3 last:mb-0">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What to do based on where you land</h2>
              <p className="text-muted-foreground mb-3">
                <strong>Scored 5+ ready signals and 0 warnings.</strong> You are ready. Move ahead with the hiring
                process using the playbook we published separately.
              </p>
              <p className="text-muted-foreground mb-3">
                <strong>Scored 3-4 ready signals and 0 warnings.</strong> You are close. Spend 2 weeks doing the
                pre-work (write the &quot;What good looks like&quot; document, identify 3 specific authority rules).
                Then hire.
              </p>
              <p className="text-muted-foreground mb-3">
                <strong>Scored 3+ ready signals but 1+ warnings.</strong> You feel ready but you are not. Fix the
                warnings first. Hiring while the warnings are active will cost you 6 to 9 months when the
                relationship fails.
              </p>
              <p className="text-muted-foreground mb-6">
                <strong>Scored under 3 ready signals.</strong> You are experiencing overwhelm, not readiness. Hiring
                will not solve this yet. Spend 30 days doing the pre-work, then reassess.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The most common misdiagnosis</h2>
              <p className="text-muted-foreground mb-4">Founders often mistake &quot;I am busy&quot; for &quot;I am ready.&quot;</p>
              <p className="text-muted-foreground mb-4">
                Busy is a workload problem. Ready is a decision architecture problem. These are treated by different
                interventions. Hiring an EA to solve a workload problem often makes the workload worse in the short
                term (onboarding takes time). Hiring an EA to solve a decision architecture problem produces almost
                immediate relief.
              </p>
              <p className="text-muted-foreground mb-6">
                Before hiring, ask the question honestly: is my problem that I have too much to do, or is my problem
                that too many decisions route through me? The answer determines whether an EA hire will help.
              </p>
            </div>

            <div className="bg-charcoal text-charcoal-foreground rounded-xl p-7 my-10">
              <p className="text-charcoal-foreground/80 mb-4">
                We run 30-minute readiness calls with founders to walk through the 7 signals and figure out honestly
                whether an EA hire is the right move for you right now. No pitch. If you are not ready, we will tell
                you and recommend what to do first.
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
