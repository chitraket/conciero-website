import Link from "next/link";

import { Button } from "@/components/ui/button";

export function PlansCta() {
  return (
    <section className="py-8 md:py-10 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-foreground">
            Plans Starting From $7.99/hour
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
            Flexible pricing for virtual assistants and concierge support - designed to adapt to your needs, wherever you are.
          </p>
          <Button asChild variant="accent" className="h-11 rounded-md px-6 md:px-8">
            <Link href="/pricing">View Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
