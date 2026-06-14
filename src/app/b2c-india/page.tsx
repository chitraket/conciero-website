import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Utensils,
  Calendar,
  Plane,
  ShoppingBag,
  MapPin,
  Heart,
  CircleCheck,
  Languages,
  IndianRupee,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "Conciero - Premium Virtual Assistants | Global VA Services",
  description:
    "Conciero provides senior-level virtual assistants and concierge services to seamlessly manage work, personal life & daily operations for clients",
  path: "/b2c-india",
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

type ServiceCard = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

const services: ServiceCard[] = [
  {
    Icon: Utensils,
    title: "Restaurant Reservations",
    description:
      "Book tables at the best restaurants across India. Get priority seating and special arrangements.",
  },
  {
    Icon: Calendar,
    title: "Appointments & Bookings",
    description:
      "Doctor appointments, salon bookings, spa reservations, and more - all handled for you.",
  },
  {
    Icon: Plane,
    title: "Travel & Holidays",
    description:
      "Complete travel planning from flight bookings to hotel stays, itineraries, and local experiences.",
  },
  {
    Icon: ShoppingBag,
    title: "Shopping Assistance",
    description:
      "Personal shopping, gift selection, product research, and doorstep delivery coordination.",
  },
  {
    Icon: MapPin,
    title: "Event Planning",
    description:
      "Birthday parties, anniversaries, celebrations - we handle all the details for your special moments.",
  },
  {
    Icon: Heart,
    title: "Personal Tasks",
    description:
      "Errands, bill payments, courier arrangements, and day-to-day lifestyle management.",
  },
];

const reasons = [
  "Available in major Indian cities",
  "Support in regional languages",
  "Affordable monthly plans starting ₹999",
  "Pay-per-task option available",
  "No long-term commitment required",
  "Dedicated personal concierge",
];

type Highlight = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

const highlights: Highlight[] = [
  {
    Icon: Languages,
    title: "Multi-Lingual",
    description: "Support in Hindi, English, and regional languages",
  },
  {
    Icon: IndianRupee,
    title: "Affordable",
    description: "Plans starting at just ₹999/month",
  },
  {
    Icon: MapPin,
    title: "Pan-India",
    description: "Coverage in major cities across India",
  },
  {
    Icon: Sparkles,
    title: "Premium",
    description: "High-end service at accessible prices",
  },
];

type Step = {
  number: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: "1",
    title: "Choose Your Plan",
    description:
      "Select from monthly subscriptions or pay-per-task options based on your needs and budget.",
  },
  {
    number: "2",
    title: "Share Your Request",
    description:
      "Contact us via WhatsApp, phone, or app to share what you need assistance with - in your preferred language.",
  },
  {
    number: "3",
    title: "Relax & Enjoy",
    description:
      "Your dedicated concierge takes care of everything and keeps you updated throughout the process.",
  },
];

const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
];

export default function B2CIndiaPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/assets/b2c-india-cd6ACBWW.jpg"
            alt="B2C Concierge India"
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in-up">
              Your Personal Lifestyle Concierge in India
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              Premium concierge services for your daily needs - from restaurant
              bookings to travel planning
            </p>
            <Button asChild variant="accent" size="lg" className="shadow-lg">
              <Link href="/contact">Get Your Personal Concierge</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              What We Can Do For You
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leave the planning and coordination to us while you enjoy your life
              to the fullest
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="bg-secondary w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                Why Indians Love Conciero
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We understand the unique needs of Indian consumers and provide
                culturally relevant, locally-aware concierge services.
              </p>
              <div className="space-y-4">
                {reasons.map((reason) => (
                  <div key={reason} className="flex items-start space-x-3">
                    <CircleCheck className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map(({ Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-card rounded-xl p-8 shadow-card text-center"
                >
                  <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
              Getting Started is Easy
            </h2>
            <div className="space-y-8">
              {steps.map(({ number, title, description }) => (
                <div key={number} className="flex items-start space-x-6">
                  <div className="bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-muted-foreground">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
              Available Across India
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              We currently serve these major cities, with more locations coming
              soon
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {cities.map((city) => (
                <div
                  key={city}
                  className="bg-card rounded-lg p-4 shadow-soft"
                >
                  <p className="font-semibold">{city}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Ready to Simplify Your Life?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Join thousands of satisfied customers across India who trust
              Conciero for their daily needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="accent" size="lg" className="shadow-lg">
                <Link href="/contact">Get Started Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border bg-background hover:text-accent-foreground border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
