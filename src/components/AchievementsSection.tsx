import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Import achievement images
import employeeOfYearImg from "@/assets/achievements/employee-of-year.jpg";
import performanceImprovementImg from "@/assets/achievements/performance-improvement.jpg";
import projectLaunchesImg from "@/assets/achievements/project-launches.jpg";
import openSourceImg from "@/assets/achievements/open-source.jpg";
import techBlogImg from "@/assets/achievements/tech-blog.jpg";
import npmPackageImg from "@/assets/achievements/npm-package.jpg";
import hackathonWinnerImg from "@/assets/achievements/hackathon-winner.jpg";
import innovationAwardImg from "@/assets/achievements/innovation-award.jpg";
import deansListImg from "@/assets/achievements/deans-list.jpg";
import mentoringImg from "@/assets/achievements/mentoring.jpg";
import conferenceSpeakerImg from "@/assets/achievements/conference-speaker.jpg";
import techMeetupImg from "@/assets/achievements/tech-meetup.jpg";

const AchievementsSection = () => {
  const achievements = [
    {
      category: "Professional",
      icon: "🏢",
      items: [
        {
          title: "Employee of the Year 2023",
          description: "Recognized for outstanding performance and leadership in delivering critical projects",
          date: "December 2023",
          detailedDescription: "This prestigious award recognized my exceptional performance throughout 2023. I consistently delivered high-quality work while mentoring junior team members and leading critical projects that directly impacted company revenue. The recognition came from peers, management, and clients who appreciated my technical expertise, leadership skills, and collaborative approach to problem-solving.",
          highlights: ["Led 3 critical projects worth $2M+", "Mentored 8 junior developers", "98% client satisfaction rate", "Reduced project delivery time by 25%"],
          color: "text-blue-600",
          image: employeeOfYearImg
        },
        {
          title: "Led Team to 40% Performance Improvement",
          description: "Optimized application architecture resulting in significant performance gains",
          date: "August 2023",
          detailedDescription: "Through careful analysis and optimization of our application architecture, I led a team initiative that resulted in a remarkable 40% performance improvement across all key metrics. This involved implementing advanced caching strategies, optimizing database queries, refactoring critical code paths, and introducing performance monitoring tools that provided real-time insights.",
          highlights: ["40% faster page load times", "Reduced server response time by 60%", "Optimized database queries", "Implemented advanced caching"],
          color: "text-green-600",
          image: performanceImprovementImg
        },
        {
          title: "Successfully Launched 5 Major Projects",
          description: "All delivered on time and under budget with zero critical bugs",
          date: "2022-2023",
          detailedDescription: "Over the span of 18 months, I successfully led and delivered 5 major projects, each with different technical challenges and business requirements. My approach focused on thorough planning, agile development methodologies, comprehensive testing, and clear communication with stakeholders. The result was exceptional: every project was delivered on time, under budget, and with zero critical bugs in production.",
          highlights: ["100% on-time delivery rate", "15% average budget savings", "Zero critical bugs", "Client satisfaction: 98%"],
          color: "text-purple-600",
          image: projectLaunchesImg
        }
      ]
    },
    {
      category: "Technical",
      icon: "💻",
      items: [
        {
          title: "Open Source Contributor",
          description: "Active contributor to React, Next.js, and TypeScript communities with 500+ GitHub contributions",
          date: "Ongoing",
          detailedDescription: "Being an active open source contributor is one of my greatest passions. I've made over 500 contributions to various projects including React, Next.js, and TypeScript ecosystems. My contributions range from bug fixes and documentation improvements to new feature implementations. I believe in giving back to the community that has taught me so much, and I love collaborating with developers from around the world.",
          highlights: ["500+ GitHub contributions", "React & Next.js contributor", "TypeScript community member", "Multiple merged PRs"],
          color: "text-green-600",
          image: openSourceImg
        },
        {
          title: "Tech Blog with 50K+ Readers",
          description: "Write technical articles about modern web development reaching thousands of developers",
          date: "2022-Present",
          detailedDescription: "My tech blog has grown to reach over 50,000 readers who appreciate in-depth technical content about modern web development. I write comprehensive articles covering React patterns, TypeScript best practices, performance optimization, and emerging technologies. The blog has become a valuable resource for developers looking to level up their skills, and I regularly receive feedback from readers who've successfully applied concepts from my articles.",
          highlights: ["50K+ monthly readers", "40+ published articles", "Featured on dev.to", "High engagement rate"],
          color: "text-blue-600",
          image: techBlogImg
        },
        {
          title: "Created Popular NPM Package",
          description: "Built 'react-sketchy-ui' - downloaded 10K+ times with 4.8/5 rating",
          date: "January 2023",
          detailedDescription: "I created and published 'react-sketchy-ui', a unique React component library that provides hand-drawn, sketchy-style UI components. The package has been downloaded over 10,000 times and maintains a 4.8/5 star rating. It demonstrates my ability to identify gaps in the ecosystem, create valuable tools for the community, and maintain high-quality open source projects with comprehensive documentation and examples.",
          highlights: ["10K+ NPM downloads", "4.8/5 star rating", "Active maintenance", "Featured in React newsletter"],
          color: "text-purple-600",
          image: npmPackageImg
        }
      ]
    },
    {
      category: "Awards & Recognition",
      icon: "🏆",
      items: [
        {
          title: "Hackathon Winner - TechCrunch Disrupt",
          description: "1st place for developing an AI-powered accessibility tool in 48 hours",
          date: "September 2023",
          detailedDescription: "At TechCrunch Disrupt, I led a team that developed an innovative AI-powered accessibility tool in just 48 hours. Our solution used machine learning to automatically generate alt text for images and provide real-time audio descriptions for visually impaired users. The judges were impressed by both the technical implementation and the social impact potential. This win validated my ability to rapidly prototype complex solutions under pressure.",
          highlights: ["1st place among 200+ teams", "AI-powered accessibility tool", "48-hour development sprint", "$50K prize + mentorship"],
          color: "text-yellow-600",
          image: hackathonWinnerImg
        },
        {
          title: "Best Innovation Award",
          description: "Company-wide recognition for introducing automated testing practices",
          date: "June 2023",
          detailedDescription: "I received the Best Innovation Award for successfully introducing comprehensive automated testing practices across our development team. This initiative reduced bugs in production by 75%, decreased deployment time by 50%, and improved overall code quality. The implementation included unit tests, integration tests, and end-to-end testing pipelines that became the gold standard for the entire organization.",
          highlights: ["75% reduction in production bugs", "50% faster deployments", "Company-wide adoption", "ROI: $500K+ annually"],
          color: "text-orange-600",
          image: innovationAwardImg
        },
        {
          title: "Dean's List - University Honor",
          description: "Maintained GPA above 3.8 for 6 consecutive semesters",
          date: "2020-2022",
          detailedDescription: "Achieving Dean's List recognition for 6 consecutive semesters demonstrated my commitment to academic excellence while balancing a demanding Computer Science curriculum. This honor required maintaining a GPA above 3.8 while taking advanced courses in algorithms, data structures, software engineering, and artificial intelligence. The achievement reflects my dedication to learning and ability to excel under academic pressure.",
          highlights: ["6 consecutive semesters", "GPA above 3.8", "Computer Science major", "Top 10% of class"],
          color: "text-blue-600",
          image: deansListImg
        }
      ]
    },
    {
      category: "Community Impact",
      icon: "🌟",
      items: [
        {
          title: "Mentored 25+ Junior Developers",
          description: "Provided guidance and career coaching through coding bootcamp programs",
          date: "2022-Present",
          detailedDescription: "One of my most fulfilling activities is mentoring junior developers through various coding bootcamp programs. I've guided over 25 aspiring developers, helping them transition into tech careers. My mentorship covers technical skills, career guidance, interview preparation, and professional development. Many of my mentees have successfully landed their first tech jobs and continue to thrive in the industry.",
          highlights: ["25+ successful mentees", "80% job placement rate", "Career transition guidance", "Ongoing professional support"],
          color: "text-green-600",
          image: mentoringImg
        },
        {
          title: "Conference Speaker",
          description: "Presented at 8 tech conferences about modern web development practices",
          date: "2022-2023",
          detailedDescription: "I've had the privilege of speaking at 8 major tech conferences, sharing my expertise on modern web development practices with thousands of fellow developers. My presentations cover topics like React performance optimization, TypeScript best practices, and building scalable applications. These speaking engagements have helped me build my reputation in the tech community and connect with developers worldwide.",
          highlights: ["8 conference presentations", "5,000+ audience members", "Topics: React, TypeScript, Performance", "Featured speaker at ReactConf"],
          color: "text-red-600",
          image: conferenceSpeakerImg
        },
        {
          title: "Organized Local Tech Meetup",
          description: "Founded and organized monthly meetup with 200+ regular attendees",
          date: "2021-Present",
          detailedDescription: "I founded and organize a monthly tech meetup that has grown to over 200 regular attendees. The meetup focuses on modern web development, emerging technologies, and career development. We feature guest speakers, hands-on workshops, and networking opportunities. This initiative has created a thriving local tech community and helped countless developers advance their careers through knowledge sharing and professional connections.",
          highlights: ["200+ regular attendees", "36+ successful events", "Featured 50+ speakers", "Strong community impact"],
          color: "text-purple-600",
          image: techMeetupImg
        }
      ]
    }
  ];

  return (
    <section id="achievements" className="sketchy-section">
      <div className="container mx-auto px-4">
        <h2 className="sketchy-title text-center">Achievements & Milestones</h2>
        <p className="text-xl text-center font-handwrite text-muted-foreground mb-12 max-w-3xl mx-auto">
          Here are some milestones and achievements I'm proud of throughout my journey. 
          Each one represents growth, learning, and the support of amazing teams!
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {achievements.map((category, categoryIndex) => (
            <div key={categoryIndex} className="sketchy-card">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-sketchy-primary font-handwrite">
                  {category.category}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.items.map((achievement, achievementIndex) => (
                  <Dialog key={achievementIndex}>
                    <DialogTrigger asChild>
                      <div className="border-l-4 border-sketchy-secondary pl-4 py-2 cursor-pointer hover:bg-accent/50 transition-colors rounded-r-lg">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-lg font-handwrite flex-1">
                            {achievement.title}
                          </h4>
                          <span className="text-sm text-muted-foreground font-handwrite ml-4">
                            {achievement.date}
                          </span>
                        </div>
                        <p className="text-muted-foreground font-handwrite leading-relaxed">
                          {achievement.description}
                        </p>
                        <p className="text-xs text-muted-foreground font-handwrite mt-2 opacity-70">
                          Click to learn more
                        </p>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <div className="space-y-6">
                        <div className="flex items-start gap-6">
                          <div className="w-1/2">
                            <img 
                              src={achievement.image} 
                              alt={achievement.title}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                          </div>
                          <div className="w-1/2 space-y-4">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-2xl">{category.icon}</span>
                                <span className="text-sm text-muted-foreground font-handwrite">
                                  {category.category}
                                </span>
                              </div>
                              <h3 className={`text-2xl font-bold font-handwrite mb-2 ${achievement.color}`}>
                                {achievement.title}
                              </h3>
                              <p className="text-sm text-muted-foreground font-handwrite mb-4">
                                {achievement.date}
                              </p>
                            </div>
                            <div className="space-y-4">
                              <h4 className="text-lg font-semibold font-handwrite">Key Highlights</h4>
                              <ul className="space-y-2">
                                {achievement.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-center gap-2 font-handwrite">
                                    <span className="text-green-500">✓</span>
                                    <span className="text-sm">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold font-handwrite mb-3">Full Story</h4>
                          <p className="text-muted-foreground font-handwrite leading-relaxed">
                            {achievement.detailedDescription}
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
          {[
            { number: "50+", label: "Projects Completed", icon: "🚀" },
            { number: "3+", label: "Years Experience", icon: "⏰" },
            { number: "10K+", label: "Code Commits", icon: "💻" },
            { number: "25+", label: "People Mentored", icon: "👥" }
          ].map((stat, index) => (
            <div key={index} className="sketchy-card text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-sketchy-primary font-handwrite mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-handwrite">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;