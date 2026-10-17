import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Trophy,
  Cpu,
  Sparkles,
  Award,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

const timelineItems = [
  {
    title: "B.E. in Computer Engineering",
    place: "Lokmanya Tilak College of Engineering, Mumbai University",
    date: "2022 – 2026",
    icon: <GraduationCap size={18} />,
    description:
      "Commenced undergraduate engineering studies. Core foundations in Data Structures & Algorithms, Artificial Intelligence, Database Management Systems, and Computer Networks.",
  },
  {
    title: "Foundation in Python, AI & Conversational Chatbots",
    place: "Edunet Foundation / Code Unnati (Supported by SAP)",
    date: "2023 – 2024",
    icon: <BookOpen size={18} />,
    description:
      "Completed structured training in Python Programming, Data Analysis with Python, Artificial Intelligence, and SAP Conversational AI Chatbots under the SAP Code Unnati Program.",
  },
  {
    title: "Python Developer Intern",
    place: "CodeSprint Technologies",
    date: "June 2024 – August 2024",
    icon: <Briefcase size={18} />,
    description:
      "Engineered Python scripts for automation, data processing utilities, and modular backend tasks, strengthening core software engineering practices.",
  },
  {
    title: "Data Analytics Summer Internship",
    place: "IBM SkillsBuild / CSRBOX",
    date: "June 2024 – August 2024",
    icon: <Briefcase size={18} />,
    description:
      "Completed 6-week industry internship in Data Analytics. Contributed to IoT telemetry and automation logic for the TrashBot robotic project.",
  },
  {
    title: "Full Stack Development Virtual Internship",
    place: "Bharat Intern (AICTE Verified)",
    date: "July 2024 – August 2024",
    icon: <Briefcase size={18} />,
    description:
      "Gained hands-on experience building responsive web interfaces, full-stack workflows, and database-integrated applications.",
  },
  {
    title: "Smart Glass for Visually Impaired",
    place: "Assistive IoT + Edge AI",
    date: "2024",
    icon: <Cpu size={18} />,
    description:
      "Engineered an assistive wearable prototype with ESP32-CAM and YOLO object detection, providing real-time Bluetooth audio obstacle guidance.",
  },
  {
    title: "Secretary – Coding Club & Advance ML/IoT",
    place: "LTCE & SAP Code Unnati",
    date: "2024 – 2025",
    icon: <Trophy size={18} />,
    description:
      "Elected Secretary of the LTCE Coding Club; organized hackathons and mentoring sessions while completing advanced training in Deep Learning, Computer Vision, and SAP ABAP on BTP.",
  },
  {
    title: "20th Aavishkar Research Convention — TrashBot",
    place: "University of Mumbai (Zone X)",
    date: "December 2025",
    icon: <Award size={18} />,
    description:
      "Selected to represent LTCE at the 20th Aavishkar Inter-Collegiate Research Convention organized by University of Mumbai, presenting TrashBot in the Pure Sciences Category.",
  },
  {
    title: "Advanced Competitive Coding & SAP HANA",
    place: "Edunet Foundation / Code Unnati (Supported by SAP)",
    date: "2025 – 2026",
    icon: <BookOpen size={18} />,
    description:
      "Completed Value Added Course training in Advanced Competitive Coding and SAP HANA enterprise data solutions under the SAP CodeUnnati Program.",
  },
  {
    title: "Tantragyan 2026 National Competition (Rank 4)",
    place: "LTCE National Level Competition",
    date: "2026",
    icon: <Award size={18} />,
    description:
      "Awarded First Consolation Prize (Rank 4 among 65+ teams) for TrashBot — an app-driven robotic dustbin combining OpenCV computer vision, robotics, and mobile app control.",
  },
  {
    title: "AI & Full-Stack Platform Engineering",
    place: "Independent & Open Source",
    date: "2024 – Present",
    icon: <Sparkles size={18} />,
    description:
      "Architected and deployed IntelliResume AI on Vercel, designed multi-agent workflows in AI Home Renovation with Google Gemini & ADK, and engineered the RestoAI restaurant system.",
  },
];

const Timeline = () => {
  return (
    <section className="relative px-4 py-12">
      <div className="text-center mb-12">
        <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
          Chronological Progress
        </span>
        <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
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
            transition={{ duration: 0.5, delay: index * 0.06 }}
            viewport={{ once: true }}
            className={`relative mb-10 flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Circle Icon */}
            <div className="absolute z-10 p-2.5 text-slate-950 transform -translate-x-1/2 rounded-full shadow-lg left-4 md:left-1/2 bg-gradient-to-tr from-cyan-400 to-blue-500 ring-4 ring-slate-50 dark:ring-slate-950">
              {item.icon}
            </div>

            {/* Card */}
            <div
              className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"
              }`}
            >
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl hover:border-cyan-500/40 dark:hover:border-slate-700 transition">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h4>

                <p className="mt-1 text-xs font-semibold text-cyan-700 dark:text-cyan-400">
                  {item.place} • <span className="font-mono text-slate-500 dark:text-slate-400">{item.date}</span>
                </p>

                <p className="mt-2.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
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