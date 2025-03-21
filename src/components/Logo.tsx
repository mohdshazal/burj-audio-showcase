
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

  const textColor = variant === "light" ? "text-white" : "text-white";
  const accentColor = "text-burj-silver";

  return (
    <div className={cn("flex items-center", className)}>
      <div className={cn("relative", sizes[size], animated && "overflow-hidden")}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"h-full w-auto"}
          style={{ animationDelay: "100ms" }}
        >
          <rect
            width="40"
            height="40"
            rx="8"
            className="fill-white/10"
          />
          <path
            d="M20 8L12 20L20 32"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={'text-white'}
          />
          <path
            d="M20 8L28 20L20 32"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={'text-burj-silver'}
          />
          <circle cx="20" cy="20" r="2" className="fill-white" />
        </svg>
      </div>
      <div
        className={cn(
          "ml-2 font-sans font-medium tracking-wider",
          textColor,
          animated && "animate-fade-in-right"
        )}
        style={{ animationDelay: "300ms" }}
      >
        <span className="text-white">AUDIO</span>
        <span className={cn(accentColor, "ml-1 font-light")}>MASTER</span>
      </div>
    </div>
  );
};

export default Logo;
