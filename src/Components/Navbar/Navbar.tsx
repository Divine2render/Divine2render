import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

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
          ? "py-4 bg-[#050505]/90 backdrop-blur-xl border-b border-[#1A1A1A]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="group relative flex items-center z-[60]">
            <span className="text-2xl font-black tracking-tighter text-white uppercase">
              Chris Korie
              <span className="text-[#03FF31]">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
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

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="px-5 py-2 border border-[#03FF31] text-[#03FF31] text-[10px] uppercase tracking-widest font-bold hover:bg-[#03FF31] hover:text-black transition-all duration-300">
              Get in touch
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-[60] text-[#03FF31] p-2"
          >
            {menuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-[#050505] z-[50] flex flex-col justify-center px-8 transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Background Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#03FF31 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="relative space-y-10">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="group block relative"
            >
              <div
                className={`flex items-baseline gap-6 transition-all duration-500 transform ${
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100 + 300}ms` }}
              >
                <span className="text-[#03FF31] font-mono text-sm opacity-50">
                  0{i + 1}
                </span>
                <h2
                  className={`text-6xl sm:text-8xl font-black uppercase tracking-tighter transition-colors ${
                    location.pathname === link.path
                      ? "text-[#03FF31]"
                      : "text-white group-hover:text-[#03FF31]"
                  }`}
                >
                  {link.label}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Footer Context */}
        <div
          className={`absolute bottom-12 left-8 transition-opacity duration-500 delay-700 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.5em] mb-4">
            Middlesbrough, UK / Worldwide
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-[#03FF31] text-[10px] font-bold uppercase tracking-widest"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-[#03FF31] text-[10px] font-bold uppercase tracking-widest"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
