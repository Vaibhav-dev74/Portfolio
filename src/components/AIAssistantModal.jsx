import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send, Bot, User } from "lucide-react";
import { faqAssistantData, personalInfo } from "../data/portfolioData";

const AIAssistantModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm Vaibhav's Portfolio Assistant. Ask me anything about his AI projects, Python development, TrashBot, skills, or experience!",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleQuery = (queryText) => {
    if (!queryText.trim()) return;

    const userMessage = { sender: "user", text: queryText };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Generate accurate, factual response based on portfolioData
    setTimeout(() => {
      const lowerQuery = queryText.toLowerCase();
      let reply = "";

      // Check predefined FAQs first
      const matchedFaq = faqAssistantData.find(
        (faq) =>
          lowerQuery.includes(faq.query.toLowerCase()) ||
          faq.query.toLowerCase().includes(lowerQuery)
      );

      if (matchedFaq) {
        reply = matchedFaq.summary;
      } else if (lowerQuery.includes("trashbot") || lowerQuery.includes("dustbin") || lowerQuery.includes("robot")) {
        reply = `TrashBot is an intelligent, app-driven robotic dustbin developed with Raspberry Pi, OpenCV computer vision, and a servo robotic arm. It won First Consolation Prize (Rank 4 among 65+ teams) at Tantragyan 2026 National Competition. Key features include automated waste sorting, an Android companion app (Kotlin), and sensor-assisted level monitoring.`;
      } else if (lowerQuery.includes("resume") || lowerQuery.includes("cv") || lowerQuery.includes("intelliresume")) {
        reply = `IntelliResume AI is Vaibhav's flagship AI recruitment platform deployed on Vercel. Built with Python 3.11, FastAPI, NLP/GenAI, and React, it analyzes resumes, computes semantic job-matching scores, and identifies skill gaps. You can test the live demo at: https://ai-resume-intelligence-job-matching.vercel.app/`;
      } else if (lowerQuery.includes("renovation") || lowerQuery.includes("home") || lowerQuery.includes("gemini")) {
        reply = `The AI Home Renovation Planner Agent is built with Python, FastAPI, Google Gemini, and Google ADK. It features multi-agent workflows (interior designer, contractor estimation) to help homeowners plan renovations using room images and design inspiration.`;
      } else if (lowerQuery.includes("python")) {
        reply = `Vaibhav has extensive experience with Python for backend APIs (FastAPI, Flask), AI/ML integration (Google Gemini, Groq, LangChain), computer vision (OpenCV for TrashBot), and desktop tools (Tkinter NLP projects).`;
      } else if (lowerQuery.includes("contact") || lowerQuery.includes("email") || lowerQuery.includes("hire") || lowerQuery.includes("reach")) {
        reply = `You can reach Vaibhav at ${personalInfo.email}, connect on LinkedIn (${personalInfo.linkedin}), or check his repositories on GitHub (${personalInfo.github}).`;
      } else if (lowerQuery.includes("experience") || lowerQuery.includes("internship")) {
        reply = `Vaibhav worked as a Python Developer Intern at CodeSprint Technologies (June–August 2024) automating workflows, and completed the IBM SkillsBuild Summer Internship with CSRBOX (June–August 2024) contributing to the IoT TrashBot project.`;
      } else if (lowerQuery.includes("education") || lowerQuery.includes("college") || lowerQuery.includes("degree")) {
        reply = `Vaibhav completed his Bachelor of Engineering (B.E.) in Computer Engineering from Lokmanya Tilak College of Engineering (LTCE), University of Mumbai (2022–2026).`;
      } else if (lowerQuery.includes("food") || lowerQuery.includes("scanner")) {
        reply = `The AI-Powered Food Scanner analyzes packaged food using camera barcode detection, OpenFoodFacts/USDA nutrition APIs, and Groq AI for custom health scoring. Live demo: https://food-scanner-v2-seven.vercel.app`;
      } else {
        reply = `Vaibhav is an AI Engineer, Full-Stack Developer, and Python Developer with verified work in Generative AI, RAG systems, FastAPI, React, and IoT robotics (TrashBot). Would you like to know more about his AI projects, Python experience, or contact details?`;
      }

      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 300);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleQuery(inputValue);
    }
  };

  return (
    <>
      {/* Floating Trigger Pill */}
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-cyan-700 dark:text-cyan-300 bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/40 rounded-full shadow-xl backdrop-blur-md hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-cyan-500 hover:shadow-cyan-500/20 transition"
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-cyan-400"></span>
            <span className="relative inline-flex w-2 h-2 rounded-full bg-cyan-500"></span>
          </span>
          <Sparkles size={15} className="text-cyan-600 dark:text-cyan-400" />
          <span>Ask Portfolio AI</span>
        </motion.button>
      )}

      {/* Assistant Modal Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 left-4 right-4 md:right-auto md:left-6 z-50 w-auto md:w-96 max-h-[85vh] flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b bg-slate-50 dark:bg-slate-950/80 border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">Portfolio AI Assistant</h3>
                  <p className="text-[10px] text-cyan-600 dark:text-cyan-400/90 flex items-center gap-1 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 inline-block"></span>
                    Factual • Data-Driven
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                aria-label="Close assistant"
              >
                <X size={16} />
              </button>
            </div>

            {/* Quick Prompt Chips */}
            <div className="p-2 border-b bg-slate-50/60 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800/80 flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
              {faqAssistantData.slice(0, 4).map((faq) => (
                <button
                  key={faq.id}
                  onClick={() => handleQuery(faq.query)}
                  className="px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/70 hover:bg-cyan-50 dark:hover:bg-cyan-950 hover:text-cyan-700 dark:hover:text-cyan-300 border border-slate-200 dark:border-slate-700/60 hover:border-cyan-500/40 rounded-full transition truncate max-w-full text-left"
                >
                  {faq.query}
                </button>
              ))}
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 min-h-[220px] max-h-[320px] text-xs">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                      <Bot size={13} />
                    </div>
                  )}
                  <div
                    className={`p-3 rounded-2xl max-w-[82%] leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-cyan-600 text-white rounded-br-none shadow"
                        : "bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.sender === "user" && (
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200">
                      <User size={13} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-2.5 border-t bg-slate-50 dark:bg-slate-950/90 border-slate-200 dark:border-slate-800 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask about projects, skills, TrashBot..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 px-3 py-2 text-xs text-slate-900 dark:text-white bg-white dark:bg-slate-900 border rounded-xl border-slate-300 dark:border-slate-700/80 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-sm"
              />
              <button
                onClick={() => handleQuery(inputValue)}
                disabled={!inputValue.trim()}
                className="p-2 text-white bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 disabled:hover:bg-cyan-600 rounded-xl transition shadow"
                aria-label="Send query"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistantModal;

