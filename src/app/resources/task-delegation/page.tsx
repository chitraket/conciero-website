import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CircleAlert, CircleCheck, Lightbulb } from "lucide-react";

import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Best Practices for Task Delegation | Conciero Guide",
  description:
    "Expert tips on how to effectively delegate tasks to your virtual assistant team. Learn proven strategies for maximum productivity.",
  path: "/resources/task-delegation",
  keywords: [
    "task delegation",
    "virtual assistant tips",
    "delegation best practices",
    "VA productivity",
  ],
});

const delegateItems = [
  "Email management and inbox organization",
  "Calendar scheduling and meeting coordination",
  "Research and data compilation",
  "Travel arrangements and expense reports",
  "Social media management and content scheduling",
  "Customer follow-ups and basic support",
  "Document formatting and presentation creation",
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
            Best Practices for Task Delegation
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Expert tips on how to effectively delegate tasks to your virtual
            assistant team.
          </p>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              The Art of Delegation
            </h2>
            <p className="text-muted-foreground mb-4">
              Effective delegation is one of the most valuable skills for any
              leader. When done right, it multiplies your productivity, develops
              your team, and frees you to focus on high-impact work. Here&apos;s
              how to master it.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              What to Delegate
            </h2>
            <p className="text-muted-foreground mb-4">
              Start with tasks that are time-consuming but don&apos;t require
              your unique expertise. Great candidates for delegation include:
            </p>
            <ul className="space-y-3 mb-6">
              {delegateItems.map((item) => (
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
              How to Delegate Effectively
            </h2>
            <div className="bg-secondary/50 rounded-xl p-5 mb-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    Pro Tip: The 5 W&apos;s Framework
                  </h3>
                  <p className="text-muted-foreground">
                    Always cover: What needs to be done, Why it matters, When
                    it&apos;s due, Who to contact if needed, and Where to find
                    resources.
                  </p>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              1. Be Clear and Specific
            </h3>
            <p className="text-muted-foreground mb-4">
              Vague instructions lead to rework. Instead of &quot;organize my
              files,&quot; say &quot;Create folders by client name, move all 2024
              contracts into their respective folders, and send me a summary when
              complete.&quot;
            </p>
            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              2. Provide Context
            </h3>
            <p className="text-muted-foreground mb-4">
              Share the &quot;why&quot; behind tasks. When your VA understands
              the bigger picture, they can make better decisions and anticipate
              related needs.
            </p>
            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              3. Set Clear Deadlines
            </h3>
            <p className="text-muted-foreground mb-4">
              Specify exact deadlines rather than &quot;ASAP&quot; or &quot;when
              you can.&quot; Include time zones if you&apos;re working across
              regions.
            </p>
            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              4. Define Quality Standards
            </h3>
            <p className="text-muted-foreground mb-4">
              Share examples of excellent work. Templates, past deliverables, and
              style guides help your VA match your expectations.
            </p>
            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              5. Give Feedback Promptly
            </h3>
            <p className="text-muted-foreground mb-4">
              Quick, constructive feedback accelerates improvement. Acknowledge
              good work and provide specific guidance when adjustments are
              needed.
            </p>
            <div className="bg-destructive/10 rounded-xl p-5 mt-6 mb-6">
              <div className="flex items-start gap-3">
                <CircleAlert className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    Common Mistake to Avoid
                  </h3>
                  <p className="text-muted-foreground">
                    Don&apos;t micromanage. Trust your VA to execute, and focus
                    on outcomes rather than monitoring every step.
                  </p>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Tools for Better Delegation
            </h2>
            <p className="text-muted-foreground mb-4">
              Leverage project management tools (Asana, Trello, Monday),
              communication platforms (Slack, Teams), and documentation systems
              (Notion, Google Docs) to streamline delegation and tracking.
            </p>
          </div>
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-muted-foreground mb-4">Ready to start delegating?</p>
            <Button asChild variant="accent">
              <Link href="/services">Explore Our VA Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
