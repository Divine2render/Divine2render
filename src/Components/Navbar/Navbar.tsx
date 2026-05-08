import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when overlay is active
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
      className={`fixed top-0 left-0 w-full transition-all duration-700 z-[999] ${
        scrolled
          ? "py-4 bg-[#050505]/95 backdrop-blur-2xl border-b border-[#1A1A1A]"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          {/* Brand Identity - Non-Italic */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="relative z-[1001] group flex items-center"
          >
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase">
              Chris Korie
              <span className="text-[#03FF31]">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-[10px] uppercase tracking-[0.4em] font-black transition-all duration-500 group ${
                  location.pathname === link.path
                    ? "text-[#03FF31]"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-2 left-0 h-[1px] bg-[#03FF31] transition-all duration-500 ${
                    location.pathname === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="mailto:hello@chriskorie.com"
              className="px-8 py-3 bg-transparent border border-[#1A1A1A] text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#03FF31] hover:text-black hover:border-[#03FF31] transition-all duration-500"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-[1001] flex items-center gap-3 text-[#03FF31] p-2 group"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-white hidden sm:block">
              {menuOpen ? "Close" : "Menu"}
            </span>
            <div className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] rounded-full group-hover:scale-110 transition-transform">
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </div>
          </button>
        </div>
      </div>

      {/* Fixed Full-Screen Overlay - Fixes Scroll Issue */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#050505] z-[1000] flex flex-col justify-center transition-all duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {/* Sub-grid Background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#03FF31 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="max-w-[1400px] mx-auto w-full px-8 md:px-24 grid grid-cols-1 lg:grid-cols-2 items-center relative z-10">
          {/* Main Links - Non-Italic */}
          <div className="space-y-4 md:space-y-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="group flex items-start gap-4 md:gap-8"
              >
                <span
                  className={`font-mono text-xs md:text-sm transition-all duration-700 ${
                    menuOpen
                      ? "opacity-30 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${i * 100 + 400}ms` }}
                >
                  0{i + 1}
                </span>
                <div className="overflow-hidden">
                  <h2
                    className={`text-5xl md:text-8xl font-black uppercase tracking-tighter transition-all duration-700 transform ${
                      menuOpen ? "translate-y-0" : "translate-y-full"
                    } ${
                      location.pathname === link.path
                        ? "text-[#03FF31]"
                        : "text-white group-hover:text-[#03FF31]"
                    }`}
                    style={{ transitionDelay: `${i * 100 + 300}ms` }}
                  >
                    {link.label}
                  </h2>
                </div>
              </Link>
            ))}
          </div>

          {/* Contact Details Section */}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
