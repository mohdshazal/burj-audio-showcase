
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FAQ from "@/components/FAQ";
import WhatsAppButton from "@/components/WhatsAppButton";
import InitialLoader from "@/components/InitialLoader";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // SEO optimization
    document.title = "Burj Audio | Premium Audio Systems & Installation";
    
    // Add meta descriptions for SEO
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Burj Audio provides premium audio system installation, home cinema setups, and professional sound solutions. Expert installation and consultation services.';
    document.head.appendChild(metaDescription);
    
    // Add keywords for SEO
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'audio systems, speaker installation, home cinema, sound systems, premium audio, surround sound, Burj Audio';
    document.head.appendChild(metaKeywords);
    
    // Add Open Graph tags for social sharing
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'Burj Audio | Premium Audio Systems & Installation';
    document.head.appendChild(ogTitle);
    
    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = 'Experience premium audio with Burj Audio - specialists in high-end audio system installation and home cinema solutions.';
    document.head.appendChild(ogDescription);
    
    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = 'website';
    document.head.appendChild(ogType);
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    
    return () => {
      clearTimeout(timer);
      // Clean up meta tags when component unmounts
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDescription);
      document.head.removeChild(ogType);
    };
  }, []);

  if (isLoading) {
    return <InitialLoader />;
  }

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-black to-black/95">
      <Header />
      <main className="flex-grow w-full animate-fade-in">
        <Hero />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <Services />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <Portfolio />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <Testimonials />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <FAQ />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <About />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton phoneNumber="+15559876543" />
    </div>
  );
};

export default Index;
