const AchievementsSection = () => {
  const achievements = [
    {
      category: "Professional",
      icon: "🏢",
      items: [
        {
          title: "Employee of the Year 2023",
          description: "Recognized for outstanding performance and leadership in delivering critical projects",
          date: "December 2023"
        },
        {
          title: "Led Team to 40% Performance Improvement",
          description: "Optimized application architecture resulting in significant performance gains",
          date: "August 2023"
        },
        {
          title: "Successfully Launched 5 Major Projects",
          description: "All delivered on time and under budget with zero critical bugs",
          date: "2022-2023"
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
          date: "Ongoing"
        },
        {
          title: "Tech Blog with 50K+ Readers",
          description: "Write technical articles about modern web development reaching thousands of developers",
          date: "2022-Present"
        },
        {
          title: "Created Popular NPM Package",
          description: "Built 'react-sketchy-ui' - downloaded 10K+ times with 4.8/5 rating",
          date: "January 2023"
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
          date: "September 2023"
        },
        {
          title: "Best Innovation Award",
          description: "Company-wide recognition for introducing automated testing practices",
          date: "June 2023"
        },
        {
          title: "Dean's List - University Honor",
          description: "Maintained GPA above 3.8 for 6 consecutive semesters",
          date: "2020-2022"
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
          date: "2022-Present"
        },
        {
          title: "Conference Speaker",
          description: "Presented at 8 tech conferences about modern web development practices",
          date: "2022-2023"
        },
        {
          title: "Organized Local Tech Meetup",
          description: "Founded and organized monthly meetup with 200+ regular attendees",
          date: "2021-Present"
        }
      ]
    }
  ];

  return (
    <section id="achievements" className="sketchy-section paper-texture">
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
                  <div key={achievementIndex} className="border-l-4 border-sketchy-secondary pl-4 py-2">
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
                  </div>
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