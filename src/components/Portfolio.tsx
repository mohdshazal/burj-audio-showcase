
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";
import { ArrowRight } from "lucide-react";

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Luxury Villa Audio System",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=3540&auto=format&fit=crop",
    description: "Complete home audio setup with ceiling speakers in 12 zones and a dedicated cinema room."
  },
  {
    title: "Boutique Hotel Lobby",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1649429398909-877aebd40f19?q=80&w=3012&auto=format&fit=crop",
    description: "Ambient background music system with seamless zone control for different areas."
  },
  {
    title: "Downtown Apartment",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1575442424474-5564ba599b8e?q=80&w=2969&auto=format&fit=crop",
    description: "Minimalist audio solution with hidden speakers and smart home integration."
  },
  {
    title: "Fine Dining Restaurant",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1527698266440-12104e498b76?q=80&w=2370&auto=format&fit=crop",
    description: "Sophisticated sound system with perfect acoustics for an enhanced dining experience."
  }
];

const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-4 border border-white/10">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-white/70">
            Explore our portfolio of premium audio installations for residential and commercial spaces.
          </p>
        </AnimatedSection>

        <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-white text-black"
                  : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-md"
              delay={100 * index}
              animation="scale-in"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={cn(
                  "absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center",
                  hoveredIndex === index && "animate-fade-in"
                )}
              >
                <div className="text-center p-6">
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white mb-2 border border-white/20">
                    {project.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 mb-4 max-w-md mx-auto">{project.description}</p>
                  <button 
                    className="inline-flex items-center text-black bg-white px-4 py-2 rounded-full text-sm hover:bg-white/90 transition-colors"
                    onClick={() => setActiveProject(project)}
                  >
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[300px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white/5 via-white/30 to-white/5 overflow-hidden">
                <div className="h-full bg-white/80 w-1/3 animate-shimmer rounded-r-full" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
