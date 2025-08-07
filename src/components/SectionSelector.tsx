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
    <nav className="mb-8">
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
    </nav>
  );
};

export default SectionSelector;