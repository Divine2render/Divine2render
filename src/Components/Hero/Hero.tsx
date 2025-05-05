import React, { useEffect, useState } from "react";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import "./Hero.css";

const roles = [
  "Product Designer",
  "UI/UX Designer",
  "Creative Developer",
  "Interaction Designer",
  "Visual Designer",
  "UX Strategist",
  "Design Systems Advocate",
  "Motion Designer",
  "Frontend Designer",
  "Human-Centered Designer",
];

const Hero: React.FC = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(currentRole.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
          if (charIndex + 1 === currentRole.length) {
            setDeleting(true);
          }
        } else {
          setText(currentRole.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
          if (charIndex === 0) {
            setDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      deleting ? 50 : 100
    ); // speed: typing slower than deleting

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>Hi, I'm Divine Chris-Korie</h1>
          <p
            style={{
              color: "#03FF31",
              padding: `8px 16px`,
              borderRadius: 12,
              width: "fit-content",
              backgroundColor: "#ffffff24",
              whiteSpace: "nowrap",
            }}
          >
            {text}
            <span style={{ color: "#03FF31" }}>|</span>
          </p>
          <p>
            I craft beautiful and functional user interfaces, blending
            creativity with code to deliver seamless digital experiences. Let's
            bring ideas to life!
          </p>
          <button className="ctaButtonNew">
            <IoArrowForwardCircleSharp color="#000" fontSize={48} />
            <p style={{ padding: 0, margin: 0, paddingRight: 12 }}>
              Contact me
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
