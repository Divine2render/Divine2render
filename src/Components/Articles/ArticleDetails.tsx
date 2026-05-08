import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { articles } from "./RawArticles";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const ArticleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((article) => article.title === id);
  const navigate = useNavigate();

  if (!article) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <p className="text-[#03FF31] font-mono tracking-widest">
          ERROR_404: ENTRY_NOT_FOUND
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 pb-32 pt-[120px]">
      {/* Top Progress / Back Bar */}
      <div className="sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            className="flex items-center gap-3 text-[#03FF31] hover:text-white transition-colors group"
            onClick={() => navigate("/articles")}
          >
            <IoArrowBackCircleSharp className="text-2xl transition-transform group-hover:-translate-x-1" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">
              Return to Index
            </span>
          </button>
          <span className="text-gray-600 font-mono text-[9px] uppercase tracking-widest">
            Reading: {article.category}
          </span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 pt-20">
        {/* Header Section */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-2 py-1 bg-[#03FF31]/10 border border-[#03FF31]/20 text-[#03FF31] text-[9px] font-black uppercase tracking-widest">
              {article.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
            {article.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-bold uppercase tracking-tight leading-snug border-l-4 border-[#03FF31] pl-6 py-2">
            {article.description}
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-20 border border-[#1A1A1A] p-2 bg-[#0A0A0A]">
          <img
            className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 object-cover"
            src={article.image}
            alt={article.title}
          />
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 gap-16">
          {article.content.map((paragraph, index) => {
            if (typeof paragraph === "string") {
              return (
                <p
                  key={index}
                  className="text-gray-400 leading-relaxed text-lg font-medium tracking-wide"
                >
                  {paragraph}
                </p>
              );
            }

            return (
              <div key={index} className="space-y-8">
                {paragraph.title && (
                  <h2 className="text-2xl font-black text-white uppercase tracking-widest border-b border-[#1A1A1A] pb-4">
                    {paragraph.title}
                  </h2>
                )}

                {paragraph.text && (
                  <div className="text-gray-400 leading-relaxed text-lg font-medium tracking-wide space-y-4">
                    {paragraph.text.split("\n").map((line, idx) => (
                      <p key={idx}>
                        {line.split("**").map((part, i) =>
                          i % 2 !== 0 ? (
                            <strong
                              key={i}
                              className="text-[#03FF31] font-black"
                            >
                              {part}
                            </strong>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    ))}
                  </div>
                )}

                {paragraph.image && (
                  <div className="py-8">
                    <img
                      src={paragraph.image}
                      alt="Technical Illustration"
                      className="w-full border border-[#1A1A1A] grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <p className="mt-4 text-[10px] font-mono text-gray-600 uppercase tracking-widest text-center">
                      Fig_{index + 1} // Visual Documentation
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Metadata Footer */}
        <footer className="mt-32 pt-12 border-t border-[#1A1A1A] grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <p className="text-[#03FF31] text-[9px] font-black uppercase tracking-[0.4em] mb-2">
              Publisher
            </p>
            <p className="text-white text-xs font-bold uppercase tracking-widest">
              {article.publisher}
            </p>
          </div>
          <div>
            <p className="text-[#03FF31] text-[9px] font-black uppercase tracking-[0.4em] mb-2">
              Date Released
            </p>
            <p className="text-white text-xs font-bold uppercase tracking-widest">
              {article.publishDate}
            </p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-[#03FF31] text-[9px] font-black uppercase tracking-[0.4em] mb-2">
              Index Status
            </p>
            <p className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#03FF31] rounded-full animate-pulse"></span>
              Verified_Entry
            </p>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default ArticleDetails;
