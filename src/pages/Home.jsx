import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download, Github, Linkedin, ArrowRight, Sparkles, Code2, Cpu, Award, ChevronRight } from "lucide-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import PageTransition from "../components/PageTransition";
import RevealOnScroll from "../components/RevealOnScroll";
import { personalInfo, projectsData, achievementsData } from "../data/portfolioData";

const Home = () => {
  const [roleText] = useTypewriter({
    words: personalInfo.rolesCycling,
    loop: true,
    delaySpeed: 1800,
    deleteSpeed: 45,
    typeSpeed: 65,
  });

  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <PageTransition>
      <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 radial-ambient bg-grid-slate transition-colors duration-200">
        {/* ===================== HERO SECTION ===================== */}
        <section className="relative min-h-[92vh] flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
          {/* Ambient background glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-violet-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Open to Opportunities Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 text-xs font-semibold rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-cyan-500/30 text-slate-700 dark:text-slate-200 shadow-sm backdrop-blur-md"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-400"></span>
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>{personalInfo.opportunityLabel}</span>
            </motion.div>

            {/* Profile Avatar with subtle glowing border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative w-32 h-32 md:w-36 md:h-36 mx-auto mb-6 p-1 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 shadow-xl glow-cyan"
            >
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover rounded-full border-2 border-white dark:border-slate-950"
              />
            </motion.div>

            {/* Candidate Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Animated Cycling Role Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl font-bold font-mono min-h-[2.25rem] text-cyan-600 dark:text-cyan-400 mb-4"
            >
              <span>{roleText}</span>
              <Cursor cursorStyle="|" cursorColor="#06b6d4" />
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100 max-w-3xl mx-auto leading-tight mb-5"
            >
              {personalInfo.headline}
            </motion.h2>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8"
            >
              {personalInfo.supportingText}
            </motion.p>

            {/* Call to Actions & Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center justify-center gap-3.5 mb-8"
            >
              {/* Primary CTA */}
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl shadow-lg glow-cyan transition transform hover:-translate-y-0.5"
              >
                <span>Explore My Projects</span>
                <ArrowRight size={16} />
              </Link>

              {/* Secondary CTA: Download Resume */}
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-white rounded-xl shadow-sm transition transform hover:-translate-y-0.5"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>

              {/* Additional CTA: Contact Me */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-3 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
              >
                <span>Contact Me</span>
                <ChevronRight size={16} />
              </Link>
            </motion.div>

            {/* Verified Social Profile Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800/80 max-w-md mx-auto text-xs text-slate-500 dark:text-slate-400"
            >
              <span>Verified Profiles:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* ===================== CORE VALUE PILLARS ===================== */}
        <section className="py-16 px-6 border-t border-slate-200/80 dark:border-slate-900">
          <div className="max-w-6xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  Engineering Focus
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                  What I Build & Specialize In
                </h3>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <RevealOnScroll delay={0.1}>
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all shadow-sm h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4">
                      <Sparkles size={20} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Applied AI & GenAI Systems</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Building semantic matching engines, multi-agent workflows with Google Gemini & ADK, RAG retrieval pipelines, and computer vision classification.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
                    FastAPI • LangChain • Ollama • Groq
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all shadow-sm h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                      <Code2 size={20} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Full-Stack Web Engineering</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Developing end-to-end applications with modern React 19, responsive Tailwind CSS, clean RESTful APIs, and relational/document databases.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-mono text-blue-600 dark:text-blue-400">
                    React 19 • Node.js • Express • MongoDB • SQL
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.3}>
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-violet-500/40 transition-all shadow-sm h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-4">
                      <Cpu size={20} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Connected IoT & Robotics</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Architecting embedded hardware solutions like TrashBot (award-winning robotic dustbin) and ESP32-CAM assistive wearables with real-time feedback.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-mono text-violet-600 dark:text-violet-400">
                    Raspberry Pi • OpenCV • ESP32 • Android (Kotlin)
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ===================== FEATURED PROJECTS SPOTLIGHT ===================== */}
        <section className="py-20 px-6 border-t border-slate-200/80 dark:border-slate-900 bg-slate-100/50 dark:bg-slate-950/40">
          <div className="max-w-6xl mx-auto">
            <RevealOnScroll>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    Flagship Work
                  </span>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                    Featured Engineering Projects
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
                    High-impact projects demonstrating applied artificial intelligence, intelligent multi-agent planning, and award-winning robotics.
                  </p>
                </div>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition"
                >
                  <span>View All 9 Projects</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </RevealOnScroll>

            {/* 3 Prominent Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <RevealOnScroll key={project.id} delay={index * 0.15}>
                  <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all shadow-sm dark:shadow-xl group">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20">
                          {project.category}
                        </span>
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                          {project.badge}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {project.shortTitle}
                      </h4>

                      <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {project.achievement && (
                        <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-[11px] mb-4 flex items-start gap-2">
                          <Award size={14} className="flex-shrink-0 mt-0.5 text-amber-500 dark:text-amber-400" />
                          <span>{project.achievement}</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.slice(0, 4).map((t, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 text-[10px] font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-950 rounded border border-slate-200 dark:border-slate-800"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 text-xs">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition"
                          >
                            <Github size={14} />
                            <span>Code</span>
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold transition"
                          >
                            <span>Live Demo</span>
                            <ArrowRight size={13} />
                          </a>
                        )}
                        <Link
                          to="/projects"
                          className="ml-auto text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 transition text-[11px]"
                        >
                          Details →
                        </Link>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== NATIONAL ACHIEVEMENT BANNER ===================== */}
        <section className="py-14 px-6 border-t border-slate-200/80 dark:border-slate-900 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
          <div className="max-w-4xl mx-auto">
            <RevealOnScroll>
              <div className="flex flex-col sm:flex-row items-center gap-6 p-6 md:p-8 rounded-2xl bg-white/80 dark:bg-amber-500/5 border border-amber-300 dark:border-amber-500/20 shadow-sm text-center sm:text-left">
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-500 dark:text-amber-400 flex-shrink-0">
                  <Award size={36} />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-mono font-bold tracking-wider text-amber-700 dark:text-amber-400 uppercase">
                    National Level Competition Recognition
                  </span>
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    {achievementsData[0].title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 mt-1.5 leading-relaxed">
                    Awarded <strong className="text-amber-700 dark:text-amber-300">{achievementsData[0].result} ({achievementsData[0].rank})</strong> for <em>{achievementsData[0].project}</em> at Lokmanya Tilak College of Engineering among 65+ competing teams.
                  </p>
                </div>
                <Link
                  to="/experience"
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-white dark:bg-slate-900 border border-amber-500/40 text-amber-700 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-500/10 shadow-sm transition whitespace-nowrap"
                >
                  View Details
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ===================== RECRUITER CALL TO ACTION ===================== */}
        <section className="py-20 px-6 border-t border-slate-200/80 dark:border-slate-900">
          <div className="max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-mono uppercase text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 rounded-full">
                Let's Build Together
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                Interested in Working Together?
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed">
                Whether you're looking for an AI Engineer, Full-Stack Developer, or Python Specialist for full-time roles, internships, or innovative projects, let's connect!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-7 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl shadow-lg transition"
                >
                  Get in Touch
                </Link>
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 rounded-xl shadow-sm transition"
                >
                  Download Resume (PDF)
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
