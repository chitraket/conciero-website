import Link from "next/link";
import { Sparkles, Users, Plane, Briefcase, Megaphone, Handshake, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

type Service = {
  icon: LucideIcon;
  title: string;
  items: string[];
  href: string;
};

const services: Service[] = [
  {
    icon: Sparkles,
    title: "Personal Concierge",
    items: [
      "Errands, bookings & reservations",
      "Travel planning & experiences",
      "Home, lifestyle & daily coordination",
    ],
    href: "/services#personal-concierge-services",
  },
  {
    icon: Users,
    title: "Executive & Founder Support",
    items: [
      "Calendar, priorities & follow-ups",
      "Personal + professional coordination",
      "High-trust, high-discretion assistance",
    ],
    href: "/services#executive-concierge",
  },
  {
    icon: Plane,
    title: "Travel & Lifestyle Management",
    items: [
      "Flights, hotels & itineraries",
      "Relocation & local support",
      "Events, dining & VIP arrangements",
    ],
    href: "/services#travel-lifestyle",
  },
  {
    icon: Briefcase,
    title: "Business & Admin Support",
    items: [
      "Inbox, scheduling & coordination",
      "Travel & logistics",
      "Internal workflows",
    ],
    href: "/services#business-admin-support",
  },
  {
    icon: Megaphone,
    title: "Marketing & Growth Support",
    items: [
      "Social media & content coordination",
      "Campaign execution support",
      "CRM & tool management",
    ],
    href: "/services#marketing-growth",
  },
  {
    icon: Handshake,
    title: "Sales & Client Operations",
    items: [
      "Lead research & outreach",
      "CRM updates & follow-ups",
      "Client coordination",
    ],
    href: "/services#sales-operations",
  },
];

function ServiceCard({ icon: Icon, title, items, href }: Service) {
  return (
    <div className="bg-card rounded-xl p-5 md:p-6 shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 border border-border/50 group">
      <div className="text-accent mb-3 md:mb-4">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-foreground">{title}</h3>
      <ul className="space-y-2 md:space-y-2.5 mb-4 md:mb-5">
        {items.map((item) => (
          <li key={item} className="text-muted-foreground text-sm flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
      <Link
        className="text-accent font-medium text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
        href={href}
      >
        Explore More <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-12 md:py-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-foreground leading-tight">
            Life, Work, and Everything In Between, Seamlessly Managed
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of assistant categories, designed to support your personal life, business, and everything in between.
          </p>
        </div>
        <div className="mb-8 md:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
        <div className="mb-10 md:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.slice(3).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
        <div className="text-center">
          <p className="text-lg md:text-xl font-bold text-foreground mb-2">One Assistant. Endless Possibilities.</p>
          <p className="text-xs md:text-sm text-muted-foreground mb-6 md:mb-8">
            Your needs change — your support shouldn&apos;t.
          </p>
          <Button asChild variant="accent" className="h-11 rounded-md px-6 md:px-8">
            <Link href="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
