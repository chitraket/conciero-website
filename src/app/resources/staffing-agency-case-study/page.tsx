import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, Building2, TrendingUp, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Staffing Agency Success Story | Case Study",
  description:
    "How a recruiting firm used Conciero to offer white-label VA services to 50+ clients, growing revenue by 200%.",
  path: "/resources/staffing-agency-case-study",
  keywords: [
    "staffing agency case study",
    "white-label VA",
    "recruiting firm growth",
    "VA reseller",
  ],
});

const stats = [
  { icon: Building2, value: "50+", label: "Clients Served" },
  { icon: Users, value: "200%", label: "Revenue Growth" },
  { icon: TrendingUp, value: "35%", label: "Profit Margin Increase" },
  { icon: Award, value: "98%", label: "Client Retention" },
];

const results = [
  "Expanded from 0 to 50+ VA clients",
  "Achieved 200% revenue growth in the VA segment",
  "Improved overall profit margins by 35%",
  "Maintained 98% client retention rate",
  "Created a new recurring revenue stream",
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
            Staffing Agency Success Story
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            How a recruiting firm used Conciero to offer white-label VA services
            to 50+ clients.
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
              Company Background
            </h2>
            <p className="text-muted-foreground mb-4">
              RecruitPro is a mid-sized staffing agency specializing in
              administrative and executive placements. With 15 years in the
              industry, they faced increasing competition and margin pressure
              from traditional staffing models.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              The Opportunity
            </h2>
            <p className="text-muted-foreground mb-4">
              RecruitPro recognized growing client demand for flexible, remote
              support options. However, building their own VA infrastructure
              would require significant investment in international operations,
              training, and quality assurance.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              The Partnership
            </h2>
            <p className="text-muted-foreground mb-4">
              By partnering with Conciero&apos;s white-label agency program,
              RecruitPro could offer premium VA services under their own brand
              without the operational overhead. Conciero handled recruitment,
              training, and day-to-day management.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Implementation
            </h2>
            <p className="text-muted-foreground mb-4">
              The launch was swift. Within 30 days, RecruitPro had their
              white-label portal configured, sales materials created, and first
              VAs ready for client deployment. Conciero provided comprehensive
              sales training and ongoing support.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Results After 18 Months
            </h2>
            <p className="text-muted-foreground mb-4">
              The virtual assistant division became RecruitPro&apos;s
              fastest-growing service line. Key achievements included:
            </p>
            <ul className="space-y-2 mb-6">
              {results.map((result) => (
                <li key={result} className="text-muted-foreground">
                  • {result}
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Client Testimonial
            </h2>
            <blockquote className="border-l-4 border-accent pl-6 italic text-muted-foreground my-6">
              &quot;Partnering with Conciero transformed our business model. We
              went from competing on thin margins to offering a differentiated,
              high-value service that our clients love. The white-label program
              gave us enterprise capabilities without enterprise complexity.&quot;
              <footer className="text-sm mt-2 not-italic">- CEO, RecruitPro</footer>
            </blockquote>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Key Success Factors
            </h2>
            <p className="text-muted-foreground mb-4">
              RecruitPro&apos;s success stemmed from positioning VAs as a premium
              offering rather than a cost-cutting measure. Combined with
              Conciero&apos;s quality assurance and seamless operations, they
              delivered exceptional client experiences.
            </p>
          </div>
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-muted-foreground mb-4">
              Interested in our agency partner program?
            </p>
            <Button asChild variant="accent">
              <Link href="/for-agencies">Explore Agency Partnership</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
