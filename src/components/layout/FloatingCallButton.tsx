import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/site";

/** Floating "Call us" button, fixed bottom-right (WhatsApp green). */
export function FloatingCallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a href={`tel:${siteConfig.phone}`}>
        <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-full shadow-lg bg-[#25D366] text-white hover:bg-[#128C7E] hover:scale-110 transition-all px-5 h-14 flex items-center gap-2">
          <MessageCircle width={20} height={20} />
          <span className="text-sm font-semibold">Call us</span>
        </button>
      </a>
    </div>
  );
}
