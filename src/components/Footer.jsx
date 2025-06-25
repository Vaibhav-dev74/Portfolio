import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 text-sm text-center text-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-400">
      <div className="flex justify-center gap-6 mb-3 text-gray-600 dark:text-gray-300">
        <a
          href="mailto:vaibhavmishra.dev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-purple-500"
        >
          <Mail size={20} />
        </a>
        <a
          href="https://github.com/Vaibhav-dev74"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-purple-500"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/vaibhav-pratap-mishra-b417ab2b6/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-purple-500"
        >
          <Linkedin size={20} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Vaibhav Pratap Mishra • Built with ❤️ using React & Tailwind CSS</p>
    </footer>
  );
};

export default Footer;
