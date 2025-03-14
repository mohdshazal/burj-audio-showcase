
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import gsap from "gsap";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [audioActive, setAudioActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    const audioTimer = setInterval(() => {
      setAudioActive(prev => !prev);
    }, 800);

    // GSAP animation for the heading
    gsap.from(".hero-heading", {
      duration: 1.2,
      opacity: 0,
      y: 30,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.5
    });

    // GSAP animation for sound wave effects
    gsap.from(".sound-wave-bar", {
      duration: 1.5, 
      scaleY: 0,
      transformOrigin: "bottom",
      stagger: 0.05,
      ease: "elastic.out(1, 0.3)",
      delay: 1
    });

    return () => {
      clearTimeout(timer);
      clearInterval(audioTimer);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center overflow-hidden bg-gradient-to-b from-black via-black/95 to-black/90"
    >
      {/* Sound wave animation */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-1">
          {[...Array(24)].map((_, i) => (
            <div 
              key={i} 
              className="w-1 bg-gradient-to-t from-white/10 to-white/80 rounded-full sound-wave-bar"
              style={{
                height: `${10 + Math.sin((Date.now() / 500) + i * 0.8) * 30}px`,
                opacity: 0.1 + Math.sin((Date.now() / 1000) + i) * 0.1 + (i % 5 === 0 ? 0.3 : 0),
                transition: "height 0.3s ease-in-out"
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection 
            animation="fade-in-up" 
            delay={200}
            className="flex flex-col space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              <span className="hero-heading block">Elevate Your</span> 
              <span className="hero-heading block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/80 relative">
                Sound
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-white/10 via-white/60 to-white/10 transform animate-reveal"></span>
              </span>
              <span className="hero-heading block">Experience</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Burj Audio delivers exceptional audio system installations and services
              for homes and businesses, creating immersive soundscapes that transform your space.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#services"
                className="button-primary flex items-center group shadow-lg shadow-white/5 hover:shadow-white/10"
              >
                Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/+919495205426?text=Hello,%20I'm%20interested%20in%20your%20audio%20installation%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary border-white/20 hover:border-white/30 flex items-center group"
              >
                Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0" />
                  <path d="M12 14a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5" />
                  <path d="M16 10a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5" />
                </svg>
              </a>
            </div>
          </AnimatedSection>
          
          <AnimatedSection 
            animation="fade-in-left" 
            delay={400}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-[500px] mx-auto">
              {/* Premium sound quality text that appears and fades */}
              <div className="absolute inset-0 flex items-center justify-center z-20 overflow-hidden">
                <div className="sound-quality-text opacity-0">
                  Premium Sound Quality
                </div>
                <div className="sound-quality-text delay-300 opacity-0">
                  Immersive Experience
                </div>
                <div className="sound-quality-text delay-600 opacity-0">
                  Crystal Clear Audio
                </div>
              </div>
              
              <div 
                className={cn(
                  "absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-transparent rounded-3xl blur-3xl opacity-0 transition-opacity duration-1000",
                  loaded && "opacity-20"
                )} 
              />
              
              <img
                src="https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=3540&auto=format&fit=crop"
                alt="Premium Home Audio System"
                className={cn(
                  "relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl transition-all duration-1000 scale-95 opacity-0",
                  loaded && "scale-100 opacity-100"
                )}
                loading="lazy"
              />
              
              {/* Sound wave visualization at bottom */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex items-end justify-center space-x-1 w-3/4">
                {[...Array(18)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-1 bg-white rounded-full sound-wave-bar"
                    style={{
                      height: `${4 + Math.sin((Date.now() / 300) + i * 0.5) * 12}px`,
                      opacity: 0.5 + Math.sin((Date.now() / 500) + i) * 0.5,
                      transitionDelay: `${i * 50}ms`
                    }}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
