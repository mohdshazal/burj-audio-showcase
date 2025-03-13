
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
    <div className="fixed inset-0 z-[100] bg-gradient-to-b from-black to-black/95 flex flex-col items-center justify-center">
      <div className="relative mb-8 animate-pulse-subtle">
        <Logo size="lg" variant="light" />
      </div>
      
      <div className="w-48 h-1 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-white/60 via-white to-white/60 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="mt-4 text-white/60 text-sm font-light">
        {progress === 100 ? "Ready" : "Loading premium audio experience..."}
      </div>
      
      {/* Audio wave animation */}
      <div className="absolute bottom-24 w-40 flex justify-between items-end">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="w-1 bg-gradient-to-t from-white/40 to-white/80 rounded-full"
            style={{
              height: `${8 + Math.sin((Date.now() / 500) + i * 0.8) * 15}px`,
              animation: `pulse 1s ease-in-out ${i * 0.1}s infinite alternate`,
              opacity: 0.5 + Math.sin((Date.now() / 1000) + i) * 0.5
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InitialLoader;
