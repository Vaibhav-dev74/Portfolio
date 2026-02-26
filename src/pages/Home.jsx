import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import PageTransition from "../components/PageTransition";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Final-year Computer Engineering Student",
      "Full Stack Developer",
      "IoT Enthusiast",
      "Problem Solver",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <PageTransition>
      <section className="relative flex items-center justify-center w-full min-h-screen overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        {/* Animated Blobs/Background Shapes */}
        <div className="absolute top-0 left-0 z-0 w-full h-full pointer-events-none">
          <div className="absolute bg-purple-400 rounded-full w-80 h-80 opacity-30 mix-blend-multiply filter blur-3xl animate-blob -top-10 -left-32"></div>
          <div className="absolute rounded-full w-72 h-72 bg-fuchsia-400 opacity-20 mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000 left-48 top-24"></div>
          <div className="absolute right-0 bg-blue-300 rounded-full w-72 h-72 opacity-20 mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000 -bottom-32"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 w-full max-w-xl px-6 py-12 border shadow-2xl bg-white/10 rounded-3xl backdrop-blur-xl border-white/30 ring-1 ring-purple-200/30"
        >
          {/* Profile with Animated Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-40 h-40 p-1 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-300 via-white/70 to-indigo-200"
            style={{
              boxShadow:
                "0 0 0 6px rgba(116, 72, 194, 0.16), 0 8px 32px 0 rgba(31, 38, 135, 0.15)",
            }}
          >
            <img
              src="/images/Vaibhav.jpeg"
              alt="Vaibhav Mishra"
              className="object-cover w-full h-full border-4 border-white rounded-full shadow-lg"
            />
          </motion.div>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-6xl drop-shadow-lg">
            Vaibhav Pratap Mishra
          </h1>

          <p className="mb-6 text-xl font-medium leading-relaxed text-indigo-100 md:text-2xl drop-shadow-md">
            <span>{text}</span>
            <Cursor cursorStyle="|" />
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/vaibhav-pratap-mishra-b417ab2b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-2 font-semibold text-purple-700 transition-all border border-purple-200 rounded-full shadow-md px-7 bg-white/70 hover:bg-purple-600 hover:text-white hover:scale-105"
            >
              Visit LinkedIn
            </a>
            <a
              href="/VaibhavPratapMishra.pdf"
              download
              className="inline-flex items-center gap-2 py-2 font-semibold text-white transition-all bg-purple-700 border-2 border-white rounded-full shadow-md px-7 hover:bg-white hover:text-purple-700 hover:border-purple-400 hover:scale-105"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>
        {/* CSS for animated blobs */}
        <style jsx>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          33% {
            transform: translateY(-20px) scale(1.08);
          }
          66% {
            transform: translateY(40px) scale(0.96);
          }
        }
        `}</style>
      </section>
    </PageTransition>
  );
};

export default Home;
