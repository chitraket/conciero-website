import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Zap,
  Users,
  ChartNoAxesColumnIncreasing,
  Workflow,
  Lock,
  Globe,
  Clock,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Enterprise Virtual Assistant Solutions",
  description:
    "Scalable, secure, and tailored virtual assistance for Fortune 500 companies and growing enterprises. Enterprise-grade security, custom SLAs, dedicated teams, and full API integration.",
  path: "/enterprise",
  keywords: [
    "enterprise virtual assistant",
    "VA services",
    "dedicated VA teams",
    "white-label virtual assistant",
    "enterprise support",
  ],
});

type Feature = {
  Icon: LucideIcon;
  title: string;
  description: string;
  delay: string;
};

const features: Feature[] = [
  {
    Icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "GDPR compliance, SOC 2 certified, encrypted communications, and background-checked VAs",
    delay: "0s",
  },
  {
    Icon: Zap,
    title: "Custom SLA Agreements",
    description:
      "Tailored response times, escalation protocols, and guaranteed uptime for mission-critical tasks",
    delay: "0.1s",
  },
  {
    Icon: Users,
    title: "Dedicated Teams",
    description:
      "Specialized VA teams assigned to your account with deep knowledge of your business",
    delay: "0.2s",
  },
  {
    Icon: ChartNoAxesColumnIncreasing,
    title: "Advanced Analytics",
    description:
      "Real-time dashboards, productivity metrics, and detailed reporting for complete visibility",
    delay: "0.3s",
  },
  {
    Icon: Workflow,
    title: "Full API Integration",
    description:
      "Seamless integration with your existing tools: Slack, Microsoft Teams, Salesforce, and more",
    delay: "0.4s",
  },
  {
    Icon: Lock,
    title: "White-Label Options",
    description:
      "Brand our services as your own with custom domains, branding, and client portals",
    delay: "0.5s",
  },
  {
    Icon: Globe,
    title: "Global Support",
    description:
      "24/7 coverage across all time zones with multi-lingual support capabilities",
    delay: "0.6s",
  },
  {
    Icon: Clock,
    title: "Priority Escalation",
    description:
      "Direct access to senior specialists and account managers for urgent requests",
    delay: "0.7s",
  },
];

type UseCase = { title: string; description: string; items: string[] };

const useCases: UseCase[] = [
  {
    title: "Executive Support",
    description:
      "Dedicated VAs for C-suite executives handling calendar management, travel coordination, expense reporting, and confidential tasks.",
    items: [
      "Calendar optimization & meeting prep",
      "Complex travel itineraries",
      "Confidential document handling",
    ],
  },
  {
    title: "Operations & Admin",
    description:
      "Streamline HR, finance, and operations tasks with trained specialists who understand enterprise workflows.",
    items: [
      "HR onboarding & documentation",
      "Vendor management",
      "Data entry & CRM management",
    ],
  },
  {
    title: "Research & Analysis",
    description:
      "Market research, competitive intelligence, and data analysis to support strategic decision-making.",
    items: [
      "Market & competitor research",
      "Data compilation & reporting",
      "Industry trend analysis",
    ],
  },
  {
    title: "Customer Success",
    description:
      "Scale your customer support and success operations with trained VAs handling tier-1 support and account management.",
    items: [
      "Tier-1 customer support",
      "Account onboarding",
      "Follow-up & retention campaigns",
    ],
  },
];

export default function EnterprisePage() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Enterprise Virtual Assistant Solutions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Scalable, secure, and tailored virtual assistance for Fortune 500
              companies and growing enterprises
            </p>
            <Button asChild variant="accent" size="lg" className="shadow-lg">
              <Link href="/contact">Schedule Enterprise Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for Enterprise Scale
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed to meet the complex needs of
              large organizations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map(({ Icon, title, description, delay }) => (
              <div
                key={title}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: delay }}
              >
                <div className="bg-secondary w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Enterprise Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map(({ title, description, items }) => (
                <div key={title} className="bg-card rounded-xl p-8 shadow-card">
                  <h3 className="text-2xl font-bold mb-4">{title}</h3>
                  <p className="text-muted-foreground mb-4">{description}</p>
                  <ul className="space-y-2 text-sm">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-hero rounded-2xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Scale Your Enterprise Operations?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Schedule a consultation with our enterprise team to discuss custom
              solutions for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="accent" size="lg">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/pricing">View Enterprise Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
