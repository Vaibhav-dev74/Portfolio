import { motion } from "framer-motion";

const timelineItems = [
  {
    title: "Final Year - B.E. Computer Engineering",
    place: "LTCE, Mumbai University",
    date: "2024 - 2025",
    description: "Focused on IoT, AI-based projects, and full-stack development.",
  },
  {
    title: "Internship - Web Development",
    place: "XYZ Tech (Example)",
    date: "Summer 2024",
    description: "Worked with React, Node.js, and API integrations.",
  },
  {
    title: "Third Year - Junior Developer",
    place: "LTCE, Mumbai University",
    date: "2023 - 2024",
    description: "Built academic projects and led software team for Smart Glass.",
  },
];

const Timeline = () => {
  return (
    <div className="relative mt-10 border-l-2 border-purple-400 dark:border-purple-500">
      {timelineItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="relative pl-6 mb-10"
        >
          <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-1.5 top-1.5" />
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-sm italic text-purple-600 dark:text-purple-400">
            {item.place} | {item.date}
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;

 
