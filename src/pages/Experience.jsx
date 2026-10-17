import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar, MapPin, Users, BookOpen, CheckCircle2 } from "lucide-react";
import RevealOnScroll from "../components/RevealOnScroll";
import PageTransition from "../components/PageTransition";
import { experienceData, educationData, achievementsData } from "../data/portfolioData";

const Experience = () => {
  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 radial-ambient bg-grid-slate">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                <Briefcase size={14} /> Background & Qualifications
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Experience & Education
              </h1>
              <p className="max-w-2xl mx-auto mt-4 text-base text-slate-600 dark:text-slate-400">
                A verified record of my industry internships, structured training, formal engineering degree, and national competition awards.
              </p>
            </div>
          </RevealOnScroll>

          {/* National Competition Achievement Spotlight */}
          <RevealOnScroll delay={0.1}>
            <div className="mb-16">
              <div className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-white dark:via-slate-900 dark:to-slate-900 bg-white dark:bg-slate-900 border border-amber-500/30 shadow-xl dark:shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/40">
                      <Award size={14} /> National Level Recognition
                    </span>
                    <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold">
                      Tantragyan 2026
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
                    {achievementsData[0].title}
                  </h2>
                  <p className="text-amber-700 dark:text-amber-300 font-semibold text-base mb-4">
                    Result: {achievementsData[0].result} • {achievementsData[0].rank}
                  </p>

                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {achievementsData[0].description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs">
                    <div>
                      <p className="text-slate-500 dark:text-slate-400 font-medium">Project Evaluated</p>
                      <p className="text-slate-900 dark:text-white font-semibold mt-0.5">{achievementsData[0].project}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 dark:text-slate-400 font-medium">Faculty Mentor</p>
                      <p className="text-slate-900 dark:text-white font-semibold mt-0.5">{achievementsData[0].mentor}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 dark:text-slate-400 font-medium">Institution</p>
                      <p className="text-slate-900 dark:text-white font-semibold mt-0.5">{achievementsData[0].institution}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800/40">
                    <span className="font-semibold text-slate-800 dark:text-slate-300">Team Collaborators: </span>
                    {achievementsData[0].teamMembers.join(", ")}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Work Experience Section */}
          <div className="mb-16">
            <RevealOnScroll delay={0.15}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Work Experience</h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Internship workflows, scripting, and project development</p>
                </div>
              </div>
            </RevealOnScroll>

            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <RevealOnScroll key={index} delay={index * 0.1}>
                  <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-xl hover:border-cyan-500/40 dark:hover:border-slate-700 transition">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                        <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-400">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 w-fit">
                        <Calendar size={13} className="text-cyan-600 dark:text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      "{exp.description}"
                    </p>

                    <div className="space-y-2 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                      {exp.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 size={14} className="text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <RevealOnScroll delay={0.2}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Formal Education</h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Accredited engineering background and coursework</p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.25}>
              <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{educationData.degree}</h3>
                    <p className="text-sm font-semibold text-blue-700 dark:text-blue-400">{educationData.institution}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{educationData.university}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <span className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-950 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-800 w-fit">
                      {educationData.period}
                    </span>
                    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
                      {educationData.status}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3">
                    Core Engineering Disciplines & Competencies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {educationData.focusAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/90 rounded-lg border border-slate-200 dark:border-slate-700/60"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Experience;

