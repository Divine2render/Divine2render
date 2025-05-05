import React, { useEffect, useState } from "react";
import "./Experience.css";

interface Stat {
  label: string;
  target: number;
}

const stats: Stat[] = [
  { target: 6, label: "Years of Experience" },
  { target: 12, label: "Projects Led as Lead Designer & AI Prompt Engineer" },
  { target: 13, label: "Design Articles Contributed" },
];

const Experience: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) =>
      setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];
          if (updated[index] < stat.target) {
            updated[index] += 1;
          }
          return updated;
        });
      }, 100)
    );

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <section className="experience">
      <div className="experience-content">
        {stats.map((stat, i) => (
          <div key={i} className="experience-box">
            <h2>{counts[i]}+</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
