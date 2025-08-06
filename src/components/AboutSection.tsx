const AboutSection = () => {
  return (
    <section id="about" className="sketchy-section bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="sketchy-title text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Education */}
          <div className="sketchy-card">
            <h3 className="text-2xl font-bold mb-4 text-sketchy-primary font-handwrite">
              🎓 Education
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Bachelor of Computer Science</h4>
                <p className="text-muted-foreground font-handwrite">University of Technology (2018-2022)</p>
                <p className="text-sm">GPA: 3.8/4.0</p>
              </div>
              <div>
                <h4 className="font-semibold">High School Diploma</h4>
                <p className="text-muted-foreground font-handwrite">Tech High School (2016-2018)</p>
                <p className="text-sm">Valedictorian</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="sketchy-card">
            <h3 className="text-2xl font-bold mb-4 text-sketchy-secondary font-handwrite">
              💼 Experience
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Senior Full Stack Developer</h4>
                <p className="text-muted-foreground font-handwrite">TechCorp Inc. (2022-Present)</p>
                <p className="text-sm">Leading development of scalable web applications using React, Node.js, and AWS</p>
              </div>
              <div>
                <h4 className="font-semibold">Junior Developer</h4>
                <p className="text-muted-foreground font-handwrite">StartupXYZ (2021-2022)</p>
                <p className="text-sm">Built responsive frontends and REST APIs</p>
              </div>
              <div>
                <h4 className="font-semibold">Intern Developer</h4>
                <p className="text-muted-foreground font-handwrite">WebSolutions (Summer 2021)</p>
                <p className="text-sm">Contributed to e-commerce platform development</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="sketchy-card md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-sketchy-accent font-handwrite">
              🚀 Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Frontend</h4>
                <ul className="text-sm space-y-1 font-handwrite">
                  <li>• React & Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Vue.js</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Backend</h4>
                <ul className="text-sm space-y-1 font-handwrite">
                  <li>• Node.js</li>
                  <li>• Python</li>
                  <li>• PostgreSQL</li>
                  <li>• MongoDB</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Tools</h4>
                <ul className="text-sm space-y-1 font-handwrite">
                  <li>• Git & GitHub</li>
                  <li>• Docker</li>
                  <li>• AWS</li>
                  <li>• Figma</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Other</h4>
                <ul className="text-sm space-y-1 font-handwrite">
                  <li>• Agile/Scrum</li>
                  <li>• Team Leadership</li>
                  <li>• UI/UX Design</li>
                  <li>• Testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Info */}
        <div className="sketchy-card max-w-4xl mx-auto mt-8">
          <h3 className="text-2xl font-bold mb-4 text-sketchy-neutral font-handwrite text-center">
            📍 Personal Details
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p><strong>Location:</strong> San Francisco, CA</p>
              <p><strong>Languages:</strong> English (Native), Spanish (Fluent), French (Basic)</p>
              <p><strong>Availability:</strong> Open to new opportunities</p>
            </div>
            <div className="space-y-2">
              <p><strong>Interests:</strong> Open Source, AI/ML, Sustainable Tech</p>
              <p><strong>Volunteer Work:</strong> Coding bootcamp mentor</p>
              <p><strong>Fun Fact:</strong> I once built a robot that makes coffee! ☕</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;