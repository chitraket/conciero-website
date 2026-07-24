import Image from "next/image";

// width/height below are proportional to each logo's real file dimensions at its
// intended display height, so next/image never has to fight a CSS override on
// only one axis (that mismatch is what triggers the "width or height modified,
// but not the other" dev warning).
const logos: { src: string; alt: string; width: number; height: number }[] = [
  { src: "/assets/doordash-Dm5DMzcm.png", alt: "DoorDash", width: 94, height: 96 },
  { src: "/assets/zomato-Bw38zjGU.png", alt: "Zomato", width: 80, height: 80 },
  { src: "/assets/instacart-D9XXjjsM.png", alt: "Instacart", width: 200, height: 32 },
  { src: "/assets/careem-BiZZp_Fe.png", alt: "Careem", width: 153, height: 32 },
  { src: "/assets/amazon-BDNKGPvw.png", alt: "Amazon", width: 106, height: 32 },
  { src: "/assets/uber-LOJkVMZ6.png", alt: "Uber", width: 91, height: 32 },
  { src: "/assets/tcs-D-6uohpF.png", alt: "TCS", width: 80, height: 32 },
  { src: "/assets/emirates-CN5PEcJc.png", alt: "Emirates", width: 46, height: 32 },
  { src: "/assets/ey-CXxAfv-4.png", alt: "EY", width: 32, height: 32 },
  { src: "/assets/amex-CXR0fG8s.png", alt: "American Express", width: 32, height: 32 },
  { src: "/assets/marriott-9-sgUbm-.png", alt: "Marriott", width: 141, height: 32 },
  { src: "/assets/taj-BogCt28_.png", alt: "Taj Hotels", width: 36, height: 32 },
  { src: "/assets/emaar-DzwN1O8b.png", alt: "Emaar", width: 161, height: 32 },
];

function LogoRow() {
  return (
    <div className="flex items-center gap-16 px-8">
      {logos.map((logo) => (
        <div
          key={logo.alt}
          className="flex-shrink-0 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity w-36 h-14"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="object-contain"
          />
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
