import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "Executive Assistant Cost 2026: What You Actually Pay For",
  description:
    "Executive assistant cost in 2026 ranges from $18/hr to $250K/year. Compare 4 tiers: task-based VAs, dedicated virtual EAs, premium managed services, and in-house hires.",
  path: "/blog/executive-assistant-cost-2026",
  keywords: [
    "executive assistant cost",
    "executive assistant salary 2026",
    "virtual EA pricing",
    "how much does an executive assistant cost",
    "EA cost tiers",
  ],
});

const tiers = [
  {
    title: "Tier 1: Task-based virtual assistants ($15 to $30 per hour)",
    body: [
      "At this tier, you are buying execution against defined tasks. Calendar entries, travel booking, expense submission, data entry, basic email triage. The person you hire cannot make decisions independently. They cannot infer priority. They cannot represent you externally.",
    ],
    facts: [
      ["Best for:", "Solo founders or founders under 5 team members who need administrative execution but are not ready to delegate authority."],
      ["Typical monthly cost:", "$300 to $1,200 for 20 to 40 hours per week."],
      ["Common providers:", "Global freelance platforms, task-based VA agencies with hourly billing."],
      ["Watch out for:", "High turnover, inconsistent quality across assignments, no accountability for outcomes. This tier is a good fit if your work genuinely is task-based. Most founders overestimate how task-based their work is."],
    ],
  },
  {
    title: "Tier 2: Dedicated virtual EAs ($1,500 to $5,000 per month)",
    body: [
      "This is where the commercial market for founder support actually starts. At this tier, you get a dedicated person, not a shared pool. She learns your business over time. She can handle inbox triage, calendar management, meeting prep, vendor coordination, and light project management.",
    ],
    facts: [
      ["Best for:", "Founders running 5 to 25 person companies who have identified specific delegatable work and want ongoing support."],
      ["Typical monthly cost:", "$1,500 to $3,000 for 20 hours/week; $3,000 to $5,000 for 40 hours/week."],
      ["Common providers:", "International EA services with dedicated matches, boutique agencies specialising in founder support."],
      ["Watch out for:", 'Some services in this range still operate task-based with a dedicated wrapper. Ask how decisions are handled. If the answer is "she\'ll ask you", you are paying dedicated prices for task-based capability.'],
    ],
  },
  {
    title: "Tier 3: Premium managed EA services ($4,000 to $12,000 per month)",
    body: [
      "At this tier, you are buying not just an EA but a system around her. The service provides EA placement, ongoing training, authority document setup, decision escalation frameworks, and continuity if the EA is unavailable. The EA can make decisions within documented authority.",
    ],
    facts: [
      ["Best for:", "Founders running 15 to 75 person companies who need operational capacity, not just task execution. Typically founders who have tried Tier 1 or Tier 2 and found it did not scale."],
      ["Typical monthly cost:", "$4,000 to $12,000 depending on scope, region, and additional services (multi-region coverage, ops lead support, cross-functional coordination)."],
      ["Common providers:", "Boutique operational support firms, some larger EA services with premium tiers."],
      ["Watch out for:", "Ensure the authority setup work is actually included, not just an add-on. Ask how the service handles founder communication styles, decision preferences, and cultural fit across time zones."],
    ],
  },
];

const geoSalaries = [
  ["United States (New York, San Francisco):", "$95,000 to $180,000 base salary, sometimes higher for C-suite EAs at Series C+ companies"],
  ["United States (mid-size cities):", "$60,000 to $110,000 base salary"],
  ["United Kingdom (London):", "£45,000 to £85,000 base salary"],
  ["United Arab Emirates (Dubai):", "AED 15,000 to AED 40,000 per month"],
  ["India (major metros):", "INR 8,00,000 to INR 25,00,000 per year for senior EAs"],
];

const budgetByStage = [
  ["Solo founder or 1 to 5 person team:", "$500 to $1,500/month. Task-based virtual assistant or part-time dedicated EA."],
  ["5 to 15 person team:", "$1,500 to $5,000/month. Dedicated virtual EA at 20 to 40 hours/week."],
  ["15 to 50 person team:", "$4,000 to $10,000/month. Premium managed EA service or blended team."],
  ["50+ person team:", "$8,000 to $15,000/month for premium managed service, OR $130,000 to $250,000 all-in for in-house senior EA."],
];

