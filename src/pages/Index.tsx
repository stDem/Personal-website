import { useState } from "react";
import SectionSelector from "@/components/SectionSelector";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CVSection from "@/components/CVSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
// import AchievementsSection from "@/components/AchievementsSection";
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
      // case 'achievements':
        // return <AchievementsSection />;
      case 'hobbies':
        return <HobbiesSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12 max-w-4xl mx-auto relative">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 font-serif font-normal text-right">
            Anastasiia Demidova
          </h1>
          <div className="absolute left-0 right-0 h-px bg-foreground mb-4" style={{left: 'calc(-50vw + 50%)'}}>
          </div>
        </header>
        
        <SectionSelector 
          currentSection={currentSection} 
          onSectionChange={setCurrentSection} 
        />
        
        <main className="max-w-4xl mx-auto mt-8">
          {renderSection()}
        </main>
      </div>
      
      <Footer currentSection={currentSection} onSectionChange={setCurrentSection} />
    </div>
  );
};

export default Index;
