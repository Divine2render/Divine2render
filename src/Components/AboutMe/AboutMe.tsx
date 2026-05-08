import React from "react";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import pic from "../../assets/images/main.jpg";

const AboutMe: React.FC = () => {
  const navigate = useNavigate();

  const goToProjects = () => navigate("/projects");
  const handleCall = () => (window.location.href = "https://wa.me/31647620170");

  return (
    <section className="bg-[#050505] py-24 border-t border-[#1A1A1A] pt-[200px]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Profile Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-32">
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 border border-[#03FF31]/20 group-hover:border-[#03FF31]/50 transition-colors duration-700"></div>
            <div className="relative h-[500px] overflow-hidden border border-[#1A1A1A]">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                alt="Divine Chris-Korie"
                src={pic}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#03FF31]"></div>
              <span className="text-[#03FF31] text-[10px] tracking-[0.6em] font-black uppercase">
                Product Architect
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85]">
              DIVINE <br />
              <span className="text-[#03FF31]">CHRIS-KORIE</span>
            </h1>
            <p className="text-xl text-gray-400 font-bold uppercase tracking-tight max-w-xl">
              Middlesbrough-based Product Designer building AI-powered digital
              infrastructures for global impact.
            </p>
          </div>
        </div>

        {/* Narrative Section - The Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-[#1A1A1A] pt-16 mb-32">
          <div className="lg:col-span-4">
            <h3 className="text-[#03FF31] font-mono text-[10px] uppercase tracking-[0.4em] sticky top-24">
              01 // The Thesis
            </h3>
          </div>
          <div className="lg:col-span-8 space-y-12 text-gray-400 text-lg leading-relaxed">
            <p className="text-white font-bold text-2xl tracking-tight leading-snug">
              I build AI-powered digital products that solve real problems for
              real people. From scaling platforms for 170,000+ users to securing
              recognition from senior NHS authorities, my focus is on functional
              innovation.
            </p>
            <p>
              My career accelerated in 2021 with the{" "}
              <span className="text-white font-bold">FlexxCBT redesign</span>,
              where I implemented a novel token-based monetization system that
              grew the user base by 10%. This taught me that design decisions
              have tangible consequences. Since then, I have led product
              strategy for <span className="text-[#03FF31]">Jucy AI</span>,
              improving user conversion by 20% and scaling to over 10,000
              registered users.
            </p>
            <p>
              In 2024, I founded{" "}
              <span className="text-white font-bold">
                MyQuickserve Digital Solutions Ltd
              </span>
              , generating £55,000+ in revenue within its first year. I am
              currently architecting
              <span className="text-[#03FF31]"> CareOps</span>—an intelligent
              operations platform for UK care agencies—while bridging the gap
              between UK businesses and vetted remote talent.
            </p>
            <blockquote className="border-l-4 border-[#03FF31] pl-8 py-4 italic text-white text-2xl font-black tracking-tight uppercase">
              "Good design is not about how it looks. It is about what it does
              and who it does it for."
            </blockquote>
          </div>
        </div>

        {/* Technical Infrastructure (Tools & Roles) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#1A1A1A] pt-16">
          {/* Tools */}
          <div className="space-y-8">
            <h3 className="text-[#03FF31] font-mono text-[10px] uppercase tracking-[0.4em]">
              02 // Protocol & Stack
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                { name: "Figma", desc: "Architecture & Prototypes" },
                { name: "Claude AI", desc: "Product Thinking Acceleration" },
                { name: "AI Prompting", desc: "LLM Context Engineering" },
                { name: "WordPress", desc: "CMS Management & Build" },
              ].map((tool, i) => (
                <div
                  key={i}
                  className="flex justify-between items-end border-b border-[#1A1A1A] pb-4 group hover:border-[#03FF31] transition-colors"
                >
                  <span className="text-white font-black uppercase tracking-widest">
                    {tool.name}
                  </span>
                  <span className="text-[10px] text-gray-600 font-mono uppercase">
                    {tool.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-8">
            <h3 className="text-[#03FF31] font-mono text-[10px] uppercase tracking-[0.4em]">
              03 // Operational Log
            </h3>
            <div className="space-y-4">
              {[
                "Founder @ MyQuickserve Digital",
                "Design Lead @ Jucy AI",
                "Product Designer @ FlexxCBT",
                "AI Prompt Specialist",
              ].map((role, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <span className="text-[#03FF31] font-mono text-[10px] opacity-30 group-hover:opacity-100 transition-opacity">
                    //
                  </span>
                  <span className="text-gray-400 group-hover:text-white transition-colors font-bold uppercase tracking-widest text-sm italic">
                    {role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Center */}
        <div className="mt-32 flex flex-col md:flex-row gap-6">
          <button
            onClick={handleCall}
            className="flex-1 bg-[#03FF31] text-black px-8 py-6 flex items-center justify-between group hover:bg-white transition-all duration-500"
          >
            <span className="font-black uppercase tracking-tighter text-xl">
              Contact Me
            </span>
            <IoArrowForwardCircleSharp className="text-4xl group-hover:rotate-[-45deg] transition-transform duration-500" />
          </button>

          <button
            onClick={goToProjects}
            className="flex-1 border border-[#1A1A1A] text-white px-8 py-6 flex items-center justify-between group hover:border-[#03FF31] transition-all duration-500"
          >
            <span className="font-black uppercase tracking-tighter text-xl">
              Archive of Works
            </span>
            <IoArrowForwardCircleSharp className="text-4xl text-[#03FF31] group-hover:translate-x-2 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
