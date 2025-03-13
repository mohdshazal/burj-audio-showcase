
import React, { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Homeowner",
    quote: "The team at Burj Audio transformed our living room with an incredible sound system that's both powerful and aesthetically pleasing. Their attention to detail is exceptional!",
    rating: 5
  },
  {
    id: 2,
    name: "James Thompson",
    position: "Restaurant Owner",
    quote: "Our customers constantly comment on the perfect audio balance in our restaurant. Burj Audio created a system that enhances the dining experience without overwhelming conversation.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Tech Enthusiast",
    quote: "As someone who's very particular about sound quality, I was blown away by Burj Audio's expertise. They created a custom solution that exceeded my expectations.",
    rating: 5
  },
  {
    id: 4,
    name: "Amanda Williams",
    position: "Interior Designer",
    quote: "I've recommended Burj Audio to several clients. Their ability to integrate sophisticated audio systems while respecting design aesthetics is truly impressive.",
    rating: 4
  }
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);
  
  const next = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection('right');
    setActive((prev) => (prev + 1) % testimonials.length);
    
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prev = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection('left');
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section id="testimonials" className="section-padding bg-burj-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-burj-accent/20 rounded-full text-sm font-medium text-burj-accent mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
            What Our Clients Say
          </h2>
          <p className="text-white/70">
            Read what our satisfied customers have to say about their experience with Burj Audio.
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden h-[300px] md:h-[250px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 flex flex-col items-center text-center transition-all duration-500 ease-in-out transform",
                  active === index ? "opacity-100 translate-x-0" : "opacity-0",
                  active === index ? "" : direction === 'right' ? "translate-x-full" : "translate-x-[-100%]"
                )}
              >
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-5 h-5",
                        i < testimonial.rating ? "text-burj-accent fill-burj-accent" : "text-gray-400"
                      )}
                    />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl italic mb-6 max-w-2xl">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex flex-col items-center">
                  <div className="font-medium text-lg">{testimonial.name}</div>
                  <div className="text-white/70 text-sm">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  active === index ? "bg-burj-accent w-6" : "bg-white/30 hover:bg-white/50"
                )}
                onClick={() => {
                  setDirection(index > active ? 'right' : 'left');
                  setActive(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 w-10 h-10 bg-burj-dark/50 backdrop-blur rounded-full flex items-center justify-center text-white transition-all hover:bg-burj-accent"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 w-10 h-10 bg-burj-dark/50 backdrop-blur rounded-full flex items-center justify-center text-white transition-all hover:bg-burj-accent"
            onClick={next}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
