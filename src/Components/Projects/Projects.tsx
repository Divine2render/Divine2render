import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

// Asset Imports
import main from "../../assets/images/cw/cw_a.png";
import oti from "../../assets/images/oti/oti_a.png";
import pay from "../../assets/images/100/100_a.png";
import cw_web from "../../assets/images/cw_web/cw_web_a.png";
import em from "../../assets/images/em/em_a.png";
import aw from "../../assets/images/aw/aw_01.png";

const sampleProjects = [
  {
    id: 1,
    title: "Chat Wazobia AI",
    type: "Mobile Architecture",
    role: "Multilingual AI chatbot for African languages.",
    thumbnail: main,
  },
  {
    id: 2,
    title: "100pay",
    type: "Fintech Interface",
    role: "Secure payment gateway for global transactions.",
    thumbnail: pay,
  },
  {
    id: 3,
    title: "Chat Wazobia AI",
    type: "Web Interface",
    role: "Responsive AI ecosystem for rich dialects.",
    thumbnail: cw_web,
  },
  {
    id: 4,
    title: "Emperor Guild",
    type: "Brand Identity",
    role: "Futuristic brand ecosystem for creative studios.",
    thumbnail: em,
  },
  {
    id: 5,
    title: "OTI Signals",
    type: "Data Platform",
    role: "Trading analytics dashboard with sharp UI.",
    thumbnail: oti,
  },
  {
    id: 6,
    title: "Assetsworth",
    type: "Investment Engine",
    role: "User-centric platform for financial decisions.",
    thumbnail: aw,
  },
];

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#050505] py-24 border-t border-[#1A1A1A] pt-[240px]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Modular Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#03FF31]"></div>
              <span className="text-[#03FF31] text-[10px] tracking-[0.5em] font-black uppercase">
                Selected Works
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Project <span className="text-[#03FF31]">Archives</span>
            </h2>
          </div>
          <p className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-[0.1em] max-w-sm leading-relaxed">
            Engineering intuitive experiences through technical precision and
            strategic design logic.
          </p>
        </div>

        {/* Project Grid - Zero-Gap Bordered System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-[#1A1A1A] border-t border-l">
          {sampleProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-black border-r border-b border-[#1A1A1A] overflow-hidden cursor-pointer"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden bg-[#111]">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Info Block */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-[#03FF31] text-[9px] font-black uppercase tracking-[0.3em] mb-1">
                      {project.type}
                    </p>
                    <h3 className="text-xl font-black text-white uppercase tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-gray-800 font-mono text-xl group-hover:text-[#03FF31] transition-colors">
                    0{project.id}
                  </span>
                </div>

                <p className="text-gray-500 text-xs font-medium leading-relaxed mb-8 h-12 overflow-hidden">
                  {project.role}
                </p>

                {/* Tactical Button */}
                <button
                  className="flex items-center gap-4 text-white text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-[#03FF31] transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/projects/${project.id}`);
                  }}
                >
                  <IoArrowForwardCircleSharp className="text-2xl" />
                  View Specification
                </button>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#03FF31] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
