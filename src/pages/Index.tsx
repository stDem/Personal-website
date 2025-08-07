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
    <div className="min-h-screen relative pb-16">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4 font-mono">
            Prof. Dr. <br />
            <span className="text-6xl">Your Name</span>
          </h1>
          <div className="w-full h-0.5 bg-foreground mb-8"></div>
        </header>
        
        <main className="max-w-4xl mx-auto">
          {renderSection()}
        </main>
      </div>
      
      <SectionSelector 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection} 
      />
    </div>
  );
};

export default Index;
