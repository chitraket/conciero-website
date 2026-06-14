import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CircleCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Complete Guide to Hiring a Virtual Assistant | Conciero",
  description:
    "Everything you need to know about finding, onboarding, and working with virtual assistants effectively. Learn best practices for VA hiring.",
  path: "/resources/hiring-guide",
  keywords: [
    "hire virtual assistant",
    "VA hiring guide",
    "onboarding virtual assistant",
    "remote assistant",
  ],
});

const benefits = [
  "Cost savings of 40-70% compared to full-time employees",
  "Access to global talent with specialized skills",
  "Flexible scaling based on your needs",
  "24/7 coverage across time zones",
  "No overhead costs for office space or equipment",
];

export default function Page() {
  return (
    <article className="pt-28 md:pt-36 pb-12 md:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            className="inline-flex items-center text-accent hover:text-accent/80 mb-6"
            href="/resources"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
          <span className="text-xs font-bold text-accent uppercase tracking-wide">
            Guide
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6 text-foreground">
            Complete Guide to Hiring a Virtual Assistant
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Everything you need to know about finding, onboarding, and working
            with virtual assistants effectively.
          </p>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Why Hire a Virtual Assistant?
            </h2>
            <p className="text-muted-foreground mb-4">
              Virtual assistants have become essential for modern businesses.
              They help founders, executives, and teams reclaim valuable time by
              handling administrative tasks, scheduling, research, and much more.
              By delegating these responsibilities, you can focus on high-impact
              activities that drive growth.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Key Benefits of Virtual Assistants
            </h2>
            <ul className="space-y-3 mb-6">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <CircleCheck className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Step 1: Define Your Needs
            </h2>
            <p className="text-muted-foreground mb-4">
              Before hiring, list all tasks you want to delegate. Common
              categories include email management, calendar scheduling, travel
              booking, research, data entry, and customer support. Be specific
              about required skills and expected hours.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Step 2: Choose the Right Service Model
            </h2>
            <p className="text-muted-foreground mb-4">
              You can hire freelance VAs directly, use VA agencies, or partner
              with managed VA services like Conciero. Managed services offer
              pre-vetted professionals, backup support, and quality assurance,
              making them ideal for busy professionals.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Step 3: Onboarding Best Practices
            </h2>
            <p className="text-muted-foreground mb-4">
              Successful onboarding sets the foundation for a productive
              relationship. Provide clear documentation of processes, share
              access to necessary tools, establish communication preferences, and
              set expectations for response times and deliverables.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Step 4: Effective Communication
            </h2>
            <p className="text-muted-foreground mb-4">
              Regular check-ins, clear task descriptions, and constructive
              feedback are essential. Use project management tools to track
              progress and maintain visibility. Video calls help build rapport
              and clarify complex tasks.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Step 5: Measure Success
            </h2>
            <p className="text-muted-foreground mb-4">
              Track key metrics like tasks completed, time saved, error rates,
              and responsiveness. Regular performance reviews help identify areas
              for improvement and recognize excellent work.
            </p>
          </div>
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-muted-foreground mb-4">
              Ready to hire your virtual assistant?
            </p>
            <Button asChild variant="accent">
              <Link href="/contact">Get Started with Conciero</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
