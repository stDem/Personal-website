import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Bachelor's Degree with Honors in Engineering",
      issuer: "Moscow Polytechnic University",
      date: "Sep 2018 – Jun 2022",
      description: "Comprehensive engineering education focused on automation of technological processes and production with specialization in robotics.",
      skills: ["Robotics", "Automation", "Engineering", "Production Systems"],
      certificateUrl: "#",
      verificationUrl: "#"
    },
    {
      title: "Diploma of Professional Retraining: Information Systems and Technologies",
      issuer: "Moscow Polytechnic University",
      date: "Nov 2021 – Jun 2022",
      description: "Professional retraining program covering modern information systems, database management, and technology implementation.",
      skills: ["Information Systems", "Database Management", "Technology", "Systems Analysis"],
      certificateUrl: "#",
      verificationUrl: "#"
    },
    {
      title: "Meta Front-End Developer Certificate",
      issuer: "Meta",
      date: "Oct 2021 – Apr 2025",
      description: "Comprehensive front-end development program covering React, JavaScript, responsive design, and modern web development practices.",
      skills: ["React", "JavaScript", "HTML/CSS", "Responsive Design"],
      certificateUrl: "#",
      verificationUrl: "#"
    },
    {
      title: "Diploma of Professional Retraining: Frontend-developer Specialist",
      issuer: "GeekBrains",
      date: "Jun 2023 – Oct 2024",
      description: "Intensive professional retraining program for frontend development covering modern frameworks, tools, and industry best practices.",
      skills: ["Frontend Development", "JavaScript", "React", "Vue.js"],
      certificateUrl: "#",
      verificationUrl: "#"
    },
    {
      title: "Master's Degree in Computer Science: Artificial Intelligence",
      issuer: "Technische Hochschule Würzburg-Schweinfurt",
      date: "Mar 2024 – Ongoing",
      description: "Advanced degree program focusing on artificial intelligence, machine learning, deep learning, and modern AI applications.",
      skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Neural Networks"],
      certificateUrl: "#",
      verificationUrl: "#"
    },
    {
      title: "Frontend Development Hands-on Training Certificate",
      issuer: "Kreativstorm",
      date: "Jan 2025 – Feb 2025",
      description: "Intensive hands-on training program focused on practical frontend development skills and real-world project implementation.",
      skills: ["Frontend Development", "Practical Skills", "Project Implementation", "Modern Tools"],
      certificateUrl: "#",
      verificationUrl: "#"
    },
    {
      title: "Web Programming Certificate",
      issuer: "Julius-Maximilians-Universität Würzburg",
      date: "Mar 2025 – Ongoing",
      description: "University-level certification program covering advanced web programming concepts, frameworks, and modern development practices.",
      skills: ["Web Programming", "Advanced Concepts", "Frameworks", "Development Practices"],
      certificateUrl: "#",
      verificationUrl: "#"
    }
  ];

  // Create timeline items in reverse chronological order
  const timelineItems = [
    { 
      ...certificates.find(cert => cert.title.includes("Web Programming")), 
      color: "bg-blue-500",
      icon: "🌐",
      duration: "Ongoing"
    },
    { 
      ...certificates.find(cert => cert.title.includes("Frontend Development Hands-on")), 
      color: "bg-green-500",
      icon: "💻",
      duration: "2 months"
    },
    { 
      ...certificates.find(cert => cert.title.includes("Master's Degree")), 
      color: "bg-purple-500",
      icon: "🤖",
      duration: "Ongoing"
    },
    { 
      ...certificates.find(cert => cert.title.includes("GeekBrains")), 
      color: "bg-orange-500",
      icon: "⚛️",
      duration: "16 months"
    },
    { 
      ...certificates.find(cert => cert.title.includes("Information Systems")), 
      color: "bg-yellow-500",
      icon: "💾",
      duration: "8 months"
    },
    { 
      ...certificates.find(cert => cert.title.includes("Meta")), 
      color: "bg-teal-500",
      icon: "📱",
      duration: "42 months"
    },
    { 
      ...certificates.find(cert => cert.title.includes("Bachelor's")), 
      color: "bg-red-500",
      icon: "🔧",
      duration: "48 months"
    }
  ].filter(item => item && item.title);

  return (
    <section id="certificates" className="sketchy-section bg-accent/10">
      <div className="container mx-auto px-4">
        <h2 className="sketchy-title text-center">Certificates & Qualifications</h2>
        <p className="text-xl text-center font-handwrite text-muted-foreground mb-12 max-w-3xl mx-auto">
          Continuous learning is my passion! Here are some certifications that validate 
          my skills and commitment to staying current with industry standards.
        </p>
        
        {/* Timeline */}
        <div className="max-w-6xl mx-auto relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full"></div>
          
          {timelineItems.map((item, index) => {
            const isLeft = index % 2 === 0;
            const topPosition = index * 200; // Space items vertically
            
            return (
              <div key={index} className="relative mb-16" style={{ paddingTop: `${index === 0 ? 0 : 40}px` }}>
                {/* Vertical duration block along central line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  {/* Duration bar */}
                  <div className={`${item.color} w-6 rounded-full text-white flex flex-col items-center justify-center py-4 px-2 shadow-lg`} style={{ height: '120px' }}>
                    <div className="text-xs font-handwrite text-center leading-tight">
                      {item.duration}
                    </div>
                  </div>
                  
                  {/* Icon circle */}
                  <div className="bg-background border-4 border-primary w-12 h-12 rounded-full flex items-center justify-center text-xl -mt-2 shadow-lg">
                    {item.icon}
                  </div>
                </div>
                
                {/* Connection line to content */}
                <div className={`absolute top-12 w-16 h-0.5 bg-primary/40 ${isLeft ? 'right-1/2 mr-6' : 'left-1/2 ml-6'}`}></div>
                
                {/* Content card */}
                <div className={`${isLeft ? 'pr-1/2 mr-24' : 'pl-1/2 ml-24'} flex ${isLeft ? 'justify-end' : 'justify-start'}`}>
                  <div className="sketchy-card max-w-md">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-sketchy-primary font-handwrite mb-1">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground font-handwrite text-sm">
                          {item.issuer}
                        </p>
                        <p className="text-muted-foreground font-handwrite text-xs">
                          {item.date}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-3 font-handwrite leading-relaxed text-sm">
                      {item.description}
                    </p>
                    
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {item.skills.slice(0, 3).map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-handwrite"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="sketchy-border flex-1"
                        asChild
                      >
                        <a 
                          href={item.certificateUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1"
                        >
                          <Download className="w-3 h-3" />
                          PDF
                        </a>
                      </Button>
                      <Button
                        variant="default"
                        size="sm"
                        className="sketchy-btn flex-1"
                        asChild
                      >
                        <a 
                          href={item.verificationUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Verify
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="sketchy-card max-w-2xl mx-auto mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-sketchy-secondary font-handwrite">
            📚 Continuous Learning
          </h3>
          <p className="font-handwrite text-muted-foreground mb-4">
            Always exploring new technologies and expanding my skillset
          </p>
          <p className="font-handwrite text-sm text-muted-foreground">
            Next goal: Advanced AI & Machine Learning specialization
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;