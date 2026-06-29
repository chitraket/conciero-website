"use client";

import { CalendarCheck } from "lucide-react";

import { siteConfig } from "@/lib/site";

/** Floating "Book a Call" button, fixed bottom-right (Calendly). */
export function FloatingCallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
        <a
        href={siteConfig.calendly}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book a free call"
      >
        <button className="rounded-full shadow-lg bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-110 hover:shadow-xl transition-all duration-200 px-5 h-14 flex items-center gap-2 whitespace-nowrap text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
          <CalendarCheck width={20} height={20} />
          <span>Book a Call</span>
        </button>
      </a>
    </div>
  );
}
