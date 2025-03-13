
import React from "react";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of audio systems do you install?",
    answer: "We specialize in premium audio installations including home theater systems, multi-room audio setups, outdoor speaker systems, and high-end stereo configurations. We work with top-tier brands to deliver exceptional sound quality."
  },
  {
    question: "How long does a typical installation take?",
    answer: "Installation timeframes vary depending on the complexity of the project. A basic single-room setup might take 1-2 days, while a comprehensive whole-home audio system could take 1-2 weeks. We provide detailed timelines during the consultation process."
  },
  {
    question: "Do you offer maintenance services for existing systems?",
    answer: "Yes, we provide comprehensive maintenance, troubleshooting, and upgrade services for existing audio systems, even if we didn't perform the original installation. Our technicians are trained to work with a wide range of audio equipment."
  },
  {
    question: "Can you integrate audio systems with smart home technology?",
    answer: "Absolutely. We specialize in integrating audio systems with various smart home platforms including Control4, Crestron, Savant, and others. We can also integrate with voice assistants like Alexa, Google Assistant, and Siri."
  },
  {
    question: "Do you provide consultations before installation?",
    answer: "Yes, we offer detailed consultations to understand your space, preferences, and budget. Our experts will assess your room acoustics and recommend the optimal audio solution tailored to your specific needs."
  },
  {
    question: "What warranties do you offer on installations?",
    answer: "We provide a comprehensive warranty on all our installations, typically covering both labor and parts for 1-2 years. Additionally, the equipment comes with manufacturer warranties which we help you manage if any issues arise."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-black to-card/80">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-4 border border-white/10">
            Questions & Answers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-white/70">
            Get answers to common questions about our audio installation services and processes.
          </p>
        </AnimatedSection>

        <AnimatedSection 
          className="max-w-3xl mx-auto bg-gradient-to-br from-black/70 to-black/40 rounded-xl p-6 md:p-8 backdrop-blur-sm border border-white/5 shadow-xl"
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="border-white/10 last:border-b-0 rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/5"
              >
                <AccordionTrigger className="text-left text-white hover:text-white/90 hover:no-underline py-3 px-4 text-base group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-white/70 text-sm px-4 pb-5 pt-0">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;
