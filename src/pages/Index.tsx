
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
    document.title = "Burj Audio | Premium Audio Systems & Installation";
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <InitialLoader />;
  }

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-background">
      <Header />
      <main className="flex-grow w-full">
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton phoneNumber="+15559876543" />
    </div>
  );
};

export default Index;
