import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Users,
  Plane,
  Briefcase,
  Megaphone,
  Handshake,
  ShoppingCart,
  Search,
  Building2,
  Heart,
  House,
  Landmark,
  DollarSign,
  CodeXml,
  ArrowDown,
  CircleCheck,
  type LucideIcon,
} from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "Services - Conciero",
  description:
    "Explore Conciero's comprehensive virtual assistant and concierge services. From personal concierge to business support, we deliver seamless assistance tailored to your needs.",
  path: "/services",
  keywords: [
    "virtual assistant services",
    "concierge services",
    "executive assistant",
    "business support",
    "personal concierge",
  ],
});

type ServiceCard = {
  id: string;
  Icon: LucideIcon;
  title: string;
  items: string[];
};

const personalServices: ServiceCard[] = [
  {
    id: "personal-concierge-services",
    Icon: Sparkles,
    title: "Personal Concierge",
    items: [
      "Errands, bookings & reservations",
      "Home, lifestyle & daily coordination",
      "Personal scheduling & reminders",
      "Vendor & service coordination",
      "Ongoing personal support",
    ],
  },
  {
    id: "executive-concierge",
    Icon: Users,
    title: "Executive & Founder Concierge",
    items: [
      "Calendar & priority management",
      "Personal + professional coordination",
      "High-trust, confidential assistance",
      "Follow-ups & task orchestration",
      "Discretion-led executive support",
    ],
  },
  {
    id: "travel-lifestyle",
    Icon: Plane,
    title: "Travel & Lifestyle Management",
    items: [
      "Flights, hotels & itineraries",
      "Relocation & local assistance",
      "Events, dining & experiences",
      "VIP arrangements & bookings",
      "End-to-end travel coordination",
    ],
  },
];

const businessServices: ServiceCard[] = [
  {
    id: "business-admin-support",
    Icon: Briefcase,
    title: "Business & Administrative Support",
    items: [
      "Inbox & calendar management",
      "Documentation & coordination",
      "Travel & logistics support",
      "Internal workflows",
      "Daily operations assistance",
    ],
  },
  {
    id: "executive-assistant",
    Icon: Users,
    title: "Executive / Founder Assistant",
    items: [
      "High-level coordination",
      "Team & stakeholder management",
      "Strategic task support",
      "Reporting & follow-ups",
      "Leadership support",
    ],
  },
  {
    id: "marketing-growth",
    Icon: Megaphone,
    title: "Marketing & Growth Support",
    items: [
      "Social media & content coordination",
      "Campaign & funnel support",
      "CRM & pipeline management",
      "Sales enablement & follow-ups",
      "Growth operations support",
    ],
  },
  {
    id: "sales-operations",
    Icon: Handshake,
    title: "Sales & Client Operations",
    items: [
      "Lead research & outreach",
      "CRM updates & pipelines",
      "Follow-ups & coordination",
      "Client onboarding support",
      "Sales operations assistance",
    ],
  },
  {
    id: "ecommerce-operations",
    Icon: ShoppingCart,
    title: "E-commerce & D2C Operations",
    items: [
      "Store & product management",
      "Order & fulfillment coordination",
      "Customer support operations",
      "Vendor & inventory tracking",
      "Marketplace & platform operations",
    ],
  },
  {
    id: "research-hr-enablement",
    Icon: Search,
    title: "Research, HR & Internal Enablement",
    items: [
      "Market & business research",
      "Hiring & HR coordination",
      "SOPs & documentation",
      "Data & reporting support",
      "Internal team enablement",
    ],
  },
];

type IndustryCard = {
  Icon: LucideIcon;
  title: string;
  items: string[];
};

const industries: IndustryCard[] = [
  {
    Icon: Building2,
    title: "Hospitality & Luxury Services",
    items: [
      "Guest & VIP concierge",
      "Reservations & itineraries",
      "Events & experiences",
      "Property operations",
      "Premium service delivery",
    ],
  },
  {
    Icon: Heart,
    title: "Healthcare & Medical Support",
    items: [
      "Scheduling & admin coordination",
      "Documentation & reporting",
      "Patient communication",
      "Non-clinical operations",
      "Compliance-aware support",
    ],
  },
  {
    Icon: House,
    title: "Real Estate & Property Management",
    items: [
      "Listings & documentation",
      "Client coordination",
      "Follow-ups & scheduling",
      "Property operations",
      "Transaction support",
    ],
  },
  {
    Icon: Landmark,
    title: "Professional Services, Agencies & Coaches",
    items: [
      "Client coordination",
      "Reporting & documentation",
      "Task & workflow management",
      "Project assistance",
      "Operational support",
    ],
  },
  {
    Icon: DollarSign,
    title: "Finance, Insurance & Regulated Services",
    items: [
      "Client coordination & admin",
      "Documentation & reporting",
      "Compliance-aware operations",
      "Secure workflow support",
      "Confidential task handling",
    ],
  },
  {
    Icon: CodeXml,
    title: "Technology, SaaS & Product Companies",
    items: [
      "Founder & executive support",
      "Customer success coordination",
      "Product & operations assistance",
      "Cross-team communication support",
      "Fast-scaling operations readiness",
    ],
  },
];

