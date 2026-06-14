import Image from "next/image";

const logos: { src: string; alt: string; className: string }[] = [
  { src: "/assets/doordash-Dm5DMzcm.png", alt: "DoorDash", className: "h-24 w-auto object-contain" },
  { src: "/assets/zomato-Bw38zjGU.png", alt: "Zomato", className: "h-20 w-auto object-contain" },
  { src: "/assets/instacart-D9XXjjsM.png", alt: "Instacart", className: "h-8 w-auto object-contain" },
  { src: "/assets/careem-BiZZp_Fe.png", alt: "Careem", className: "h-8 w-auto object-contain" },
  { src: "/assets/amazon-BDNKGPvw.png", alt: "Amazon", className: "h-8 w-auto object-contain" },
  { src: "/assets/uber-LOJkVMZ6.png", alt: "Uber", className: "h-8 w-auto object-contain" },
  { src: "/assets/tcs-D-6uohpF.png", alt: "TCS", className: "h-8 w-auto object-contain" },
  { src: "/assets/emirates-CN5PEcJc.png", alt: "Emirates", className: "h-8 w-auto object-contain" },
  { src: "/assets/ey-CXxAfv-4.png", alt: "EY", className: "h-8 w-auto object-contain" },
  { src: "/assets/amex-CXR0fG8s.png", alt: "American Express", className: "h-8 w-auto object-contain" },
  { src: "/assets/marriott-9-sgUbm-.png", alt: "Marriott", className: "h-8 w-auto object-contain" },
  { src: "/assets/taj-BogCt28_.png", alt: "Taj Hotels", className: "h-8 w-auto object-contain" },
  { src: "/assets/emaar-DzwN1O8b.png", alt: "Emaar", className: "h-8 w-auto object-contain" },
];

function LogoRow() {
  return (
    <div className="flex items-center gap-16 px-8">
      {logos.map((logo) => (
        <div
          key={logo.alt}
          className="flex-shrink-0 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity w-36 h-14"
        >
          <Image src={logo.src} alt={logo.alt} width={144} height={56} className={logo.className} />
        </div>
      ))}
    </div>
  );
}

export function TrustedBy() {
  return (
    <section className="py-12 bg-secondary/30 border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-lg font-semibold text-foreground mb-2">
          Trusted by founders, agencies, and growing global teams
        </h3>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          From startups and scaling businesses to busy professionals, Conciero brings reliable, senior-level support from leading global companies
        </p>
      </div>
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none"></div>
        <div className="flex animate-scroll hover:pause" style={{ width: "max-content" }}>
          <LogoRow />
          <LogoRow />
        </div>
      </div>
    </section>
  );
}
