interface SectionSelectorProps {
  onSectionChange: (section: string) => void;
  currentSection: string;
}

const SectionSelector = ({ onSectionChange, currentSection }: SectionSelectorProps) => {
  const sections = [
    { id: 'about', name: 'Home' },
    { id: 'certificates', name: 'CV' },
    { id: 'achievements', name: 'Works and Talks' },
    { id: 'hobbies', name: 'Contact' },
  ];

  return (
    <nav className="mb-16 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`academic-tab ${currentSection === section.id ? 'active' : ''}`}
          >
            {section.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default SectionSelector;