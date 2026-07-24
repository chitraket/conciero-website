import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  MessageSquare,
  Globe,
  Zap,
  CircleCheck,
} from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "Building a Scalable Remote Team in 2024 | Conciero Blog",
  description:
    "Practical strategies for building and managing distributed teams with virtual assistants. Learn proven approaches for remote team success.",
  path: "/blog/scalable-remote-team",
  keywords: [
    "remote team",
    "distributed workforce",
    "virtual team management",
    "remote work strategies",
  ],
});

const hiringTraits = [
  "Self-motivation and accountability",
  "Strong written communication skills",
  "Comfort with asynchronous work",
  "Proactive problem-solving mindset",
  "Experience with remote collaboration tools",
];

const onboardingPractices = [
  "Comprehensive documentation and training materials",
  "Assigned onboarding buddy for the first 30 days",
  "Scheduled check-ins with manager and team",
  "Clear 30/60/90 day milestones",
  "Access to all necessary tools before day one",
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 mb-6">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-muted-foreground">
          <CircleCheck className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Building a Scalable Remote Team in 2024",
          description:
            "Practical strategies for building and managing distributed teams with virtual assistants. Learn proven approaches for remote team success.",
          image: "https://conciero.co/assets/blog/scalable-remote-team-hero.png",
          author: { "@type": "Organization", name: "Conciero" },
          publisher: {
            "@type": "Organization",
            name: "Conciero",
            logo: {
              "@type": "ImageObject",
              url: "https://conciero.co/assets/logo-X1-8k2Vp.png",
            },
          },
          mainEntityOfPage: "https://conciero.co/blog/scalable-remote-team",
        }}
      />

      <article className="pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link className="flex w-fit items-center text-accent hover:text-accent/80 mb-6" href="/resources" aria-label="Back to Resources">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <span className="text-sm text-muted-foreground">Mar 5, 2024</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6 text-foreground">Building a Scalable Remote Team in 2024</h1>

            <div className="rounded-2xl border border-border shadow-luxury overflow-hidden mb-8">
              <Image
                src="/assets/blog/scalable-remote-team-hero.png"
                alt="Org-chart style network of connected nodes representing a scaling team"
                width={1200}
                height={630}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <p className="text-lg text-muted-foreground mb-8">Practical strategies for building and managing distributed teams with virtual assistants.</p>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">Remote work has evolved from a temporary necessity to a permanent competitive advantage. Companies that master distributed team management access global talent, reduce overhead, and build resilient organizations. Here&apos;s how to do it right.</p>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Foundation: Culture First</h2>
              <div className="bg-secondary/30 rounded-xl p-5 mb-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg text-accent flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-muted-foreground">Remote culture doesn&apos;t happen by accident. Define your values, communication norms, and expectations explicitly. Document everything. What&apos;s obvious in an office becomes invisible without intentional effort.</p>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Hiring for Remote Success</h2>
              <p className="text-muted-foreground mb-4">Not everyone thrives remotely. Look for candidates who demonstrate:</p>
              <CheckList items={hiringTraits} />
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Communication Infrastructure</h2>
              <div className="bg-secondary/30 rounded-xl p-5 mb-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg text-accent flex-shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">The Right Tools</h3>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• <strong>Synchronous:</strong> Slack/Teams for quick questions</li>
                      <li>• <strong>Asynchronous:</strong> Email, Loom for detailed updates</li>
                      <li>• <strong>Documentation:</strong> Notion, Confluence for knowledge base</li>
                      <li>• <strong>Project Management:</strong> Asana, Monday, Trello</li>
                      <li>• <strong>Video:</strong> Zoom, Meet for face-to-face connection</li>
                    </ul>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Time Zone Strategy</h2>
              <div className="bg-secondary/30 rounded-xl p-5 mb-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg text-accent flex-shrink-0">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-muted-foreground">Embrace time zones as an asset, not a liability. With team members across the globe, your business can operate nearly 24/7. Define &quot;core hours&quot; for overlap, but let async communication carry the rest.</p>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Onboarding for Remote</h2>
              <p className="text-muted-foreground mb-4">Remote onboarding requires extra intentionality. Best practices include:</p>
              <CheckList items={onboardingPractices} />
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Scaling with Virtual Assistants</h2>
              <div className="bg-secondary/30 rounded-xl p-5 mb-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg text-accent flex-shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-muted-foreground">Virtual assistants offer the ultimate flexibility for scaling remote teams. Start with fractional support, increase hours as needed, and add specialized VAs without the overhead of full-time hires. Managed VA services like Conciero handle recruitment, training, and quality assurance.</p>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Measuring Remote Performance</h2>
              <p className="text-muted-foreground mb-4">Focus on outcomes, not activity. Define clear deliverables, track progress transparently, and trust your team to manage their time. Regular one-on-ones and performance reviews maintain alignment and catch issues early.</p>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Building Connection</h2>
              <p className="text-muted-foreground mb-4">Combat isolation with intentional connection. Virtual coffee chats, team celebrations, and optional video-on meetings help build relationships. Consider periodic in-person gatherings when possible.</p>
            </div>
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-muted-foreground mb-4">Ready to scale your remote team?</p>
              <Button asChild variant="accent">
                <Link href="/enterprise">Explore Enterprise Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
