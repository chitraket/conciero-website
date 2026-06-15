import type { Metadata } from "next";
import Link from "next/link";
import {
  Handshake,
  Workflow,
  BadgeCheck,
  Award,
  Gift,
  ShieldCheck,
  Repeat,
  Layers,
  Briefcase,
  LineChart,
  Megaphone,
  Crown,
  Calculator,
  Globe,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Referral Partner Program — Earn up to 50%",
  description:
    "Refer once, earn every time your client says yes. Introduce founders and growing businesses to Conciero and earn up to 50% of the first month. Free to join, no paperwork, uncapped earnings.",
  path: "/referral-partner",
  keywords: [
    "referral partner program",
    "refer and earn",
    "virtual assistant affiliate",
    "agency referral program",
    "partner commission",
    "refer a client",
  ],
});

const stats = [
  { num: "<3%", label: "Operator acceptance rate" },
  { num: "5–15yr", label: "Avg. operator experience" },
  { num: "2.7yr", label: "Avg. client retention" },
  { num: "200+", label: "Platforms mastered" },
  { num: "1 wk", label: "Free trial for clients" },
];

const howSteps = [
  {
    num: "01",
    title: "You Make the Intro",
    desc: "A simple email or message introduction to us. That is genuinely all we need from you to get started.",
  },
  {
    num: "02",
    title: "We Handle Everything",
    desc: "Conciero takes over — sales conversation, onboarding, delivery. Zero effort required on your end after the introduction.",
  },
  {
    num: "03",
    title: "You Get Paid",
    desc: "Once your referral becomes a paying client, your referral earnings are processed. Fast, clean, and no paperwork.",
  },
];

type Proof = { big: string; unit?: string; Icon: LucideIcon; title: string; desc: string };

const proof: Proof[] = [
  {
    big: "<3%",
    Icon: BadgeCheck,
    title: "Elite Operator Selection",
    desc: "Every operator clears a rigorous 7-stage screening process. Less than 3% of applicants make it through — your clients receive the very best.",
  },
  {
    big: "5–15",
    unit: "yrs",
    Icon: Award,
    title: "Real Career Experience",
    desc: "Alumni of Amazon, Uber, EY, American Express, Emirates, and Marriott. Career professionals — not gig workers or fresh graduates.",
  },
  {
    big: "1",
    unit: "wk",
    Icon: Gift,
    title: "Free Trial — Zero Risk Entry",
    desc: "Every client starts with a 1-week free trial. No credit card, no onboarding fee, no contract. They experience the team before spending a dollar.",
  },
  {
    big: "1",
    unit: "wk",
    Icon: ShieldCheck,
    title: "Replacement Guarantee",
    desc: "If an operator is not the right fit for any reason, Conciero replaces them within 1 week. No disruption, no questions asked.",
  },
  {
    big: "2.7",
    unit: "yrs",
    Icon: Repeat,
    title: "Clients Stay — Long Term",
    desc: "The average Conciero client stays for 2.7 years. That reflects the quality of service your referrals will consistently experience.",
  },
  {
    big: "200+",
    Icon: Layers,
    title: "Tools and Platforms Mastered",
    desc: "Operators trained across 200+ platforms. AI-fluent by default — using Claude, ChatGPT, and automation tools as everyday leverage.",
  },
];

const servicesReceived = [
  { name: "Executive Support", desc: "Calendar, inbox, travel, admin, and daily coordination handled end to end." },
  { name: "Sales Development", desc: "Outbound SDR, list building, sequences, CRM hygiene, meeting booking." },
  { name: "Digital Marketing", desc: "SEO, Google/Meta/LinkedIn ads, content creation, funnels, lifecycle email." },
  { name: "Web and Automations", desc: "WordPress, Webflow, Shopify, Zapier/Make/n8n automations, AI integrations." },
  { name: "Social Media", desc: "Graphics, Reels, Shorts, publishing, community management, and analytics." },
  { name: "Recruiting and Ops", desc: "Candidate sourcing, SOP creation, and operational process documentation." },
];

type Partner = { Icon: LucideIcon; title: string; desc: string };

const partners: Partner[] = [
  { Icon: Briefcase, title: "Recruitment Firms", desc: "You place talent — we run operations. Natural handoff when clients need more than one hire." },
  { Icon: LineChart, title: "Business Coaches", desc: "You advise on strategy — we execute on the ground. Clients get results faster." },
  { Icon: Megaphone, title: "Marketing Agencies", desc: "When clients need ops and admin beyond marketing — we step in seamlessly." },
  { Icon: Crown, title: "Fractional Executives", desc: "CFOs, COOs, CMOs who see clients drowning in ops — Conciero is the execution layer." },
  { Icon: Calculator, title: "Accountants & Bookkeepers", desc: "You manage the numbers — we manage the operations. Complementary, never competing." },
  { Icon: Globe, title: "Anyone With the Right Network", desc: "If your clients are founders or growing businesses — there is almost certainly a fit." },
];

type Term = { Icon: LucideIcon; title: string; desc: string };

const terms: Term[] = [
  { Icon: Gift, title: "Free to Join", desc: "No sign-up fee, no commitment, no minimum referrals required." },
  { Icon: Handshake, title: "No Paperwork", desc: "An email introduction is all it takes to get started." },
  { Icon: BadgeCheck, title: "Fast Payment", desc: "Paid promptly once your referral's first payment clears." },
  { Icon: Workflow, title: "No Limits", desc: "Refer as many clients as you like. Earnings are uncapped." },
];

export default function ReferralPartnerPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Referral Partner Program",
          provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
          areaServed: "Worldwide",
          description:
            "Refer founders and growing businesses to Conciero and earn up to 50% of the first month. Free to join, no paperwork, uncapped earnings.",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
            {
              "@type": "ListItem",
              position: 2,
              name: "Referral Partner Program",
              item: `${siteConfig.url}/referral-partner`,
            },
          ],
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_280px]">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
                Partner With Conciero
              </p>
              <h1 className="font-serif text-4xl font-light leading-[1.15] text-charcoal-foreground sm:text-5xl lg:text-6xl">
                Refer once.{" "}
                <em className="italic text-accent">Earn every time</em> your client says yes.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-charcoal-foreground/70 md:text-lg">
                If your clients are founders, executives, or growing businesses — they
                already need what Conciero provides. One warm introduction is all it takes.
                We handle everything else and pay you well for it.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="accent" size="lg">
                  <Link href="/contact">Become a Partner</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-charcoal-foreground/30 bg-transparent text-charcoal-foreground hover:bg-charcoal-foreground/10 hover:text-charcoal-foreground"
                >
                  <Link href="/for-founders">What Clients Get</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl bg-accent p-8 text-center text-accent-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] opacity-70">
                You Earn
              </p>
              <div className="my-2 font-serif text-6xl font-bold leading-none">50%</div>
              <p className="text-sm opacity-80">up to 50% of first month</p>
              <p className="mt-3 text-xs italic opacity-60">terms discussed on call</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((s) => (
              <div key={s.label} className="px-3 py-8 text-center">
                <div className="font-serif text-2xl font-light text-accent md:text-3xl">
                  {s.num}
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 font-serif text-3xl font-semibold text-foreground md:text-4xl">
            How It Works
          </h2>
          <div className="mb-12 h-0.5 w-9 bg-accent" />
          <div className="mx-auto grid gap-4 md:grid-cols-3">
            {howSteps.map(({ num, title, desc }) => (
              <div key={num} className="rounded-xl border border-border/60 bg-card p-8 shadow-card">
                <div className="mb-4 font-serif text-5xl font-bold text-secondary-foreground/15">
                  {num}
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why your clients will thank you */}
      <section className="py-16 md:py-20 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Why Your Clients Will Thank You
          </h2>
          <div className="mb-12 h-0.5 w-9 bg-accent" />
          <div className="grid gap-4 md:grid-cols-2">
            {proof.map(({ big, unit, Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-5 rounded-xl border border-border/60 bg-card p-7 shadow-card"
              >
                <div className="flex-shrink-0">
                  <Icon className="mb-2 h-6 w-6 text-accent" />
                  <div className="font-serif text-2xl font-bold leading-none text-accent">
                    {big}
                    {unit && <span className="text-sm"> {unit}</span>}
                  </div>
                </div>
                <div>
                  <h3 className="mb-1.5 font-semibold text-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What referrals receive */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 font-serif text-3xl font-semibold text-foreground md:text-4xl">
            What Your Referrals Receive
          </h2>
          <div className="mb-12 h-0.5 w-9 bg-accent" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {servicesReceived.map(({ name, desc }) => (
              <div
                key={name}
                className="rounded-xl border-t-2 border-accent/60 bg-card p-6 shadow-card"
              >
                <h3 className="mb-2 font-semibold text-foreground">{name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who makes a great partner */}
      <section className="py-16 md:py-20 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Who Makes a Great Partner
          </h2>
          <div className="mb-12 h-0.5 w-9 bg-accent" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {partners.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border-l-[3px] border-accent/60 bg-card p-6 shadow-card"
              >
                <Icon className="mb-3 h-6 w-6 text-accent" />
                <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms strip */}
      <section className="border-t-2 border-accent bg-secondary py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {terms.map(({ Icon, title, desc }) => (
              <div key={title}>
                <Icon className="mx-auto mb-3 h-7 w-7 text-accent" />
                <h3 className="mb-1.5 font-semibold text-foreground">{title}</h3>
                <p className="mx-auto max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-charcoal py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="font-serif text-2xl font-light italic leading-relaxed text-charcoal-foreground md:text-3xl">
              <span className="mr-1 text-accent">&ldquo;</span>
              Not a freelancer. Not a VA. A complete operating system — and your clients get
              to try it free for a full week before spending a single dollar.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="mb-3 font-serif text-3xl font-semibold text-foreground md:text-4xl">
                Ready to make your first referral?
              </h2>
              <p className="max-w-xl text-muted-foreground">
                Book a quick 15-minute call to get set up as a partner and discuss your
                referral terms. We take care of everything from there — you just make the
                introduction.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="accent" size="lg">
                  <Link href="/contact">Book a Call</Link>
                </Button>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-1 self-center text-sm font-medium text-accent hover:underline"
                >
                  See how clients onboard <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <ul className="space-y-2.5 rounded-xl border border-border/60 bg-card p-6 shadow-card">
              {["Free to join", "No paperwork", "Uncapped earnings", "Fast payment"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <Check className="h-3 w-3 text-accent" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
