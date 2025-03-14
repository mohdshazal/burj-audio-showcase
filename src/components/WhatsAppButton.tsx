
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
        "fixed bottom-48 right-8 z-50 flex items-center justify-center",
        "w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-105",
        "transition-all duration-300"
      )}
      aria-label="Contact on WhatsApp"
    >
      {/* Standard WhatsApp icon */}
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm6.063 17.093a5.39 5.39 0 01-2.285 1.375c-.628.155-1.405.247-2.468-.125a13.437 13.437 0 01-3.38-1.247c-1.365-.703-2.563-1.651-3.593-2.82-1.025-1.167-1.662-2.42-1.962-3.536-.274-1.02-.354-1.92-.131-2.704.2-.7.656-1.262 1.209-1.64l.516-.39c.215-.167.445-.35.712-.016.309.387.908 1.5 1.207 2.055.195.363.162.724-.067.995-.153.181-.3.337-.432.475a1.07 1.07 0 00-.076 1.569c.666.802 1.38 1.499 2.148 2.098.34.265.751.37 1.15.22.417-.157.787-.45 1.079-.792.296-.35.655-.438 1.036-.282.383.155 2.361 1.152 2.769 1.362.407.21.679.351.778.602.104.251.104.906-.255 1.78z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
