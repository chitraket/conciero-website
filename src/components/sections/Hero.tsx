import Image from "next/image";
import { Star, Zap, Shield, RefreshCw } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationForm } from "@/components/forms/ConsultationForm";

const trustChips: { icon: LucideIcon; label: string }[] = [
  { icon: Star, label: "10+ Years Average Experience" },
  { icon: Zap, label: "Start in 24 Hours" },
  { icon: Shield, label: "Pre-Vetted Senior Talent" },
  { icon: RefreshCw, label: "Unlimited Free Replacement" },
];

export function Hero() {
  return (
    <section className="pt-28 pb-8 lg:pt-32 lg:pb-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="lg:pt-4">
            <p className="text-sm text-muted-foreground mb-4 tracking-wide">
              Global Virtual Assistant and Concierge Services - Delivered Seamlessly
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 leading-tight text-foreground">
              Delegate Everything That Slows You Down
            </h1>
            <p className="text-base md:text-lg mb-5 md:mb-6 text-muted-foreground leading-relaxed">
              Work with proactive, tech-savvy and AI-fluent assistants who streamline your work and life - so you can focus on what matters most.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
              {trustChips.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 md:gap-2 bg-secondary px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm text-foreground/80"
                >
                  <span className="text-accent">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <Image
              src="/assets/trust-badge-d2AQG_wv.png"
              alt="5.0 Rated - Reviewed on Trustpilot & Clutch"
              width={200}
              height={64}
              className="h-14 md:h-16 w-auto"
              priority
            />
          </div>
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}
