import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

const CertificatesSection = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "March 2023",
      description: "Comprehensive certification covering AWS cloud architecture, security, and best practices for designing scalable and cost-effective solutions.",
      skills: ["AWS", "Cloud Architecture", "Security", "Scalability"],
      certificateUrl: "#",
      verificationUrl: "https://aws.amazon.com/verification/XXX123"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "January 2023",
      description: "Professional-level certification demonstrating expertise in developing applications and managing data on Google Cloud Platform.",
      skills: ["GCP", "App Development", "Data Management", "Kubernetes"],
      certificateUrl: "#",
      verificationUrl: "https://cloud.google.com/certification/verify/XXX456"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta (Facebook)",
      date: "November 2022",
      description: "Advanced certification covering React fundamentals, hooks, state management, testing, and modern development practices.",
      skills: ["React", "JavaScript", "State Management", "Testing"],
      certificateUrl: "#",
      verificationUrl: "https://developers.facebook.com/certification/verify/XXX789"
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "September 2022",
      description: "Hands-on certification demonstrating skills in Kubernetes cluster administration, networking, security, and troubleshooting.",
      skills: ["Kubernetes", "Container Orchestration", "DevOps", "Networking"],
      certificateUrl: "#",
      verificationUrl: "https://training.linuxfoundation.org/certification/verify/XXX101"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "July 2022",
      description: "Certification covering MongoDB database design, queries, indexing, aggregation framework, and performance optimization.",
      skills: ["MongoDB", "Database Design", "NoSQL", "Performance Tuning"],
      certificateUrl: "#",
      verificationUrl: "https://university.mongodb.com/certification/verify/XXX112"
    },
    {
      title: "Agile Certified Practitioner",
      issuer: "Project Management Institute",
      date: "May 2022",
      description: "Certification demonstrating knowledge of agile principles, practices, tools, and techniques across various agile methodologies.",
      skills: ["Agile", "Scrum", "Project Management", "Team Leadership"],
      certificateUrl: "#",
      verificationUrl: "https://pmi.org/certification/verify/XXX131"
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