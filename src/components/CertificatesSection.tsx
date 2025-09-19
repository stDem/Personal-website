import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

const CertificatesSection = () => {
  const certificates = [
      {
      title: "Certificate: Generative AI with LLMs",
      issuer: "Amazon Web Services (AWS)",
      date: "Aug 2025 – Sep 2025",
      skills: ["Generative AI", "LLM", "Transformers"],
      startDate: new Date(2025, 7, 15), // August 2025
      endDate: new Date(2025, 8, 30), // September 2025
      startYear: 2025,
      endYear: 2025,
      color: "bg-purple-700",
      textColor: "text-purple-600",
      verifyUrl: "https://coursera.org/verify/BERWAYETIR4Z",
      showVerify: true,
      verifyDisabled: false,
      downloadUrl: "https://drive.google.com/file/d/1j1AXJMxFbsRe25RZFFpkACg2_M9TqJlc/view?usp=sharing",
      showDownload: true,
      downloadDisabled: false,
      topPosition: -10
    },
    {
      title: "Certificate: Advanced Computer Vision with TensorFlow",
      issuer: "DeepLearning.AI",
      date: "Aug 2025 – Aug 2025",
      skills: ["Computer Vision", "TensorFlow", "Deep Learning", "Image Processing"],
      startDate: new Date(2025, 4, 15), // August 2025
      endDate: new Date(2025, 6, 20), // 
      startYear: 2025,
      endYear: 2025,
      color: "bg-stone-700",
      textColor: "text-stone-600",
      verifyUrl: "https://coursera.org/verify/28BEO74BYBMT",
      showVerify: true,
      verifyDisabled: false,
      downloadUrl: "https://drive.google.com/file/d/1KL1WeY0aWs5DKwrhT6odHb8CS536XptI/view?usp=sharing",
      showDownload: true,
      downloadDisabled: false,
      topPosition: 43
    },
    {
      title: "Certificate: Web Programming",
      issuer: "Julius-Maximilians-Universität Würzburg",
      date: "Mar 2025 – Aug 2025",
      skills: ["Web Programming", "Advanced Concepts", "Frameworks", "Development Practices"],
      startDate: new Date(2025, 2, 1), // March 2025
      endDate: new Date(2025, 7, 31), // August 2025
      startYear: 2025,
      endYear: 2025,
      color: "bg-yellow-700",
      textColor: "text-yellow-600",
      verifyUrl: null,
      showVerify: true,
      verifyDisabled: true,
      downloadUrl: null,
      showDownload: true,
      downloadDisabled: true,
      topPosition: 0
    },
    {
      title: "Certificate: Frontend Development Hands-on Training",
      issuer: "Kreativstorm",
      date: "Jan 2025 – Feb 2025",
      skills: ["JS", "HTML", "CSS", "Git"],
      startDate: new Date(2024, 10, 1), // January 2025
      endDate: new Date(2024, 12, 1), // February 2025
      startYear: 2025,
      endYear: 2025,
      color: "bg-green-700",
      textColor: "text-green-600",
      verifyUrl: "https://credsverse.com/credentials/16a7cabf-f028-4bcb-82a1-d900f88b12d5",
      showVerify: true,
      verifyDisabled: false,
      downloadUrl: "https://drive.google.com/file/d/1uyCQ9A6x5pnyHTb0Dx1wNXey3FIVC9uI/view?usp=sharing",
      showDownload: true,
      downloadDisabled: false,
      topPosition: 45
    },
    {
      title: "Master's Degree in Computer Science: Artificial Intelligence",
      issuer: "Technische Hochschule Würzburg-Schweinfurt",
      date: "Mar 2024 – Mar 2026",
      skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Neural Networks"],
      startDate: new Date(2024, 2, 1), // March 2024
      endDate: new Date(2026, 2, 31), // March 2026
      startYear: 2024,
      endYear: 2026,
      color: "bg-orange-700",
      textColor: "text-orange-600",
      verifyUrl: null,
      showVerify: true,
      verifyDisabled: true,
      downloadUrl: null,
      showDownload: true,
      downloadDisabled: true,
      topPosition: -250
    },
    {
      title: "Diploma of Professional Retraining: Frontend-developer Specialist",
      issuer: "GeekBrains",
      date: "Jun 2023 – Oct 2024",
      skills: ["Frontend Development", "JavaScript", "React", "Vue.js"],
      startDate: new Date(2023, 5, 1), // June 2023
      endDate: new Date(2024, 9, 31), // October 2024
      startYear: 2023,
      endYear: 2024,
      color: "bg-red-700",
      textColor: "text-red-600",
      showVerify: false,
      downloadUrl: "https://drive.google.com/file/d/1dcFE8WqWGWexKwEB987_o0jeaspga_hf/view?usp=sharing",
      showDownload: true,
      downloadDisabled: false,
      topPosition: 100
    },
    {
      title: "Certificate: Meta Front-End Developer",
      issuer: "Meta",
      date: "Oct 2021 – Apr 2025",
      skills: ["React", "JavaScript", "HTML/CSS", "Responsive Design"],
      startDate: new Date(2021, 9, 1), // October 2021
      endDate: new Date(2025, 3, 30), // April 2025
      startYear: 2021,
      endYear: 2025,
      color: "bg-teal-700",
      textColor: "text-teal-600",
      verifyUrl: "https://www.coursera.org/account/accomplishments/professional-cert/KXNH226INRL4",
      showVerify: true,
      verifyDisabled: false,
      downloadUrl: "https://drive.google.com/file/d/1GIpA_uCZyhsH4huttw5uWQC2KzVD4V5g/view?usp=sharing",
      showDownload: true,
      downloadDisabled: false,
      topPosition: 0
    },
    {
      title: "Diploma of Professional Retraining: Information Systems and Technologies",
      issuer: "Moscow Polytechnic University",
      date: "Nov 2021 – Jun 2022",
      skills: ["Information Systems", "Database Management", "Technology", "Systems Analysis"],
      startDate: new Date(2021, 10, 1), // November 2021
      endDate: new Date(2022, 5, 30), // June 2022
      startYear: 2021,
      endYear: 2022,
      color: "bg-gray-700",
      textColor: "text-gray-600",
      showVerify: false,
      downloadUrl: "https://drive.google.com/file/d/1_4J6MJJI2BhkTevdrlkInwBgzPaSOrTP/view?usp=sharing",
      showDownload: true,
      downloadDisabled: false,
      topPosition: 0
    },
    {
      title: "Bachelor's Degree with Honors in Engineering: Automation of technological processes and production (Robotics)",
      issuer: "Moscow Polytechnic University",
      date: "Sep 2018 – Jun 2022",
      skills: ["Robotics", "Automation", "Engineering", "Production Systems"],
      startDate: new Date(2018, 8, 1), // September 2018
      endDate: new Date(2022, 5, 30), // June 2022
      startYear: 2018,
      endYear: 2022,
      color: "bg-blue-700",
      textColor: "text-blue-600",
      showVerify: false,
      downloadUrl: "https://drive.google.com/file/d/1wRo6ll5qoHGhMtaxyD6zUprTS4F_mO8t/view?usp=sharing",
      showDownload: true,
      downloadDisabled: false,
      topPosition: -400
    }
  ];

  // Create timeline years from 2018 to 2026
  const years = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];
  
  // Base timeline reference dates (reversed: 2026 at top, 2018 at bottom)
  const timelineStart = new Date(2026, 11, 31); // December 31, 2026 (top)
  const timelineEnd = new Date(2018, 0, 1); // January 1, 2018 (bottom)
  const timelineHeight = 2500; // Total timeline height in pixels
  
  // Calculate position based on actual date (reversed timeline)
  const getDatePosition = (date) => {
    const totalTimespan = timelineStart.getTime() - timelineEnd.getTime();
    const dateOffset = timelineStart.getTime() - date.getTime();
    return (dateOffset / totalTimespan) * timelineHeight;
  };
  
  // Calculate year position based on actual date
  const getYearPosition = (year) => {
    const yearDate = new Date(year, 0, 1); // January 1st of the year
    return getDatePosition(yearDate);
  };
  
  const getBarHeight = (cert) => {
    // Calculate height based on actual duration
    const startPos = getDatePosition(cert.startDate);
    const endPos = getDatePosition(cert.endDate);
    return Math.abs(endPos - startPos) + 20; // Add minimum height for visibility
  };
  
  const getBarTopPosition = (cert) => {
    // Position at the start date (most recent date appears at top)
    const startPos = getDatePosition(cert.startDate);
    const endPos = getDatePosition(cert.endDate);
    return Math.min(startPos, endPos);
  };

  return (
    <section id="certificates" className="sketchy-section">
      <div className="container mx-auto px-4">
        <h2 className="sketchy-title text-center">Certificates & Qualifications</h2>
        <p className="text-xl text-center font-handwrite text-muted-foreground mb-12 max-w-3xl mx-auto">
          Continuous learning is my passion! Here are some certifications that validate 
          my skills and commitment to stay up to date with the latest technology.
        </p>
        
        {/* Timeline */}
        <div className="max-w-6xl mx-auto relative" style={{ height: '2600px' }}>
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full"></div>
          
          {/* Year labels */}
          {years.map((year) => (
            <div key={year} className="absolute left-1/2 transform -translate-x-1/2" style={{ top: `${getYearPosition(year) + 20}px` }}>
              <div className="bg-background border-2 border-primary px-3 py-1 rounded font-bold text-sm font-handwrite">
                {year}
              </div>
            </div>
          ))}
          
          {/* Duration bars */}
          {certificates.map((cert, index) => {
            const barHeight = getBarHeight(cert);
            const barTopPosition = getBarTopPosition(cert);
            const barWidth = 12;
            
            // Custom positioning to avoid overlaps
            const getBarSide = (index) => {
              const pattern = [true, true, false, true, false, true, false, true, false]; // Custom pattern
              return pattern[index];
            };
            const isLeft = getBarSide(index);
            
            // Calculate certificate duration for distance from main line
            const duration = cert.endYear - cert.startYear + 1;
            
            // Get all certificates on the same side and sort by duration (longest first)
            const sameSideCerts = certificates
              .map((c, i) => ({ cert: c, index: i, duration: c.endYear - c.startYear + 1 }))
              .filter((c) => getBarSide(c.index) === isLeft)
              .sort((a, b) => b.duration - a.duration);
            
            // Find the position of current certificate in the sorted order
            const positionInSameSide = sameSideCerts.findIndex(c => c.index === index);
            
            // Calculate horizontal shift based on position (closer to line = less shift)
            const baseShift = positionInSameSide * 25; // 25px per position away from line
            
            return (
              <div
                key={index}
                className={`absolute ${cert.color} opacity-80 rounded`}
                style={{
                  left: isLeft 
                    ? `calc(50% - ${45 + baseShift}px)` 
                    : `calc(50% + ${33 + baseShift}px)`,
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
              const pattern = [true, true, false, true, false, true, false, true, false];
              return pattern[index];
            };
            const isLeft = getBarSide(index);
            
            // Calculate certificate duration for distance from main line
            const duration = cert.endYear - cert.startYear + 1;
            
            // Get all certificates on the same side and sort by duration (longest first)
            const sameSideCerts = certificates
              .map((c, i) => ({ cert: c, index: i, duration: c.endYear - c.startYear + 1 }))
              .filter((c) => getBarSide(c.index) === isLeft)
              .sort((a, b) => b.duration - a.duration);
            
            // Find the position of current certificate in the sorted order
            const positionInSameSide = sameSideCerts.findIndex(c => c.index === index);
            
            // Calculate horizontal shift based on position (closer to line = less shift)
            const baseShift = positionInSameSide * 25; // 25px per position away from line
            
            // Position card to match its bar center - independent positioning
            const colorBlockTop = getBarTopPosition(cert);
            const colorBlockCenter = colorBlockTop + (getBarHeight(cert) / 2);
            const topPosition = colorBlockCenter - 80; // Center card on bar center
            
            // Calculate connection line from color block center to card center
            // const cardCenter = topPosition + 80; // Approximate center of card height
            // const verticalConnectorOffset = cardCenter - colorBlockCenter;
            
            return (
              <div key={index} className="absolute flex items-center w-full" style={{ top: `${topPosition + cert.topPosition}px` }}>
                {isLeft ? (
                  <>
                    {/* Content on left */}
                    <div className="w-1/2 flex justify-end relative z-10" style={{ paddingRight: `${37 + baseShift}px` }}>
                      <div className="p-6 max-w-md relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                             <h3 className={`text-xs sm:text-sm md:text-base lg:text-lg font-bold font-handwrite mb-1 ${cert.textColor} ${cert.title.includes('Degree') ? 'underline' : ''}`}>
                               {cert.title}
                             </h3>
                             <p className="text-muted-foreground font-handwrite text-xs sm:text-sm">
                               {cert.issuer}
                             </p>
                          </div>
                         
                        </div>
                        
                      
                        
                        {/* <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                               <span 
                                 key={skillIndex}
                                 className="text-xs px-1 sm:px-2 py-1 bg-primary/10 text-primary rounded font-handwrite"
                               >
                                 {skill}
                               </span>
                            ))}
                          </div>
                        </div> */}
                        
                        <div className="flex items-center justify-between mb-2">
                           <p className="text-xs text-muted-foreground font-handwrite">
                             {cert.date}
                           </p>
                            <div className="flex gap-1 sm:gap-2">
                              {cert.showDownload && (
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="font-handwrite text-xs h-6 sm:h-8 px-1 sm:px-2"
                                  disabled={cert.downloadDisabled}
                                  onClick={() => cert.downloadUrl && window.open(cert.downloadUrl, '_blank')}
                                >
                                  <Download className="w-2 h-2 sm:w-3 sm:h-3 mr-0 sm:mr-1" />
                                  <span className="hidden sm:inline">Show</span>
                                </Button>
                              )}
                              {cert.showVerify && (
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="font-handwrite text-xs h-6 sm:h-8 px-1 sm:px-2"
                                  disabled={cert.verifyDisabled}
                                  onClick={() => cert.verifyUrl && window.open(cert.verifyUrl, '_blank')}
                                >
                                  <ExternalLink className="w-2 h-2 sm:w-3 sm:h-3 mr-0 sm:mr-1" />
                                  <span className="hidden sm:inline">Verify</span>
                                </Button>
                              )}
                            </div>
                        </div>
                      </div>
                    </div>
                     
                     {/* Timeline space */}
                     <div className="w-8 flex justify-center relative">
                     </div>
                    
                    <div className="w-1/2"></div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2"></div>
                     
                     {/* Timeline space */}
                     <div className="w-8 flex justify-center relative">
                     </div>
                    
                    {/* Content on right */}
                    <div className="w-1/2" style={{ paddingLeft: `${37 + baseShift}px` }}>
                      <div className="p-6 max-w-md">
                         <div className="flex items-start justify-between mb-3">
                           <div className="flex-1">
                                 <h3 className={`text-xs sm:text-sm md:text-base lg:text-lg font-bold font-handwrite mb-1 ${cert.textColor} ${cert.title.includes('Degree') ? 'underline' : ''}`}>
                                   {cert.title}
                                 </h3>
                              <p className="text-muted-foreground font-handwrite text-xs sm:text-sm">
                                {cert.issuer}
                              </p>
                           </div>
                           
                         </div>
                
                        
                        {/* <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                               <span 
                                 key={skillIndex}
                                 className="text-xs px-1 sm:px-2 py-1 bg-primary/10 text-primary rounded font-handwrite"
                               >
                                 {skill}
                               </span>
                            ))}
                          </div>
                        </div> */}
                        
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-xs text-muted-foreground font-handwrite">
                            {cert.date}
                          </p>
                           <div className="flex gap-1 sm:gap-2">
                             {cert.showDownload && (
                               <Button 
                                 variant="outline" 
                                 size="sm" 
                                 className="font-handwrite text-xs h-6 sm:h-8 px-1 sm:px-2"
                                 disabled={cert.downloadDisabled}
                                 onClick={() => cert.downloadUrl && window.open(cert.downloadUrl, '_blank')}
                               >
                                 <Download className="w-2 h-2 sm:w-3 sm:h-3 mr-0 sm:mr-1" />
                                 <span className="hidden sm:inline">Show</span>
                               </Button>
                             )}
                             {cert.showVerify && (
                               <Button 
                                 variant="outline" 
                                 size="sm" 
                                 className="font-handwrite text-xs h-6 sm:h-8 px-1 sm:px-2"
                                 disabled={cert.verifyDisabled}
                                 onClick={() => cert.verifyUrl && window.open(cert.verifyUrl, '_blank')}
                               >
                                 <ExternalLink className="w-2 h-2 sm:w-3 sm:h-3 mr-0 sm:mr-1" />
                                 <span className="hidden sm:inline">Verify</span>
                               </Button>
                             )}
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
        
        {/* <div className="sketchy-card max-w-2xl mx-auto mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-sketchy-secondary font-handwrite">
            📚 Continuous Learning
          </h3>
          <p className="font-handwrite text-muted-foreground mb-4">
            Always exploring new technologies and expanding my skillset
          </p>
          <p className="font-handwrite text-sm text-muted-foreground">
            Next goal: Advanced AI & Machine Learning specialization
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default CertificatesSection;