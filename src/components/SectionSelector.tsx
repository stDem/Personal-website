import { Code, User, Briefcase, Award, Trophy, Heart } from "lucide-react";

interface SectionSelectorProps {
  onSectionChange: (section: string) => void;
  currentSection: string;
}

const SectionSelector = ({ onSectionChange, currentSection }: SectionSelectorProps) => {
  const sections = [
    { id: 'about', name: 'About', icon: User },
    { id: 'projects', name: 'Projects', icon: Code },
    { id: 'certificates', name: 'Certificates', icon: Award },
    { id: 'achievements', name: 'Achievements', icon: Trophy },
    { id: 'hobbies', name: 'Hobbies', icon: Heart },
  ];

  return (
    <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="sketchy-tab-container bg-card/95 backdrop-blur-lg p-1">
        <div className="flex gap-1">
          {sections.map((section) => {
            const IconComponent = section.icon;
            const isActive = currentSection === section.id;
            return (
              <div
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`
                  sketchy-tab cursor-pointer px-4 py-2 font-robotic text-sm font-medium
                  transition-all duration-300 flex items-center gap-2
                  ${isActive 
                    ? 'bg-primary text-primary-foreground shadow-lg -translate-y-1' 
                    : 'bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground'
                  }
                `}
              >
                <IconComponent className="w-4 h-4" />
                {section.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionSelector;