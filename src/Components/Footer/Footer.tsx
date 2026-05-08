import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-[#1A1A1A] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Brand/Identity Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter">
              DIVINE <span className="text-[#03FF31]">CHRIS-KORIE</span>
            </h2>
            <p className="max-w-xs text-gray-500 text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed">
              Architecting the future of digital products through technical
              precision and design logic.
            </p>
          </div>

          {/* Navigation/Terminal Section */}
          <div className="grid grid-cols-2 gap-8 md:justify-items-end">
            <div className="flex flex-col gap-3">
              <span className="text-[#03FF31] text-[9px] font-black uppercase tracking-[0.4em] mb-2">
                Navigation
              </span>
              <a
                href="#about"
                className="text-gray-400 hover:text-white text-xs uppercase font-bold tracking-widest transition-colors underline-offset-8 hover:underline"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-400 hover:text-white text-xs uppercase font-bold tracking-widest transition-colors underline-offset-8 hover:underline"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white text-xs uppercase font-bold tracking-widest transition-colors underline-offset-8 hover:underline"
              >
                Contact
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[#03FF31] text-[9px] font-black uppercase tracking-[0.4em] mb-2">
                Social Hub
              </span>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-xs uppercase font-bold tracking-widest transition-colors"
              >
                LinkedIn //
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-xs uppercase font-bold tracking-widest transition-colors"
              >
                GitHub //
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-xs uppercase font-bold tracking-widest transition-colors"
              >
                Twitter //
              </a>
            </div>
          </div>
        </div>

        {/* System Status / Copyright Bar */}
        <div className="pt-8 border-t border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Technical Readout */}

          {/* Copyright */}
          <p className="text-gray-700 font-mono text-[9px] tracking-[0.3em] uppercase">
            © {currentYear} // Built by Divine Chris-Korie // All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
