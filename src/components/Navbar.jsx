import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const Navbar = ({ toggleTheme, theme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
    { label: "Certificates", path: "/certificates" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full transition-colors duration-200 border-b border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-slate-950/85 backdrop-blur-xl text-slate-900 dark:text-slate-100">
      <div className="flex items-center justify-between px-6 py-3.5 mx-auto max-w-7xl">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-black text-base shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            V
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            Vaibhav<span className="text-cyan-500 font-mono">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="items-center hidden gap-7 md:flex">
          {navItems.map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-cyan-600 dark:hover:text-cyan-400 ${
                  isActive
                    ? "text-cyan-600 dark:text-cyan-400 font-semibold"
                    : "text-slate-600 dark:text-slate-300"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Resume Download CTA */}
          <a
            href={personalInfo.resumeUrl}
            download
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 hover:border-cyan-400 rounded-lg transition"
          >
            <Download size={13} />
            <span>Resume</span>
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition"
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-amber-400" />
            ) : (
              <Moon size={18} className="text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-lg"
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-amber-400" />
            ) : (
              <Moon size={18} className="text-slate-700" />
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2 text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-white rounded-lg focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {menuOpen && (
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl md:hidden space-y-3">
          {navItems.map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-cyan-600 dark:text-cyan-400 font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
            <a
              href={personalInfo.resumeUrl}
              download
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl"
            >
              <Download size={15} /> Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
