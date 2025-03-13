
import React from "react";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

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
        "fixed bottom-8 left-8 z-50 flex items-center justify-center",
        "w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110",
        "transition-all duration-300 animate-subtle-bounce"
      )}
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
      <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-[#25D366]">
        1
      </span>
    </a>
  );
};

export default WhatsAppButton;
