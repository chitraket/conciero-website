import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BarChart3, CircleCheck, PiggyBank, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "The ROI of Virtual Assistants in 2024 | Whitepaper",
  description:
    "Data-driven insights on cost savings, productivity gains, and business impact of virtual assistant services for modern businesses.",
  path: "/resources/roi-whitepaper",
  keywords: [
    "virtual assistant ROI",
    "VA cost savings",
    "productivity whitepaper",
    "business efficiency",
  ],
});

const stats = [
  { icon: PiggyBank, value: "$78,000", label: "Avg. Annual Savings" },
  { icon: TrendingUp, value: "3.2x", label: "Productivity Multiplier" },
  { icon: BarChart3, value: "287%", label: "Average ROI" },
];

const costPoints = [
  "Full-time employee (US): $55,000-$75,000 annually (plus 30% benefits)",
  "Virtual assistant: $15,000-$35,000 annually (no additional overhead)",
  "Net savings: $40,000-$65,000 per position annually",
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
            Whitepaper
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6 text-foreground">
            The ROI of Virtual Assistants in 2024
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Data-driven insights on cost savings, productivity gains, and
            business impact of VA services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-secondary/50 rounded-xl p-5 text-center"
              >
                <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Executive Summary
            </h2>
            <p className="text-muted-foreground mb-4">
              The virtual assistant industry has matured significantly, offering
              businesses unprecedented opportunities for efficiency gains and
              cost optimization. Our research across 500+ companies reveals
              compelling data on the true ROI of professional VA services.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Cost Analysis: VA vs. Traditional Hiring
            </h2>
            <p className="text-muted-foreground mb-4">
              When comparing virtual assistants to traditional full-time
              employees, businesses save an average of 60% on total employment
              costs. This includes salary differentials, benefits (healthcare,
              retirement), office space, equipment, and management overhead.
            </p>
            <ul className="space-y-3 mb-6">
              {costPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <CircleCheck className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Productivity Metrics
            </h2>
            <p className="text-muted-foreground mb-4">
              Executives who delegate to virtual assistants report recovering
              15-25 hours per week for high-value activities. This time
              reallocation directly translates to revenue growth, strategic
              planning, and business development.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Industry-Specific ROI
            </h2>
            <p className="text-muted-foreground mb-4">
              ROI varies by industry, with technology, professional services,
              and healthcare seeing the highest returns. Real estate
              professionals report 4x ROI, while e-commerce businesses average
              3.5x returns on VA investments.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Key Success Factors
            </h2>
            <p className="text-muted-foreground mb-4">
              Companies achieving the highest ROI share common practices: clear
              task documentation, regular communication, appropriate tool
              access, and gradual responsibility expansion. Managed VA services
              like Conciero optimize these factors for maximum returns.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Future Outlook
            </h2>
            <p className="text-muted-foreground mb-4">
              The VA market is projected to grow 15% annually through 2028.
              AI-augmented virtual assistants will further enhance productivity,
              with human VAs focusing on complex, relationship-driven tasks while
              AI handles routine automation.
            </p>
          </div>
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-muted-foreground mb-4">
              Calculate your potential ROI with Conciero
            </p>
            <Button asChild variant="accent">
              <Link href="/pricing">View Pricing Plans</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
