import { motion } from "framer-motion";
import RevealOnScroll from "../components/RevealOnScroll";
import PageTransition from "../components/PageTransition";

const projects = [
  {
    title: "Snake and Ladder Game",
    description:
      "Classic Snake & Ladder board game implemented with Python. Features intuitive game logic and visual feedback.",
    tech: ["Python", "Game Logic"],
    github: "https://github.com/Vaibhav-dev74/snake-and-ladder",
    demo: "#",
  },
  {
    title: "Portfolio",
    description:
      "Personal portfolio with modern design showcasing my projects, skills, and contact links.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Vaibhav-dev74/Portfolio",
    demo: "#",
  },
  {
    title: "Trendhive",
    description:
      "Trend tracking web app built with modern JavaScript — explore topics and insights interactively.",
    tech: ["JavaScript", "Web Dev"],
    github: "https://github.com/Vaibhav-dev74/Trendhive",
    demo: "#",
  },
  {
    title: "Attendance Management System",
    description:
      "Robust Java application to manage student attendance with core OOP features.",
    tech: ["Java", "OOP"],
    github:
      "https://github.com/Vaibhav-dev74/Attendance-Managment-System",
    demo: "#",
  },
  {
    title: "Department Website",
    description:
      "Responsive departmental site built using HTML, CSS & JS — perfect for showcasing content.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Vaibhav-dev74/Department-Website",
    demo: "https://ltcecomputerdepartment.netlify.app/",
  },
];

const Projects = () => {
  return (
    <PageTransition>
      <section className="min-h-screen px-8 py-16 text-gray-900 bg-white dark:bg-gray-900 dark:text-white">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <h2 className="mb-16 text-5xl font-extrabold text-center underline underline-offset-8 decoration-purple-500 dark:decoration-purple-600">
              🚀 My Projects
            </h2>
          </RevealOnScroll>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <RevealOnScroll key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ translateY: -8, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 310 }}
                  className="p-6 border border-gray-200 shadow-xl bg-gray-50 dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl rounded-3xl"
                >
                  <h3 className="mb-3 text-2xl font-semibold text-purple-700 dark:text-purple-300">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm md:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium text-purple-800 bg-purple-200 rounded-full dark:bg-purple-700 dark:text-white"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 text-sm font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700"
                    >
                      GitHub
                    </a>
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-sm font-semibold text-purple-700 border border-purple-700 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-800"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;