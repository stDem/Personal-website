interface SectionSelectorProps {
  onSectionChange: (section: string) => void;
  currentSection: string;
}

const SectionSelector = ({ onSectionChange, currentSection }: SectionSelectorProps) => {
  const sections = [
    { id: 'personal', name: 'Personal Info' },
    { id: 'cv', name: 'CV' },
    { id: 'projects', name: 'Projects' },
    { id: 'certificates', name: 'Certificates' },
    // { id: 'achievements', name: 'Achievements' },
    { id: 'hobbies', name: 'Hobbies' },
  ];

  return (
    <nav className="mb-16 max-w-4xl mx-auto">
      <div className="flex flex-wrap justify-end items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`text-xs sm:text-sm md:text-base lg:text-lg transition-colors duration-200 relative px-2 sm:px-3 md:px-4 py-2 ${
              currentSection === section.id 
                ? 'text-foreground font-medium' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {section.name}
            {currentSection === section.id && (
              <div className="absolute top-0 right-0 w-0.5 h-full bg-foreground"></div>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default SectionSelector;