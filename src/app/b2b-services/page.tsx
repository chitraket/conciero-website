import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Users,
  Plane,
  Search,
  FileText,
  Calendar,
  CircleCheck,
  TrendingUp,
  Clock,
  Shield,
  type LucideIcon,
} from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "Conciero - Premium Virtual Assistants | Global VA Services",
  description:
    "Conciero provides senior-level virtual assistants and concierge services to seamlessly manage work, personal life & daily operations for clients",
  path: "/b2b-services",
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

type SolutionCard = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

const solutions: SolutionCard[] = [
  {
    Icon: Building2,
    title: "Corporate Concierge",
    description:
      "Executive support, meeting coordination, and high-level administrative assistance for C-suite and management teams.",
  },
  {
    Icon: Users,
    title: "Employee Assistance",
    description:
      "Boost employee satisfaction with lifestyle services, wellness support, and work-life balance assistance.",
  },
  {
    Icon: Plane,
    title: "Travel Management",
    description:
      "Complete business travel coordination, from flights and hotels to itinerary planning and on-ground support.",
  },
  {
    Icon: Search,
    title: "Research & Analysis",
    description:
      "Market research, competitive analysis, data gathering, and comprehensive report compilation.",
  },
  {
    Icon: FileText,
    title: "Administrative Tasks",
    description:
      "Document management, data entry, scheduling, email management, and general administrative support.",
  },
  {
    Icon: Calendar,
    title: "Event Coordination",
    description:
      "Corporate events, team building activities, conferences, and special occasion planning and execution.",
  },
];

const benefits = [
  "Increase operational efficiency by up to 40%",
  "Reduce administrative overhead and costs",
  "Improve employee satisfaction and retention",
  "Access global talent pool 24/7",
  "Scale support based on business needs",
  "Enterprise-grade security and compliance",
];

type StatCard = {
  Icon: LucideIcon;
  value: string;
  label: string;
};

const stats: StatCard[] = [
  { Icon: TrendingUp, value: "40%", label: "Increase in productivity" },
  { Icon: Clock, value: "24/7", label: "Global coverage" },
  { Icon: Users, value: "500+", label: "Enterprise clients" },
  { Icon: Shield, value: "100%", label: "Data security" },
];

type FeatureCard = {
  title: string;
  description: string;
};

const features: FeatureCard[] = [
  {
    title: "API Integration",
    description:
      "Seamlessly integrate Conciero with your existing tools and workflows through our robust API. Connect to your CRM, project management tools, and communication platforms.",
  },
  {
    title: "Service Level Agreements (SLA)",
    description:
      "Guaranteed response times, uptime commitments, and dedicated account management for enterprise clients. Custom SLAs available based on your requirements.",
  },
  {
    title: "Compliance & Security",
    description:
      "SOC 2 Type II certified, GDPR compliant, and ISO 27001 certified. Your data security and privacy are our top priorities with end-to-end encryption and regular audits.",
  },
  {
    title: "Flexible Billing",
    description:
      "Multiple billing options including monthly subscriptions, annual contracts, or pay-per-task models. Custom enterprise pricing available for large organizations.",
  },
];

export default function B2BServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/assets/b2b-services-8Qh0iJ5V.jpg"
            alt="B2B Services"
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in-up">
              Enterprise Concierge & Virtual Assistant Services
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              Empower your business with AI-enhanced virtual assistance that
              scales with your needs
            </p>
            <Button
              asChild
              variant="accent"
              size="lg"
              className="shadow-lg"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Comprehensive B2B Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From executive support to complete administrative outsourcing, we
              handle it all
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="bg-secondary w-16 h-16 rounded-xl flex items-center justify-center mb-6">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                Why Businesses Choose Conciero
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Transform your operations with a dedicated virtual team that
                combines AI efficiency with human expertise.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start space-x-3">
                    <CircleCheck className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map(({ Icon, value, label }) => (
                <div key={label} className="bg-card rounded-xl p-6 shadow-card">
                  <Icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{value}</h3>
                  <p className="text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
              Enterprise-Grade Features
            </h2>
            <div className="space-y-8">
              {features.map(({ title, description }) => (
                <div
                  key={title}
                  className="bg-card rounded-xl p-8 shadow-card"
                >
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Ready to Transform Your Business Operations?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Schedule a free consultation to discover how Conciero can scale
              with your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="accent" size="lg" className="shadow-lg">
                <Link href="/contact">Request Enterprise Demo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border bg-background hover:text-accent-foreground border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
