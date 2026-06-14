import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, DollarSign, TrendingUp, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How TechCorp Scaled Operations with Conciero | Case Study",
  description:
    "Learn how a Fortune 500 company saved 40% on operational costs while improving productivity with Conciero virtual assistants.",
  path: "/resources/techcorp-case-study",
  keywords: [
    "virtual assistant case study",
    "enterprise VA",
    "cost savings",
    "productivity improvement",
  ],
});

const stats = [
  { icon: DollarSign, value: "40%", label: "Cost Reduction" },
  { icon: TrendingUp, value: "65%", label: "Productivity Increase" },
  { icon: Clock, value: "120+", label: "Hours Saved Monthly" },
  { icon: Users, value: "15", label: "VAs Deployed" },
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
            Case Study
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6 text-foreground">
            How TechCorp Scaled Operations with Conciero
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            A Fortune 500 technology company achieved remarkable operational
            efficiency and cost savings through strategic VA deployment.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-secondary/50 rounded-xl p-4 text-center"
              >
                <div className="text-accent mb-2 flex justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-foreground">{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              The Challenge
            </h2>
            <p className="text-muted-foreground mb-4">
              TechCorp, a global technology company with 5,000+ employees, faced
              mounting operational costs and inefficiencies. Executive teams
              spent significant time on administrative tasks, leaving less
              capacity for strategic initiatives. Traditional hiring approaches
              were slow and expensive.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              The Solution
            </h2>
            <p className="text-muted-foreground mb-4">
              TechCorp partnered with Conciero to deploy a team of 15 dedicated
              virtual assistants across multiple departments. The implementation
              included executive support, research assistance, calendar
              management, and administrative coordination.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Implementation Process
            </h2>
            <p className="text-muted-foreground mb-4">
              The rollout occurred in three phases over 90 days. Phase one
              focused on executive assistants for C-suite leaders. Phase two
              expanded to department heads. Phase three integrated VAs into
              project teams for specialized support.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Key Results
            </h2>
            <p className="text-muted-foreground mb-4">
              Within six months, TechCorp achieved a 40% reduction in operational
              costs compared to traditional staffing. Executive productivity
              increased by 65% as leaders reclaimed time for strategic work. The
              company saved over 120 hours monthly on routine tasks.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Client Testimonial
            </h2>
            <blockquote className="border-l-4 border-accent pl-6 italic text-muted-foreground my-6">
              &quot;Conciero transformed how our leadership team operates. The
              quality and reliability of their virtual assistants exceeded our
              expectations. We now have more time for what matters most: driving
              innovation and growth.&quot;
              <footer className="text-sm mt-2 not-italic">
                - VP of Operations, TechCorp
              </footer>
            </blockquote>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Long-Term Impact
            </h2>
            <p className="text-muted-foreground mb-4">
              TechCorp has since expanded their partnership with Conciero, adding
              specialized VAs for marketing, HR, and finance departments. The
              model has become a core part of their operational strategy.
            </p>
          </div>
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-muted-foreground mb-4">
              Want similar results for your organization?
            </p>
            <Button asChild variant="accent">
              <Link href="/enterprise">Explore Enterprise Solutions</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
