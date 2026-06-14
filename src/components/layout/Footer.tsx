import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";

const locations = [
  "Madina Towers, Dubai",
  "Proworks, Bangalore",
  "Liberty Plaza, New York",
];

const serviceLinks = [
  { label: "Personal Concierge", href: "/services" },
  { label: "Executive & Founder Support", href: "/services" },
  { label: "Virtual Assistants", href: "/virtual-assistant" },
  { label: "Concierge for Enterprises", href: "/enterprise" },
  { label: "Pricing", href: "/pricing" },
];

const companyLinks = [
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/resources" },
  { label: "Contact Us", href: "/contact" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/conciero.co",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/conciero.co",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/conciero",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
];

const linkClass =
  "text-sm transition-opacity hover:opacity-70 text-left inline-block";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(196, 163, 90)" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-12 md:mb-16">
          {/* Brand */}
          <div className="lg:col-span-5 md:col-span-2 lg:pr-8">
            <Image
              src="/assets/footer-logo-CaoT8JI8.png"
              alt="Conciero"
              width={200}
              height={48}
              className="h-8 md:h-10 lg:h-12 w-auto opacity-90 mb-5 md:mb-6"
            />
            <h3
              className="text-xl sm:text-2xl md:text-[1.75rem] font-bold mb-4 md:mb-5 leading-tight tracking-tight"
              style={{ color: "rgb(26, 26, 26)" }}
            >
              Your World. Seamlessly Managed.
            </h3>
            <p
              className="text-sm md:text-[0.9rem] leading-relaxed max-w-md mb-5"
              style={{ color: "rgb(61, 61, 61)" }}
            >
              Premium virtual assistant and concierge services for individuals,
              founders, and global businesses - powered by senior talent,
              proactive support, and AI-driven efficiency.
            </p>
            <div className="mt-6">
              <Image
                src="/assets/trust-badge-d2AQG_wv.png"
                alt="5.0 Rated - Reviewed on Trustpilot & Clutch"
                width={160}
                height={64}
                className="h-14 md:h-16 w-auto"
              />
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4
              className="font-semibold text-xs uppercase tracking-widest mb-4 md:mb-5"
              style={{ color: "rgb(26, 26, 26)" }}
            >
              Services
            </h4>
            <ul className="space-y-2.5 md:space-y-3">
              {serviceLinks.map((item, i) => (
                <li key={`${item.href}-${i}`}>
                  <Link
                    className={linkClass}
                    style={{ color: "rgb(45, 45, 45)" }}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Global Presence */}
          <div className="lg:col-span-2">
            <h4
              className="font-semibold text-xs uppercase tracking-widest mb-4 md:mb-5"
              style={{ color: "rgb(26, 26, 26)" }}
            >
              Company
            </h4>
            <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    className={linkClass}
                    style={{ color: "rgb(45, 45, 45)" }}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h5
              className="font-medium text-xs uppercase tracking-wider mb-3"
              style={{ color: "rgb(74, 74, 74)" }}
            >
              Global Presence
            </h5>
            <ul className="space-y-2">
              {locations.map((loc) => (
                <li
                  key={loc}
                  className="flex items-center gap-2 text-xs"
                  style={{ color: "rgb(74, 74, 74)" }}
                >
                  <MapPin className="flex-shrink-0 opacity-70" width={12} height={12} />
                  <span>{loc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Compliance */}
          <div className="lg:col-span-3">
            <h4
              className="font-semibold text-xs uppercase tracking-widest mb-4 md:mb-5"
              style={{ color: "rgb(26, 26, 26)" }}
            >
              Policies & Compliance
            </h4>
            <ul className="space-y-2.5 md:space-y-3 mb-5 md:mb-6">
              <li>
                <Link className={linkClass} style={{ color: "rgb(45, 45, 45)" }} href="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className={linkClass} style={{ color: "rgb(45, 45, 45)" }} href="/terms">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link className={linkClass} style={{ color: "rgb(45, 45, 45)" }} href="/refund">
                  Refund Policy
                </Link>
              </li>
            </ul>
            <div className="w-8 h-px mb-4" style={{ backgroundColor: "rgba(26, 26, 26, 0.2)" }} />
            <ul className="space-y-1.5 mb-8">
              <li>
                <Link className="text-xs transition-opacity hover:opacity-70 text-left inline-block" style={{ color: "rgb(90, 90, 90)" }} href="/nda-confidentiality">
                  NDA &amp; Confidentiality
                </Link>
              </li>
              <li>
                <Link className="text-xs transition-opacity hover:opacity-70 text-left inline-block" style={{ color: "rgb(90, 90, 90)" }} href="/security-compliance">
                  Security &amp; Compliance Ready
                </Link>
              </li>
              <li>
                <Link className="text-xs transition-opacity hover:opacity-70 text-left inline-block" style={{ color: "rgb(90, 90, 90)" }} href="/global-compliance">
                  Global Compliance Awareness
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-60"
                  aria-label={s.label}
                  style={{ color: "rgb(45, 45, 45)" }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t text-center" style={{ borderColor: "rgba(26, 26, 26, 0.15)" }}>
          <p className="text-xs md:text-sm mb-2 leading-relaxed max-w-2xl mx-auto" style={{ color: "rgb(74, 74, 74)" }}>
            Built by founders with 10+ years of industry experience - we understand exactly what modern leaders need.
          </p>
          <p className="text-xs" style={{ color: "rgb(90, 90, 90)" }}>
            © 2025 Conciero. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
