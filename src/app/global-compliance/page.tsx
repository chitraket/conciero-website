import type { Metadata } from "next";
import { Shield, Globe, Users, RefreshCw, TriangleAlert, type LucideIcon } from "lucide-react";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Global Compliance Awareness",
  description:
    "Conciero operates with a keen awareness of international regulations and best practices for worldwide compliance.",
  path: "/global-compliance",
  keywords: [
    "global compliance",
    "international regulations",
    "GDPR",
    "CCPA",
    "cross-border operations",
  ],
});

type Item = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

const items: Item[] = [
  {
    Icon: Shield,
    title: "International Data Privacy Laws",
    description:
      "We are knowledgeable about key international data protection regulations, including GDPR (Europe), CCPA (California), and others, ensuring your data is handled with global best practices in mind.",
  },
  {
    Icon: Globe,
    title: "Cross-Border Operations",
    description:
      "Our services are structured to facilitate seamless operations for businesses working across multiple countries, respecting local business customs and legal requirements.",
  },
  {
    Icon: Users,
    title: "Cultural Nuances",
    description:
      "We understand that compliance can also involve cultural and ethical considerations, and our assistants are trained to be sensitive to these aspects.",
  },
  {
    Icon: RefreshCw,
    title: "Adaptability",
    description:
      "We continuously monitor changes in global compliance landscapes to ensure our services remain relevant and compliant.",
  },
  {
    Icon: TriangleAlert,
    title: "Risk Mitigation",
    description:
      "By maintaining global compliance awareness, we help our clients mitigate risks associated with international business operations.",
  },
];

export default function GlobalCompliancePage() {
  return (
    <>
      <section className="pt-28 pb-8 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-4">
              <Globe className="w-7 h-7" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 animate-fade-in-up">
              Navigating Global Standards
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/90">
              Conciero&apos;s Commitment to Worldwide Compliance
            </p>
          </div>
        </div>
      </section>
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none mb-10">
            <p className="text-base text-muted-foreground leading-relaxed">
              Conciero serves a global clientele, and we recognize the
              importance of adhering to diverse international compliance
              standards. Our team is trained to understand and respect the
              varying legal and regulatory frameworks across different regions.
            </p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Our Global Approach
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-10">
            {items.map(({ Icon, title, description }) => (
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
          <div className="bg-accent/10 rounded-2xl p-6 md:p-10 text-center border border-accent/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Partnering for Global Success
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conciero empowers your business to operate confidently on the
              international stage. Our commitment to global compliance awareness
              ensures that your virtual operations are not only efficient but
              also legally sound and ethically managed, no matter where your
              business takes you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
