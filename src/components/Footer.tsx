
import React from "react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: Facebook,
    href: "https://facebook.com",
    label: "Facebook"
  },
  {
    icon: Instagram,
    href: "https://instagram.com",
    label: "Instagram"
  },
  {
    icon: Twitter,
    href: "https://twitter.com",
    label: "Twitter"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn"
  },
  {
    icon: Youtube,
    href: "https://youtube.com",
    label: "YouTube"
  }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-burj-dark text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-white/70 max-w-xs">
              Premium audio system installation and services for homes and businesses. Elevate your sound experience.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-burj-accent transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-burj-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-burj-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/70 hover:text-burj-accent transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-burj-accent transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-burj-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-burj-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-0 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-burj-accent"
                required
              />
              <button
                type="submit"
                className="bg-burj-accent text-white px-4 py-2 rounded-r-lg hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {currentYear} Burj Audio. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white/70 text-sm hover:text-burj-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 text-sm hover:text-burj-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
