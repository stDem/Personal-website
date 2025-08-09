import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className="sketchy-section bg-sketchy-neutral text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="sketchy-card bg-white/10 backdrop-blur-sm border-white/20">
            <h3 className="text-xl font-bold mb-4 font-robotic">
              // Contact
            </h3>
            <div className="space-y-3">
              <a 
                href="mailto:stxdem@gmail.com"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors font-code"
              >
                <Mail className="w-5 h-5" />
                stxdem@gmail.com
              </a>
              <a 
                href="https://wa.me/491628645712"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors font-code"
              >
                <Phone className="w-5 h-5" />
                +491628645712
              </a>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="sketchy-card bg-white/10 backdrop-blur-sm border-white/20">
            <h3 className="text-xl font-bold mb-4 font-robotic">
              // Social Links
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/stDem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/anst-dem/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="sketchy-card bg-white/10 backdrop-blur-sm border-white/20">
            <h3 className="text-xl font-bold mb-4 font-robotic">
              // Navigation
            </h3>
            <div className="space-y-2">
              {[
                { id: 'about', name: 'About' },
                { id: 'projects', name: 'Projects' },
                { id: 'certificates', name: 'Certificates' },
                { id: 'achievements', name: 'Achievements' },
                { id: 'hobbies', name: 'Hobbies' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-left w-full transition-colors font-code text-white/80 hover:text-white"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <div className="sketchy-card bg-white/5 backdrop-blur-sm border-white/10 max-w-2xl mx-auto">
            <p className="font-code text-white/80 mb-4">
              // Thanks for exploring my digital workspace!
              // Let's collaborate on something innovative.
            </p>
            <div className="flex items-center justify-center gap-2 text-white/60">
              <span className="font-code">Powered by</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span className="font-code">& caffeine.exec()</span>
            </div>
            <p className="text-sm text-white/50 font-code mt-4">
              © 2024 Anastasiia Demidova. All rights reserved. | Built with React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;