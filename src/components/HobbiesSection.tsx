const HobbiesSection = () => {
  const hobbies = [
    {
      title: "Photography",
      icon: "📸",
      description: "Capturing life's beautiful moments through the lens. I specialize in landscape and street photography, finding stories in everyday scenes.",
      highlights: ["500+ photos on Unsplash", "Featured in local gallery", "Nature & urban exploration"],
      color: "text-blue-600"
    },
    {
      title: "Rock Climbing",
      icon: "🧗‍♂️",
      description: "Pushing physical and mental limits on rock faces. This hobby teaches me problem-solving, patience, and the importance of trust.",
      highlights: ["5.10c grade climber", "Weekend mountain trips", "Indoor & outdoor climbing"],
      color: "text-orange-600"
    },
    {
      title: "Playing Guitar",
      icon: "🎸",
      description: "Creating melodies and expressing emotions through music. From acoustic folk to electric rock, music is my creative outlet.",
      highlights: ["15+ years playing", "Performed at local venues", "Fingerstyle & electric"],
      color: "text-purple-600"
    },
    {
      title: "Cooking & Baking",
      icon: "👨‍🍳",
      description: "Experimenting with flavors and techniques from around the world. Cooking is like coding - following recipes, then improvising!",
      highlights: ["Italian cuisine specialist", "Sourdough bread master", "Weekly dinner parties"],
      color: "text-green-600"
    },
    {
      title: "Gaming",
      icon: "🎮",
      description: "Strategy games and RPGs fuel my competitive spirit and love for immersive storytelling. Great for unwinding after coding sessions!",
      highlights: ["Strategy & RPG games", "Competitive online player", "Game development hobby"],
      color: "text-red-600"
    },
    {
      title: "Reading",
      icon: "📚",
      description: "Constantly learning through books about technology, philosophy, and science fiction. Knowledge is the best investment!",
      highlights: ["50+ books per year", "Tech & sci-fi focus", "Active in book clubs"],
      color: "text-indigo-600"
    }
  ];

  const activities = [
    {
      title: "Volunteer Coding Instructor",
      description: "Teaching basic programming to underprivileged kids every Saturday",
      commitment: "4 hours/week",
      impact: "Taught 30+ students"
    },
    {
      title: "Environmental Cleanup",
      description: "Monthly beach and park cleanup events with local environmental groups",
      commitment: "1 day/month",
      impact: "200+ lbs waste removed"
    },
    {
      title: "Tech Meetup Organizer",
      description: "Organizing monthly JavaScript meetups for local developer community",
      commitment: "10 hours/month",
      impact: "200+ active members"
    },
    {
      title: "Open Source Maintenance",
      description: "Maintaining and contributing to various open source projects",
      commitment: "5 hours/week",
      impact: "500+ contributions"
    }
  ];

  return (
    <section id="hobbies" className="sketchy-section bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="sketchy-title text-center">Hobbies & Activities</h2>
        <p className="text-xl text-center font-handwrite text-muted-foreground mb-12 max-w-3xl mx-auto">
          Life is more than just code! Here's what keeps me balanced, creative, and energized 
          outside of work. These activities shape who I am as both a developer and a person.
        </p>
        
        {/* Hobbies Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center font-handwrite mb-8 text-sketchy-primary">
            🎨 Personal Interests
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {hobbies.map((hobby, index) => (
              <div key={index} className="sketchy-card group hover:scale-105 transition-transform">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{hobby.icon}</div>
                  <h4 className={`text-xl font-bold font-handwrite ${hobby.color}`}>
                    {hobby.title}
                  </h4>
                </div>
                
                <p className="text-muted-foreground font-handwrite leading-relaxed mb-4">
                  {hobby.description}
                </p>
                
                <div>
                  <h5 className="font-semibold mb-2 text-sm">Highlights:</h5>
                  <ul className="space-y-1">
                    {hobby.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-sm font-handwrite text-muted-foreground">
                        • {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Activities Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center font-handwrite mb-8 text-sketchy-secondary">
            🤝 Community Activities
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {activities.map((activity, index) => (
              <div key={index} className="sketchy-card">
                <h4 className="text-xl font-bold font-handwrite mb-3 text-sketchy-accent">
                  {activity.title}
                </h4>
                
                <p className="text-muted-foreground font-handwrite leading-relaxed mb-4">
                  {activity.description}
                </p>
                
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <span className="font-semibold">Time Commitment:</span>
                    <p className="font-handwrite text-muted-foreground">{activity.commitment}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold">Impact:</span>
                    <p className="font-handwrite text-muted-foreground">{activity.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Fun Quotes Section */}
        <div className="sketchy-card max-w-3xl mx-auto mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6 text-sketchy-neutral font-handwrite">
            💭 Life Philosophy
          </h3>
          <div className="space-y-4">
            <blockquote className="text-lg font-handwrite italic text-muted-foreground">
              "Code is poetry, but life is the entire library."
            </blockquote>
            <blockquote className="text-lg font-handwrite italic text-muted-foreground">
              "Every bug fixed is a problem solved, every hobby pursued is a skill gained."
            </blockquote>
            <blockquote className="text-lg font-handwrite italic text-muted-foreground">
              "The best developers are those who never stop being curious about the world."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;