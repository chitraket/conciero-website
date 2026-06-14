import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  Code,
  TrendingUp,
  Award,
  Handshake,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Virtual Assistant Solutions for Staffing & Recruiting Agencies",
  description:
    "Partner with Conciero to offer premium VA services to your clients — white-labeled, scalable, and fully integrated for staffing and recruiting agencies.",
  path: "/for-agencies",
  keywords: [
    "virtual assistant for agencies",
    "white-label VA",
    "staffing agency support",
    "recruiting agency virtual assistant",
    "VA partner program",
  ],
});

type Benefit = {
  Icon: LucideIcon;
  title: string;
  description: string;
  delay: string;
};

const benefits: Benefit[] = [
  {
    Icon: Users,
    title: "White-Label Solutions",
    description:
      "Rebrand our services as your own. Custom domains, branded portals, and seamless client experiences.",
    delay: "0s",
  },
  {
    Icon: Code,
    title: "API & Integrations",
    description:
      "Full API access for bulk onboarding, task management, and integration with your existing systems.",
    delay: "0.1s",
  },
  {
    Icon: TrendingUp,
    title: "Scalable VA Pool",
    description:
      "Access trained VAs on-demand. Scale up or down based on your client needs without hiring headaches.",
    delay: "0.2s",
  },
  {
    Icon: Award,
    title: "Recruiter Support",
    description:
      "Specialized VAs trained to support recruiting agencies with candidate sourcing, screening, and coordination.",
    delay: "0.3s",
  },
  {
    Icon: Handshake,
    title: "Partner Revenue Share",
    description:
      "Competitive margin structures and revenue sharing models that grow with your business.",
    delay: "0.4s",
  },
  {
    Icon: Workflow,
    title: "Team Dashboards",
    description:
      "Centralized dashboards to manage multiple client accounts, track utilization, and monitor performance.",
    delay: "0.5s",
  },
];

type ProcessStep = { num: string; title: string; description: string };

const processSteps: ProcessStep[] = [
  {
    num: "1",
    title: "Partner Onboarding",
    description:
      "Quick setup process, technical integration support, and training on our platform",
  },
  {
    num: "2",
    title: "Client Deployment",
    description:
      "Onboard your clients seamlessly through our white-label portal or API",
  },
  {
    num: "3",
    title: "Grow Together",
    description:
      "Scale operations, access analytics, and grow your revenue with our partnership team",
  },
];

type ServiceColumn = { title: string; items: string[] };

const serviceColumns: ServiceColumn[] = [
  {
    title: "Recruiting Support",
    items: [
      "Candidate sourcing and initial screening",
      "Interview scheduling and coordination",
      "ATS data entry and management",
      "Reference checks and follow-ups",
    ],
  },
  {
    title: "Client Services",
    items: [
      "Administrative support for placed candidates",
      "Onboarding and compliance documentation",
      "Client communication and relationship management",
      "Reporting and analytics",
    ],
  },
];

export default function ForAgenciesPage() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Virtual Assistant Solutions for Staffing & Recruiting Agencies
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Partner with Conciero to offer premium VA services to your clients
              — white-labeled, scalable, and fully integrated
            </p>
            <Button asChild variant="accent" size="lg" className="shadow-lg">
              <Link href="/contact">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Agencies Choose Conciero
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to offer world-class virtual assistant
              services under your brand
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map(({ Icon, title, description, delay }) => (
              <div
                key={title}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: delay }}
              >
                <div className="mb-4">
                  <Icon className="w-10 h-10 text-accent" />
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
              Partnership Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map(({ num, title, description }) => (
                <div key={num} className="text-center">
                  <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center text-accent-foreground font-bold text-2xl mx-auto mb-4">
                    {num}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Perfect for Staffing & Recruiting Agencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceColumns.map(({ title, items }) => (
                <div key={title} className="bg-card rounded-xl p-8 shadow-card">
                  <h3 className="text-2xl font-bold mb-4">{title}</h3>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-accent font-bold">✓</span>
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

      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Partner with Conciero?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Join leading staffing agencies who trust Conciero to power their VA
              offerings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="accent" size="lg">
                <Link href="/contact">Schedule Partnership Call</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/pricing">View Partner Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
