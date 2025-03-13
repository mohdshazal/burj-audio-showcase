
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const InitialLoader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 200);

    const timer = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center">
      <div className="relative mb-8">
        <Logo size="lg" variant="light" />
      </div>
      
      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-white rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="mt-4 text-white/50 text-sm font-light">
        {progress === 100 ? "Ready" : "Loading..."}
      </div>
      
      {/* Audio wave animation */}
      <div className="absolute bottom-24 w-32 flex justify-between items-end">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="w-1.5 bg-white/80 rounded-full"
            style={{
              height: `${15 + Math.sin(i * 0.8) * 15}px`,
              animation: `pulse 1.5s ease-in-out ${i * 0.15}s infinite alternate`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InitialLoader;
