import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for the glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Articles", path: "/articles" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "py-4 bg-[#050505]/80 backdrop-blur-xl border-b border-[#03FF31]/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center">
          {/* Logo with Glow Effect */}
          <Link to="/" className="group relative flex items-center">
            <span className="text-2xl font-black tracking-tighter text-white uppercase ">
              Chris Korie
              <span className="text-[#03FF31] transition-all group-hover:drop-shadow-[0_0_10px_#03FF31]">
                .
              </span>
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#03FF31] transition-all duration-300 group-hover:w-full"></div>
          </Link>

          {/* Desktop Nav - Tech Brutalist Style */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-[10px] uppercase tracking-[0.3em] font-black transition-all duration-300 group ${
                  location.pathname === link.path
                    ? "text-[#03FF31]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
                {/* Underline for active/hover */}
                <span
                  className={`absolute -bottom-2 left-0 h-[1px] bg-[#03FF31] transition-all duration-300 ${
                    location.pathname === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-1/2"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Contact CTA - Custom Button Style */}
          <div className="hidden md:block">
            <button className="px-5 py-2 border border-[#03FF31] text-[#03FF31] text-[10px] uppercase tracking-widest font-bold hover:bg-[#03FF31] hover:text-black transition-all duration-300">
              Get in touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#03FF31] transition-transform active:scale-90"
          >
            {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-[#050505] transition-all duration-700 ease-in-out ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } -z-10 flex flex-col justify-center items-center space-y-8`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setMenuOpen(false)}
            className="text-4xl font-black uppercase tracking-tighter text-white hover:text-[#03FF31] transition-colors"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
