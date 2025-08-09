import { Github, Linkedin, Mail, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  return (
    <section id="personal">
      {/* Hero Section with Split Design - Full Width */}
      <div className="relative w-screen bg-white overflow-hidden mb-12 -mx-[50vw] left-1/2" style={{backgroundImage: `url('/lovable-uploads/880d6be5-c36b-46a4-a632-d188f6a71b38.png')`, backgroundSize: '60%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', paddingBottom: '30%'}}>
        {/* Coding Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="text-xs font-mono text-foreground/20 leading-relaxed p-8">
            <pre>{`
const developer = {
  name: "Anastasiia Demidova",
  skills: ["React", "TypeScript", "Python", "AI/ML"],
  passion: "Building innovative solutions",
  location: "Remote"
};

function createAmazingThings() {
  return developer.skills.map(skill => 
    skill + " = innovation"
  );
}

class AIEngineer extends Developer {
  constructor() {
    super();
    this.specialties = ["Machine Learning", "Deep Learning"];
  }
  
  solve(problem) {
    return this.ai.process(problem);
  }
}

// Always learning, always creating
while(coding) {
  learn();
  build();
  innovate();
}
            `}</pre>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-12 w-full p-8">
            {/* Left Side - AI Engineer */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                AI Engineer
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                AI engineer who builds intelligent systems and machine learning solutions.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {["Python", "TensorFlow", "PyTorch", "ML/AI"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Right Side - Web Developer */}
            <div className="text-center md:text-right">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Web Developer
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Frontend developer who writes clean, elegant and efficient code.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                {["React", "TypeScript", "Next.js", "Tailwind"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Info Cards */}
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
        {/* Profile & Bio */}
        <div className="bg-card rounded-lg p-6 border">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="relative">
              <img 
                src={profilePhoto} 
                alt="Anastasiia Demidova" 
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary/20 relative z-10"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/80 via-transparent to-white/80 pointer-events-none"></div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Anastasiia Demidova</h3>
            <p className="text-muted-foreground">Full Stack Developer & AI Engineer</p>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            Passionate developer with expertise in both web development and artificial intelligence. 
            I love creating innovative solutions that bridge the gap between traditional software 
            development and cutting-edge AI technologies. Always eager to learn new technologies 
            and tackle challenging problems.
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-card rounded-lg p-6 border">
          <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
          
          <div className="space-y-4">
            <a 
              href="mailto:stxdem@gmail.com"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                stxdem@gmail.com
              </span>
            </a>
            
            <a 
              href="https://github.com/stDem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                <Github className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                github.com/stDem
              </span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/anst-dem/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                <Linkedin className="w-5 h-5 text-accent" />
              </div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                linkedin.com/in/anst-dem/
              </span>
            </a>
            
            <a 
              href="https://wa.me/491628645712"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <div className="p-2 bg-muted rounded-lg group-hover:bg-muted-foreground/20 transition-colors">
                <Phone className="w-5 h-5 text-muted-foreground" />
              </div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                +491628645712
              </span>
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutSection;