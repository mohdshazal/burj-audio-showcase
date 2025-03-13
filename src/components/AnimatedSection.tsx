
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-in" | "fade-in-right" | "fade-in-left" | "fade-in-up" | "fade-in-down" | "scale-in" | "bounce-in" | "reveal-up";
  threshold?: number;
  duration?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const AnimatedSection = ({ 
  children, 
  className,
  delay = 0,
  animation = "fade-in",
  threshold = 0.1,
  duration = 600,
  onMouseEnter,
  onMouseLeave
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: threshold,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay, threshold]);

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-in-up":
        return "opacity-0 translate-y-10";
      case "fade-in-down":
        return "opacity-0 -translate-y-10";
      case "fade-in-right":
        return "opacity-0 -translate-x-10";
      case "fade-in-left":
        return "opacity-0 translate-x-10";
      case "scale-in":
        return "opacity-0 scale-95";
      case "bounce-in":
        return "opacity-0 scale-90";
      case "reveal-up":
        return "opacity-0 translate-y-5 overflow-hidden before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-gradient-to-t before:from-white/10 before:to-transparent before:translate-y-full";
      default:
        return "opacity-0";
    }
  };

  const getActiveClass = () => {
    switch (animation) {
      case "bounce-in":
        return "opacity-100 scale-100 motion-safe:animate-[bounce_0.5s_ease-out]";
      case "reveal-up":
        return "opacity-100 translate-y-0 before:translate-y-0";
      default:
        return "opacity-100 translate-x-0 translate-y-0 scale-100";
    }
  };

  return (
    <div
      ref={sectionRef}
      className={cn(
        getAnimationClass(),
        isVisible && getActiveClass(),
        "transition-all relative",
        className
      )}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
