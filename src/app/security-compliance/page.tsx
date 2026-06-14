import type { Metadata } from "next";
import {
  ShieldCheck,
  Lock,
  Eye,
  Server,
  FileCheck,
  CircleCheckBig,
  type LucideIcon,
} from "lucide-react";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Security & Compliance",
  description:
    "Learn about Conciero's robust security protocols and compliance readiness for your virtual operations.",
  path: "/security-compliance",
  keywords: [
    "security",
    "compliance",
    "data protection",
    "GDPR",
    "secure virtual assistant",
  ],
});

type Measure = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

const measures: Measure[] = [
  {
    Icon: Lock,
    title: "Data Encryption",
    description:
      "All sensitive data is encrypted both in transit and at rest, using industry-leading encryption standards.",
  },
  {
    Icon: ShieldCheck,
    title: "Access Controls",
    description:
      "Multi-factor authentication and role-based access controls ensure that only authorized personnel can access sensitive systems and data.",
  },
  {
    Icon: Eye,
    title: "Regular Audits & Monitoring",
    description:
      "Our systems are continuously monitored and regularly audited to detect and mitigate potential security threats.",
  },
  {
    Icon: Server,
    title: "Secure Infrastructure",
    description:
      "We utilize secure cloud infrastructure with built-in redundancy and disaster recovery capabilities.",
  },
  {
    Icon: FileCheck,
    title: "Confidentiality Policies",
    description:
      "Our team operates under strict confidentiality agreements, reinforcing our commitment to data protection.",
  },
];

const compliancePoints = [
  "GDPR Awareness: Understanding and implementing principles of the General Data Protection Regulation for data privacy.",
  "Industry-Specific Standards: Adapting our practices to align with the compliance requirements of sectors such as finance, healthcare, and technology.",
  "Continuous Improvement: Staying abreast of evolving compliance landscapes and updating our protocols accordingly.",
];

export default function SecurityCompliancePage() {
  return (
    <>
      <section className="pt-28 pb-8 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-4">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 animate-fade-in-up">
              Secure Operations, Compliant Solutions
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/90">
              Your Business, Protected.
            </p>
          </div>
        </div>
      </section>
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none mb-10">
            <p className="text-base text-muted-foreground leading-relaxed">
              In today&apos;s digital landscape, security and compliance are not
              optional - they are essential. Conciero is committed to providing
              a secure environment for your virtual assistant services, adhering
              to stringent industry standards and regulatory requirements.
            </p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Our Security Measures
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-10">
            {measures.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="bg-card rounded-xl p-5 shadow-soft border border-border/50 hover:shadow-card transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
          <div className="bg-secondary/30 rounded-2xl p-6 md:p-10 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-5 text-center">
              Compliance Readiness
            </h2>
            <p className="text-muted-foreground text-center mb-6 max-w-2xl mx-auto">
              Conciero is designed to meet the compliance needs of businesses
              operating in various regulated industries. We are committed to:
            </p>
            <div className="space-y-3 max-w-2xl mx-auto">
              {compliancePoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CircleCheckBig className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-accent/10 rounded-2xl p-6 md:p-10 text-center border border-accent/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Peace of Mind
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              By choosing Conciero, you gain a partner dedicated to maintaining
              the highest levels of security and compliance, allowing you to
              focus on your core business objectives with confidence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
