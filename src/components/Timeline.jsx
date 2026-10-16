import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Code2,
  Trophy,
  Cpu,
  Sparkles,
  Award,
} from "lucide-react";

const timelineItems = [
  {
    title: "AI & Full-Stack Engineering Platform Development",
    place: "Independent & Open Source",
    date: "2024 – Present",
    icon: <Sparkles size={18} />,
    description:
      "Architected and deployed IntelliResume AI on Vercel, designed multi-agent workflows in AI Home Renovation with Google Gemini & ADK, and engineered the RestoAI restaurant management system.",
  },
  {
    title: "Tantragyan 2026 National Competition (Rank 4)",
    place: "LTCE National Level Competition",
    date: "2026",
    icon: <Award size={18} />,
    description:
      "Awarded First Consolation Prize (Rank 4 among 65+ teams) for TrashBot — an app-driven robotic dustbin with computer vision-based waste segregation and mobile control.",
  },
  {
    title: "B.E. Computer Engineering",
    place: "Lokmanya Tilak College of Engineering, Mumbai University",
    date: "2022 – 2026",
    icon: <GraduationCap size={18} />,
    description:
      "Rigorous coursework in Data Structures & Algorithms, Artificial Intelligence, Database Management Systems, Computer Networks, and Internet of Things.",
  },
  {
    title: "Python Developer Intern",
    place: "CodeSprint Technologies",
    date: "June 2024 – August 2024",
    icon: <Briefcase size={18} />,
    description:
      "Worked on Python scripting, automation, and data analysis tasks, gaining practical exposure to programming workflows and modular software development.",
  },
  {
    title: "IBM SkillsBuild Summer Internship",
    place: "IBM SkillsBuild CSRBOX",
    date: "24 June 2024 – 5 August 2024",
    icon: <Briefcase size={18} />,
    description:
      "Completed structured data analytics and IoT program. Contributed to IoT-based TrashBot project with sensor integration and telemetry automation logic.",
  },
  {
    title: "Secretary – Coding Club",
    place: "Lokmanya Tilak College of Engineering",
    date: "2024 – 2025",
    icon: <Trophy size={18} />,
    description:
      "Spearheaded technical events, coding competitions, and hackathons; mentored junior students in data structures and modern programming.",
  },
  {
    title: "Smart Glass for Blind People",
    place: "Assistive IoT + Edge AI",
    date: "2024",
    icon: <Cpu size={18} />,
    description:
      "Built an ESP32-CAM wearable running YOLO object detection with real-time Bluetooth audio feedback and Android navigation support.",
  },
];

const Timeline = () => {
  return (
    <section className="relative px-4 py-12">
      <div className="text-center mb-12">
        <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
          Chronological Progress
        </span>
        <h3 className="text-3xl font-extrabold text-white mt-1">
          Engineering Journey & Milestones
        </h3>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute w-0.5 h-full transform rounded-full left-4 md:left-1/2 md:-translate-x-1/2 bg-gradient-to-b from-cyan-500 via-blue-500 to-violet-500" />

        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className={`relative mb-10 flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Circle Icon */}
            <div className="absolute z-10 p-2.5 text-slate-950 transform -translate-x-1/2 rounded-full shadow-lg left-4 md:left-1/2 bg-gradient-to-tr from-cyan-400 to-blue-500 ring-4 ring-slate-950">
              {item.icon}
            </div>

            {/* Card */}
            <div
              className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"
              }`}
            >
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl hover:border-slate-700 transition">
                <h4 className="text-base font-bold text-white">
                  {item.title}
                </h4>

                <p className="mt-1 text-xs font-semibold text-cyan-400">
                  {item.place} • <span className="font-mono text-slate-400">{item.date}</span>
                </p>

                <p className="mt-2.5 text-xs leading-relaxed text-slate-300">
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