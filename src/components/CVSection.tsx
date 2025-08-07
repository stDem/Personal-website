const CVSection = () => {
  return (
    <section className="max-w-4xl mx-auto">
      {/* Summary */}
      <div className="bg-card rounded-lg p-8 border mb-8">
        <h2 className="text-3xl font-bold mb-6 text-primary border-b border-border pb-3">Summary</h2>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Artificial Intelligence</strong> Master's student with a solid foundation in Machine learning, Natural Language Processing 
          (with expertise in LLM, LoRA, BERT, GPT, LLaMA etc.), Deep Learning, GenAI, and Computer Vision, and strong analytical skills. 
          Possess a knowledge of databases SQL and Web development technologies, supporting the seamless integration of AI models into 
          interactive applications. Pursued a bachelor's degree in Robotics with a strong knowledge in industrial automation. Known for a 
          strong sense of responsibility, adaptability, and a continuous drive to learn and improve in both technical and collaborative environments.
        </p>
      </div>

      {/* Education */}
      <div className="bg-card rounded-lg p-8 border mb-8">
        <h2 className="text-3xl font-bold mb-6 text-primary border-b border-border pb-3">Education</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-primary/30 pl-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
              <h3 className="text-xl font-bold text-foreground">Technische Hochschule Würzburg-Schweinfurt</h3>
              <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">Mar 2024 – Ongoing / Würzburg, DE</span>
            </div>
            <p className="font-semibold text-foreground mb-1">Master's degree in computer science:</p>
            <p className="text-muted-foreground">• Artificial Intelligence</p>
          </div>
          
          <div className="border-l-4 border-secondary/30 pl-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
              <h3 className="text-xl font-bold text-foreground">Moscow Polytechnic University</h3>
              <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">Sep 2018 – Jun 2022 / Moscow, RU</span>
            </div>
            <p className="font-semibold text-foreground mb-1">Bachelor's degree with honors in engineering:</p>
            <p className="text-muted-foreground">• Automation of technological processes and production (Robotics)</p>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="bg-card rounded-lg p-8 border mb-8">
        <h2 className="text-3xl font-bold mb-6 text-primary border-b border-border pb-3">Experience</h2>
        <div className="space-y-8">
          <div className="border-l-4 border-primary/30 pl-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
              <div>
                <h3 className="text-xl font-bold text-foreground">RTSoft</h3>
                <p className="font-semibold text-secondary">Design Engineer</p>
              </div>
              <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">Oct 2021 – Mar 2024 / Moscow, RU</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-muted-foreground">• Design of automation systems for technological processes and production.</p>
              <p className="text-muted-foreground">• Creation of design, repair and operational documentation for automation systems and their individual objects</p>
            </div>
          </div>
          
          <div className="border-l-4 border-secondary/30 pl-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
              <div>
                <h3 className="text-xl font-bold text-foreground">RTSoft</h3>
                <p className="font-semibold text-secondary">Intern</p>
              </div>
              <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">Jun 2021 – Jul 2021 / Moscow, RU</span>
            </div>
            <div className="mt-3">
              <p className="text-muted-foreground">• Development of an integrated software and hardware complex for automated control and management of technological processes, aimed at testing the core hardware and software components of created automation systems</p>
            </div>
          </div>
          
          <div className="border-l-4 border-accent/30 pl-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
              <div>
                <h3 className="text-xl font-bold text-foreground">United design bureau "Ilizium"</h3>
                <p className="font-semibold text-secondary">Engineer-developer</p>
              </div>
              <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">Sep 2019 – Apr 2020 / Moscow, RU</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-muted-foreground">• Participation in the project to develop a robotic tracking self-propelled device (as engineer and C programmer).</p>
              <p className="text-muted-foreground">• Organizing and planning the team's work process, preparation of reporting documentation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="bg-card rounded-lg p-8 border mb-8">
        <h2 className="text-3xl font-bold mb-6 text-primary border-b border-border pb-3">Skills</h2>
        <div className="grid gap-6">
          <div className="p-4 bg-muted/50 rounded-lg">
            <h4 className="font-bold text-foreground mb-3">Programming Languages</h4>
            <div className="flex flex-wrap gap-2">
              {["Python", "JavaScript/TypeScript", "HTML5", "CSS/SCSS", "SQL"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="p-4 bg-muted/50 rounded-lg">
            <h4 className="font-bold text-foreground mb-3">Software Development</h4>
            <div className="flex flex-wrap gap-2">
              {["GIT", "Node.js", "API", "Linux", "My-SQL-Workbench", "Programming Paradigms"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="p-4 bg-muted/50 rounded-lg">
            <h4 className="font-bold text-foreground mb-3">Python Frameworks & Libraries</h4>
            <div className="flex flex-wrap gap-2">
              {["PyTorch", "TensorFlow", "Numpy", "Pandas", "Keras", "Flask", "scikit-learn", "Jupyter"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="p-4 bg-muted/50 rounded-lg">
            <h4 className="font-bold text-foreground mb-3">Web Frameworks & Libraries</h4>
            <div className="flex flex-wrap gap-2">
              {["React JS", "Vue.js", "Bootstrap", "Chakra UI", "Material UI"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="p-4 bg-muted/50 rounded-lg">
            <h4 className="font-bold text-foreground mb-3">Languages</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">C1: English</span>
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">B1: German</span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Diplomas and Certificates */}
      <div className="bg-card rounded-lg p-8 border mb-8">
        <h2 className="text-3xl font-bold mb-6 text-primary border-b border-border pb-3">Additional Diplomas and Certificates</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-primary/30 pl-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
              <div>
                <h3 className="text-lg font-bold text-foreground">Julius-Maximilians-Universität Würzburg</h3>
                <p className="font-semibold text-secondary">Certificate: Web Programming</p>
              </div>
              <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">Mar 2025 – Ongoing / Würzburg, DE</span>
            </div>
          </div>
          
          <div className="border-l-4 border-secondary/30 pl-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
              <div>
                <h3 className="text-lg font-bold text-foreground">Meta</h3>
                <p className="font-semibold text-secondary">Certificate: Meta Front-End Developer</p>
              </div>
              <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">Okt 2021 – Apr 2025 / Online</span>
            </div>
          </div>
          
          <div className="border-l-4 border-accent/30 pl-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
              <div>
                <h3 className="text-lg font-bold text-foreground">Kreativstorm</h3>
                <p className="font-semibold text-secondary">Certificate: Frontend Development Hands-on Training</p>
              </div>
              <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">Jan 2025 – Feb 2025 / Online, Germany</span>
            </div>
          </div>
          
          <div className="border-l-4 border-primary/30 pl-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
              <div>
                <h3 className="text-lg font-bold text-foreground">GeekBrains</h3>
                <p className="font-semibold text-secondary">Diploma of professional retraining: Frontend-developer. Specialist</p>
              </div>
              <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">Jun 2023 – Oct 2024 / Moscow, RU</span>
            </div>
          </div>
          
          <div className="border-l-4 border-secondary/30 pl-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
              <div>
                <h3 className="text-lg font-bold text-foreground">Moscow polytechnic university</h3>
                <p className="font-semibold text-secondary">Diploma of professional retraining: Information Systems and Technologies</p>
              </div>
              <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">Nov 2021 – Jun 2022 / Moscow, RU</span>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="bg-card rounded-lg p-8 border">
        <h2 className="text-3xl font-bold mb-6 text-primary border-b border-border pb-3">Projects</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">AI Projects</h3>
            <div className="grid gap-4">
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary/30">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-primary">ML, NLP, JS, HTML, CSS:</span> Dota2 draft prediction (
                  <a href="https://github.com/stDem/Dota2-draft-prediction" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>)
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-secondary/30">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-secondary">ML, Computer Vision, Mobile app, Chatbot:</span> Fall detection (
                  <a href="https://github.com/stDem/Fall-Detection-Project" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>)
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-accent/30">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-accent">Deep Learning:</span> Numpy array images classification (
                  <a href="https://github.com/stDem/ANN-numpy-array-images" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>)
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary/30">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-primary">ML:</span> Motions classification (
                  <a href="https://github.com/stDem/Motions-classification" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>)
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-secondary/30">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-secondary">ML:</span> Classification of Onion dataset (
                  <a href="https://github.com/stDem/Classification-of-Onion-dataset" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>)
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-accent/30">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-accent">AI API, Vite, TS, React, Tailwind CSS:</span> AI Web Design Analysis (
                  <a href="https://github.com/stDem/AI-Web-Design-Analysis" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>)
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Web Projects</h3>
            <div className="grid gap-4">
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary/30">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-primary">React, Chakra UI:</span> Portfolio website (
                  <a href="https://github.com/stDem/Portfolio-site" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>)
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-secondary/30">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-secondary">JS, HTML, SCSS, API:</span> Work Space website (
                  <a href="https://github.com/stDem/WorkSpace---portfolio-site" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>)
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-accent/30">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-accent">React, SCSS, API:</span> Little Lemon Restaurant website (
                  <a href="https://github.com/stDem/Little-Lemon-website" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>)
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary/30">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-primary">Vue.js, SCSS:</span> Interior Design website (
                  <a href="https://github.com/stDem/InteriorDesign---portfolio-site" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>)
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-secondary/30">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-secondary">JS, HTML, SCSS:</span> Auto Service website (
                  <a href="https://github.com/stDem/AutoService---portfolio-site" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;