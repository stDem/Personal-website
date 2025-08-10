import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Import hobby images
import swimmingImg from "@/assets/hobbies/swimming.jpg";
import tennisImg from "@/assets/hobbies/tennis.jpg";
import joggingImg from "@/assets/hobbies/jogging.jpg";
import cyclingImg from "@/assets/hobbies/cycling.jpg";
import crossCountrySkiingImg from "@/assets/hobbies/cross-country-skiing.jpg";
import skiingImg from "@/assets/hobbies/skiing.jpg";
import musicImg from "@/assets/hobbies/music.jpg";
import travelingImg from "@/assets/hobbies/traveling.jpg";
import yogaImg from "@/assets/hobbies/yoga.jpg";
import gamingImg from "@/assets/hobbies/gaming.jpg";
import rockClimbingImg from "@/assets/hobbies/rock-climbing.jpg";
import waterSportsImg from "@/assets/hobbies/water-sports.jpg";
import divingImg from "@/assets/hobbies/diving.jpg";

const HobbiesSection = () => {
  const [selectedHobby, setSelectedHobby] = useState(null);

  const hobbies = [
    {
      title: "Swimming",
      icon: "🏊‍♀️",
      description: "Started swimming 3 years ago and absolutely love the feeling of being in water.",
      detailedDescription: "Swimming has become one of my favorite activities. I've been swimming for 3 years now, and I had 5 years of professional training during my childhood. There's something incredibly peaceful about being in the water - it's both a great workout and a form of meditation for me.",
      highlights: ["3 years current practice", "5 years professional childhood training", "Pool and open water swimming"],
      color: "text-blue-600",
      image: swimmingImg
    },
    {
      title: "Tennis",
      icon: "🎾",
      description: "Playing tennis for more than 8 years - it's my go-to sport for staying active and competitive.",
      detailedDescription: "Tennis has been a constant in my life for over 8 years. I love the strategic aspect of the game, the quick decision-making, and the physical challenge. Whether it's a casual game with friends or a more competitive match, tennis always keeps me engaged and helps me stay in great shape.",
      highlights: ["8+ years experience", "Regular tournament participation", "Both singles and doubles play"],
      color: "text-green-600",
      image: tennisImg
    },
    {
      title: "Jogging",
      icon: "🏃‍♀️",
      description: "Jogging is my constant habit - there's nothing like a good run to clear the mind and energize the body.",
      detailedDescription: "Jogging has become an essential part of my daily routine. It's my time to think, to process the day, and to maintain my physical and mental health. Whether it's a quick morning run or a longer evening jog, running helps me stay centered and focused.",
      highlights: ["Daily running habit", "5-10km regular distances", "Morning and evening runs"],
      color: "text-orange-600",
      image: joggingImg
    },
    {
      title: "Cycling",
      icon: "🚴‍♀️",
      description: "I prefer long cycling trips with music, sometimes covering up to 130 km per day.",
      detailedDescription: "Cycling long distances is one of my greatest pleasures. With my headphones on and good music playing, I can cycle for hours, covering up to 130 km in a single day. These long rides are perfect for exploring new areas, getting great exercise, and having time to think and enjoy nature.",
      highlights: ["Long distance cycling", "Up to 130km per day", "Music-accompanied rides", "Scenic route exploration"],
      color: "text-purple-600",
      image: cyclingImg
    },
    {
      title: "Cross Country Skiing",
      icon: "⛷️",
      description: "My favorite winter sport - there's something magical about gliding through snowy forests.",
      detailedDescription: "Cross country skiing is definitely my favorite winter activity. The combination of the peaceful winter landscape, the rhythmic motion of skiing, and the full-body workout makes it incredibly satisfying. I love exploring snowy trails and the meditative quality of this sport.",
      highlights: ["Favorite winter sport", "Forest trail exploration", "Full-body workout", "Winter landscape photography"],
      color: "text-cyan-600",
      image: crossCountrySkiingImg
    },
    {
      title: "Ice Skating",
      icon: "⛸️",
      description: "Graceful movement on ice - a beautiful combination of balance, skill, and artistry.",
      detailedDescription: "Ice skating is an elegant sport that combines grace, balance, and athleticism. Whether it's figure skating or just recreational skating, there's something magical about gliding across the ice. It's a great way to enjoy winter and develop coordination and balance skills.",
      highlights: ["Figure skating elements", "Ice rink regular", "Balance and coordination", "Winter sport enjoyment"],
      color: "text-blue-500",
      image: skiingImg
    },
    {
      title: "Music",
      icon: "🎵",
      description: "Rock music lover who played clarinet in elementary school orchestra, now exploring kalimba, piano, and guitar.",
      detailedDescription: "Music has always been a huge part of my life. I'm a dedicated rock music listener and have a rich musical background. I played clarinet in my elementary school symphony orchestra, which gave me a strong foundation in music theory. Now I enjoy playing kalimba, piano, and I'm learning guitar. Music is my creative outlet and emotional expression.",
      highlights: ["Rock music enthusiast", "Former clarinet player in orchestra", "Current: kalimba, piano, guitar", "Music theory background"],
      color: "text-purple-600",
      image: musicImg
    },
    {
      title: "Traveling",
      icon: "✈️",
      description: "Always ready to explore new places - traveling feeds my curiosity and love for adventure.",
      detailedDescription: "Traveling is more than just a hobby for me - it's a passion. I'm always ready to explore new places, experience different cultures, try new foods, and meet interesting people. Each trip teaches me something new about the world and about myself. I love both spontaneous adventures and carefully planned explorations.",
      highlights: ["Cultural exploration", "Adventure seeking", "Photography while traveling", "Local cuisine tasting"],
      color: "text-emerald-600",
      image: travelingImg
    },
    {
      title: "Yoga",
      icon: "🧘‍♀️",
      description: "A nice way to relax and stretch - yoga helps me maintain balance in both body and mind.",
      detailedDescription: "Yoga is my sanctuary for relaxation and mindfulness. It's the perfect way to stretch my body, calm my mind, and find inner balance. Whether it's a gentle morning flow or a more challenging evening practice, yoga helps me stay flexible, both physically and mentally, and provides a peaceful break from busy days.",
      highlights: ["Daily practice", "Flexibility and strength", "Mindfulness meditation", "Stress relief"],
      color: "text-pink-600",
      image: yogaImg
    },
    {
      title: "Gaming",
      icon: "🎮",
      description: "Strategy games and RPGs fuel my competitive spirit and love for immersive storytelling.",
      detailedDescription: "Gaming is my way to unwind and challenge my strategic thinking. I particularly enjoy strategy games and RPGs that offer deep storytelling and complex decision-making. Gaming helps me relax after coding sessions while still keeping my mind engaged with puzzles and strategic challenges.",
      highlights: ["Strategy & RPG games", "Competitive online player", "Game development interest", "Problem-solving skills"],
      color: "text-red-600",
      image: gamingImg
    },
    {
      title: "Rock Climbing",
      icon: "🧗‍♂️",
      description: "Pushing physical and mental limits on rock faces - problem-solving meets athleticism.",
      detailedDescription: "Rock climbing combines physical strength, mental focus, and problem-solving in the most exciting way. Each route is like a puzzle that requires patience, trust, and determination to solve. Whether I'm climbing indoors or exploring outdoor crags, this sport teaches me valuable lessons about perseverance and trusting both my abilities and my climbing partners.",
      highlights: ["5.10c grade climber", "Weekend mountain trips", "Indoor & outdoor climbing", "Problem-solving skills"],
      color: "text-orange-600",
      image: rockClimbingImg
    },
    {
      title: "Water Sports",
      icon: "🏄‍♀️",
      description: "Exploring paddleboarding and kayaking - enjoying peaceful moments on the water.",
      detailedDescription: "I have some experience with various water sports, particularly paddleboarding and kayaking. These activities offer a perfect combination of gentle exercise and peaceful meditation while being surrounded by water. There's something incredibly calming about being on the water, whether it's a quiet lake or a gentle river.",
      highlights: ["Paddleboarding experience", "Kayaking adventures", "Water meditation", "Nature exploration"],
      color: "text-teal-600",
      image: waterSportsImg
    },
    {
      title: "Diving",
      icon: "🤿",
      description: "Exploring the underwater world - a little experience that opened up amazing new perspectives.",
      detailedDescription: "My diving experience might be limited, but it has opened up an entirely new world for me. The underwater environment is fascinating and peaceful in a way that's completely different from any other activity. Even with just a little experience, I've fallen in love with the marine life and the unique perspective diving provides.",
      highlights: ["Beginner level experience", "Marine life fascination", "Underwater photography interest", "New world exploration"],
      color: "text-blue-500",
      image: divingImg
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
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="sketchy-card group hover:scale-105 transition-transform cursor-pointer">
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
                    
                    <div className="mt-4 text-center">
                      <span className="text-sm font-handwrite text-primary hover:underline">
                        Click to learn more →
                      </span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-5xl">{hobby.icon}</div>
                      <div>
                        <h2 className={`text-3xl font-bold font-handwrite ${hobby.color}`}>
                          {hobby.title}
                        </h2>
                      </div>
                    </div>
                    
                    <div className="aspect-video w-full overflow-hidden rounded-lg">
                      <img 
                        src={hobby.image} 
                        alt={`${hobby.title} activity`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-lg font-handwrite leading-relaxed text-muted-foreground">
                        {hobby.detailedDescription}
                      </p>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-3 font-handwrite">Highlights & Experience:</h3>
                        <ul className="space-y-2">
                          {hobby.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="font-handwrite text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
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