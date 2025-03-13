
import React from "react";
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
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-burj-accent/10 rounded-full text-sm font-medium text-burj-accent mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Premium Audio Solutions
          </h2>
          <p className="text-muted-foreground">
            We offer a comprehensive range of audio installation and service solutions to elevate your sound experience.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <AnimatedSection 
                key={index} 
                delay={100 * index}
                className="service-card backdrop-blur bg-background/50 rounded-xl hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-burj-accent/10 flex items-center justify-center rounded-lg mb-4">
                    <Icon className="h-6 w-6 text-burj-accent" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
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
