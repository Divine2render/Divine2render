import { useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const sections = [
  {
    title: "Branding",
    items: [
      "Logo Design & Visual Identity",
      "Core Brand Guidelines",
      "Marketing Collateral",
      "Strategic Rebranding",
    ],
  },
  {
    title: "UX/UI Designs",
    items: [
      "User Research & Data Analysis",
      "High-Fidelity Wireframing",
      "Interactive Prototyping",
      "Usability Testing & Audit",
      "Responsive Cross-Platform Solutions",
    ],
  },
  {
    title: "Motion & Animation",
    items: [
      "Motion Graphics Systems",
      "Technical Explainer Videos",
      "Interactive UI Micro-animations",
    ],
  },
];

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#050505] py-32 border-b border-[#1A1A1A]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Modular Header */}
        <div className="flex items-baseline justify-between mb-16">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#03FF31]"></div>
            <h2 className="text-[#03FF31] text-[10px] tracking-[0.7em] font-black uppercase">
              WHAT I DO
            </h2>
          </div>
          <span className="text-gray-700 font-mono text-[10px]"></span>
        </div>

        <div className="border-t border-[#1A1A1A]">
          {sections.map((section, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`relative border-b border-[#1A1A1A] transition-all duration-700 ${
                  isOpen ? "bg-[#080808]" : "bg-transparent"
                }`}
              >
                {/* Active Indicator Line */}
                <div
                  className={`absolute left-0 top-0 w-[2px] bg-[#03FF31] transition-all duration-700 ease-in-out ${
                    isOpen ? "h-full opacity-100" : "h-0 opacity-0"
                  }`}
                ></div>

                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-6 py-12 group text-left"
                >
                  <div className="flex items-center gap-8 md:gap-16">
                    <span
                      className={`font-mono text-xs transition-colors duration-500 ${
                        isOpen ? "text-[#03FF31]" : "text-gray-700"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span
                      className={`text-3xl md:text-5xl font-black uppercase tracking-tighter transition-all duration-500 ${
                        isOpen
                          ? "text-white translate-x-2"
                          : "text-gray-500 group-hover:text-gray-300"
                      }`}
                    >
                      {section.title}
                    </span>
                  </div>

                  <IoArrowBackCircleSharp
                    className={`text-4xl md:text-5xl transition-all duration-700 ${
                      isOpen
                        ? "text-[#03FF31] rotate-[-90deg] drop-shadow-[0_0_8px_rgba(3,255,49,0.4)]"
                        : "text-gray-800 rotate-180 group-hover:text-gray-600"
                    }`}
                  />
                </button>

                {/* Content Grid */}
                <div
                  className={`grid transition-all duration-700 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="px-14 md:px-32 pb-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                      {section.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-4 group/item"
                        >
                          <span className="mt-2 text-[#03FF31] font-mono text-[10px] opacity-30 group-hover/item:opacity-100 transition-opacity">
                            //
                          </span>
                          <span className="text-gray-400 font-bold text-xs md:text-sm uppercase tracking-widest group-hover/item:text-white transition-colors leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
