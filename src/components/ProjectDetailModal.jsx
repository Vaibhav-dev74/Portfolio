import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Award, Layers } from "lucide-react";

const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl my-8 overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-2xl text-slate-900 dark:text-slate-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20">
                  {project.category}
                </span>
                {project.badge && (
                  <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20 flex items-center gap-1">
                    <Layers size={12} /> {project.badge}
                  </span>
                )}
                {project.status && (
                  <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {project.status}
                  </span>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label="Close details"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Achievement callout if present (e.g. TrashBot) */}
            {project.achievement && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300">
                <Award className="flex-shrink-0 w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <p className="font-semibold text-amber-900 dark:text-amber-200">National Competition Award</p>
                  <p className="mt-0.5 text-amber-800 dark:text-amber-300/90">{project.achievement}</p>
                </div>
              </div>
            )}

            {/* Overview / Description */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-2 font-semibold">
                Project Overview
              </h4>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {project.description}
              </p>
            </div>

            {/* Problem Solved */}
            {project.problemSolved && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-2 font-semibold">
                  Problem Solved
                </h4>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {project.problemSolved}
                </p>
              </div>
            )}

            {/* Implemented Features */}
            {project.implementedFeatures && project.implementedFeatures.length > 0 && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-3 font-semibold">
                  Key Implemented Capabilities
                </h4>
                <ul className="space-y-2">
                  {project.implementedFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 size={15} className="flex-shrink-0 text-cyan-600 dark:text-cyan-400 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Verified Tech Stack */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-2.5 font-semibold">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/70">
            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-white bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-cyan-500 hover:text-cyan-600 dark:hover:border-cyan-400 dark:hover:text-cyan-400 rounded-xl transition"
                >
                  <Github size={15} /> GitHub Repository
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl shadow-lg transition"
                >
                  <ExternalLink size={15} /> Open Live Demo
                </a>
              )}
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectDetailModal;

