import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Conciero - Premium Virtual Assistants | Global VA Services",
  description:
    "Conciero provides senior-level virtual assistants and concierge services to seamlessly manage work, personal life & daily operations for clients",
  path: "/plans",
  keywords: [
    "virtual assistant",
    "VA services",
    "remote assistant",
    "executive assistant",
    "business assistant",
    "personal concierge",
    "AI-fluent assistant",
    "administrative support",
    "outsourcing",
  ],
});

type Plan = {
  name: string;
  audience: string;
  price: string;
  priceUnit: string;
  blurb: string;
  features: string[];
  cta: string;
  popular?: boolean;
  delay: string;
};

const plans: Plan[] = [
  {
    name: "Starter",
    audience: "For individuals",
    price: "$499",
    priceUnit: "per month",
    blurb: "Perfect for personal tasks and light business support",
    features: [
      "20 hours per month",
      "Pooled team support",
      "Email & chat support",
      "24-hour turnaround",
      "Basic task management",
      "Monthly reports",
    ],
    cta: "Start Free Trial",
    delay: "0s",
  },
  {
    name: "Team",
    audience: "For small businesses",
    price: "$1,499",
    priceUnit: "per month",
    blurb: "Ideal for growing teams and SMBs",
    features: [
      "80 hours per month",
      "Dedicated assistant",
      "Priority support",
      "4-hour turnaround",
      "Advanced task management",
      "Weekly reports",
      "Team collaboration tools",
      "Custom workflows",
    ],
    cta: "Request Demo",
    popular: true,
    delay: "0.1s",
  },
  {
    name: "Business",
    audience: "For established companies",
    price: "$3,999",
    priceUnit: "per month",
    blurb: "Comprehensive support for demanding workloads",
    features: [
      "160+ hours per month",
      "Dedicated team of specialists",
      "24/7 support",
      "2-hour turnaround SLA",
      "Full integration suite",
      "Daily reports & analytics",
      "Account manager",
      "Custom API access",
    ],
    cta: "Contact Sales",
    delay: "0.2s",
  },
  {
    name: "Enterprise",
    audience: "Custom solution",
    price: "Custom",
    priceUnit: "pricing",
    blurb: "Tailored solutions for large organizations",
    features: [
      "Unlimited hours",
      "White-label options",
      "Multi-team deployment",
      "Instant escalation",
      "Full API & integrations",
      "Real-time dashboards",
      "Dedicated success manager",
      "Custom SLA agreements",
      "Security compliance support",
    ],
    cta: "Talk to Sales",
    delay: "0.3s",
  },
];

type Addon = { name: string; price: string; unit: string; description: string };

const addons: Addon[] = [
  {
    name: "Extra Hours",
    price: "$25",
    unit: "/hour",
    description: "Additional hours beyond your plan",
  },
  {
    name: "Priority Support",
    price: "$199",
    unit: "/month",
    description: "1-hour turnaround guarantee",
  },
  {
    name: "Specialist Access",
    price: "$499",
    unit: "/month",
    description: "Industry-specific expert support",
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  const checkClass = plan.popular
    ? "lucide lucide-check w-5 h-5 mt-0.5 flex-shrink-0 text-accent-foreground"
    : "lucide lucide-check w-5 h-5 mt-0.5 flex-shrink-0 text-accent";

  return (
    <div
      className={
        plan.popular
          ? "rounded-2xl p-8 bg-accent text-accent-foreground shadow-xl scale-105 transition-all hover:shadow-lg animate-fade-in"
          : "rounded-2xl p-8 bg-card shadow-card transition-all hover:shadow-lg animate-fade-in"
      }
      style={{ animationDelay: plan.delay }}
    >
      {plan.popular && (
        <div className="bg-accent-foreground text-accent text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
      <p
        className={
          plan.popular
            ? "text-sm mb-6 text-accent-foreground/80"
            : "text-sm mb-6 text-muted-foreground"
        }
      >
        {plan.audience}
      </p>
      <div className="mb-6">
        <span className="text-4xl font-bold">{plan.price}</span>
        <span
          className={
            plan.popular
              ? "text-sm ml-2 text-accent-foreground/80"
              : "text-sm ml-2 text-muted-foreground"
          }
        >
          {plan.priceUnit}
        </span>
      </div>
      <p
        className={
          plan.popular ? "mb-8 text-accent-foreground/90" : "mb-8 text-muted-foreground"
        }
      >
        {plan.blurb}
      </p>
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className={checkClass} />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Link href="/contact">
        <button
          className={
            plan.popular
              ? "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full bg-accent-foreground text-accent hover:bg-accent-foreground/90"
              : "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full bg-accent text-accent-foreground hover:bg-accent/90"
          }
        >
          {plan.cta}
        </button>
      </Link>
    </div>
  );
}

export default function PlansPage() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Choose Your Perfect Plan
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Flexible plans designed for individuals, teams, and enterprises
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Optional Add-ons
            </h2>
            <p className="text-lg text-muted-foreground">
              Enhance your plan with specialized services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {addons.map((addon) => (
              <div key={addon.name} className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="text-xl font-bold mb-3">{addon.name}</h3>
                <p className="text-3xl font-bold mb-2">
                  {addon.price}
                  <span className="text-sm text-muted-foreground">
                    {addon.unit}
                  </span>
                </p>
                <p className="text-muted-foreground">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
