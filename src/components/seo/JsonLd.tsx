import { siteConfig } from "@/lib/site";

/**
 * Renders a JSON-LD <script>. Pass any schema.org object as `data`.
 * Server-rendered into the HTML so crawlers read it without executing JS.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Schema content is static/trusted; stringify is safe here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Site-wide Organization + WebSite schema, rendered once in the root layout. */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/assets/logo-X1-8k2Vp.png`,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  sameAs: [
    "https://www.instagram.com/conciero.co",
    "https://www.facebook.com/conciero.co",
    "https://www.linkedin.com/company/conciero",
  ],
  address: [
    { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
    { "@type": "PostalAddress", addressLocality: "Bangalore", addressCountry: "IN" },
    { "@type": "PostalAddress", addressLocality: "New York", addressCountry: "US" },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};
