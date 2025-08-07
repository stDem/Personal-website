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
    { id: 'achievements', name: 'Achievements' },
    { id: 'hobbies', name: 'Hobbies' },
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