import { useState } from "react";
import { Code, User, Briefcase, Award, Trophy, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SectionSelectorProps {
  onSectionChange: (section: string) => void;
  currentSection: string;
}

const SectionSelector = ({ onSectionChange, currentSection }: SectionSelectorProps) => {
  const sections = [
    { id: 'about', name: '// About', icon: User },
    { id: 'projects', name: '// Projects', icon: Code },
    { id: 'certificates', name: '// Certificates', icon: Award },
    { id: 'achievements', name: '// Achievements', icon: Trophy },
    { id: 'hobbies', name: '// Hobbies', icon: Heart },
  ];

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="sketchy-card bg-sketchy-neutral/90 backdrop-blur-lg border-sketchy-primary/30 p-2">
        <div className="flex gap-2 flex-wrap justify-center">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <Button
                key={section.id}
                variant={currentSection === section.id ? "default" : "outline"}
                size="sm"
                onClick={() => onSectionChange(section.id)}
                className={`
                  font-code text-xs transition-all duration-200 
                  ${currentSection === section.id 
                    ? 'bg-sketchy-primary text-white shadow-lg scale-105' 
                    : 'bg-transparent border-sketchy-primary/50 text-sketchy-primary hover:bg-sketchy-primary/10'
                  }
                  sketchy-border
                `}
              >
                <IconComponent className="w-3 h-3 mr-1" />
                {section.name}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionSelector;