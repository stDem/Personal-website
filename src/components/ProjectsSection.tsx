import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Globe } from "lucide-react";
import { useState } from "react";

// Import project images - using placeholders for now
const projectPlaceholder = "/placeholder.svg";

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const aiProjects = [
      {
      title: "AI Web Design Analysis",
      description: "Modern web application that leverages AI APIs to analyze and provide insights on web design patterns, user experience, and design best practices.",
      tech: ["AI API", "React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/stDem/AI-Web-Design-Analysis",
      live: "https://uxray.anst-dem.com/",
      status: "In Progress",
      category: "ai",
      image: "/lovable-uploads/uxray.png"
    },
    {
      title: "Dota2 Draft Prediction",
      description: "A web application that helps players predict the best hero picks in Dota 2 drafts using machine learning based on ally and enemy picks and provides detailed explanations using NLP.",
      tech: ["ML", "NLP", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/stDem/Dota2-draft-prediction",
      // live: "https://anst-dem.com/",
      status: "Completed",
      category: "ai",
      image: "/lovable-uploads/dota.png"
    },
    {
      title: "Fall Detection System",
      description: "Comprehensive fall detection solution combining machine learning, computer vision, mobile app development, and chatbot integration for elderly care and safety monitoring.",
      tech: ["ML", "Computer Vision", "Mobile App", "Chatbot"],
      github: "https://github.com/stDem/Fall-Detection-Project",
      // live: "https://anst-dem.com/",
      status: "Completed",
      category: "ai",
      image: "/lovable-uploads/fall.jpeg"
    },
    {
      title: "Handwritten Japanese characters Classification",
      description: "This project aimed to train different classification neural network models (VGG, ResNet, EfficientNet, HybridVGGResNet) using several TRAIN datasets and evaluate it on several TEST datasets.",
      tech: ["Deep Learning", "Python", "CNN models"],
      github: "https://github.com/stDem/ANN-numpy-array-images",
      // live: "https://anst-dem.com/",
      status: "Completed",
      category: "ai",
      image: "/lovable-uploads/kmnist.png"
    },
    {
      title: "All computer vision projects",
      description: "Collection of Computer Vision projects implementing various neural network architectures for Image Segmetation, Object Detection, and data Visualization.",
      tech: ["Computer Vision", "Python", "CNN models"],
      github: "https://github.com/stDem/ANN-numpy-array-images",
      // live: "https://anst-dem.com/",
      status: "Completed",
      category: "ai",
      image: "/lovable-uploads/"
    },
    {
      title: "Motion Classification System",
      description: "Machine learning model designed to classify different types of human motions and activities using sensor data and pattern recognition algorithms.",
      tech: ["ML", "Python", "Pattern Recognition"],
      github: "https://github.com/stDem/Motions-classification",
      // live: "https://anst-dem.com/",
      status: "Completed",
      category: "ai",
      image: "/lovable-uploads/motion.png"
    }
  ];

  const webProjects = [
    {
      title: "Personal Website",
      description: "Modern and responsive personal website built with React, TypeScript, and Tailwind CSS, showcasing Personal info, CV, projects, certificates, and hobbies.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/stDem/Personal-website",
      live: "https://anst-dem.com/",
      status: "In Progress",
      category: "web",
      image: "/lovable-uploads/portfolio.png"
    },
    {
      title: "Work Space Website",
      description: "Professional workspace portfolio site featuring modern design, API integrations, and responsive layout built with vanilla JavaScript and SCSS.",
      tech: ["JavaScript", "HTML", "SCSS", "API"],
      github: "https://github.com/stDem/WorkSpace—portfolio-site",
      live: "https://workspace.anst-dem.com/",
      status: "Completed",
      category: "web",
      image: "/lovable-uploads/dcc5c4a2-cb63-4fd8-8bed-85a7f7e75cec.png"
    },
        {
      title: "Old Portfolio Website",
      description: "Old Frontend portfolio website built with React and Chakra UI, showcasing projects, personal info, and contact form section.",
      tech: ["React", "Chakra UI", "JavaScript"],
      github: "https://github.com/stDem/Portfolio-site",
      live: "https://portfolio.anst-dem.com/",
      status: "Completed",
      category: "web",
      image: "/lovable-uploads/34441cb5-7ee7-44e5-9720-1c4dc2a34957.png"
    },
    {
      title: "Little Lemon Restaurant",
      description: "Restaurant website with table booking system, menu display, and orders. Built with React and SCSS with API integration for dynamic content.",
      tech: ["React", "SCSS", "API", "JavaScript"],
      github: "https://github.com/stDem/Little-Lemon-website",
      live: "https://littlelemon.anst-dem.com/",
      status: "Completed",
      category: "web",
      image: "/lovable-uploads/84f5ab7a-4645-4085-b16a-f6a0a14389e6.png"
    },
    {
      title: "Interior Design Portfolio",
      description: "Elegant interior design showcase website built with Vue.js, featuring project galleries, design services, and design articles.",
      tech: ["Vue.js", "SCSS", "JavaScript"],
      github: "https://github.com/stDem/InteriorDesign—portfolio-site",
      live: "https://interiordesign.anst-dem.com/",
      status: "Completed",
      category: "web",
      image: "/lovable-uploads/8fbce848-a219-4aac-be1c-cc135d7aefab.png"
    },
    {
      title: "Auto Service Website",
      description: "Professional automotive service website featuring service listings and appointment booking, built with vanilla JavaScript and SCSS.",
      tech: ["JavaScript", "HTML", "SCSS"],
      github: "https://github.com/stDem/AutoService---portfolio-site",
      live: "https://autoservice.anst-dem.com/",
      status: "Completed",
      category: "web",
      image: "/lovable-uploads/f9f1b27a-7857-4e58-87c0-3e4e638adfef.png"
    }
  ];

  const allProjects = [...aiProjects, ...webProjects];

  const getFilteredProjects = () => {
    switch (activeTab) {
      case "ai":
        return aiProjects;
      case "web":
        return webProjects;
      default:
        return allProjects;
    }
  };

  return (
    <section id="projects" className="sketchy-section">
      <div className="container mx-auto px-4">
        <h2 className="sketchy-title text-center">My Projects</h2>
        <p className="text-xl text-center font-handwrite text-muted-foreground mb-8 max-w-2xl mx-auto">
          Here's a collection of projects I've built with passion and creativity. 
          Each one represents a unique challenge and learning experience!
        </p>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-background border rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                activeTab === "all"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab("ai")}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 flex items-center gap-2 ${
                activeTab === "ai"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Brain className="w-4 h-4" />
              AI & Machine Learning
            </button>
            <button
              onClick={() => setActiveTab("web")}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 flex items-center gap-2 ${
                activeTab === "web"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Globe className="w-4 h-4" />
              Web Development
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {getFilteredProjects().map((project, index) => (
            <div key={index} className="sketchy-card h-full flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-sketchy-primary font-handwrite">
                  {project.title}
                </h3>
                <span className={`px-3 py-1 rounded-full font-handwrite text-xs whitespace-nowrap ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <div className="mb-4 rounded-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <p className="text-muted-foreground mb-4 font-handwrite leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-sm">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-accent/20 text-accent-foreground rounded font-handwrite"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3 mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  className="sketchy-border flex-1"
                  asChild
                >
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="sketchy-btn flex-1"
                  asChild={!!project.live}
                  disabled={!project.live}
                >
                  {project.live ? (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  ) : (
                    <span className="inline-flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </span>
                  )}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;