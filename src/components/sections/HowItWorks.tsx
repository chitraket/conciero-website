import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type Step = {
  num: string;
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    num: "01",
    title: "Tell Us What You Need",
    body: "Share your priorities on a quick call.",
  },
  {
    num: "02",
    title: "Meet & Interview Your Assistant",
    body: "We match you with a senior, pre-vetted assistant - and you approve the fit.",
  },
  {
    num: "03",
    title: "Start Your 7-Day Free Trial",
    body: "Experience real impact from day one - no upfront commitment.",
  },
  {
    num: "04",
    title: "Ongoing, Flexible Support",
    body: "Adjust hours, tasks, or services as your needs evolve.",
  },
];

const desktopConnectorDelays = ["2.2s", "2.7s", "3.2s"];
const desktopCircleDelays = ["0.4s", "0.7s", "1s", "1.3s"];
const desktopPulseDelays = ["1.5s", "1.7s", "1.9s", "2.1s"];
const desktopTextDelays = ["0.7s", "1s", "1.3s", "1.6s"];
const desktopNumberDelays = ["0.7s", "0.9s", "1.1s", "1.3s"];

const mdItemDelays = ["0.3s", "0.45s", "0.6s", "0.75s"];
const mdCircleDelays = ["0.4s", "0.55s", "0.7s", "0.85s"];

