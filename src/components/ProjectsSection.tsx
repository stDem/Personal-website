import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Globe } from "lucide-react";
import { useState } from "react";

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const webProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, cart management, order tracking, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      github: "https://github.com/johndoe/ecommerce-platform",
      live: "https://ecommerce-demo.example.com",
      status: "Completed",
      category: "web"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, team collaboration features, and deadline tracking.",
      tech: ["Next.js", "TypeScript", "Supabase", "Socket.io", "Framer Motion"],
      github: "https://github.com/johndoe/task-manager",
      live: "https://taskmaster-app.example.com",
      status: "Completed",
      category: "web"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with location-based forecasts, interactive maps, historical data visualization, and severe weather alerts.",
      tech: ["React", "D3.js", "OpenWeather API", "Chart.js", "PWA"],
      github: "https://github.com/johndoe/weather-dashboard",
      live: "https://weather-viz.example.com",
      status: "Completed",
      category: "web"
    },
    {
      title: "Portfolio Website",
      description: "A creative portfolio website with sketchy design, smooth animations, responsive layout, and interactive elements showcasing my work and personality.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      github: "https://github.com/johndoe/portfolio-sketchy",
      live: "https://johndoe-portfolio.example.com",
      status: "Completed",
      category: "web"
    }
  ];

  const aiProjects = [
    {
      title: "AI Chat Assistant",
      description: "An intelligent chatbot with natural language processing, context awareness, multi-language support, and integration with various APIs.",
      tech: ["Python", "FastAPI", "OpenAI API", "Redis", "Docker"],
      github: "https://github.com/johndoe/ai-assistant",
      live: null,
      status: "In Progress",
      category: "ai"
    },
    {
      title: "Computer Vision System",
      description: "Advanced image recognition system with object detection, facial recognition, and real-time analysis capabilities for security applications.",
      tech: ["Python", "OpenCV", "TensorFlow", "YOLO", "Flask"],
      github: "https://github.com/johndoe/cv-system",
      live: null,
      status: "Completed",
      category: "ai"
    },
    {
      title: "Predictive Analytics Platform",
      description: "Machine learning platform for business forecasting, trend analysis, and predictive modeling with interactive dashboards and automated reporting.",
      tech: ["Python", "Scikit-learn", "Pandas", "Plotly", "PostgreSQL"],
      github: "https://github.com/johndoe/ml-analytics",
      live: "https://analytics-demo.example.com",
      status: "Completed",
      category: "ai"
    }
  ];

  const allProjects = [...webProjects, ...aiProjects];

  const getFilteredProjects = () => {
    switch (activeTab) {
      case "web":
        return webProjects;
      case "ai":
        return aiProjects;
      default:
        return allProjects;
    }
  };

  return (
    <section id="projects" className="sketchy-section paper-texture">
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
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {getFilteredProjects().map((project, index) => (
            <div key={index} className="sketchy-card h-full flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-sketchy-primary font-handwrite">
                  {project.title}
                </h3>
                <span className={`text-xs px-2 py-1 rounded-full font-handwrite ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {project.status}
                </span>
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
                {project.live && (
                  <Button
                    variant="default"
                    size="sm"
                    className="sketchy-btn flex-1"
                    asChild
                  >
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;