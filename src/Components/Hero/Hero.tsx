import React, { useEffect, useState } from "react";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import heroBg from "../../assets/images/main.jpg";

const roles = [
  "Senior Software Architect",
  "Product Designer",
  "Creative Developer",
  "AI Prompt Engineer",
  "Design Systems Specialist",
  "Full-stack Engineer",
];

const Hero: React.FC = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = deleting ? 30 : 60;
    const pauseAtEnd =
      !deleting && charIndex === currentRole.length ? 2500 : typingSpeed;

    const timeout = setTimeout(() => {
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
    }, pauseAtEnd);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const handleCall = () => {
    window.location.href = "https://wa.me/31647620170";
  };

  return (
    <section
      className="relative min-h-[120vh] w-full flex items-center justify-center overflow-hidden bg-[#050505]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay with subtle noise/grid */}
      <div className="absolute inset-0 z-0 bg-black/80">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(#03FF31 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-24">
        {/* Status indicator */}
        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 border border-[#1A1A1A] bg-black/50">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#03FF31] animate-pulse"></span>
          <span className="text-[9px] tracking-[0.5em] font-bold text-gray-400 uppercase">
            Open for Collaborations
          </span>
        </div>

        {/* Scaled-down Heading */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-[ -0.05em] uppercase mb-2">
            DIVINE
          </h1>
          <h1 className="text-4xl md:text-7xl font-black text-[#03FF31] tracking-[ -0.05em] uppercase leading-none">
            CHRIS-KORIE
          </h1>
        </div>

        {/* Refined Role Box */}
        <div className="mt-8 mb-12 flex justify-center">
          <div className="px-6 py-3 bg-black border border-[#03FF31]/30">
            <p className="text-[#03FF31] font-mono text-sm md:text-xl tracking-tighter font-bold uppercase">
              {"> "} {text}
              <span className="ml-1 inline-block w-[8px] h-[16px] md:h-[20px] bg-[#03FF31] animate-[blink_1s_step-end_infinite]"></span>
            </p>
          </div>
        </div>

        {/* Clean Bio */}
        <p className="max-w-xl mx-auto text-gray-400 text-xs md:text-base font-bold uppercase tracking-[0.15em] leading-relaxed">
          As a designer and AI prompt engineer, I blend creativity with
          technology to craft user-centric experiences. 
          I design prompts that
          guide AI to generate accurate, human-aligned content—powering
          intuitive and intelligent digital products.
        </p>

        {/* Scaled-down CTA */}
        <div className="mt-14">
          <button
            onClick={handleCall}
            className="group relative inline-flex items-center gap-6 bg-transparent border border-[#03FF31] hover:bg-[#03FF31] text-[#03FF31] hover:text-black px-8 py-4 transition-all duration-300"
          >
            <span className="text-[10px] uppercase font-black tracking-[0.3em]">
              Send a Message
            </span>
            <IoArrowForwardCircleSharp className="text-2xl" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </section>
  );
};

export default Hero;