const mobileItemDelays = ["0.2s", "0.32s", "0.44s", "0.56s"];
const mobileCircleDelays = ["0.3s", "0.42s", "0.54s", "0.66s"];
const mobileLineDelays = ["0.5s", "0.62s", "0.74s"];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-12 md:py-16 scroll-mt-24 overflow-hidden relative"
      style={{ backgroundColor: "rgb(196, 163, 90)" }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0px)",
          backgroundSize: "32px 32px",
        }}
      ></div>
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div
          className="text-center mb-12"
          style={{ opacity: 1, transform: "translateY(0px)", transition: "0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "rgb(26, 26, 26)" }}>
            Get Started Within 24 Hours
          </h2>
          <p className="text-sm" style={{ color: "rgba(26, 26, 26, 0.7)" }}>
            Simple. Personal. No long-term commitment.
          </p>
        </div>
        <div className="max-w-5xl lg:max-w-7xl mx-auto">
          {/* Desktop timeline */}
          <div className="hidden lg:block">
            <div className="flex items-start justify-between relative">
              {/* Line runs from the center of circle 01 (12.5%) to circle 04 (87.5%),
                  vertically centered on the circles so the chevrons sit on one line. */}
              <div className="absolute top-[44px] left-[12.5%] right-[12.5%] h-[2px] z-0 -translate-y-1/2">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
                ></div>
                <div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    backgroundColor: "rgb(26, 26, 26)",
                    width: "100%",
                    transition: "width 3s cubic-bezier(0.16, 1, 0.3, 1) 0.8s",
                  }}
                ></div>
              </div>
              {desktopConnectorDelays.map((delay, i) => (
                <div
                  key={i}
                  className="absolute top-[44px] z-10"
                  style={{
                    left: `calc(${(i + 1) * 25}% - 10px)`,
                    opacity: 1,
                    transform: "translateY(-50%) translateX(0px) scale(1)",
                    transition: `0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}`,
                  }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: "rgb(26, 26, 26)" }}
                  >
                    <ChevronRight className="w-3 h-3 text-white" />
                  </div>
                </div>
              ))}
              {steps.map((step, i) => (
                <div key={step.num} className="flex-1 flex flex-col items-center relative z-10">
                  <div
                    className="relative mb-6"
                    style={{
                      opacity: 1,
                      transform: "scale(1)",
                      transition: `0.9s cubic-bezier(0.34, 1.56, 0.64, 1) ${desktopCircleDelays[i]}`,
                    }}
                  >
                    <div
                      className="absolute -inset-2 rounded-full"
                      style={{
                        border: "2px solid rgba(26, 26, 26, 0.3)",
                        animation: `2s ease-out ${desktopPulseDelays[i]} infinite normal none running how-it-works-pulse`,
                      }}
                    ></div>
                    <div
                      className="w-[88px] h-[88px] rounded-full shadow-lg flex items-center justify-center"
                      style={{ backgroundColor: "rgb(255, 255, 255)", border: "2px solid rgb(26, 26, 26)" }}
                    >
                      <span
                        className="text-2xl font-bold"
                        style={{
                          color: "rgb(196, 163, 90)",
                          opacity: 1,
                          transition: `opacity 0.4s ease-out ${desktopNumberDelays[i]}`,
                        }}
                      >
                        {step.num}
                      </span>
                    </div>
                  </div>
                  <div
                    className="text-center max-w-[200px]"
                    style={{
                      opacity: 1,
                      transform: "translateY(0px)",
                      transition: `0.8s cubic-bezier(0.16, 1, 0.3, 1) ${desktopTextDelays[i]}`,
                    }}
                  >
                    <h3 className="text-base font-bold mb-2 leading-tight" style={{ color: "rgb(26, 26, 26)" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(26, 26, 26, 0.7)" }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Tablet grid */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex items-start gap-4"
                style={{
                  opacity: 1,
                  transform: "translateX(0px)",
                  transition: `0.7s cubic-bezier(0.16, 1, 0.3, 1) ${mdItemDelays[i]}`,
                }}
              >
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-full shadow-md flex items-center justify-center"
                  style={{
                    backgroundColor: "rgb(255, 255, 255)",
                    border: "2px solid rgb(26, 26, 26)",
                    opacity: 1,
                    transform: "scale(1)",
                    transition: `0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${mdCircleDelays[i]}`,
                  }}
                >
                  <span className="text-xl font-bold" style={{ color: "rgb(196, 163, 90)" }}>
                    {step.num}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1" style={{ color: "rgb(26, 26, 26)" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(26, 26, 26, 0.7)" }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Mobile stack */}
          <div className="md:hidden space-y-6">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex items-start gap-4"
                style={{
                  opacity: 1,
                  transform: "translateX(0px)",
                  transition: `0.6s cubic-bezier(0.16, 1, 0.3, 1) ${mobileItemDelays[i]}`,
                }}
              >
                <div className="relative flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full shadow-md flex items-center justify-center"
                    style={{
                      backgroundColor: "rgb(255, 255, 255)",
                      border: "2px solid rgb(26, 26, 26)",
                      transform: "scale(1)",
                      transition: `transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${mobileCircleDelays[i]}`,
                    }}
                  >
                    <span className="text-lg font-bold" style={{ color: "rgb(196, 163, 90)" }}>
                      {step.num}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="relative w-0.5 h-6 mt-2">
                      <div className="absolute inset-0" style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}></div>
                      <div
                        className="absolute inset-x-0 top-0"
                        style={{
                          backgroundColor: "rgb(26, 26, 26)",
                          height: "100%",
                          transition: `height 0.4s ease-out ${mobileLineDelays[i]}`,
                        }}
                      ></div>
                    </div>
                  )}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-base font-bold mb-1" style={{ color: "rgb(26, 26, 26)" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(26, 26, 26, 0.7)" }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="text-center mt-10"
          style={{
            opacity: 1,
            transform: "translateY(0px) scale(1)",
            transition: "0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.5s",
          }}
        >
          <Button
            asChild
            className="h-11 rounded-md font-semibold group px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: "rgb(26, 26, 26)", color: "rgb(255, 255, 255)" }}
          >
            <Link href="/contact">
              Book a quick consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
      <style>{`
        @keyframes how-it-works-pulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }

          50% {
            transform: scale(1.15);
            opacity: 0;
          }

          100% {
            transform: scale(1.15);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
