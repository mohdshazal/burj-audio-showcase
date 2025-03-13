
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute h-72 w-72 rounded-full bg-burj-accent top-1/3 -left-20 animate-blob" />
        <div className="absolute h-96 w-96 rounded-full bg-burj-accent/80 bottom-1/3 -right-24 animate-blob" style={{ animationDelay: "2s" }} />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="flex flex-col space-y-6">
            <span className="inline-block px-4 py-1.5 bg-burj-accent/10 rounded-full text-sm font-medium text-burj-accent">
              Premium Audio Experience
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Elevate Your Sound <span className="text-burj-accent">Experience</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Burj Audio delivers exceptional audio system installations and services
              for homes and businesses, creating immersive soundscapes that transform your space.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#services"
                className="button-primary flex items-center"
              >
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
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
            delay={200}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-[500px] mx-auto">
              {/* Main image */}
              <div className="absolute inset-0 bg-gradient-to-br from-burj-accent/20 to-transparent rounded-3xl blur-3xl opacity-30" />
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                alt="Premium Audio System Installation"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl"
                loading="lazy"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg animate-float z-20">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Premium Sound Quality</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg animate-float z-20" style={{ animationDelay: "1s" }}>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-burj-accent rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Expert Installation</span>
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
