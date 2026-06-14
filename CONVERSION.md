# Conciero — HTML → Next.js conversion

Migration of the static Conciero marketing site (34 HTML pages, a Lovable export)
to **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui**, keeping
the original theme, colors, and layout pixel-faithful while adding real SEO,
fonts, and a working consultation form.

## Stack & decisions
- **Next.js 16 App Router**, React 19, TypeScript, `src/` dir, `@/*` import alias.
- **Tailwind v4** (CSS-first config in `src/app/globals.css`). The original CSS
  HSL design tokens are ported verbatim, so every original utility class
  (`bg-background`, `text-accent`, `shadow-luxury`, `bg-[#C4A35A]`, …) resolves to
  the exact same value. Light + dark themes both ported.
- **shadcn/ui** components in `src/components/ui` (`button`, `input`, `textarea`,
  `label`, `accordion`). `components.json` is configured so `npx shadcn@latest add <x>`
  works for any further components. The gold CTA is a `Button` `variant="accent"`.
- **Fonts:** Inter (body) + Playfair Display (display), self-hosted via `next/font`.
- **Forms:** the consultation form posts to a typed **Server Action**
  (`src/app/actions/contact.ts`) with validation + honeypot. Plug your email/CRM
  provider into the single `TODO` there.

## Project layout
```
src/
  app/
    layout.tsx            # fonts, root metadata + title template, viewport, Header/Footer, JSON-LD
    page.tsx              # homepage (composes section components)
    globals.css           # ported design tokens + theme + keyframes
    sitemap.ts            # all 34 routes, grouped by priority
    robots.ts
    actions/contact.ts    # consultation form Server Action (stub)
  components/
    layout/   Header.tsx · Footer.tsx · FloatingCallButton.tsx
    forms/    ConsultationForm.tsx
    sections/ Hero, TrustedBy, PainPoint, Services, ConciergePlusVa,
              WhyConciero, Testimonials, BeyondHiring, HowItWorks, PlansCta
    seo/      JsonLd.tsx   # <JsonLd> + organizationSchema + websiteSchema
    ui/       shadcn primitives
  lib/
    site.ts   # siteConfig (URL, phone, verification), nav, footer links
    seo.ts    # buildMetadata() helper
    utils.ts  # cn()
public/assets # all images copied from the original /assets
```

## SEO (how "ranks on Google" is handled)
- Per-page metadata via `buildMetadata({ title, description, path, keywords })`
  → canonical URL, OpenGraph, Twitter card, robots directives
  (`max-image-preview:large`, `max-snippet:-1`).
- Root `layout.tsx`: `metadataBase`, title template `"%s | Conciero"`,
  Google site verification, default OG/Twitter, `themeColor` via `viewport`.
  > Note: the title template applies to **child** segments only. The homepage
  > (root segment) sets its full title explicitly — see `app/page.tsx`.
- Structured data: Organization + WebSite JSON-LD site-wide; add page-specific
  schema (Article for blog posts, FAQPage, BreadcrumbList) per page with `<JsonLd data={...} />`.
- `sitemap.xml` and `robots.txt` are generated from `sitemap.ts` / `robots.ts`.
- Server Components render full HTML (no client JS needed to see content) — ideal for crawlers.

## Commands
```bash
npm run dev      # http://localhost:3000
npm run build    # production build (Turbopack)
npm run start    # serve the build
npx tsc --noEmit # type check
```

## Converting the remaining pages (the repeatable pattern)
The homepage is the proven template. For each remaining HTML file (e.g. `services.html`):

1. Create `src/app/<route>/page.tsx` (route matches the original path, e.g.
   `services.html` → `app/services/page.tsx`; `blog/ai-human-future/index.html`
   → `app/blog/ai-human-future/page.tsx`).
2. Convert the page **body** to JSX section components in `src/components/sections/`
   (reuse the HTML→JSX rules below). Drop the nav/footer/floating-call markup —
   they come from the root `layout.tsx`. Reuse `ConsultationForm`, `Button`,
   `<JsonLd>`, and any shared cards.
3. Export metadata: copy `<title>`, `<meta description>`, `<link canonical>`,
   keywords from the original `<head>` into
   `export const metadata = buildMetadata({ title, description, path, keywords })`.
   (Child segments auto-get `| Conciero` — strip it from the title string.)
4. Blog posts: add Article JSON-LD via `<JsonLd>`.

### HTML → JSX rules
- `class` → `className` (keep class strings byte-for-byte).
- inline `style="color: rgb(...)"` → `style={{ color: "rgb(...)" }}` (camelCase).
- self-close `<img>`/`<input>`/`<path/>`; `&amp;`→`&`; escape `'` in JSX text as `&apos;`.
- `<img src="/assets/...">` → `next/image` `<Image width height className>`.
- inline `lucide lucide-*` SVGs → `lucide-react` component of that name.
- internal `<a href="/...">` → `next/link` `<Link>`; `tel:`/external stay `<a>`.
- CTA `<a><button class="...accent...">` → `<Button asChild variant="accent"><Link/></Button>`.
- Everything is a Server Component unless it needs interactivity (the original
  export shipped no JS, so default to static).

The remaining routes are enumerated in `src/app/sitemap.ts`.
