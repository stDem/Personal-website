import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="sketchy-title text-2xl">
            My Portfolio
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {['about', 'projects', 'certificates', 'achievements', 'hobbies'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-foreground hover:text-primary transition-colors font-handwrite text-lg capitalize"
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            className="md:hidden sketchy-border"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 sketchy-card">
            {['about', 'projects', 'certificates', 'achievements', 'hobbies'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-handwrite text-lg capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;