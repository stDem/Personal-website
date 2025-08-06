import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="sketchy-section bg-sketchy-neutral text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="sketchy-card bg-white/10 backdrop-blur-sm border-white/20">
            <h3 className="text-xl font-bold mb-4 font-handwrite">
              📬 Get In Touch
            </h3>
            <div className="space-y-3">
              <a 
                href="mailto:john.doe@example.com"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors font-handwrite"
              >
                <Mail className="w-5 h-5" />
                john.doe@example.com
              </a>
              <a 
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors font-handwrite"
              >
                <Phone className="w-5 h-5" />
                +1 (234) 567-8890
              </a>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="sketchy-card bg-white/10 backdrop-blur-sm border-white/20">
            <h3 className="text-xl font-bold mb-4 font-handwrite">
              🌐 Connect With Me
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/johndoe"
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
            <h3 className="text-xl font-bold mb-4 font-handwrite">
              🔗 Quick Links
            </h3>
            <div className="space-y-2">
              {['About', 'Projects', 'Certificates', 'Achievements', 'Hobbies'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-white/80 hover:text-white transition-colors font-handwrite"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <div className="sketchy-card bg-white/5 backdrop-blur-sm border-white/10 max-w-2xl mx-auto">
            <p className="font-handwrite text-white/80 mb-4">
              "Thanks for visiting my sketchy little corner of the internet! 
              Feel free to reach out if you want to collaborate on something awesome."
            </p>
            <div className="flex items-center justify-center gap-2 text-white/60">
              <span className="font-handwrite">Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span className="font-handwrite">and lots of coffee ☕</span>
            </div>
            <p className="text-sm text-white/50 font-handwrite mt-4">
              © 2024 John Doe. All rights reserved. | Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;