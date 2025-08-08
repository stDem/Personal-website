import { useState } from "react";
import SectionSelector from "@/components/SectionSelector";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CVSection from "@/components/CVSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import AchievementsSection from "@/components/AchievementsSection";
import HobbiesSection from "@/components/HobbiesSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [currentSection, setCurrentSection] = useState('personal');

  const renderSection = () => {
    switch (currentSection) {
      case 'personal':
        return <AboutSection />;
      case 'cv':
        return <CVSection />;
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
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <header className="text-right mb-12 max-w-4xl mx-auto">
          <h1 className="text-6xl text-foreground mb-8 font-serif font-normal">
            Anastasiia Demidova
          </h1>
          <div className="w-full h-px bg-foreground mb-12"></div>
        </header>
        
        <SectionSelector 
          currentSection={currentSection} 
          onSectionChange={setCurrentSection} 
        />
        
        <main className="max-w-4xl mx-auto mt-8">
          {renderSection()}
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
