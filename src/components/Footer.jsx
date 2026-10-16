import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-flex items-center gap-2 group mb-1">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-black text-sm">
                V
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Vaibhav Pratap Mishra
              </span>
            </Link>
            <p className="text-slate-500 text-[11px] font-mono">
              AI Engineer | Full-Stack Developer | Python Developer
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-slate-400 font-medium">
            <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
            <Link to="/about" className="hover:text-cyan-400 transition">About</Link>
            <Link to="/projects" className="hover:text-cyan-400 transition">Projects</Link>
            <Link to="/experience" className="hover:text-cyan-400 transition">Experience</Link>
            <Link to="/certificates" className="hover:text-cyan-400 transition">Certificates</Link>
            <Link to="/contact" className="hover:text-cyan-400 transition">Contact</Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-[11px] text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Vaibhav Pratap Mishra. All rights reserved.
          </p>
          <p className="font-mono">
            Built with React 19, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
