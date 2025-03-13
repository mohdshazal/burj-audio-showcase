
import React from "react";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";
import { Award, Clock, Users, ShieldCheck } from "lucide-react";

interface Stat {
  icon: React.ElementType;
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    icon: Clock,
    value: "10+",
    label: "Years Experience"
  },
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients"
  },
  {
    icon: Award,
    value: "250+",
    label: "Projects Completed"
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Satisfaction Rate"
  }
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-burj-accent to-transparent opacity-20 z-10" />
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                alt="Burj Audio Team"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white p-4 md:p-6 rounded-xl shadow-xl">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  
                  return (
                    <div key={index} className="text-center p-3">
                      <Icon className="w-6 h-6 text-burj-accent mx-auto mb-2" />
                      <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-left" delay={200}>
            <span className="inline-block px-4 py-1.5 bg-burj-accent/10 rounded-full text-sm font-medium text-burj-accent mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Audio Excellence Since 2013
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                At Burj Audio, we are passionate about delivering exceptional audio experiences. Founded in 2013, we have established ourselves as leaders in premium audio system installation and services.
              </p>
              <p>
                Our team of certified audio engineers and installation experts brings decades of combined experience to every project. We pride ourselves on our attention to detail, technical expertise, and commitment to customer satisfaction.
              </p>
              <p>
                Whether you're looking for a simple speaker setup or a comprehensive multi-room audio solution, we approach each project with the same level of dedication and precision.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-secondary rounded-lg p-4">
                <h3 className="font-medium mb-2">Our Mission</h3>
                <p className="text-sm text-muted-foreground">
                  To transform spaces through exceptional audio experiences, combining technical excellence with aesthetic sensibility.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-4">
                <h3 className="font-medium mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground">
                  To be the premier provider of audio solutions, setting the standard for innovation and customer service.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
