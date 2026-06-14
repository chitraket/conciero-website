const reasons: { title: string; body: string }[] = [
  {
    title: "Built by Experienced Founders",
    body: "Conciero is built by professionals with 10+ years of industry experience, so we understand exactly what modern clients expect from concierge and assistant support.",
  },
  {
    title: "Senior-Level Assistants Only",
    body: "We work exclusively with senior professionals, averaging 10+ years of experience, not entry-level virtual assistants.",
  },
  {
    title: "Proactive, Partner-Level Support",
    body: "Our assistants anticipate needs, think ahead, and operate like a trusted extension of your life or business.",
  },
  {
    title: "Team-Backed, Not Solo Freelancers",
    body: "Every concierge or assistant is supported by a managed team, including senior managers and specialized experts when required.",
  },
  {
    title: "AI-Fluent & Tech-Savvy by Design",
    body: "Our assistants are trained to work with modern tools, automations, and AI-powered workflows to improve speed and efficiency.",
  },
  {
    title: "Try Risk-Free, Always",
    body: "We offer a 7-day free trial and unlimited free replacement, because we believe in the quality of our people.",
  },
];

export function WhyConciero() {
  return (
    <section id="why-conciero" className="py-10 md:py-12 bg-background scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-3 text-foreground">
            Why Conciero Is Different
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Built for people who expect more than basic assistance.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-card border border-border border-l-4 border-l-accent rounded-xl p-4 md:p-6 shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              <h3 className="text-base md:text-lg font-semibold mb-2 text-foreground">{reason.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{reason.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
