"use client";

import { useEffect } from "react";

import { siteConfig } from "@/lib/site";

export function CalendlyWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full rounded-xl overflow-hidden border border-border/50"
      data-url={`${siteConfig.calendly}?hide_gdpr_banner=1&primary_color=b8962e`}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
