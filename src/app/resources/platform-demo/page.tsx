import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  CircleCheck,
  Layers,
  MessageSquare,
  Shield,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Platform Overview & Features | Conciero",
  description:
    "Discover the Conciero platform features, capabilities, and learn how to get started with your virtual assistant.",
  path: "/resources/platform-demo",
  keywords: [
    "Conciero platform",
    "virtual assistant features",
    "VA capabilities",
    "getting started",
  ],
});

const featureCards = [
  {
    icon: Layers,
    title: "Seamless Integration",
    desc: "Works with your existing tools",
  },
  {
    icon: MessageSquare,
    title: "Real-time Communication",
    desc: "Stay connected with your VA",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    desc: "Monitor tasks and deliverables",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Bank-grade data protection",
  },
];

const learnItems = [
  "Introduction to Conciero and our approach",
  "Meeting your dedicated assistant",
  "Task delegation and communication best practices",
  "Using the dashboard and tracking progress",
  "Integration with your existing tools and workflows",
  "Best practices for success",
  "Getting started and next steps",
];

export default function Page() {
  return (
    <article className="pt-28 md:pt-36 pb-12 md:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            className="flex w-fit items-center text-accent hover:text-accent/80 mb-6"
            href="/resources"
            aria-label="Back to Resources"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <span className="text-xs font-bold text-accent uppercase tracking-wide">
            Guide
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6 text-foreground">
            Platform Overview &amp; Features
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            A comprehensive guide to the Conciero platform, features, and how to
            get started.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {featureCards.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-secondary/50 rounded-xl p-5 text-center"
              >
                <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-lg font-bold text-foreground">{title}</div>
                <div className="text-sm text-muted-foreground">{desc}</div>
              </div>
            ))}
          </div>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              What You&apos;ll Learn
            </h2>
            <p className="text-muted-foreground mb-4">
              This comprehensive guide covers everything you need to know about
              working with Conciero virtual assistants and maximizing our
              platform capabilities.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Platform Capabilities
            </h2>
            <ul className="space-y-3 mb-6">
              {learnItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <CircleCheck className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Key Platform Features
            </h2>
            <p className="text-muted-foreground mb-4">
              The Conciero platform is designed for seamless collaboration
              between you and your virtual assistant. Key features include
              real-time task tracking, secure document sharing, integrated
              communication tools, and comprehensive reporting.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Getting Started
            </h2>
            <p className="text-muted-foreground mb-4">
              After reviewing this guide, you&apos;ll be ready to onboard your
              virtual assistant and start delegating tasks immediately. Our team
              provides personalized onboarding support to ensure a smooth
              transition.
            </p>
          </div>
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-muted-foreground mb-4">
              Ready to experience Conciero firsthand?
            </p>
            <Button asChild variant="accent">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
