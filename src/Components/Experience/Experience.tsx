import React, { useEffect, useState } from "react";

interface Stat {
  label: string;
  target: number;
}

const stats: Stat[] = [
  { target: 8, label: "Years of Engineering Experience" },
  { target: 12, label: "Projects Led as Architect & AI Lead" },
  { target: 13, label: "Technical Articles Published" },
];

const Experience: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map(
      (stat, index) =>
        setInterval(() => {
          setCounts((prev) => {
            const updated = [...prev];
            if (updated[index] < stat.target) {
              updated[index] += 1;
            }
            return updated;
          });
        }, 150) // Slower, more deliberate "loading" speed
    );

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <section className="bg-[#050505] py-24 border-y border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 flex items-center gap-4">
          <div className="h-[1px] w-12 bg-[#03FF31]"></div>
          <h3 className="text-[#03FF31] text-[10px] tracking-[0.5em] font-black uppercase">
            Statistics
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#1A1A1A]">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`group p-10 bg-black transition-colors duration-500 hover:bg-[#03FF31]/5 border-[#1A1A1A] 
                ${i !== stats.length - 1 ? "md:border-r" : ""} 
                ${i !== 0 ? "border-t md:border-t-0" : ""}`}
            >
              {/* Counter with monospace styling */}
              <div className="flex items-baseline gap-2 mb-4">
                <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter transition-colors group-hover:text-[#03FF31]">
                  {counts[i].toString().padStart(2, "0")}
                </h2>
                <span className="text-[#03FF31] text-2xl font-bold">+</span>
              </div>

              {/* Label - Small, wide-tracked, and uppercase */}
              <p className="text-gray-500 text-[11px] leading-relaxed uppercase tracking-[0.2em] font-bold group-hover:text-gray-300 transition-colors">
                {stat.label}
              </p>

              {/* Decorative Corner Accent */}
              <div className="mt-8 flex justify-end">
                <div className="w-4 h-4 border-b-2 border-r-2 border-gray-800 group-hover:border-[#03FF31] transition-colors"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
