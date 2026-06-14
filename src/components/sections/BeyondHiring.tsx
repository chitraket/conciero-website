type Row = {
  feature: string;
  conciero: string;
  va: string;
  freelancers: string;
};

const rows: Row[] = [
  {
    feature: "Experience",
    conciero: "Senior-level (10+ years avg)",
    va: "1–3 years",
    freelancers: "Varies",
  },
  {
    feature: "AI / Automation",
    conciero: "AI-fluent & automation-ready",
    va: "Basic",
    freelancers: "Low",
  },
  {
    feature: "Onboarding",
    conciero: "Ready in 24 hours",
    va: "Days / weeks",
    freelancers: "Varies",
  },
  {
    feature: "Reliability",
    conciero: "Managed, team-backed support",
    va: "Limited",
    freelancers: "Unpredictable",
  },
  {
    feature: "Replacement",
    conciero: "Unlimited free replacement",
    va: "Paid / limited",
    freelancers: "None",
  },
  {
    feature: "Scope",
    conciero: "Business + personal concierge",
    va: "Only business",
    freelancers: "Narrow",
  },
  {
    feature: "Security & Confidentiality",
    conciero: "NDA-backed, access-controlled & global compliance-ready",
    va: "Varies",
    freelancers: "No formal safeguards",
  },
];

function CheckIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DesktopRow({ row }: { row: Row }) {
  return (
    <div className="grid grid-cols-4 hover:bg-secondary/30 transition-colors duration-200">
      <div className="py-4 px-6 font-medium text-foreground text-sm flex items-center">{row.feature}</div>
      <div className="py-4 px-6 bg-accent/5 border-x border-accent/10">
        <span className="text-accent font-medium flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <CheckIcon className="w-3 h-3 text-accent" />
          </span>
          <span className="text-sm">{row.conciero}</span>
        </span>
      </div>
      <div className="py-4 px-6 text-center text-muted-foreground text-sm flex items-center justify-center">
        {row.va}
      </div>
      <div className="py-4 px-6 text-center text-muted-foreground text-sm flex items-center justify-center">
        {row.freelancers}
      </div>
    </div>
  );
}

function MobileCard({ row }: { row: Row }) {
  return (
    <div className="flex-shrink-0 w-[260px] bg-card rounded-xl border border-border/30 p-4 shadow-soft">
      <h4 className="font-semibold text-foreground text-sm mb-3 pb-2 border-b border-border/30">{row.feature}</h4>
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
            <CheckIcon className="w-3 h-3 text-accent" />
          </span>
          <div>
            <span className="text-xs text-accent font-medium block mb-0.5">Conciero</span>
            <span className="text-sm text-foreground font-medium">{row.conciero}</span>
          </div>
        </div>
        <div className="flex items-start gap-2 opacity-60">
          <span className="w-5 h-5 flex-shrink-0 mt-0.5"></span>
          <div>
            <span className="text-xs text-muted-foreground block mb-0.5">Traditional VA</span>
            <span className="text-sm text-muted-foreground">{row.va}</span>
          </div>
        </div>
        <div className="flex items-start gap-2 opacity-60">
          <span className="w-5 h-5 flex-shrink-0 mt-0.5"></span>
          <div>
            <span className="text-xs text-muted-foreground block mb-0.5">Freelancers</span>
            <span className="text-sm text-muted-foreground">{row.freelancers}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileGroup() {
  return (
    <div className="flex flex-col gap-3 px-4">
      <div className="flex gap-3">
        {rows.slice(0, 4).map((row) => (
          <MobileCard key={row.feature} row={row} />
        ))}
      </div>
      <div className="flex gap-3">
        {rows.slice(4).map((row) => (
          <MobileCard key={row.feature} row={row} />
        ))}
      </div>
    </div>
  );
}

export function BeyondHiring() {
  return (
    <section className="py-10 bg-gradient-to-b from-secondary/20 via-background to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-accent font-medium tracking-widest uppercase text-xs md:text-sm mb-3">The Smarter Choice</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Beyond Hiring. Beyond Freelancers.
          </h2>
        </div>
        <div className="max-w-6xl mx-auto hidden lg:block">
          <div className="bg-card rounded-xl shadow-xl border border-border/30 overflow-hidden">
            <div className="grid grid-cols-4 bg-gradient-to-r from-primary via-primary to-primary/90">
              <div className="py-4 px-6 text-primary-foreground/80 font-medium text-sm tracking-wide uppercase">
                Feature
              </div>
              <div className="py-4 px-6">
                <span className="text-primary-foreground font-semibold text-sm tracking-wide uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>Conciero
                </span>
              </div>
              <div className="py-4 px-6 text-center text-primary-foreground/60 font-medium text-sm tracking-wide uppercase">
                Traditional VA Agencies
              </div>
              <div className="py-4 px-6 text-center text-primary-foreground/60 font-medium text-sm tracking-wide uppercase">
                Freelancers / Contractors
              </div>
            </div>
            <div className="divide-y divide-border/40">
              {rows.map((row) => (
                <DesktopRow key={row.feature} row={row} />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:hidden relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          <div className="flex animate-scroll-comparison" style={{ width: "max-content" }}>
            <MobileGroup />
            <MobileGroup />
          </div>
        </div>
        <p className="text-center text-muted-foreground mt-6 text-xs md:text-sm tracking-wide italic">
          Designed for people who value reliability, discretion, and senior-level support.
        </p>
      </div>
    </section>
  );
}
