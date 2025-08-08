import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Web Programming Certificate",
      issuer: "Julius-Maximilians-Universität Würzburg",
      date: "Mar 2025 – Aug 2025",
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
    // Calculate the actual distance between start and end positions
    const startPos = getTimelinePosition(startYear);
    const endPos = getTimelinePosition(endYear);
    // Since years go from top (2026) to bottom (2018), we need absolute difference
    return Math.abs(startPos - endPos) + 60; // Add base height for visibility
  };
  
  const getBarTopPosition = (startYear, endYear) => {
    // For multi-year certificates, start from the end year (higher on timeline)
    // For single year, position at that year
    return Math.min(getTimelinePosition(startYear), getTimelinePosition(endYear));
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
            const barTopPosition = getBarTopPosition(cert.startYear, cert.endYear);
            const barWidth = 12;
            
            // Check for overlaps with previous certificates and shift if needed
            const checkOverlap = (currentIndex) => {
              const current = certificates[currentIndex];
              const currentTop = getBarTopPosition(current.startYear, current.endYear);
              const currentBottom = currentTop + getBarHeight(current.startYear, current.endYear);
              
              let shift = 0;
              for (let i = 0; i < currentIndex; i++) {
                const prev = certificates[i];
                const prevTop = getBarTopPosition(prev.startYear, prev.endYear);
                const prevBottom = prevTop + getBarHeight(prev.startYear, prev.endYear);
                
                // Check if they overlap vertically
                if (!(currentBottom < prevTop || currentTop > prevBottom)) {
                  // They overlap, apply shift
                  shift += 20; // 20px shift for each overlap
                }
              }
              return shift;
            };
            
            const horizontalShift = checkOverlap(index);
            
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
                  left: isLeft 
                    ? `calc(50% - ${40 + horizontalShift}px)` 
                    : `calc(50% + ${28 + horizontalShift}px)`,
                  top: `${barTopPosition}px`,
                  width: `${barWidth}px`,
                  height: `${barHeight}px`,
                }}
              />
            );
          })}
          
          {/* Certificate cards */}
          {certificates.map((cert, index) => {
            // Define getBarSide function first
            const getBarSide = (index) => {
              const pattern = [false, true, false, true, true, false, false];
              return pattern[index];
            };
            
            // Get horizontal shift for color blocks (same logic as above)
            const checkOverlap = (currentIndex) => {
              const current = certificates[currentIndex];
              const currentTop = getBarTopPosition(current.startYear, current.endYear);
              const currentBottom = currentTop + getBarHeight(current.startYear, current.endYear);
              
              let shift = 0;
              for (let i = 0; i < currentIndex; i++) {
                const prev = certificates[i];
                const prevTop = getBarTopPosition(prev.startYear, prev.endYear);
                const prevBottom = prevTop + getBarHeight(prev.startYear, prev.endYear);
                
                // Check if they overlap vertically
                if (!(currentBottom < prevTop || currentTop > prevBottom)) {
                  // They overlap, apply shift
                  shift += 20; // 20px shift for each overlap
                }
              }
              return shift;
            };
            
            const horizontalShift = checkOverlap(index);
            
            // Check for overlaps with previous certificates and shift if needed
            const checkCardOverlap = (currentIndex) => {
              let verticalShift = 0;
              const isCurrentLeft = getBarSide(currentIndex);
              const currentBaseTop = getBarTopPosition(certificates[currentIndex].startYear, certificates[currentIndex].endYear) + 10;
              
              // Check all previous cards on the same side
              for (let i = 0; i < currentIndex; i++) {
                const isPrevLeft = getBarSide(i);
                
                // Only check if they're on the same side
                if (isPrevLeft === isCurrentLeft) {
                  // Calculate previous card's position (including any shifts it might have)
                  let prevShift = 0;
                  for (let j = 0; j < i; j++) {
                    const isPrevPrevLeft = getBarSide(j);
                    if (isPrevPrevLeft === isPrevLeft) {
                      prevShift += 150; // 150px spacing between cards
                    }
                  }
                  
                  const prevTop = getBarTopPosition(certificates[i].startYear, certificates[i].endYear) + 10 + prevShift;
                  const currentTop = currentBaseTop + verticalShift;
                  
                  // If cards would overlap (within 140px of each other), shift current card down
                  if (Math.abs(currentTop - prevTop) < 140) {
                    verticalShift = Math.max(verticalShift, prevTop - currentBaseTop + 150);
                  }
                }
              }
              
              return verticalShift;
            };
            
            const verticalShift = checkCardOverlap(index);
            const isLeft = getBarSide(index);
            const topPosition = getBarTopPosition(cert.startYear, cert.endYear) + 10 + verticalShift;
            
            // Calculate the center of the color block for connector line
            const colorBlockCenter = getBarTopPosition(cert.startYear, cert.endYear) + (getBarHeight(cert.startYear, cert.endYear) / 2);
            const cardCenter = topPosition + 60; // Approximate center of card
            const lineOffset = cardCenter - colorBlockCenter;
            
            return (
              <div key={index} className="absolute flex items-center w-full" style={{ top: `${topPosition}px` }}>
                {isLeft ? (
                  <>
                    {/* Content on left */}
                    <div className="w-1/2 flex justify-end" style={{ paddingRight: `${32 + horizontalShift}px` }}>
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
                        
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-xs text-muted-foreground font-handwrite">
                            {cert.date}
                          </p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="font-handwrite text-xs">
                              <Download className="w-3 h-3 mr-1" />
                              Download
                            </Button>
                            <Button variant="outline" size="sm" className="font-handwrite text-xs">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Verify
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                     {/* Timeline connector */}
                     <div className="w-8 flex justify-center relative">
                       <div className={`w-4 h-4 ${cert.color} rounded-full border-4 border-background shadow-lg z-10`}></div>
                       <div 
                         className="absolute w-16 h-0.5 bg-primary/30 left-4" 
                         style={{ top: `${2 - lineOffset}px` }}
                       ></div>
                     </div>
                    
                    <div className="w-1/2"></div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2"></div>
                    
                     {/* Timeline connector */}
                     <div className="w-8 flex justify-center relative">
                       <div className={`w-4 h-4 ${cert.color} rounded-full border-4 border-background shadow-lg z-10`}></div>
                       <div 
                         className="absolute w-16 h-0.5 bg-primary/30 right-4" 
                         style={{ top: `${2 - lineOffset}px` }}
                       ></div>
                     </div>
                    
                    {/* Content on right */}
                    <div className="w-1/2" style={{ paddingLeft: `${32 + horizontalShift}px` }}>
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
                        
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-xs text-muted-foreground font-handwrite">
                            {cert.date}
                          </p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="font-handwrite text-xs">
                              <Download className="w-3 h-3 mr-1" />
                              Download
                            </Button>
                            <Button variant="outline" size="sm" className="font-handwrite text-xs">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Verify
                            </Button>
                          </div>
                        </div>
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