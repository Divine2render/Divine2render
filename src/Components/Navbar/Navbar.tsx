import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Articles", path: "/articles" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-logo">Chris-Korie</h2>
        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={location.pathname === link.path ? "active" : ""}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
