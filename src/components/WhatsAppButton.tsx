
import React from "react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton = ({ 
  phoneNumber,
  message = "Hello, I'm interested in your audio installation services."
}: WhatsAppButtonProps) => {
  const formattedPhone = phoneNumber.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-36 right-8 z-50 flex items-center justify-center",
        "w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-105",
        "transition-all duration-300"
      )}
      aria-label="Contact on WhatsApp"
    >
      {/* Using the standard WhatsApp icon */}
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0" />
        <path d="M12 14a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5" />
        <path d="M16 10a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5" />
      </svg>
      <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-[#25D366]">
        1
      </span>
    </a>
  );
};

export default WhatsAppButton;
