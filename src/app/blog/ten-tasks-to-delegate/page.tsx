import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  Mail,
  Calendar,
  Search,
  Plane,
  FileText,
  Users,
  ChartColumn,
  ShoppingCart,
  Phone,
  Settings,
} from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "10 Tasks You Should Delegate to a Virtual Assistant | Conciero Blog",
  description:
    "Stop wasting time on repetitive tasks. Discover the top 10 tasks that virtual assistants excel at handling for busy professionals.",
  path: "/blog/ten-tasks-to-delegate",
  keywords: [
    "virtual assistant tasks",
    "delegation ideas",
    "VA services",
    "productivity tips",
  ],
});

const tasks: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Mail,
    title: "1. Email Management",
    body: "Have your VA filter, organize, and draft responses. They can flag urgent items and handle routine correspondence, saving you 2-3 hours daily.",
  },
  {
    icon: Calendar,
    title: "2. Calendar & Scheduling",
    body: "Coordinating meetings across time zones is time-consuming. Your VA can manage invites, send reminders, and optimize your daily schedule.",
  },
  {
    icon: Search,
    title: "3. Research & Analysis",
    body: "From competitor analysis to market research, VAs can compile data, create summaries, and prepare reports for your decision-making.",
  },
  {
    icon: Plane,
    title: "4. Travel Arrangements",
    body: "Flight bookings, hotel reservations, rental cars, and itinerary creation. Your VA handles the logistics while you focus on the destination.",
  },
  {
    icon: FileText,
    title: "5. Document Preparation",
    body: "Presentations, proposals, reports, and spreadsheets. Your VA can create, format, and maintain documents to your specifications.",
  },
  {
    icon: Users,
    title: "6. Customer Follow-ups",
    body: "Maintaining client relationships requires consistent touchpoints. VAs can handle thank-you notes, check-ins, and satisfaction surveys.",
  },
  {
    icon: ChartColumn,
    title: "7. Data Entry & CRM Updates",
    body: "Keep your systems current without spending hours on data entry. VAs ensure your CRM, databases, and records stay accurate.",
  },
  {
    icon: ShoppingCart,
    title: "8. Personal Errands",
    body: "Gift shopping, appointment booking, subscription management. Personal tasks that eat into work time can be delegated effectively.",
  },
  {
    icon: Phone,
    title: "9. Call Handling",
    body: "Screen calls, take messages, and handle routine inquiries. Your VA becomes your first line of communication management.",
  },
  {
    icon: Settings,
    title: "10. Social Media Management",
    body: "Content scheduling, engagement monitoring, and basic analytics. Maintain your online presence without constant attention.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "10 Tasks You Should Delegate to a Virtual Assistant Today",
          description:
            "Stop wasting time on repetitive tasks. Discover the top 10 tasks that virtual assistants excel at handling for busy professionals.",
          image: "https://conciero.co/og-image.png",
          author: { "@type": "Organization", name: "Conciero" },
          publisher: {
            "@type": "Organization",
            name: "Conciero",
            logo: {
              "@type": "ImageObject",
              url: "https://conciero.co/assets/logo-X1-8k2Vp.png",
            },
          },
          mainEntityOfPage: "https://conciero.co/blog/ten-tasks-to-delegate",
        }}
      />

      <article className="pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link className="inline-flex items-center text-accent hover:text-accent/80 mb-6" href="/resources">
              <ArrowLeft className="w-4 h-4 mr-2" />Back to Resources
            </Link>
            <span className="text-sm text-muted-foreground">Mar 15, 2024</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6 text-foreground">10 Tasks You Should Delegate to a Virtual Assistant Today</h1>
            <p className="text-lg text-muted-foreground mb-8">Stop wasting time on repetitive tasks. Here are the top 10 tasks that VAs excel at handling.</p>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">As a busy professional, your time is your most valuable asset. Yet many leaders spend hours each day on tasks that could easily be handled by a capable virtual assistant. Here are ten tasks you should start delegating today.</p>
              <div className="space-y-6">
                {tasks.map(({ icon: Icon, title, body }) => (
                  <div key={title} className="bg-secondary/30 rounded-xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-lg text-accent flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                        <p className="text-muted-foreground">{body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Getting Started</h2>
              <p className="text-muted-foreground mb-4">The key to successful delegation is starting small and building trust. Begin with one or two tasks from this list, provide clear instructions, and gradually expand as your VA learns your preferences and workflows.</p>
              <p className="text-muted-foreground mb-4">Remember: every hour you spend on these tasks is an hour not spent on strategy, relationships, and growth. Delegation isn&apos;t about giving up control; it&apos;s about multiplying your impact.</p>
            </div>
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-muted-foreground mb-4">Ready to reclaim your time?</p>
              <Button asChild variant="accent">
                <Link href="/contact">Get Started with Conciero</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
