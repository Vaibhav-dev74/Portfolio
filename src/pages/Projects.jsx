import { motion } from "framer-motion";
import RevealOnScroll from "../components/RevealOnScroll";
import PageTransition from "../components/PageTransition";

const projects = [
  {
    title: "Smart Glass for Blind",
    description: "IoT + AI-powered wearable for object detection and navigation assistance.",
    tech: ["ESP32-CAM", "YOLOv5", "Bluetooth", "Google Maps API"],
    github: "#",
    demo: "#",
  },
  {
    title: "ShopSwift",
    description: "Advanced e-commerce website with admin panel, payments, and product management.",
    tech: ["React", "Tailwind", "MongoDB", "Razorpay"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "Creative and animated personal portfolio with dark mode and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-12 pt-20 text-gray-900 bg-white dark:bg-gray-900 dark:text-white">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <h2 className="mb-12 text-4xl font-bold text-center">My Projects</h2>
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <RevealOnScroll key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 bg-gray-100 shadow-lg dark:bg-gray-800 rounded-2xl"
                >
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-sm text-purple-800 bg-purple-200 rounded-full dark:bg-purple-700 dark:text-white"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-sm font-medium text-purple-700 dark:text-purple-300 hover:underline"
                    >
                      GitHub →
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      className="text-sm font-medium text-purple-700 dark:text-purple-300 hover:underline"
                    >
                      Live Demo →
                    </a>
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
