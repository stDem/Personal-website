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

  // Group certificates by year
  const timelineData = [
    {
      year: "2018",
      items: [certificates.find(cert => cert.date.includes("Sep 2018"))]
    },
    {
      year: "2021", 
      items: [
        certificates.find(cert => cert.date.includes("Oct 2021")),
        certificates.find(cert => cert.date.includes("Nov 2021"))
      ]
    },
    {
      year: "2023",
      items: [certificates.find(cert => cert.date.includes("Jun 2023"))]
    },
    {
      year: "2024",
      items: [certificates.find(cert => cert.date.includes("Mar 2024"))]
    },
    {
      year: "2025",
      items: [
        certificates.find(cert => cert.date.includes("Jan 2025")),
        certificates.find(cert => cert.date.includes("Mar 2025"))
      ]
    }
  ].filter(yearData => yearData.items.some(item => item));

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
          
          {timelineData.map((yearData, yearIndex) => (
            <div key={yearData.year} className="relative mb-16">
              {/* Year badge in center */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8">
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-lg font-handwrite shadow-lg">
                  {yearData.year}
                </div>
              </div>
              
              {/* Certificate items */}
              <div className="pt-16">
                {yearData.items.filter(Boolean).map((cert, itemIndex) => {
                  const isLeft = (yearIndex * yearData.items.length + itemIndex) % 2 === 0;
                  return (
                    <div key={`${yearData.year}-${itemIndex}`} className={`relative mb-8 ${isLeft ? 'pr-1/2' : 'pl-1/2 ml-auto'}`}>
                      {/* Connection line to center */}
                      <div className={`absolute top-8 w-8 h-0.5 bg-primary/40 ${isLeft ? 'right-0' : 'left-0'}`}></div>
                      {/* Connection dot */}
                      <div className={`absolute top-7 w-3 h-3 bg-primary rounded-full ${isLeft ? '-right-1' : '-left-1'}`}></div>
                      
                      <div className={`sketchy-card max-w-md ${isLeft ? 'mr-12' : 'ml-12'}`}>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-sketchy-primary font-handwrite mb-1">
                              {cert.title}
                            </h3>
                            <p className="text-muted-foreground font-handwrite text-sm">
                              {cert.issuer}
                            </p>
                            <p className="text-muted-foreground font-handwrite text-xs">
                              {cert.date}
                            </p>
                          </div>
                          <div className="ml-4 text-3xl">🏆</div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 font-handwrite leading-relaxed text-sm">
                          {cert.description}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2 text-xs">Key Skills:</h4>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, skillIndex) => (
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
                              href={cert.certificateUrl} 
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
                              href={cert.verificationUrl} 
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
                  );
                })}
              </div>
            </div>
          ))}
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