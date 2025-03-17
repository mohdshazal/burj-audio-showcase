
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/10",
        isScrolled 
          ? "bg-gradient-to-r from-black/90 via-black/95 to-black/90 shadow-lg shadow-black/50 py-3" 
          : "bg-gradient-to-b from-black/90 to-black/80 py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Logo variant="light" />
        
        {isMobile ? (
          <>
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center text-white p-2 hover:bg-white/5 rounded-full transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <div
              className={cn(
                "fixed inset-0 z-40 bg-black/95 backdrop-blur-md transition-all duration-500 transform",
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              )}
              style={{ top: "60px" }}
            >
              <nav className="flex flex-col items-center h-full space-y-8 mt-10">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-2xl font-medium transition-all duration-300 relative group",
                      activeSection === item.href.substring(1) 
                        ? "text-white" 
                        : "text-white/60 hover:text-white"
                    )}
                    onClick={closeMenu}
                  >
                    {item.label}
                    <span className={cn(
                      "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white/30 via-white to-white/30 transition-all duration-300 group-hover:w-full",
                      activeSection === item.href.substring(1) && "w-full"
                    )} />
                  </a>
                ))}
              </nav>
            </div>
          </>
        ) : (
          <nav className="flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative group hover:scale-105",
                  activeSection === item.href.substring(1) 
                    ? "text-white" 
                    : "text-white/60 hover:text-white"
                )}
              >
                {item.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white/30 via-white to-white/30 transition-all duration-300 group-hover:w-full",
                  activeSection === item.href.substring(1) && "w-full"
                )} />
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
