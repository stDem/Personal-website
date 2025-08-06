import { useState } from "react";
import SectionSelector from "@/components/SectionSelector";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import AchievementsSection from "@/components/AchievementsSection";
import HobbiesSection from "@/components/HobbiesSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [currentSection, setCurrentSection] = useState('about');

  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'certificates':
        return <CertificatesSection />;
      case 'achievements':
        return <AchievementsSection />;
      case 'hobbies':
        return <HobbiesSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen relative">
      <SectionSelector 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection} 
      />
      <div className="pt-20">
        <HeroSection />
        {renderSection()}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