function ServiceCardItem({ id, Icon, title, items }: ServiceCard) {
  return (
    <div
      id={id}
      className="bg-card rounded-2xl p-4 md:p-6 shadow-card hover:shadow-luxury transition-all duration-300 border border-border/50 scroll-mt-32 h-full flex flex-col min-h-[280px] md:min-h-[320px]"
    >
      <div className="text-accent mb-3 md:mb-4">
        <Icon className="w-6 h-6 md:w-8 md:h-8" />
      </div>
      <h3 className="text-base md:text-xl font-semibold mb-3 md:mb-4 text-foreground">
        {title}
      </h3>
      <ul className="space-y-2 md:space-y-2.5 flex-1">
        {items.map((item) => (
          <li
            key={item}
            className="text-muted-foreground text-xs md:text-sm flex items-start gap-2 md:gap-2.5"
          >
            <CircleCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IndustryCardItem({ Icon, title, items }: IndustryCard) {
  return (
    <div className="bg-card rounded-xl p-4 md:p-5 shadow-card hover:shadow-luxury transition-all duration-300 border border-border/50 h-full flex flex-col min-h-[240px] md:min-h-[280px]">
      <div className="text-accent mb-2 md:mb-3">
        <Icon className="w-5 h-5 md:w-7 md:h-7" />
      </div>
      <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-3 text-foreground">
        {title}
      </h3>
      <ul className="space-y-1.5 md:space-y-2 flex-1">
        {items.map((item) => (
          <li
            key={item}
            className="text-muted-foreground text-xs md:text-sm flex items-start gap-1.5 md:gap-2"
          >
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section
        id="services-overview"
        className="pt-28 md:pt-40 pb-8 md:pb-16 bg-background scroll-mt-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
              Services Designed to Manage Your Work, Life, and Everything In
              Between
            </h1>
            <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
              From personal concierge support to senior-level virtual
              assistants, Conciero delivers seamless, proactive assistance
              tailored to individuals, founders, and global teams.
            </p>
            <a
              href="#personal-concierge"
              className="inline-flex items-center gap-2 text-accent font-medium hover:underline transition-all group"
            >
              Explore Our Services
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="personal-concierge"
        className="py-8 md:py-12 bg-secondary/30 scroll-mt-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-6 md:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-foreground">
              Personal & Concierge Services
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground">
              High-trust, high-discretion support designed to manage your
              personal life, travel, and day-to-day coordination with absolute
              reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {personalServices.map((card) => (
              <ServiceCardItem key={card.id} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="business-virtual-assistants"
        className="py-8 md:py-12 bg-background scroll-mt-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-6 md:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-foreground">
              Business & Virtual Assistant Services
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground">
              Senior-level virtual assistants trained to support operations,
              leadership, and growth, seamlessly and proactively.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {businessServices.map((card) => (
              <ServiceCardItem key={card.id} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="industry-support"
        className="py-8 md:py-12 bg-secondary/30 scroll-mt-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-6 md:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-foreground">
              Industry-Specific Expertise
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground">
              Our assistants are trained to support specialized industries with
              domain understanding, compliance awareness, and operational
              precision.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {industries.map((card) => (
              <IndustryCardItem key={card.title} {...card} />
            ))}
          </div>
          <p className="text-xs md:text-sm text-muted-foreground/80 italic text-center mt-6 md:mt-8 max-w-2xl mx-auto">
            We support clients across 20+ industries. If your industry
            isn&apos;t listed here, our assistants are trained to adapt quickly
            and work within your workflows.
          </p>
        </div>
      </section>

      <section
        id="our-approach"
        className="py-8 md:py-12 scroll-mt-24"
        style={{ backgroundColor: "rgb(196, 163, 90)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 md:mb-3"
              style={{ color: "rgb(31, 41, 55)" }}
            >
              One Assistant. Backed by a Team.
            </h2>
            <p
              className="text-sm md:text-base font-medium mb-4 md:mb-5"
              style={{ color: "rgb(31, 41, 55)" }}
            >
              Senior managers. Specialist teams. One trusted point of contact.
            </p>
            <p
              className="text-xs md:text-sm leading-relaxed"
              style={{ color: "rgb(55, 65, 81)" }}
            >
              Every Conciero assistant is guided by senior managers and
              supported by specialist teams, including operations, marketing,
              design, and automation experts. You work with one trusted
              assistant, while we ensure depth, quality, and scalability behind
              the scenes.
            </p>
          </div>
        </div>
      </section>

      <section
        id="services-cta"
        className="py-8 md:py-12 bg-accent/5 scroll-mt-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-foreground">
              Not Sure Where You Fit?
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-8">
              Tell us what you need and we&apos;ll design the right concierge or
              assistant setup for you.
            </p>
            <Button
              asChild
              variant="accent"
              size="lg"
              className="px-6 md:px-8"
            >
              <Link href="/contact">Book a Free Consultation Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
