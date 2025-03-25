import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const developmentSkills = ["SwiftUI", "UIKit", "React Native", "Python", "HTML", "CSS", "JavaScript", "MySQL", "Laravel"];
  const technicalConcepts = ["Apple Frameworks", "MVC", "MVVM", "Clean Architecture", "SOLID", "Git", "Machine Learning", "UML"];
  const softSkills = ["Collaboration", "Presentation", "Leadership", "Agile"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-pattern relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 blur-3xl opacity-30"></div>

      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-8 text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-white/10 backdrop-blur-md shadow-lg">
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Recent graduate from <span className="text-blue-400 font-semibold">Binus University</span>,  
              majoring in <span className="text-blue-400 font-semibold">Computer Science</span> with a specialization in  
              <span className="text-blue-400 font-semibold"> Artificial Intelligence</span>.  
              Former <span className="text-blue-400 font-semibold">Apple Developer Academy Cohort 7</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Development Skills</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {developmentSkills.map((skill, key) => (
                    <span
                    key={key}
                    className="group relative bg-blue-500/10 text-white py-1.5 px-4 rounded-full text-sm font-medium transition-all border border-blue-400/30 
                               hover:border-blue-400 hover:shadow-[0_0_10px_2px] hover:shadow-blue-400 hover:text-white"
                  >
                    {skill}
                  </span>
                  
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Technical Concepts</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {technicalConcepts.map((concept, key) => (
                    <span
                      key={key}
                      className="group bg-blue-500/10 text-white py-1.5 px-4 rounded-full text-sm font-medium transition-all border border-blue-400/30 hover:border-blue-400 hover:shadow-[0_0_10px_2px] hover:shadow-blue-400"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl border border-white/10 md:col-span-2">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Soft Skills</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {softSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="group bg-blue-500/10 text-white py-1.5 px-4 rounded-full text-sm font-medium transition-all border border-blue-400/30 hover:border-blue-400 hover:shadow-[0_0_10px_2px] hover:shadow-blue-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 backdrop-blur-md shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-400">🎓 Education</h3>
              <p className="text-gray-300 font-semibold">Computer Science Graduate – Binus University (GPA: 3.9/4.0)</p>
              <p className="text-gray-400 text-sm">Specialized in Artificial Intelligence</p>
            </div>

            <div className="p-6 rounded-xl border border-white/10 backdrop-blur-md shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-400">💼 Experience</h3>
              <p className="text-gray-300 font-semibold">Apple Developer Academy Cohort 7</p>
              <p className="text-gray-400 text-sm">Gained expertise in iOS development, design thinking, and agile methodologies. Made 7 applications</p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
