import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Web Programming Certificate",
      issuer: "Julius-Maximilians-Universität Würzburg",
      date: "Mar 2025 – Ongoing",
      description: "Advanced web programming concepts & frameworks.",
      skills: ["Web Programming", "Advanced Concepts", "Frameworks", "Development Practices"],
      startYear: 2025,
      endYear: 2025,
      color: "bg-yellow-500",
      icon: "⚙️"
    },
    {
      title: "Frontend Development Hands-on Training Certificate",
      issuer: "Kreativstorm",
      date: "Jan 2025 – Feb 2025",
      description: "Intensive hands-on frontend training with real projects.",
      skills: ["Frontend Development", "Practical Skills", "Project Implementation", "Modern Tools"],
      startYear: 2025,
      endYear: 2025,
      color: "bg-green-500",
      icon: "🎯"
    },
    {
      title: "Master's Degree in Computer Science: Artificial Intelligence",
      issuer: "Technische Hochschule Würzburg-Schweinfurt",
      date: "Mar 2024 – Mar 2026",
      description: "Advanced AI & ML program with deep learning focus.",
      skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Neural Networks"],
      startYear: 2024,
      endYear: 2026,
      color: "bg-orange-500",
      icon: "🤖"
    },
    {
      title: "Diploma of Professional Retraining: Frontend-developer Specialist",
      issuer: "GeekBrains",
      date: "Jun 2023 – Oct 2024",
      description: "Professional frontend development program with modern frameworks.",
      skills: ["Frontend Development", "JavaScript", "React", "Vue.js"],
      startYear: 2023,
      endYear: 2024,
      color: "bg-red-500",
      icon: "📊"
    },
    {
      title: "Meta Front-End Developer Certificate",
      issuer: "Meta",
      date: "Oct 2021 – Apr 2025",
      description: "Comprehensive React & JavaScript development program.",
      skills: ["React", "JavaScript", "HTML/CSS", "Responsive Design"],
      startYear: 2021,
      endYear: 2025,
      color: "bg-teal-500",
      icon: "🔧"
    },
    {
      title: "Diploma of Professional Retraining: Information Systems and Technologies",
      issuer: "Moscow Polytechnic University",
      date: "Nov 2021 – Jun 2022",
      description: "Information systems & database management program.",
      skills: ["Information Systems", "Database Management", "Technology", "Systems Analysis"],
      startYear: 2021,
      endYear: 2022,
      color: "bg-gray-500",
      icon: "📱"
    },
    {
      title: "Bachelor's Degree with Honors in Engineering",
      issuer: "Moscow Polytechnic University",
      date: "Sep 2018 – Jun 2022",
      description: "Engineering with automation & robotics specialization.",
      skills: ["Robotics", "Automation", "Engineering", "Production Systems"],
      startYear: 2018,
      endYear: 2022,
      color: "bg-blue-500",
      icon: "🎓"
    }
  ];

  // Create timeline years from 2018 to 2026
  const years = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];
  
  // Calculate positions and heights for timeline bars
  const getTimelinePosition = (year) => {
    const yearIndex = years.indexOf(year);
    return yearIndex * 120; // 120px spacing between years
  };
  
  const getBarHeight = (startYear, endYear) => {
    // Calculate duration properly - each year is 120px apart
    const duration = endYear - startYear;
    return Math.max(duration * 120, 60); // Minimum 60px height
  };
  
  const getBarTopPosition = (startYear) => {
    return getTimelinePosition(startYear) + 50;
  };

  return (
    <section id="certificates" className="sketchy-section bg-accent/10">
      <div className="container mx-auto px-4">
        <h2 className="sketchy-title text-center">Certificates & Qualifications</h2>
        <p className="text-xl text-center font-handwrite text-muted-foreground mb-12 max-w-3xl mx-auto">
          Continuous learning is my passion! Here are some certifications that validate 
          my skills and commitment to staying current with industry standards.
        </p>
        
        {/* Timeline */}
        <div className="max-w-6xl mx-auto relative" style={{ height: '1200px' }}>
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full"></div>
          
          {/* Year labels */}
          {years.map((year, index) => (
            <div key={year} className="absolute left-1/2 transform -translate-x-1/2" style={{ top: `${index * 120 + 20}px` }}>
              <div className="bg-background border-2 border-primary px-3 py-1 rounded font-bold text-sm font-handwrite">
                {year}
              </div>
            </div>
          ))}
          
          {/* Duration bars */}
          {certificates.map((cert, index) => {
            const barHeight = getBarHeight(cert.startYear, cert.endYear);
            const barTopPosition = getBarTopPosition(cert.startYear);
            const barWidth = 12;
            // Custom positioning to avoid overlaps
            const getBarSide = (index) => {
              const pattern = [false, true, false, true, true, false, false]; // Custom pattern
              return pattern[index];
            };
            const isLeft = getBarSide(index);
            
            return (
              <div
                key={index}
                className={`absolute ${cert.color} opacity-80 rounded`}
                style={{
                  left: isLeft ? 'calc(50% - 40px)' : 'calc(50% + 28px)',
                  top: `${barTopPosition}px`,
                  width: `${barWidth}px`,
                  height: `${barHeight}px`,
                }}
              />
            );
          })}
          
          {/* Certificate cards */}
          {certificates.map((cert, index) => {
            const isLeft = index % 2 === 0;
            const topPosition = getBarTopPosition(cert.startYear) + 10;
            
            return (
              <div key={index} className="absolute flex items-center w-full" style={{ top: `${topPosition}px` }}>
                {isLeft ? (
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
                          <div className="ml-3 text-2xl">{cert.icon}</div>
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
                        
                        <p className="text-xs text-muted-foreground font-handwrite">
                          {cert.date}
                        </p>
                      </div>
                    </div>
                    
                    {/* Timeline connector */}
                    <div className="w-8 flex justify-center relative">
                      <div className={`w-4 h-4 ${cert.color} rounded-full border-4 border-background shadow-lg z-10`}></div>
                      <div className="absolute w-16 h-0.5 bg-primary/30 left-4 top-2"></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2"></div>
                    
                    {/* Timeline connector */}
                    <div className="w-8 flex justify-center relative">
                      <div className={`w-4 h-4 ${cert.color} rounded-full border-4 border-background shadow-lg z-10`}></div>
                      <div className="absolute w-16 h-0.5 bg-primary/30 right-4 top-2"></div>
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
                          <div className="ml-3 text-2xl">{cert.icon}</div>
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
                        
                        <p className="text-xs text-muted-foreground font-handwrite">
                          {cert.date}
                        </p>
                      </div>
                    </div>
                  </>
                )}
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