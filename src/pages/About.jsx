import { motion } from "framer-motion";
import { User, Terminal, Code2, Database, Brain, Wrench, GraduationCap, MapPin, Mail } from "lucide-react";
import RevealOnScroll from "../components/RevealOnScroll";
import PageTransition from "../components/PageTransition";
import Timeline from "../components/Timeline";
import { personalInfo, skillsData } from "../data/portfolioData";

const marqueeIcons = [
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "FastAPI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "Flask", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "OpenCV", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Raspberry Pi", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
];

const categoryIcons = {
  programming: <Terminal className="w-5 h-5 text-cyan-400" />,
  frontend: <Code2 className="w-5 h-5 text-blue-400" />,
  backend: <Terminal className="w-5 h-5 text-indigo-400" />,
  databases: <Database className="w-5 h-5 text-amber-400" />,
  aiMl: <Brain className="w-5 h-5 text-violet-400" />,
  tools: <Wrench className="w-5 h-5 text-emerald-400" />,
};

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen px-6 py-20 bg-slate-950 text-slate-100 radial-ambient bg-grid-slate">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <User size={14} /> Professional Biography
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                About Me
              </h1>
              <p className="max-w-2xl mx-auto mt-4 text-base text-slate-400">
                Engineering graduate building intelligent applications at the intersection of AI, full-stack systems, and connected hardware.
              </p>
            </div>
          </RevealOnScroll>

          {/* Profile Overview Card */}
          <RevealOnScroll delay={0.1}>
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl mb-16">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-cyan-500/30 shadow-lg glow-cyan mx-auto md:mx-0">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
                  <p>
                    I am a <strong>Computer Engineering graduate</strong> from <strong>Lokmanya Tilak College of Engineering, Mumbai University</strong>, interested in building practical software solutions at the intersection of artificial intelligence, full-stack development, and connected systems.
                  </p>
                  <p>
                    I work with <strong>Python, SQL, modern web technologies, and AI development tools</strong> to transform ideas into functional applications. My projects include AI-powered resume analysis, intelligent home renovation planning, AI-based food analysis, and an app-driven robotic waste management system.
                  </p>
                  <p>
                    Through hands-on projects, internship experience, and technical competitions, I continue to strengthen my problem-solving, software development, and engineering skills. I am looking for opportunities where I can contribute to meaningful products, learn from experienced teams, and grow as an AI or software engineer.
                  </p>

                  <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <GraduationCap size={15} className="text-cyan-400" />
                      <span>LTCE, Mumbai University (B.E. Comp Eng)</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={15} className="text-cyan-400" />
                      <span>{personalInfo.location}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Mail size={15} className="text-cyan-400" />
                      <span>{personalInfo.email}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Categorized Skills Section */}
          <div className="mb-20">
            <RevealOnScroll delay={0.15}>
              <div className="text-center mb-12">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Technical Competencies
                </span>
                <h2 className="text-3xl font-bold text-white mt-1">
                  Skills & Technologies
                </h2>
                <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto">
                  Technologies verified through academic projects, internships, and open-source systems.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skillsData).map(([key, group], idx) => (
                <RevealOnScroll key={key} delay={idx * 0.08}>
                  <div className="h-full p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                        {categoryIcons[key] || <Code2 size={18} className="text-cyan-400" />}
                      </div>
                      <h3 className="text-base font-bold text-white">
                        {group.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-950 text-slate-300 border border-slate-800/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Technology Marquee */}
          <div className="mb-20 overflow-hidden py-4 border-y border-slate-900">
            <div className="flex items-center gap-10 w-max animate-scroll">
              {[...marqueeIcons, ...marqueeIcons].map((tech, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-2">
                  <img src={tech.src} alt={tech.name} className="w-10 h-10 object-contain filter brightness-90 hover:brightness-100 transition" />
                  <span className="text-[11px] font-mono text-slate-400">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline / Journey Section */}
          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
