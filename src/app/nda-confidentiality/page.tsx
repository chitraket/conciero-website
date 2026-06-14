import type { Metadata } from "next";
import { Shield, Lock, FileCheck, Users, Eye, type LucideIcon } from "lucide-react";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "NDA & Confidentiality",
  description:
    "Learn about Conciero's commitment to protecting your sensitive information through strict NDA and confidentiality policies.",
  path: "/nda-confidentiality",
  keywords: [
    "NDA",
    "confidentiality",
    "data protection",
    "privacy",
    "secure virtual assistant",
  ],
});

type Principle = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

const principles: Principle[] = [
  {
    Icon: Lock,
    title: "Strict Confidentiality",
    description:
      "All information shared by clients is treated with the utmost discretion and is never disclosed to third parties without explicit written consent.",
  },
  {
    Icon: FileCheck,
    title: "Robust NDA Framework",
    description:
      "We operate under comprehensive Non-Disclosure Agreements that clearly define the scope of confidential information and the obligations of both parties.",
  },
  {
    Icon: Shield,
    title: "Secure Data Handling",
    description:
      "Our internal processes and systems are built to ensure the secure storage, transmission, and management of your data.",
  },
  {
    Icon: Users,
    title: "Employee Training",
    description:
      "Our team undergoes regular training on data protection, privacy, and the importance of maintaining client confidentiality.",
  },
  {
    Icon: Eye,
    title: "Limited Access",
    description:
      "Access to your confidential information is strictly limited to the personnel who require it to perform their duties.",
  },
];

export default function NdaConfidentialityPage() {
  return (
    <>
      <section className="pt-28 pb-8 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-4">
              <Shield className="w-7 h-7" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 animate-fade-in-up">
              Upholding Your Trust
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/90">
              Our Commitment to NDA & Confidentiality
            </p>
          </div>
        </div>
      </section>
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none mb-10">
            <p className="text-base text-muted-foreground leading-relaxed">
              At Conciero, we understand that the information you share with us
              is critical to your business. We are committed to safeguarding
              your intellectual property, proprietary data, and confidential
              communications. Our Non-Disclosure Agreement (NDA) and
              confidentiality policies are designed to provide you with complete
              peace of mind.
            </p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Key Principles
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-10">
            {principles.map(({ Icon, title, description }) => (
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose Conciero?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Partnering with Conciero means entrusting your sensitive
              operations to a team that prioritizes your security and privacy
              above all else. We are dedicated to building long-term
              relationships based on trust and reliability.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
