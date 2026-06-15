import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

/** All public routes, grouped by crawl priority. */
const routes = {
  primary: [
    "/",
    "/services",
    "/pricing",
    "/plans",
    "/contact",
    "/virtual-assistant",
    "/virtual-assistant-services-new-york",
    "/for-founders",
  ],
  segments: [
    "/why-conciero",
    "/how-it-works",
    "/referral-partner",
    "/enterprise",
    "/b2b-services",
    "/b2c-india",
    "/for-agencies",
    "/careers",
    "/resources",
    "/security-compliance",
    "/global-compliance",
  ],
  resources: [
    "/resources/techcorp-case-study",
    "/resources/hiring-guide",
    "/resources/roi-whitepaper",
    "/resources/task-delegation",
    "/resources/staffing-agency-case-study",
    "/resources/platform-demo",
  ],
  blog: [
    "/blog/ai-human-future",
    "/blog/ten-tasks-to-delegate",
    "/blog/personal-concierge-services-nyc",
    "/blog/virtual-assistant-services-in-new-york",
    "/blog/executive-assistant-services-nyc",
    "/blog/concierge-services-in-new-york",
    "/blog/business-concierge-services-new-york",
    "/blog/luxury-concierge-services-new-york",
    "/blog/scalable-remote-team",
  ],
  legal: ["/privacy", "/terms", "/refund", "/nda-confidentiality"],
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  ): MetadataRoute.Sitemap[number] => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    ...routes.primary.map((p) => entry(p, p === "/" ? 1 : 0.9, "weekly")),
    ...routes.segments.map((p) => entry(p, 0.8, "monthly")),
    ...routes.resources.map((p) => entry(p, 0.7, "monthly")),
    ...routes.blog.map((p) => entry(p, 0.7, "monthly")),
    ...routes.legal.map((p) => entry(p, 0.3, "yearly")),
  ];
}
