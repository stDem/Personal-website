import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="sketchy-section paper-texture min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="relative inline-block mb-8">
            <div className="sketchy-card w-64 h-64 mx-auto overflow-hidden">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Name and Title */}
          <h1 className="sketchy-title text-6xl md:text-8xl mb-4">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-3xl font-handwrite text-muted-foreground mb-8 transform rotate-1">
            Full Stack Developer & Creative Problem Solver
          </h2>
          
          {/* Bio */}
          <div className="sketchy-card max-w-2xl mx-auto mb-8">
            <p className="text-lg font-handwrite leading-relaxed">
              Welcome to my creative corner! I'm a passionate developer who loves turning 
              ideas into digital reality. With a knack for both front-end magic and 
              back-end wizardry, I create experiences that are both beautiful and functional.
            </p>
          </div>
          
          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:john.doe@example.com"
              className="sketchy-btn inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="sketchy-btn inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="sketchy-btn inline-flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="sketchy-btn inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
          
          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection('about')}
            className="sketchy-btn text-xl px-8 py-4"
          >
            Explore My Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;