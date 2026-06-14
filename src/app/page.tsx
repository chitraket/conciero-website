import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { PainPoint } from "@/components/sections/PainPoint";
import { Services } from "@/components/sections/Services";
import { ConciergePlusVa } from "@/components/sections/ConciergePlusVa";
import { WhyConciero } from "@/components/sections/WhyConciero";
import { Testimonials } from "@/components/sections/Testimonials";
import { BeyondHiring } from "@/components/sections/BeyondHiring";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PlansCta } from "@/components/sections/PlansCta";

// Root-segment pages don't inherit the layout's title template, so set the
// full title here to match the original exactly.
export const metadata: Metadata = buildMetadata({
  title: "Virtual Assistant & Concierge Services | Conciero",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <PainPoint />
      <Services />
      <ConciergePlusVa />
      <WhyConciero />
      <Testimonials />
      <BeyondHiring />
      <HowItWorks />
      <PlansCta />
    </>
  );
}
