import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import PageTransition from "../components/PageTransition";

const Contact = () => {
  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-12 pt-20 text-gray-900 bg-white dark:bg-gray-900 dark:text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="mb-8 text-4xl font-bold text-center">Contact Me</h2>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xvgrwyro"
            method="POST"
            className="p-6 mb-10 bg-gray-100 shadow-lg dark:bg-gray-800 rounded-2xl"
          >
            <div className="mb-4">
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-2 text-black bg-white rounded dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-2 text-black bg-white rounded dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full p-2 text-black bg-white rounded dark:bg-gray-700 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 font-semibold text-white bg-purple-600 rounded hover:bg-purple-700"
            >
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="mailto:vaibhavmishra.dev@gmail.com"
              className="hover:text-purple-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/Vaibhav-dev74"
              className="hover:text-purple-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhav-pratap-mishra-b417ab2b6/"
              className="hover:text-purple-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default Contact;
