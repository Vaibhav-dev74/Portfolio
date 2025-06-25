import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = ({ toggleTheme, theme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Certificates", path: "/certificates" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full text-gray-800 bg-white shadow-md dark:bg-gray-900 dark:text-white">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <Link to="/" className="text-2xl font-bold text-purple-700 dark:text-purple-400">
          Vaibhav.dev
        </Link>

        {/* Desktop Nav */}
        <div className="items-center hidden gap-6 md:flex">
          {navItems.map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `text-lg font-medium hover:text-purple-600 dark:hover:text-purple-400 transition ${
                  isActive ? "underline text-purple-600 dark:text-purple-400" : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="ml-4">
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex items-center gap-3 md:hidden">
          <button onClick={toggleTheme}>
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="px-6 pb-4 bg-white md:hidden dark:bg-gray-900">
          {navItems.map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-300"
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
