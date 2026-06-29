/**
 * Single source of truth for site-wide constants: canonical URL, contact
 * details, primary navigation and footer links. Mirrors the original static
 * export so every page and the SEO helpers stay in sync.
 */

export const siteConfig = {
  name: "Conciero",
  // Canonical production origin (used by metadata, sitemap, robots, JSON-LD).
  url: "https://conciero.co",
  description:
    "Conciero offers premium virtual assistant, executive support, and concierge services to help businesses and professionals manage tasks efficiently.",
  ogImage:
    "https://storage.googleapis.com/gpt-engineer-file-uploads/hvgLofdVYpX4LUASj0z1hyjJXwQ2/social-images/social-1767038421276-icon.png",
  phone: "+13373372363",
  phoneDisplay: "+1 337 337 2363",
  whatsapp: "+919187116589",
  whatsappDisplay: "+91 91871 16589",
  calendly: "https://calendly.com/care-conciero/conciero-15mins-discussion",
  googleSiteVerification: "kUpCy26KqHlFM-Nnkhf4at__jceA_p6TBBoMgOkmdDw",
} as const;

/** Primary navbar links (all point to real, indexable routes). */
export const mainNav = [
  { label: "For Founders", href: "/for-founders" },
  { label: "Services", href: "/services" },
  { label: "Why Conciero", href: "/why-conciero" },
  { label: "Pricing", href: "/pricing" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Refer & Earn", href: "/referral-partner" },
] as const;

export const footerNav = {
  services: [
    { label: "Virtual Assistant", href: "/virtual-assistant" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Enterprise", href: "/enterprise" },
    { label: "For Founders", href: "/for-founders" },
    { label: "For Agencies", href: "/for-agencies" },
    { label: "Referral Partners", href: "/referral-partner" },
  ],
  company: [
    { label: "B2B Services", href: "/b2b-services" },
    { label: "B2C India", href: "/b2c-india" },
    { label: "Careers", href: "/careers" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
    { label: "NDA & Confidentiality", href: "/nda-confidentiality" },
    { label: "Security & Compliance", href: "/security-compliance" },
    { label: "Global Compliance", href: "/global-compliance" },
  ],
} as const;
