"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { mainNav } from "@/lib/site";

/**
 * Fixed top navigation. Faithful to the original: gold bar on mobile,
 * translucent blurred background on desktop. Adds an accessible mobile menu
 * (the static export shipped only a non-functional hamburger icon).
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#C4A35A] lg:bg-background/80 lg:backdrop-blur-sm">
      <div className="container mx-auto px-3 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo-X1-8k2Vp.png"
              alt="Conciero"
              width={192}
              height={192}
              priority
              className="h-28 lg:h-48 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`text-sm font-medium transition-colors cursor-pointer hover:text-accent ${
                  isActive(item.href)
                    ? "text-accent font-semibold"
                    : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button variant="accent">Let&apos;s Talk</Button>
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden text-foreground"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#C4A35A] border-t border-black/10">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`text-sm py-1 text-foreground/90 ${
                  isActive(item.href)
                    ? "font-semibold underline underline-offset-4"
                    : "font-medium"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}>
              <Button variant="accent" className="w-full bg-charcoal text-charcoal-foreground hover:bg-charcoal/90">
                Let&apos;s Talk
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
