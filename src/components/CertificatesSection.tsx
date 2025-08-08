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

  return (
    <section id="certificates" className="sketchy-section bg-accent/10">
      <div className="container mx-auto px-4">
        <h2 className="sketchy-title text-center">Certificates & Qualifications</h2>
        <p className="text-xl text-center font-handwrite text-muted-foreground mb-12 max-w-3xl mx-auto">
          Continuous learning is my passion! Here are some certifications that validate 
          my skills and commitment to staying current with industry standards.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div key={index} className="sketchy-card">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-sketchy-primary font-handwrite mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground font-handwrite">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
                <div className="ml-4 text-4xl">🏆</div>
              </div>
              
              <p className="text-muted-foreground mb-4 font-handwrite leading-relaxed">
                {cert.description}
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-sm">Key Skills:</h4>
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
              
              <div className="flex gap-3">
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
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
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
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="sketchy-card max-w-2xl mx-auto mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-sketchy-secondary font-handwrite">
            📚 Continuous Learning
          </h3>
          <p className="font-handwrite text-muted-foreground mb-4">
            Currently pursuing: <strong>Machine Learning Engineer Certification</strong> by Stanford Online
          </p>
          <p className="font-handwrite text-sm text-muted-foreground">
            Expected completion: Q2 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;