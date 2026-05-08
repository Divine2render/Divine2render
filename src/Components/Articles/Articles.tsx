import React from "react";
import { articles } from "./RawArticles";
import { Link } from "react-router-dom";

const Articles: React.FC = () => {
  return (
    <section className="bg-[#050505] py-24 border-t border-[#1A1A1A] pt-[240px]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[1px] bg-[#03FF31]"></div>
            <span className="text-[#03FF31] text-[10px] tracking-[0.5em] font-black uppercase">
              Knowledge Base
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter max-w-2xl leading-none">
            Insights on UI, UX, and{" "}
            <span className="text-[#03FF31]">Product Logic</span>
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link
              key={index}
              to={`/article/${article.title}`}
              className="group block relative bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#03FF31]/50 transition-all duration-500 overflow-hidden"
            >
              {/* Image with Dark Tint */}
              <div className="aspect-video overflow-hidden border-b border-[#1A1A1A] relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                />
                {/* Status Overlay */}
                <div className="absolute top-4 right-4 px-2 py-1 bg-black/80 border border-[#1A1A1A] text-[8px] font-mono text-[#03FF31] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Read_Entry
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-[10px] text-gray-600 uppercase">
                    Entry_0{index + 1}
                  </span>
                  <div className="h-[1px] flex-grow bg-[#1A1A1A]"></div>
                </div>

                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-[#03FF31] transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest leading-relaxed line-clamp-3">
                  {article.description}
                </p>

                {/* Tactical Footer */}
                <div className="mt-8 flex justify-between items-center">
                  <span className="text-[#03FF31] text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                    Open File //
                  </span>
                  <div className="w-2 h-2 border-r border-b border-gray-800 group-hover:border-[#03FF31] transition-colors"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
