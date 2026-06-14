import type { Metadata } from "next";
import {
  Globe,
  TrendingUp,
  DollarSign,
  GraduationCap,
  Users,
  Star,
  Zap,
  Shield,
  Heart,
  CircleCheck,
  type LucideIcon,
} from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { CareersForm } from "./CareersForm";

export const metadata: Metadata = buildMetadata({
  title: "Careers at Conciero - Join Our Global Team",
  description:
    "Build a career that grows with you. Join Conciero's global team of senior virtual assistants and concierge professionals. 100% remote, continuous growth, and meaningful work.",
  path: "/careers",
  keywords: [
    "careers",
    "jobs",
    "virtual assistant jobs",
    "remote work",
    "VA careers",
    "concierge jobs",
  ],
});

type Benefit = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    Icon: Globe,
    title: "100% Remote Work",
    description:
      "Work from anywhere. No commuting. No location restrictions. We're built remote-first.",
  },
  {
    Icon: TrendingUp,
    title: "Clear Career Growth",
    description:
      "Defined growth paths, responsibility expansion, and long-term roles, not short-term gigs.",
  },
  {
    Icon: DollarSign,
    title: "Fixed Increments Every 6 Months",
    description:
      "Industry-first structured salary increments based on performance and consistency.",
  },
  {
    Icon: GraduationCap,
    title: "Continuous Skill Upgradation",
    description:
      "Hands-on training across 100+ tools, platforms, and modern workflows.",
  },
  {
    Icon: Users,
    title: "Expert-Led Mentorship",
    description:
      "Guided mentorship sessions with senior managers and industry experts.",
  },
  {
    Icon: Star,
    title: "High-Quality Clients",
    description:
      "Work with founders, executives, and global businesses, not low-value task churn.",
  },
];

type Value = {
  Icon: LucideIcon;
  label: string;
};

const values: Value[] = [
  { Icon: Zap, label: "Proactiveness over micromanagement" },
  { Icon: Shield, label: "Ownership over supervision" },
  { Icon: Star, label: "Quality over quantity" },
  { Icon: Heart, label: "Growth over burnout" },
];

const thrivers = [
  "Experienced virtual assistants or professionals (preferred)",
  "Strong communication and problem-solving skills",
  "Comfortable with technology and learning new tools",
  "Self-driven, reliable, and proactive",
  "Interested in long-term remote careers",
];

const openRoles = [
  "Virtual Assistants (Business, Admin, Operations)",
  "Executive & Founder Assistants",
  "Concierge & Lifestyle Support Roles",
  "Marketing, Sales & Growth Assistants",
  "Industry-Specific Assistants (Healthcare, Real Estate, E-commerce, etc.)",
];

export default function CareersPage() {
  return (
    <>
      <section
        className="pt-28 md:pt-40 pb-10 md:pb-16 relative"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.75)), url("/assets/careers-hero-bg-BbVHKzjo.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight text-white">
              Build a Career That Grows With You
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-4 max-w-3xl mx-auto">
              Join a global team of senior virtual assistants and concierge
              professionals, trusted by founders, leaders, and global
              businesses.
            </p>
            <p className="text-sm md:text-base text-white/80">
              100% Remote • Long-Term Growth • Skill-First Culture
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 text-foreground">
              Why Join Conciero?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              We don&apos;t hire task-takers. We build careers for professionals
              who want meaningful work, continuous growth, and long-term
              stability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {benefits.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="bg-card rounded-xl p-5 md:p-6 shadow-card hover:shadow-lg transition-all"
              >
                <div className="bg-secondary w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-4xl font-bold mb-3 text-foreground">
                A Culture Built on Trust, Ownership, and Growth
              </h2>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-8 shadow-card">
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                At Conciero, every assistant is treated as a long-term partner -
                not a disposable resource.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                You&apos;ll work independently, but never alone. Our senior
                managers, support teams, and mentors are always behind you -
                helping you grow, improve, and succeed.
              </p>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                We value:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {values.map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="text-accent">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-4xl font-bold mb-3 text-foreground">
                Who Thrives at Conciero?
              </h2>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-8 shadow-card">
              <ul className="space-y-3">
                {thrivers.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <CircleCheck className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground/80 mt-4 italic">
                Industry experience is a plus - mindset and commitment matter
                more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-4xl font-bold mb-3 text-foreground">
                Open Opportunities
              </h2>
              <p className="text-muted-foreground">
                We regularly hire for roles across:
              </p>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-8 shadow-card">
              <ul className="space-y-2">
                {openRoles.map((role) => (
                  <li
                    key={role}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground/80 mt-4 italic">
                Don&apos;t see your role listed? Apply anyway - we hire based on
                potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="apply"
        className="py-10 md:py-14 bg-background scroll-mt-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-4xl font-bold mb-3 text-foreground">
                Apply to Join Conciero
              </h2>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-8 shadow-card">
              <h3 className="text-xl font-semibold mb-5 text-foreground text-center">
                Tell Us About Yourself
              </h3>
              <CareersForm />
              <p className="text-xs text-muted-foreground text-center mt-4">
                Our team reviews every application carefully.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
