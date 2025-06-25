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
      <section className="flex items-center justify-center min-h-screen px-4 text-white bg-gradient-to-br from-indigo-500 to-purple-600">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center"
        >
          <img
  src="/images/Vaibhav.jpeg"
  alt="Vaibhav Mishra"
  className="w-40 h-40 mx-auto mb-6 border-4 border-white rounded-full shadow-lg"
/>

          <h1 className="mb-4 text-4xl font-bold md:text-6xl">Vaibhav Pratap Mishra</h1>

          <p className="mb-6 text-xl md:text-2xl">
            <span>{text}</span>
            <Cursor cursorStyle="|" />
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/vaibhav-pratap-mishra-b417ab2b6/"
              target="_blank"
              className="inline-block px-6 py-2 font-semibold text-purple-700 transition bg-white rounded-full hover:bg-purple-100"
            >
              Visit LinkedIn
            </a>
            <a
              href="/VaibhavPratapMishra.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-2 font-semibold text-white transition border-2 border-white rounded-full hover:bg-white hover:text-purple-700"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default Home;
