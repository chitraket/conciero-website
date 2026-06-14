import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

type SeoInput = {
  title: string;
  description?: string;
  /** Path beginning with "/" — used for canonical + OG url. */
  path: string;
  keywords?: string[];
  ogImage?: string;
  /** Set true on pages that should not be indexed (e.g. thank-you pages). */
  noindex?: boolean;
};

/**
 * Build a complete, SEO-rich Metadata object for a page: canonical URL,
 * OpenGraph, Twitter card, robots directives. `title` is composed with the
 * site name via the template defined in the root layout.
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path,
  keywords,
  ogImage = siteConfig.ogImage,
  noindex = false,
}: SeoInput): Metadata {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title,
      description,
      locale: "en_US",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
