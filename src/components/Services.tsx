
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Speaker, 
  Headphones, 
  Home, 
  Music, 
  Radio, 
  MonitorSpeaker, 
  Settings, 
  Cable 
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Speaker,
    title: "Premium Speaker Installation",
    description: "Precise installation of high-end audio speakers to achieve optimal sound quality throughout your space."
  },
  {
    icon: Home,
    title: "Home Cinema Systems",
    description: "Complete home theater setup with surround sound systems for an immersive cinematic experience."
  },
  {
    icon: Music,
    title: "Multi-Room Audio Solutions",
    description: "Seamless audio distribution systems allowing synchronized or independent audio control across multiple rooms."
  },
  {
    icon: MonitorSpeaker,
    title: "Commercial Audio Systems",
    description: "Tailored audio solutions for businesses, retail spaces, and commercial venues."
  },
  {
    icon: Settings,
    title: "System Maintenance & Repair",
    description: "Professional maintenance, troubleshooting, and repair services for all audio and speaker systems."
  },
  {
    icon: Cable,
    title: "Custom Wiring & Integration",
    description: "Expert wiring, cable management, and integration with smart home systems."
  },
  {
    icon: Radio,
    title: "Acoustic Consultation",
    description: "Professional acoustic analysis and recommendations to optimize sound quality in any space."
  },
  {
    icon: Headphones,
    title: "Audio Equipment Consultation",
    description: "Expert advice on selecting the perfect audio equipment to match your needs and preferences."
  }
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-black/95 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-4 border border-white/10">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
            Premium Audio Solutions
          </h2>
          <p className="text-white/70">
            We offer a comprehensive range of audio installation and service solutions to elevate your sound experience.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <AnimatedSection 
                key={index} 
                delay={100 * index}
                className="group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div 
                  className={cn(
                    "service-card backdrop-blur h-full border border-white/5 rounded-xl transition-all duration-500",
                    isHovered ? "bg-gradient-to-br from-white/10 to-black/80 translate-y-[-5px] shadow-lg scale-105" : "bg-card/90 hover:bg-card/80"
                  )}
                >
                  <div className="p-6">
                    <div 
                      className={cn(
                        "w-12 h-12 flex items-center justify-center rounded-lg mb-4 transition-all duration-500",
                        isHovered ? "bg-gradient-to-br from-white/30 to-white/5" : "bg-white/5" 
                      )}
                    >
                      <Icon 
                        className={cn(
                          "h-6 w-6 transition-all duration-500",
                          isHovered ? "text-white scale-110" : "text-white/80"
                        )} 
                      />
                    </div>
                    <h3 className="text-xl font-medium mb-2 text-white">{service.title}</h3>
                    <p className="text-white/70">{service.description}</p>
                    
                    {/* Animated underline on hover */}
                    <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-white/5 via-white/30 to-white/5 transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
