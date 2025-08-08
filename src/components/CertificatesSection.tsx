import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

const CertificatesSection = () => {
  // Helper function to calculate duration in months
  const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = endDate === 'Ongoing' ? new Date() : new Date(endDate);
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    return months;
  };

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
            <div key={yearData.year} className="relative mb-16">
              {/* Year label */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-4 z-10">
                <div className="bg-background border-2 border-primary px-4 py-2 rounded-lg font-bold text-lg font-handwrite shadow-md">
                  {yearData.year}
                </div>
              </div>
              
              {/* Certificate items */}
              <div className="pt-16">
                {yearData.items.filter(Boolean).map((cert, itemIndex) => {
                  if (!cert || !cert.title) return null;
                  
                  // Use a pattern to determine positioning that prevents overlaps
                  const globalIndex = yearIndex * 2 + itemIndex;
                  const isLeft = globalIndex % 2 === 0;
                  
                  // Calculate actual duration for ongoing certificates
                  let months;
                  if (cert.date.includes('Ongoing')) {
                    const startDateStr = cert.date.split(' – ')[0];
                    let startMonth, startYear;
                    
                    if (startDateStr.includes('Mar 2024')) {
                      startMonth = 'March';
                      startYear = '2024';
                    } else if (startDateStr.includes('Mar 2025')) {
                      startMonth = 'March';
                      startYear = '2025';
                    } else if (startDateStr.includes('Jan 2025')) {
                      startMonth = 'January';
                      startYear = '2025';
                    }
                    
                    months = calculateDuration(`${startMonth} 1, ${startYear}`, 'Ongoing');
                  } else {
                    const [startPart, endPart] = cert.date.split(' – ');
                    
                    // Parse start date
                    let startMonth, startYear;
                    if (startPart.includes('Sep 2018')) { startMonth = 'September'; startYear = '2018'; }
                    else if (startPart.includes('Nov 2021')) { startMonth = 'November'; startYear = '2021'; }
                    else if (startPart.includes('Oct 2021')) { startMonth = 'October'; startYear = '2021'; }
                    else if (startPart.includes('Jun 2023')) { startMonth = 'June'; startYear = '2023'; }
                    else if (startPart.includes('Jan 2025')) { startMonth = 'January'; startYear = '2025'; }
                    
                    // Parse end date
                    let endMonth, endYear;
                    if (endPart.includes('Jun 2022')) { endMonth = 'June'; endYear = '2022'; }
                    else if (endPart.includes('Oct 2024')) { endMonth = 'October'; endYear = '2024'; }
                    else if (endPart.includes('Apr 2025')) { endMonth = 'April'; endYear = '2025'; }
                    else if (endPart.includes('Feb 2025')) { endMonth = 'February'; endYear = '2025'; }
                    
                    months = calculateDuration(`${startMonth} 1, ${startYear}`, `${endMonth} 1, ${endYear}`);
                  }
                  
                  const duration = `${months} months`;
                  
                  // Calculate color block height based on duration (proportional to months)
                  const baseHeight = 40; // Base height in pixels for scaling
                  const heightPerMonth = 3; // Pixels per month
                  const dynamicHeight = Math.max(baseHeight, months * heightPerMonth);
                  const blockHeight = `${dynamicHeight}px`;
                  
                  return (
                    <div key={`${yearData.year}-${itemIndex}`} className="relative mb-20">
                      <div className="flex items-center justify-center">
                        {/* Certificate description on left */}
                        <div className="w-5/12 pr-8">
                          <div className="sketchy-card max-w-sm ml-auto">
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
                        
                        {/* Central timeline with color blocks */}
                        <div className="w-2/12 flex justify-center relative">
                          <div className="flex items-center gap-4">
                            {/* Color block on left side of timeline */}
                            <div 
                              className={`${cert.color} w-6 rounded-lg shadow-lg flex flex-col justify-center items-center text-white p-2`}
                              style={{ height: blockHeight }}
                            >
                              <div className="text-xs font-handwrite opacity-90 mb-1 text-center leading-tight">
                                {cert.date}
                              </div>
                              <div className="font-bold font-handwrite text-xs text-center">
                                {duration}
                              </div>
                            </div>
                            
                            {/* Timeline connection dot */}
                            <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-md z-10"></div>
                            
                            {/* Color block on right side of timeline */}
                            <div 
                              className={`${cert.color} w-6 rounded-lg shadow-lg flex flex-col justify-center items-center text-white p-2`}
                              style={{ height: blockHeight }}
                            >
                              <div className="text-xs font-handwrite opacity-90 mb-1 text-center leading-tight">
                                {cert.date}
                              </div>
                              <div className="font-bold font-handwrite text-xs text-center">
                                {duration}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Certificate description on right */}
                        <div className="w-5/12 pl-8">
                          <div className="sketchy-card max-w-sm">
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