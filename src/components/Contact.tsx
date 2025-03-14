
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";
import { MapPin, Phone, Mail, Send, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactInfo {
  icon: React.ElementType;
  title: string;
  info: string;
  link?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    title: "Our Location",
    info: "123 Audio Street, Sound City",
  },
  {
    icon: Phone,
    title: "Phone Number",
    info: "+91 9495205426",
    link: "tel:+919495205426"
  },
  {
    icon: Mail,
    title: "Email Address",
    info: "info@burjaudio.com",
    link: "mailto:info@burjaudio.com"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    info: "+91 9495205426",
    link: "https://wa.me/919495205426"
  }
];

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formState);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-burj-accent/10 rounded-full text-sm font-medium text-burj-accent mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground">
            Have questions or ready to upgrade your audio experience? Reach out to our team.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="bg-background rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-medium mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground text-center">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="input-field"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="input-field"
                          placeholder="Your email"
                          value={formState.email}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className="input-field"
                          placeholder="Your phone (optional)"
                          value={formState.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="input-field resize-none"
                        placeholder="How can we help you?"
                        value={formState.message}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full button-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-left" delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                
                return (
                  <div 
                    key={index} 
                    className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-burj-accent/10 flex items-center justify-center rounded-lg mb-4">
                      <Icon className="h-6 w-6 text-burj-accent" />
                    </div>
                    <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-burj-accent hover:underline"
                        target={item.link.startsWith('http') ? "_blank" : ""}
                        rel={item.link.startsWith('http') ? "noopener noreferrer" : ""}
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.info}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
