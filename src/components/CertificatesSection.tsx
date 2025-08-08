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

  // Group certificates by year in reverse order (most recent first)
  const timelineData = [
    {
      year: "2025",
      items: [
        { ...certificates.find(cert => cert.date.includes("Jan 2025")), color: "bg-blue-500" },
        { ...certificates.find(cert => cert.date.includes("Mar 2025")), color: "bg-green-500" }
      ]
    },
    {
      year: "2024",
      items: [
        { ...certificates.find(cert => cert.date.includes("Mar 2024")), color: "bg-purple-500" }
      ]
    },
    {
      year: "2023",
      items: [
        { ...certificates.find(cert => cert.date.includes("Jun 2023")), color: "bg-orange-500" }
      ]
    },
    {
      year: "2021", 
      items: [
        { ...certificates.find(cert => cert.date.includes("Oct 2021")), color: "bg-teal-500" },
        { ...certificates.find(cert => cert.date.includes("Nov 2021")), color: "bg-yellow-500" }
      ]
    },
    {
      year: "2018",
      items: [
        { ...certificates.find(cert => cert.date.includes("Sep 2018")), color: "bg-red-500" }
      ]
    }
  ].filter(yearData => yearData.items.some(item => item && item.title));

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
            <div key={yearData.year} className="relative mb-8">
              {/* Year label */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-4">
                <div className="bg-background border-2 border-primary px-3 py-1 rounded font-bold text-sm font-handwrite">
                  {yearData.year}
                </div>
              </div>
              
              {/* Certificate items */}
              <div className="pt-12">
                {yearData.items.filter(Boolean).map((cert, itemIndex) => {
                  if (!cert || !cert.title) return null;
                  
                  const isLeft = itemIndex % 2 === 0;
                  const duration = cert.date.includes('Ongoing') ? '24+ months' : 
                                 cert.date.includes('2025') ? '2 months' :
                                 cert.date.includes('Mar 2024') ? '12+ months' :
                                 cert.date.includes('Jun 2023') ? '16 months' :
                                 cert.date.includes('Oct 2021') && cert.title.includes('Meta') ? '42 months' :
                                 cert.date.includes('Nov 2021') ? '8 months' :
                                 '48 months';
                  
                  return (
                    <div key={`${yearData.year}-${itemIndex}`} className="relative mb-12 flex items-center">
                      {isLeft ? (
                        <>
                          {/* Duration block on left */}
                          <div className="w-1/2 pr-8 flex justify-end">
                            <div className={`${cert.color} text-white p-4 rounded-lg shadow-lg max-w-xs`}>
                              <div className="text-sm font-handwrite opacity-90">{cert.date}</div>
                              <div className="font-bold font-handwrite">{duration}</div>
                              <div className="text-xs font-handwrite opacity-75 mt-1">Duration</div>
                            </div>
                          </div>
                          
                          {/* Timeline connector */}
                          <div className="w-8 flex justify-center">
                            <div className={`w-4 h-4 ${cert.color} rounded-full border-4 border-background shadow-lg`}></div>
                          </div>
                          
                          {/* Content on right */}
                          <div className="w-1/2 pl-8">
                            <div className="sketchy-card max-w-md">
                              <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                  <h3 className="text-lg font-bold text-sketchy-primary font-handwrite mb-1">
                                    {cert.title}
                                  </h3>
                                  <p className="text-muted-foreground font-handwrite text-sm">
                                    {cert.issuer}
                                  </p>
                                </div>
                                <div className="ml-3 text-2xl">🏆</div>
                              </div>
                              
                              <p className="text-muted-foreground mb-3 font-handwrite leading-relaxed text-sm">
                                {cert.description}
                              </p>
                              
                              <div className="mb-3">
                                <div className="flex flex-wrap gap-1">
                                  {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                                    <span 
                                      key={skillIndex}
                                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-handwrite"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Content on left */}
                          <div className="w-1/2 pr-8 flex justify-end">
                            <div className="sketchy-card max-w-md">
                              <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                  <h3 className="text-lg font-bold text-sketchy-primary font-handwrite mb-1">
                                    {cert.title}
                                  </h3>
                                  <p className="text-muted-foreground font-handwrite text-sm">
                                    {cert.issuer}
                                  </p>
                                </div>
                                <div className="ml-3 text-2xl">🏆</div>
                              </div>
                              
                              <p className="text-muted-foreground mb-3 font-handwrite leading-relaxed text-sm">
                                {cert.description}
                              </p>
                              
                              <div className="mb-3">
                                <div className="flex flex-wrap gap-1">
                                  {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                                    <span 
                                      key={skillIndex}
                                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-handwrite"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Timeline connector */}
                          <div className="w-8 flex justify-center">
                            <div className={`w-4 h-4 ${cert.color} rounded-full border-4 border-background shadow-lg`}></div>
                          </div>
                          
                          {/* Duration block on right */}
                          <div className="w-1/2 pl-8">
                            <div className={`${cert.color} text-white p-4 rounded-lg shadow-lg max-w-xs`}>
                              <div className="text-sm font-handwrite opacity-90">{cert.date}</div>
                              <div className="font-bold font-handwrite">{duration}</div>
                              <div className="text-xs font-handwrite opacity-75 mt-1">Duration</div>
                            </div>
                          </div>
                        </>
                      )}
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