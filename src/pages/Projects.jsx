import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Sparkles, FolderGit2, Search, Info, Award, CheckCircle2 } from "lucide-react";
import RevealOnScroll from "../components/RevealOnScroll";
import PageTransition from "../components/PageTransition";
import ProjectDetailModal from "../components/ProjectDetailModal";
import { projectsData } from "../data/portfolioData";

const categories = ["All", "AI & Machine Learning", "Full-Stack Development", "IoT & Robotics"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.shortTitle.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tech.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 radial-ambient bg-grid-slate">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <RevealOnScroll>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                <FolderGit2 size={14} /> Software Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Featured Projects
              </h1>
              <p className="max-w-2xl mx-auto mt-4 text-base text-slate-600 dark:text-slate-400">
                Applied AI systems, multi-agent frameworks, full-stack web platforms, and connected IoT robotics built with verified technologies.
              </p>
            </div>
          </RevealOnScroll>

          {/* Search & Filter Controls */}
          <div className="mb-12 space-y-5">
            {/* Search Input */}
            <div className="max-w-md mx-auto relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
              <input
                type="text"
                placeholder="Search projects by name, technology, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 text-xs text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition shadow-sm dark:shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter Category Pills */}
            <div className="flex flex-wrap justify-center gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-medium rounded-xl transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 scale-105"
                      : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  whileHover={{ translateY: -6 }}
                  className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all shadow-md dark:shadow-xl group"
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                          <Sparkles size={11} /> Featured
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {project.shortTitle}
                    </h3>
                    <p className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400/90 mb-3">
                      {project.badge}
                    </p>

                    {/* Description */}
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Achievement badge if applicable */}
                    {project.achievement && (
                      <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-[11px] mb-4 flex items-start gap-2">
                        <Award size={14} className="flex-shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
                        <span className="leading-snug">{project.achievement}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[10px] font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-950 rounded border border-slate-200 dark:border-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links & Details */}
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-950 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg transition"
                          >
                            <Github size={13} />
                            <span>Code</span>
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-lg shadow transition"
                          >
                            <span>Live Demo</span>
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>

                      {/* Technical Details Modal Trigger */}
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                      >
                        <Info size={13} />
                        <span>Details</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty Search State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16 text-slate-500 dark:text-slate-400">
              <p className="text-base font-semibold">No projects found matching "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-3 px-4 py-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-cyan-500 transition shadow-sm"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Dedicated Technical Project Modal */}
        <ProjectDetailModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </section>
    </PageTransition>
  );
};

export default Projects;