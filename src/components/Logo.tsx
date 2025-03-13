
import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  animated?: boolean;
}

const Logo = ({ 
  className, 
  size = "md", 
  variant = "dark",
  animated = true
}: LogoProps) => {
  const sizes = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  };

  const textColor = variant === "light" ? "text-white" : "text-burj-dark";
  const accentColor = "text-burj-accent";

  return (
    <div className={cn("flex items-center", className)}>
      <div className={cn("relative", sizes[size], animated && "overflow-hidden")}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            "h-full w-auto",
            animated && "animate-scale-in"
          )}
          style={{ animationDelay: "100ms" }}
        >
          <circle 
            cx="20" 
            cy="20" 
            r="20" 
            className={variant === "light" ? "fill-white" : "fill-burj-dark"} 
            fillOpacity="0.1"
          />
          <path
            d="M20 5C20 5 12 12 12 20C12 28 20 35 20 35"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className={accentColor}
          />
          <path
            d="M20 5C20 5 28 12 28 20C28 28 20 35 20 35"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className={textColor}
          />
          <circle cx="20" cy="20" r="3" className={accentColor} />
        </svg>
      </div>
      <div 
        className={cn(
          "ml-2 font-sans font-medium tracking-tight", 
          textColor,
          animated && "animate-fade-in-right"
        )}
        style={{ animationDelay: "300ms" }}
      >
        <span>Burj</span>
        <span className={accentColor}> Audio</span>
      </div>
    </div>
  );
};

export default Logo;
