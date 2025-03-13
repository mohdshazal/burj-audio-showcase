
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
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "Complete home audio setup with ceiling speakers in 12 zones and a dedicated cinema room."
  },
  {
    title: "Boutique Hotel Lobby",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    description: "Ambient background music system with seamless zone control for different areas."
  },
  {
    title: "Downtown Apartment",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "Minimalist audio solution with hidden speakers and smart home integration."
  },
  {
    title: "Fine Dining Restaurant",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    description: "Sophisticated sound system with perfect acoustics for an enhanced dining experience."
  }
];

const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-burj-accent/10 rounded-full text-sm font-medium text-burj-accent mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
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
                  ? "bg-burj-accent text-white"
                  : "bg-secondary text-foreground hover:bg-burj-accent/10"
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
              className="group relative overflow-hidden rounded-2xl shadow-md hover-lift"
              delay={100 * index}
            >
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                <div className="text-center p-6">
                  <span className="inline-block px-3 py-1 bg-burj-accent/80 rounded-full text-xs font-medium text-white mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 mb-4 max-w-md mx-auto">{project.description}</p>
                  <button 
                    className="inline-flex items-center text-white bg-burj-accent/80 px-4 py-2 rounded-full text-sm"
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
                className="w-full h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
