
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center overflow-hidden bg-black"
    >
      {/* Audio wave background effect */}
      <div className="absolute inset-0 z-0 opacity-30">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="absolute h-1 bg-white/30 rounded-full"
            style={{
              left: '10%',
              right: '10%',
              top: `${30 + i * 8}%`,
              animation: `pulse 2s ease-in-out ${i * 0.2}s infinite`
            }}
          />
        ))}
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection 
            animation="fade-in-up" 
            delay={200}
            className="flex flex-col space-y-8"
          >
            <span className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/10 animate-pulse-custom">
              Premium Audio Experience
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Elevate Your <span className="text-burj-silver relative">
                Sound
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white/20 transform animate-reveal"></span>
              </span> Experience
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Burj Audio delivers exceptional audio system installations and services
              for homes and businesses, creating immersive soundscapes that transform your space.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#services"
                className="button-primary flex items-center group"
              >
                Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#portfolio"
                className="button-secondary"
              >
                View Our Work
              </a>
            </div>
          </AnimatedSection>
          
          <AnimatedSection 
            animation="fade-in-left" 
            delay={400}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-[500px] mx-auto">
              {/* Premium glow effect */}
              <div 
                className={cn(
                  "absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl blur-3xl opacity-0 transition-opacity duration-1000",
                  loaded && "opacity-40"
                )} 
              />
              
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                alt="Premium Home Cinema System"
                className={cn(
                  "relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl transition-all duration-1000 scale-95 opacity-0",
                  loaded && "scale-100 opacity-100"
                )}
                loading="lazy"
              />
              
              {/* Floating elements with premium animations */}
              <div className="absolute -top-6 -right-6 bg-white/5 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/10 animate-float z-20">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium text-white">Premium Sound Quality</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white/5 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/10 animate-float z-20" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium text-white">Expert Installation</span>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white/5 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/10 animate-float z-20" style={{ animationDelay: "2.2s" }}>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium text-white">Custom Solutions</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
