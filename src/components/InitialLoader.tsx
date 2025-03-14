
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import gsap from "gsap";

const InitialLoader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const textRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const audioWaveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline();
    
    if (textRef.current) {
      const words = textRef.current.innerHTML.split(' ');
      textRef.current.innerHTML = '';
      
      words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'inline-block mr-2';
        wordSpan.style.opacity = '0';
        wordSpan.style.transform = 'translateY(20px)';
        
        const letters = word.split('');
        letters.forEach((letter) => {
          const letterSpan = document.createElement('span');
          letterSpan.className = 'inline-block';
          letterSpan.textContent = letter;
          wordSpan.appendChild(letterSpan);
        });
        
        textRef.current?.appendChild(wordSpan);
        
        tl.to(wordSpan, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          delay: index * 0.1
        });
      });
    }
    
    if (logoRef.current) {
      tl.fromTo(logoRef.current, 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.3)" },
        0
      );
    }
    
    if (audioWaveRef.current) {
      const bars = audioWaveRef.current.querySelectorAll('div');
      bars.forEach((bar, index) => {
        gsap.to(bar, {
          height: () => 8 + Math.random() * 15,
          duration: 0.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.1
        });
      });
    }

    // Progress bar animation
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
      <div ref={logoRef} className="relative mb-8">
        <Logo size="lg" variant="light" />
      </div>
      
      <div className="w-48 h-1 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-white/60 via-white to-white/60 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div ref={textRef} className="mt-4 text-white/80 text-sm font-light">
        Loading premium audio experience...
      </div>
      
      {/* Audio wave animation */}
      <div ref={audioWaveRef} className="absolute bottom-24 w-40 flex justify-between items-end">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="w-1 bg-gradient-to-t from-white/40 to-white/80 rounded-full"
            style={{
              height: `${8 + Math.sin((Date.now() / 500) + i * 0.8) * 15}px`,
              opacity: 0.5 + Math.sin((Date.now() / 1000) + i) * 0.5
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InitialLoader;
