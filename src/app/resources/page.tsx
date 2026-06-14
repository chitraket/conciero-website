import type { Metadata } from "next";
import Link from "next/link";
import { FileText, BookOpen, Download, type LucideIcon } from "lucide-react";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Conciero - Premium Virtual Assistants | Global VA Services",
  description:
    "Conciero provides senior-level virtual assistants and concierge services to seamlessly manage work, personal life & daily operations for clients",
  path: "/resources",
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

type FeaturedResource = {
  category: string;
  Icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  cta: string;
};

const featured: FeaturedResource[] = [
  {
    category: "Guide",
    Icon: FileText,
    title: "Complete Guide to Hiring a Virtual Assistant",
    description:
      "Everything you need to know about finding, onboarding, and working with virtual assistants effectively.",
    href: "/resources/hiring-guide",
    cta: "Read Guide",
  },
  {
    category: "Case Study",
    Icon: BookOpen,
    title: "How TechCorp Scaled Operations with Conciero",
    description:
      "Learn how a Fortune 500 company saved 40% on operational costs while improving productivity.",
    href: "/resources/techcorp-case-study",
    cta: "View Case Study",
  },
  {
    category: "Whitepaper",
    Icon: Download,
    title: "The ROI of Virtual Assistants in 2024",
    description:
      "Data-driven insights on cost savings, productivity gains, and business impact of VA services.",
    href: "/resources/roi-whitepaper",
    cta: "Read Whitepaper",
  },
  {
    category: "Guide",
    Icon: FileText,
    title: "Platform Overview & Features",
    description:
      "A comprehensive guide to the Conciero platform, features, and how to get started.",
    href: "/resources/platform-demo",
    cta: "View Guide",
  },
  {
    category: "Guide",
    Icon: FileText,
    title: "Best Practices for Task Delegation",
    description:
      "Expert tips on how to effectively delegate tasks to your virtual assistant team.",
    href: "/resources/task-delegation",
    cta: "Read Guide",
  },
  {
    category: "Case Study",
    Icon: BookOpen,
    title: "Staffing Agency Success Story",
    description:
      "How a recruiting firm used Conciero to offer white-label VA services to 50+ clients.",
    href: "/resources/staffing-agency-case-study",
    cta: "View Case Study",
  },
];

type BlogPost = {
  date: string;
  title: string;
  description: string;
  href: string;
};

const posts: BlogPost[] = [
  {
    date: "Apr 29, 2026",
    title: "Business Concierge Services New York",
    description:
      "Discover premium business concierge services in New York. Save time, reduce costs, and boost productivity with expert corporate concierge solutions.",
    href: "/blog/business-concierge-services-new-york",
  },
  {
    date: "Apr 29, 2026",
    title: "Personal Concierge Services NYC",
    description:
      "Discover the best personal concierge services in NYC. From lifestyle management to luxury travel and VIP access, simplify your life with expert concierge solutions.",
    href: "/blog/personal-concierge-services-nyc",
  },
  {
    date: "Apr 29, 2026",
    title: "Luxury Concierge Services New York",
    description:
      "Discover luxury concierge services in New York. Get expert lifestyle, travel, and business support with fast, personalized assistance in NYC.",
    href: "/blog/luxury-concierge-services-new-york",
  },
  {
    date: "Apr 29, 2026",
    title: "Executive Assistant Services NYC",
    description:
      "Discover expert executive assistant services in NYC. Boost productivity, save time, and scale your business with professional support.",
    href: "/blog/executive-assistant-services-nyc",
  },
  {
    date: "Apr 29, 2026",
    title: "Concierge Services in New York",
    description:
      "Looking for concierge services in New York? Discover premium personal, travel, and corporate concierge solutions to save time and access exclusive experiences.",
    href: "/blog/concierge-services-in-new-york",
  },
  {
    date: "Apr 24, 2026",
    title: "Virtual Assistant Services in New York",
    description:
      "Looking for reliable virtual assistant services in New York? Conciero provides expert support for business, executive, and personal tasks.",
    href: "/virtual-assistant-services-new-york",
  },
  {
    date: "Apr 24, 2026",
    title: "Virtual Assistant Services New York",
    description:
      "Premium, senior-level virtual assistant support for busy professionals and teams in New York.",
    href: "/virtual-assistant-services-new-york",
  },
  {
    date: "Mar 15, 2024",
    title: "10 Tasks You Should Delegate to a Virtual Assistant Today",
    description:
      "Stop wasting time on repetitive tasks. Here are the top 10 tasks that VAs excel at handling.",
    href: "/virtual-assistant-services-new-york",
  },
  {
    date: "Mar 10, 2024",
    title: "AI + Human: The Future of Virtual Assistance",
    description:
      "How combining AI automation with human expertise creates the perfect virtual assistant experience.",
    href: "/blog/ai-human-future",
  },
  {
    date: "Mar 5, 2024",
    title: "Building a Scalable Remote Team in 2024",
    description:
      "Practical strategies for building and managing distributed teams with virtual assistants.",
    href: "/blog/scalable-remote-team",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Resources & Insights
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Guides, case studies, and best practices for maximizing virtual
              assistant productivity
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert insights to help you get the most from virtual assistance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featured.map(({ category, Icon, title, description, href, cta }) => (
              <div
                key={title}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-all"
              >
                <span className="text-xs font-bold text-accent uppercase tracking-wide">
                  {category}
                </span>
                <div className="my-3">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground mb-5 text-sm">
                  {description}
                </p>
                <Link href={href}>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                    {cta}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold">
                Latest from Our Blog
              </h2>
            </div>
            <div className="space-y-5">
              {posts.map(({ date, title, description, href }) => (
                <div
                  key={title}
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <span className="text-sm text-muted-foreground">
                        {date}
                      </span>
                      <h3 className="text-xl font-bold mt-1 mb-2">{title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {description}
                      </p>
                    </div>
                    <Link href={href}>
                      <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 whitespace-nowrap">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
