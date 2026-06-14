import { Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  segment: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "“Conciero helped me reclaim 10+ hours every week. My assistant doesn't just complete tasks - she improves my entire workflow.”",
    name: "Arjun M.",
    role: "Founder, NimbusSoft",
    segment: "SaaS Startup",
  },
  {
    quote:
      "“Their automation skills alone make them stand apart. Our assistant built systems that saved our team dozens of hours a month.”",
    name: "Emily R.",
    role: "CEO, BrightWave Media",
    segment: "Marketing Agency",
  },
  {
    quote:
      "“My assistant handles customer ops, vendors, and content coordination - everything. It feels like having a dependable team member, not a VA.”",
    name: "Liam K.",
    role: "CEO, UrbanHaven",
    segment: "E-Commerce / D2C",
  },
  {
    quote:
      "“Highly professional, proactive, and incredibly tech-savvy. The quality is far above any VA service we've tried.”",
    name: "Jennifer S.",
    role: "Operations Head, HarborView Consulting",
    segment: "Consulting Firm",
  },
  {
    quote:
      "“As a creator managing a huge community, Conciero has been life-changing. My assistant handles scheduling, outreach, and content flawlessly.”",
    name: "Roberto L.",
    role: "Founder, CreatorSphere Studio",
    segment: "Coach / Creator",
  },
  {
    quote:
      "“The blend of senior experience and AI fluency is unmatched. Tasks get done faster, smarter, and with zero oversight.”",
    name: "James W.",
    role: "COO, Apex Global Enterprises",
    segment: "Corporate Lead",
  },
];

function TestimonialCard({ quote, name, role, segment }: Testimonial) {
  return (
    <div className="flex-shrink-0 w-[280px] md:w-[320px] bg-card rounded-xl p-4 md:p-5 border border-border/50 shadow-soft hover:shadow-card transition-all duration-300">
      <div className="mb-3 md:mb-4">
        <svg className="w-6 h-6 md:w-8 md:h-8 text-accent/40" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <div className="flex gap-1 mb-3 md:mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-foreground text-xs md:text-sm leading-relaxed mb-4 md:mb-6 min-h-[70px] md:min-h-[80px]">
        {quote}
      </p>
      <div className="border-t border-border/50 pt-3 md:pt-4 mt-auto">
        <p className="font-semibold text-foreground text-sm md:text-base">{name}</p>
        <p className="text-xs text-muted-foreground mt-1">{role}</p>
        <p className="text-xs text-accent font-medium mt-1">{segment}</p>
      </div>
    </div>
  );
}

function TestimonialRow() {
  return (
    <div className="flex gap-3 md:gap-5 px-3 md:px-4">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.name} {...testimonial} />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-10 md:py-12 bg-gradient-to-b from-background via-secondary/20 to-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-accent font-medium tracking-widest uppercase text-xs md:text-sm mb-2 md:mb-3">
            Testimonials
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from founders, teams, agencies & professionals who trust Conciero every day.
          </p>
        </div>
      </div>
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        <div className="flex animate-scroll-testimonials hover:pause" style={{ width: "max-content" }}>
          <TestimonialRow />
          <TestimonialRow />
        </div>
      </div>
    </section>
  );
}
