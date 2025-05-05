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
  "Prompt Engineer",
  "AI Prompt Engineer",
  "Design Systems Specialist",
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
    );

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
            As a designer and AI prompt engineer, I bridge the gap between 
            creativity and cutting-edge technology. By designing prompts that 
            guide AI models, I ensure that AI-generated content is not only 
            accurate but also aligns with human expectations. From designing 
            user-centric experiences to building intelligent systems, I specialize 
            in creating seamless AI interactions that power intuitive digital products.
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