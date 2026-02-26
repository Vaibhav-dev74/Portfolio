import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Code2,
  Trophy,
  Cpu,
} from "lucide-react";

const timelineItems = [
  {
    title: "B.E. Computer Engineering",
    place: "Lokmanya Tilak College of Engineering, Mumbai",
    date: "2022 – 2026 | CGPA: 7.10",
    icon: <GraduationCap size={20} />,
    description:
      "Focused on IoT systems, Full-Stack Development, AI-based applications, and scalable software solutions.",
  },
  {
    title: "Secretary – Coding Club",
    place: "LTCE",
    date: "2024 – 2025",
    icon: <Trophy size={20} />,
    description:
      "Led technical events, managed coding competitions, mentored students, and coordinated collaborative development projects.",
  },
  {
    title: "Python Developer Intern",
    place: "CodeSprint",
    date: "June 2024 – August 2024",
    icon: <Briefcase size={20} />,
    description:
      "Worked on Python automation, scripting, and data-driven applications. Built scalable modules using real-world datasets.",
  },
  {
    title: "IBM SkillsBuild Summer Intern",
    place: "IBM SkillsBuild CSRBOX",
    date: "June 2024 – August 2024",
    icon: <Briefcase size={20} />,
    description:
      "Enhanced data analytics and IoT skills. Contributed to IoT-based TrashBot project with sensor integration and automation logic.",
  },
  {
    title: "Smart Glass for Blind People",
    place: "IoT + AI Project",
    date: "Academic Project",
    icon: <Cpu size={20} />,
    description:
      "Built ESP32-CAM based smart glasses with YOLO object detection and voice feedback via Bluetooth. Integrated Android navigation support.",
  },
  {
    title: "QR Code-Based Attendance System",
    place: "Full Stack Project",
    date: "2024",
    icon: <Code2 size={20} />,
    description:
      "Developed QR + Geo-fencing attendance system to automate student tracking and eliminate manual errors.",
  },
];

const Timeline = () => {
  return (
    <section className="relative px-6 py-16">
      <h2 className="mb-12 text-3xl font-bold text-center text-transparent md:text-4xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
        My Journey
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute w-1 h-full transform rounded-full left-4 md:left-1/2 md:-translate-x-1/2 bg-gradient-to-b from-purple-500 to-pink-500" />

        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`relative mb-12 md:mb-16 flex flex-col md:flex-row ${
              index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"
            }`}
          >
            {/* Circle Icon */}
            <div className="absolute z-10 p-3 text-white transform rounded-full shadow-lg left-4 md:left-1/2 md:-translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500">
              {item.icon}
            </div>

            {/* Card */}
            <div
              className={`ml-16 md:ml-0 md:w-1/2 ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right"
                  : "md:pl-12"
              }`}
            >
              <div className="p-6 transition-all duration-300 border shadow-xl backdrop-blur-lg bg-white/10 dark:bg-white/5 border-white/20 rounded-2xl hover:scale-105">
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-purple-400">
                  {item.place} | {item.date}
                </p>

                <p className="mt-3 leading-relaxed text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;