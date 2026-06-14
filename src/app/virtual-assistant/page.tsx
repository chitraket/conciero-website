import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Plane,
  Search,
  ShoppingBag,
  Workflow,
  MessageSquare,
  Bot,
  Zap,
  Earth,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Virtual Assistant Services",
  description:
    "AI-powered virtual assistants trained in 200+ tools. Smart scheduling, travel planning, research, workflow automation and 24/7 availability.",
  path: "/virtual-assistant",
  keywords: [
    "virtual assistant",
    "AI assistant",
    "smart VA",
    "scheduling assistant",
    "travel planning",
    "workflow automation",
  ],
});

type Capability = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

const capabilities: Capability[] = [
  {
    Icon: Calendar,
    title: "Scheduling & Calendar",
    description:
      "Smart calendar management, meeting coordination, and automated scheduling across time zones.",
  },
  {
    Icon: Plane,
    title: "Travel Planning",
    description:
      "Complete travel arrangements from flights to accommodations, with real-time updates and support.",
  },
  {
    Icon: Search,
    title: "Research & Information",
    description:
      "Quick and accurate research on any topic, with summarized insights and actionable recommendations.",
  },
  {
    Icon: ShoppingBag,
    title: "Shopping & Bookings",
    description:
      "Product research, price comparison, restaurant reservations, and ticket bookings made effortless.",
  },
  {
    Icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks, set up smart workflows, and integrate with your favorite tools.",
  },
  {
    Icon: MessageSquare,
    title: "Communication",
    description:
      "Draft emails, manage messages, and handle correspondence across multiple platforms.",
  },
];

type Highlight = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

const highlights: Highlight[] = [
  {
    Icon: Bot,
    title: "AI-Powered Intelligence",
    description:
      "Advanced AI learns your preferences and improves over time, delivering increasingly personalized assistance.",
  },
  {
    Icon: Zap,
    title: "Lightning Fast",
    description:
      "Get instant responses and quick task completion with our optimized AI-human workflow.",
  },
  {
    Icon: Earth,
    title: "Always Available",
    description:
      "24/7 availability across all time zones - your virtual assistant never sleeps.",
  },
  {
    Icon: Smartphone,
    title: "Multi-Platform",
    description:
      "Access via web, mobile app, email, or chat - work the way you prefer.",
  },
];

type ProcessStep = { num: string; title: string; description: string };

const processSteps: ProcessStep[] = [
  {
    num: "1",
    title: "Tell Us What You Need",
    description:
      "Simply describe your task via chat, email, or voice. Our AI instantly understands and categorizes your request.",
  },
  {
    num: "2",
    title: "AI + Human Magic",
    description:
      "Our AI handles routine tasks instantly, while complex requests are routed to our expert human team for the personal touch.",
  },
  {
    num: "3",
    title: "Get Results Fast",
    description:
      "Receive updates in real-time and get your tasks completed quickly with our optimized workflow system.",
  },
];

type Audience = { title: string; description: string };

const audiences: Audience[] = [
  {
    title: "Busy Professionals",
    description:
      "Offload time-consuming tasks and focus on what truly matters for your career growth.",
  },
  {
    title: "Entrepreneurs",
    description:
      "Scale your productivity without hiring full-time staff. Pay only for what you need.",
  },
  {
    title: "Small Teams",
    description:
      "Augment your team's capabilities with 24/7 intelligent assistance at a fraction of the cost.",
  },
];

export default function VirtualAssistantPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/assets/virtual-assistant-BHgjeBPd.jpg"
            alt="Virtual Assistant"
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in-up">
              Your AI-Powered Global Virtual Assistant
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              Experience the future of personal and professional assistance with
              our intelligent virtual assistant platform
            </p>
            <Button asChild variant="accent" size="lg" className="shadow-lg">
              <Link href="/contact">Get Started Free</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              What Can Your Virtual Assistant Do?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From mundane tasks to complex projects, we handle it all with
              precision and speed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map(({ Icon, title, description }) => (
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Intelligent. Reliable. Always On.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The perfect blend of AI automation and human expertise at your
              fingertips
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {highlights.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="bg-card rounded-xl p-10 shadow-card text-center"
              >
                <div className="inline-flex items-center justify-center mb-6">
                  <Icon className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-muted-foreground text-lg">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
              Simple. Fast. Effective.
            </h2>
            <div className="space-y-8">
              {processSteps.map(({ num, title, description }) => (
                <div key={num} className="flex items-start space-x-6">
                  <div className="bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {num}
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
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
              Perfect For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {audiences.map(({ title, description }) => (
                <div key={title} className="bg-card rounded-xl p-8 shadow-card">
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="text-muted-foreground">{description}</p>
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
              Experience the Future of Virtual Assistance
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Start with a free trial and discover how much more you can
              accomplish
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="accent" size="lg" className="shadow-lg">
                <Link href="/contact">Start Free Trial</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/pricing">View Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