const faqs = [
  {
    q: "What is the average cost of an executive assistant in the US in 2026?",
    a: "Full-time in-house executive assistants in major US cities average $85,000 to $130,000 in base salary in 2026. All-in cost including benefits is typically $110,000 to $170,000. Dedicated virtual EAs range from $1,500 to $5,000 per month. Premium managed EA services range from $4,000 to $12,000 per month.",
  },
  {
    q: "Can I get a good executive assistant for under $2,000 a month?",
    a: "Yes, at the dedicated virtual EA level with 20 hours per week of scope. What you cannot buy at that price point is authority to make decisions on your behalf, structured onboarding, or continuity if the EA is unavailable. If your needs are task-based (calendar, inbox triage, travel), this tier works well. If your needs are operational (decisions cleared, cross-functional coordination), you will typically outgrow this tier within 4 to 6 months.",
  },
  {
    q: "Why do premium EA services cost 3x more than dedicated virtual EAs?",
    a: "Premium services include the systems around the EA: authority documentation, decision escalation frameworks, ongoing training, continuity coverage, and often multi-region team structures. You are paying for a system that produces decisions cleared, not just hours worked. Whether this premium is worth it depends on whether your current bottleneck is task execution or decision routing.",
  },
  {
    q: "Is it cheaper to hire an EA in India or the Philippines?",
    a: "Yes, from a raw salary perspective. Senior EAs in India cost roughly 40 to 60% less than equivalent-experience EAs in the US or UK. The Philippines is similar. However, the total cost calculation includes coverage hours, cultural fluency, English proficiency, and continuity. Many US founders find that a well-structured India-based EA outperforms a US-based EA at 60% of the cost, because the India EA is available during founder off-hours and has often worked with international clients for years.",
  },
  {
    q: "Should I hire a part-time or full-time executive assistant?",
    a: "Start part-time (20 to 25 hours per week) unless you have already tried delegation and know exactly what full-time capacity you need. Most founders overestimate their EA needs in the first 90 days. It is easier to expand a part-time arrangement into full-time than to reduce a full-time hire back to part-time without damage to the relationship.",
  },
  {
    q: "How much should I pay a chief of staff versus an executive assistant?",
    a: "Executive assistants in the US typically earn $60,000 to $180,000 depending on experience and location. Chief of staff roles typically earn $120,000 to $300,000 plus equity. The difference is scope: an EA handles operational execution and decision routing; a chief of staff handles strategic execution and cross-functional coordination. Most founders benefit from hiring the EA first and the chief of staff 6 to 12 months later, once the operational tail is cleared.",
  },
  {
    q: "What is included in a premium managed EA service?",
    a: "Typically: dedicated EA placement matched to your needs, authority document setup, decision escalation framework, ongoing EA training, backup coverage during EA absences, monthly performance reviews, and often ops lead or coordinator support depending on scope. The specifics vary by provider. Ask each provider for a written scope document before signing.",
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
          headline: "How Much Should You Pay an Executive Assistant in 2026?",
          description:
            "Executive assistant cost in 2026 ranges from $18/hr to $250K/year. Compare 4 tiers: task-based VAs, dedicated virtual EAs, premium managed services, and in-house hires.",
          image: "https://conciero.co/assets/blog/executive-assistant-cost-2026-hero.png",
          author: { "@type": "Organization", name: "Conciero" },
          publisher: {
            "@type": "Organization",
            name: "Conciero",
            logo: {
              "@type": "ImageObject",
              url: "https://conciero.co/assets/logo-X1-8k2Vp.png",
            },
          },
          mainEntityOfPage: "https://conciero.co/blog/executive-assistant-cost-2026",
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
          { name: "How Much Should You Pay an Executive Assistant in 2026?", path: "/blog/executive-assistant-cost-2026" },
        ])}
      />

      <article className="pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link className="flex w-fit items-center text-accent hover:text-accent/80 mb-6" href="/resources" aria-label="Back to Resources">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <span className="text-sm text-muted-foreground">Founder Operations &middot; 8 minute read</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6 text-foreground">
              How Much Should You Pay an Executive Assistant in 2026?
            </h1>

            <div className="rounded-2xl border border-border shadow-luxury overflow-hidden mb-8">
              <Image
                src="/assets/blog/executive-assistant-cost-2026-hero.png"
                alt="Four ascending pricing tiers with dollar-sign badges, the top tier highlighted in gold"
                width={1200}
                height={630}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <div className="bg-secondary/30 border-l-[3px] border-accent rounded-r-lg p-5 mb-8">
              <span className="block text-xs font-bold text-accent uppercase tracking-wide mb-2">Summary</span>
              <p className="text-muted-foreground m-0">
                Executive assistant compensation in 2026 ranges from $18/hour to $250,000+ per year depending on
                location, experience, scope of authority, and hiring model. The three main models: dedicated virtual
                EAs ($1,500 to $5,000/month), full-time employed EAs ($55,000 to $130,000/year in the US), and
                premium managed EA services ($4,000 to $12,000/month). What you pay for is not hours. It is
                authority, discretion, and decision quality.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The wrong question</h2>
              <p className="text-muted-foreground mb-4">
                Most founders start their EA search with the wrong question: &quot;How much does an EA cost?&quot;
              </p>
              <p className="text-muted-foreground mb-4">
                That question assumes EAs are commodity labour where price maps to hours. They are not. Two EAs with
                identical hourly rates can produce completely different outcomes for a founder. One takes tasks off
                the plate. The other takes decisions off the plate. The difference is what you actually pay for.
              </p>
              <p className="text-muted-foreground mb-4">
                The right question is: &quot;What am I actually buying with this budget?&quot;
              </p>
              <p className="text-muted-foreground mb-6">
                This piece walks through what you get at each price point in 2026, based on the 47+ founder
                engagements we ran in the last 12 months across US, UK, UAE, and India.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The four cost tiers in 2026</h2>
              <div className="space-y-6 mb-6">
                {tiers.map((t) => (
                  <div key={t.title} className="bg-secondary/30 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-foreground mb-3">{t.title}</h3>
                    {t.body.map((p, i) => (
                      <p key={i} className="text-muted-foreground mb-3 last:mb-0">
                        {p}
                      </p>
                    ))}
                    <div className="space-y-2 mt-3">
                      {t.facts.map(([label, value]) => (
                        <p key={label} className="text-muted-foreground mb-0">
                          <strong className="text-foreground">{label}</strong> {value}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="bg-secondary/30 rounded-xl p-5">
                  <h3 className="text-lg font-bold text-foreground mb-3">Tier 4: In-house full-time executive assistants</h3>
                  <p className="text-muted-foreground mb-3">
                    At this tier, you are hiring an employee. Salary in 2026 varies enormously by geography:
                  </p>
                  <ul className="space-y-2 mb-3">
                    {geoSalaries.map(([label, value]) => (
                      <li key={label} className="text-muted-foreground">
                        <strong className="text-foreground">{label}</strong> {value}
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground mb-3">
                    Add approximately 25% to 35% for benefits, taxes, and overhead. A $100,000 US EA effectively
                    costs about $130,000 to $140,000 all-in.
                  </p>
                  <p className="text-muted-foreground mb-0">
                    <strong className="text-foreground">Best for:</strong> Companies of 50+ people where the EA
                    becomes a chief of staff track, or where confidential in-house work makes an employee
                    relationship necessary.
                  </p>
                  <p className="text-muted-foreground mb-0 mt-3">
                    <strong className="text-foreground">Watch out for:</strong> Many founders default to in-house EAs
                    prematurely. If your operational tail is not yet cleared, an in-house EA will spend her first
                    year fixing operational chaos and burn out or leave. Most companies get better outcomes from
                    Tier 3 for the first 12 to 24 months.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What actually determines cost within a tier</h2>
              <p className="text-muted-foreground mb-4">
                Three factors move an EA hire from the bottom of a tier to the top.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Authority scope.</strong> An EA who can approve vendor invoices,
                resolve calendar conflicts, and represent the founder externally costs more than one who executes
                against instructions. The uplift is roughly 25 to 40% for equivalent experience.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Regional overlap requirements.</strong> An EA covering US
                business hours from India (via structured overnight scheduling) costs less than a US-based EA. A
                blended team across India and the UK gets a founder more coverage hours per dollar than any single-
                region hire.
              </p>
              <p className="text-muted-foreground mb-6">
                <strong className="text-foreground">Discretion level.</strong> EAs handling board communication,
                investor coordination, or founder personal matters command a premium. This is not billed by hour. It
                is priced by trust.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What you should actually budget</h2>
              <p className="text-muted-foreground mb-3">A rough model based on stage:</p>
              <div className="space-y-2 mb-4">
                {budgetByStage.map(([label, value]) => (
                  <p key={label} className="text-muted-foreground mb-0">
                    <strong className="text-foreground">{label}</strong> {value}
                  </p>
                ))}
              </div>
              <p className="text-muted-foreground mb-6">
                These are guidelines. What determines whether the spend produces results is not the price. It is
                whether the EA has authority to act.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The single biggest mistake founders make on EA budget</h2>
              <p className="text-muted-foreground mb-4">Underpaying for the wrong reason.</p>
              <p className="text-muted-foreground mb-4">
                Most founders who ask us about EA pricing are choosing between a $1,500/month task-based service and
                a $4,000/month managed service. They pick the $1,500 because it feels responsible.
              </p>
              <p className="text-muted-foreground mb-4">
                Six months later, the $1,500 service has consumed roughly 8 hours per week of their time in
                briefing, correction, and rework. That is $32/hour at a founder&apos;s opportunity cost. So the true
                cost of the &quot;cheaper&quot; service is $1,500 plus $1,000 of founder time, or $2,500/month.
              </p>
              <p className="text-muted-foreground mb-4">
                The $4,000 service they turned down would have consumed 2 hours per week of founder time. That is
                $500 in founder time. True cost: $4,500/month.
              </p>
              <p className="text-muted-foreground mb-4">
                On paper, $2,500 &lt; $4,500. In practice, the $2,500 option delivered 8 hours of executed tasks. The
                $4,000 option would have delivered 8 hours of decisions removed. Different outputs. Different
                companies.
              </p>
              <p className="text-muted-foreground mb-6">
                Most founders realise this in month 4 or 5, then switch to the higher tier. The lesson: budget for
                the outcome, not the hourly rate.
              </p>
            </div>

            <div className="bg-charcoal text-charcoal-foreground rounded-xl p-7 my-10">
              <p className="text-charcoal-foreground/80 mb-4">
                We run 30-minute conversations with founders to figure out whether their bottleneck is task execution
                or decision routing. That conversation determines what tier of support actually helps. No pitch.
                Just an honest look at the numbers.
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
