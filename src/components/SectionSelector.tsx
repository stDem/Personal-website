interface SectionSelectorProps {
  onSectionChange: (section: string) => void;
  currentSection: string;
}

const SectionSelector = ({ onSectionChange, currentSection }: SectionSelectorProps) => {
  const sections = [
    { id: 'about', name: 'Home' },
    { id: 'projects', name: 'Projects' },
    { id: 'certificates', name: 'CV' },
    { id: 'achievements', name: 'Works' },
    { id: 'hobbies', name: 'Contact' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto">
        <div className="flex justify-center">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`code-tab ${currentSection === section.id ? 'active' : ''}`}
            >
              {section.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SectionSelector;