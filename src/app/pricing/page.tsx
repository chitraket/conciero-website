import type { Metadata } from "next";
import Link from "next/link";
import {
  CircleCheck,
  Settings2,
  Play,
  Shield,
  CalendarCheck,
  Clock,
  TrendingUp,
  RefreshCw,
  UsersRound,
  Wifi,
  UserCheck,
  ChevronRight,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Virtual Assistant Pricing Plans",
  description:
    "Explore Conciero's flexible pricing plans for virtual assistant and business support services. Choose scalable solutions tailored for startups and global businesses.",
  path: "/pricing",
  keywords: [
    "virtual assistant pricing",
    "VA pricing plans",
    "dedicated assistant cost",
    "remote assistant monthly plans",
  ],
});

const standardFeatures = [
  "Dedicated senior virtual assistant",
  "Business + personal task support",
  "AI-fluent & automation-ready",
  "Managed by senior team",
  "Unlimited free replacement",
  "7-day free trial",
];

const fullTimeFeatures = [
  "Fully dedicated assistant",
  "Priority task handling",
  "Business + life coordination",
  "Senior oversight & quality control",
  "Unlimited free replacement",
  "7-day free trial",
];

const customItems = [
  "Fewer hours",
  "Ad-hoc or project-based support",
  "Specialized skills",
  "Short-term or seasonal help",
  "Industry-specific assistance",
];

type IncludedFeature = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

const includedFeatures: IncludedFeature[] = [
  {
    Icon: Play,
    title: "7-Day Free Trial",
    description: "Experience real work before you commit.",
  },
  {
    Icon: Shield,
    title: "$0 Onboarding Fee",
    description: "No setup costs. No hidden charges.",
  },
  {
    Icon: CalendarCheck,
    title: "No Lock-In Commitment",
    description: "Stay because it works, not because you're stuck.",
  },
  {
    Icon: Clock,
    title: "Monthly Subscription",
    description: "Simple, predictable pricing.",
  },
  {
    Icon: TrendingUp,
    title: "Flexible Scaling",
    description: "Increase or reduce hours as your needs change.",
  },
  {
    Icon: RefreshCw,
    title: "Unlimited Free Assistant Replacement",
    description: "We'll rematch until it's the right fit.",
  },
  {
    Icon: UsersRound,
    title: "Backup Assistant Coverage",
    description:
      "If your assistant is unavailable for more than 2 days, continuity is ensured.",
  },
  {
    Icon: Wifi,
    title: "24/7 Power Backup & High-Speed Internet",
    description: "Reliable delivery with infrastructure redundancy.",
  },
  {
    Icon: UserCheck,
    title: "Multi-Stakeholder Access",
    description: "Your assistant can support multiple team members or roles.",
  },
];

type Step = { num: string; title: string; description: string };

const steps: Step[] = [
  {
    num: "01",
    title: "Tell Us What You Need",
    description: "Share your priorities on a quick call.",
  },
  {
    num: "02",
    title: "Meet & Interview Your Assistant",
    description:
      "We match you with a senior, pre-vetted assistant - and you approve the fit.",
  },
  {
    num: "03",
    title: "Start Your 7-Day Free Trial",
    description: "Experience real impact from day one - no upfront commitment.",
  },
  {
    num: "04",
    title: "Ongoing, Flexible Support",
    description: "Adjust hours, tasks, or services as your needs evolve.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up leading-tight">
              Simple Monthly Pricing.
              <br className="hidden sm:block" /> Flexible by Design.
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Choose a part-time or full-time assistant, and customize as your
              needs evolve.
            </p>
            <p
              className="text-sm text-muted-foreground/80 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Senior-level assistants • 7-day free trial • No long-term lock-in
            </p>
          </div>
          <div className="text-center mb-8 lg:mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
              Standard Monthly Assistant Plans
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our most popular plans for founders, executives, and growing
              teams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-card border border-border/50 flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                  Part-Time Assistant
                </h3>
                <p className="text-accent font-semibold text-lg mb-3">
                  20 Hours / Week
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl lg:text-4xl font-bold text-foreground">
                    $899
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                <span className="font-medium text-foreground">Best for:</span>{" "}
                Founders, busy professionals, focused ongoing support
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                {standardFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-card-foreground text-sm lg:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 w-full bg-foreground text-background hover:bg-foreground/90"
              >
                Talk to an Expert
              </Link>
            </div>
            <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-card border-2 border-accent flex flex-col h-full relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                  Most Popular
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                  Full-Time Assistant
                </h3>
                <p className="text-accent font-semibold text-lg mb-3">
                  40 Hours / Week
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl lg:text-4xl font-bold text-foreground">
                    $1,499
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                <span className="font-medium text-foreground">Best for:</span>{" "}
                Founders, executives, leadership teams, high-volume support
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                {fullTimeFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-card-foreground text-sm lg:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Talk to an Expert
              </Link>
            </div>
            <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-card border border-border/50 flex flex-col h-full md:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Settings2 className="w-5 h-5 text-accent" />
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                    Need Something More Flexible?
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Not every role fits neatly into 20 or 40 hours.
                </p>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                <span className="font-medium text-foreground">
                  Custom plans for:
                </span>
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                {customItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                    <span className="text-card-foreground text-sm lg:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm mb-6">
                We&apos;ll design a custom plan around your needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 w-full bg-foreground text-background hover:bg-foreground/90"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              What&apos;s Included in Every Conciero Plan
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {includedFeatures.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-4 lg:p-6 rounded-xl bg-card border border-border/30"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-muted-foreground text-sm">{description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-foreground/70 text-sm mt-10 max-w-2xl mx-auto">
            Designed to remove risk, ensure reliability, and scale with you.
          </p>
        </div>
      </section>

      <section
        id="how-it-works"
        className="py-12 md:py-16 scroll-mt-24 overflow-hidden relative"
        style={{ backgroundColor: "transparent" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: "rgb(26, 26, 26)" }}
            >
              Get Started Within 24 Hours
            </h2>
            <p className="text-sm" style={{ color: "rgba(26, 26, 26, 0.7)" }}>
              Simple. Personal. No long-term commitment.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            {/* Desktop horizontal timeline */}
            <div className="hidden lg:block">
              <div className="flex items-start justify-between relative">
                <div className="absolute top-[44px] left-[80px] right-[80px] h-[2px] z-0">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
                  />
                  <div
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{ backgroundColor: "rgb(26, 26, 26)", width: "100%" }}
                  />
                </div>
                {[25, 50, 75].map((pos) => (
                  <div
                    key={pos}
                    className="absolute top-[44px] z-10 -translate-y-1/2"
                    style={{ left: `calc(${pos}% - 10px)` }}
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: "rgb(26, 26, 26)" }}
                    >
                      <ChevronRight className="w-3 h-3 text-white" />
                    </div>
                  </div>
                ))}
                {steps.map((step) => (
                  <div
                    key={step.num}
                    className="flex-1 flex flex-col items-center relative z-10"
                  >
                    <div className="relative mb-6">
                      <div className="w-[88px] h-[88px] rounded-full shadow-lg flex items-center justify-center" style={{ backgroundColor: "rgb(255, 255, 255)", border: "2px solid rgb(26, 26, 26)" }}>
                        <span
                          className="text-2xl font-bold"
                          style={{ color: "rgb(196, 163, 90)" }}
                        >
                          {step.num}
                        </span>
                      </div>
                    </div>
                    <div className="text-center max-w-[200px]">
                      <h3
                        className="text-base font-bold mb-2 leading-tight"
                        style={{ color: "rgb(26, 26, 26)" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(26, 26, 26, 0.7)" }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Tablet 2-col grid */}
            <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
              {steps.map((step) => (
                <div key={step.num} className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-full shadow-md flex items-center justify-center"
                    style={{
                      backgroundColor: "rgb(255, 255, 255)",
                      border: "2px solid rgb(26, 26, 26)",
                    }}
                  >
                    <span
                      className="text-xl font-bold"
                      style={{ color: "rgb(196, 163, 90)" }}
                    >
                      {step.num}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-base font-bold mb-1"
                      style={{ color: "rgb(26, 26, 26)" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(26, 26, 26, 0.7)" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Mobile vertical timeline */}
            <div className="md:hidden space-y-6">
              {steps.map((step, idx) => (
                <div key={step.num} className="flex items-start gap-4">
                  <div className="relative flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded-full shadow-md flex items-center justify-center"
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        border: "2px solid rgb(26, 26, 26)",
                      }}
                    >
                      <span
                        className="text-lg font-bold"
                        style={{ color: "rgb(196, 163, 90)" }}
                      >
                        {step.num}
                      </span>
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="relative w-0.5 h-6 mt-2">
                        <div
                          className="absolute inset-0"
                          style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
                        />
                        <div
                          className="absolute inset-x-0 top-0"
                          style={{
                            backgroundColor: "rgb(26, 26, 26)",
                            height: "100%",
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3
                      className="text-base font-bold mb-1"
                      style={{ color: "rgb(26, 26, 26)" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(26, 26, 26, 0.7)" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md font-semibold group px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "rgb(26, 26, 26)", color: "rgb(255, 255, 255)" }}
            >
              Book a quick consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
