import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  IoArrowBackCircleSharp,
  IoArrowForwardCircleSharp,
} from "react-icons/io5";

// --- IMAGE IMPORTS (Maintained from your source) ---
import main from "../../assets/images/cw/cw_a.png";
import cw_b from "../../assets/images/cw/cw_b.png";
import cw_c from "../../assets/images/cw/cw_c.png";
import cw_e from "../../assets/images/cw/cw_e.png";
import cw_f from "../../assets/images/cw/cw_f.png";
import cw_g from "../../assets/images/cw/cw_g.png";
import cw_h from "../../assets/images/cw/cw_h.png";
import cw_i from "../../assets/images/cw/cw_i.png";
import cw_j from "../../assets/images/cw/cw_j.png";
import cw_k from "../../assets/images/cw/cw_k.png";
import cw_l from "../../assets/images/cw/cw_l.png";
import cw_m from "../../assets/images/cw/cw_m.png";
import cw_n from "../../assets/images/cw/cw_n.png";
import cw_o from "../../assets/images/cw/cw_o.png";
import cw_p from "../../assets/images/cw/cw_p.png";
import cw_q from "../../assets/images/cw/cw_q.png";
import cw_r from "../../assets/images/cw/cw_r.png";
import cw_s from "../../assets/images/cw/cw_s.png";
import cw_t from "../../assets/images/cw/cw_t.png";
import cw_v from "../../assets/images/cw/cw_v.png";
import cw_w from "../../assets/images/cw/cw_w.png";
import cw_x from "../../assets/images/cw/cw_x.png";
import oti from "../../assets/images/oti/oti_a.png";
import pay from "../../assets/images/100/100_a.png";
import pay_a from "../../assets/images/pay/pay_a.png";
import pay_b from "../../assets/images/pay/pay_b.png";
import pay_c from "../../assets/images/pay/pay_c.png";
import pay_d from "../../assets/images/pay/pay_d.png";
import pay_e from "../../assets/images/pay/pay_e.png";
import pay_f from "../../assets/images/pay/pay_f.png";
import pay_g from "../../assets/images/pay/pay_g.png";
import pay_h from "../../assets/images/pay/pay_h.png";
import pay_i from "../../assets/images/pay/pay_i.png";
import pay_j from "../../assets/images/pay/pay_j.png";
import pay_k from "../../assets/images/pay/pay_k.png";
import pay_l from "../../assets/images/pay/pay_l.png";
import pay_m from "../../assets/images/pay/pay_m.png";
import pay_n from "../../assets/images/pay/pay_n.png";
import pay_o from "../../assets/images/pay/pay_o.png";
import pay_p from "../../assets/images/pay/pay_p.png";
import pay_q from "../../assets/images/pay/pay_q.png";
import pay_r from "../../assets/images/pay/pay_r.png";
import pay_s from "../../assets/images/pay/pay_s.png";
import pay_t from "../../assets/images/pay/pay_t.png";
import pay_u from "../../assets/images/pay/pay_u.png";
import cw_web_a from "../../assets/images/cw_web/cw_web_a.png";
import cw_web_b from "../../assets/images/cw_web/cw_web_b.png";
import cw_web_c from "../../assets/images/cw_web/cw_web_c.png";
import cw_web_d from "../../assets/images/cw_web/cw_web_d.png";
import em from "../../assets/images/em/em_a.png";
import em_b from "../../assets/images/em/em_b.png";
import em_c from "../../assets/images/em/em_c.png";
import em_d from "../../assets/images/em/em_d.png";
import em_e from "../../assets/images/em/em_e.png";
import oti_b from "../../assets/images/em/oti_b.png";
import oti_c from "../../assets/images/em/oti_c.png";
import oti_d from "../../assets/images/em/oti_d.png";
import oti_e from "../../assets/images/em/oti_e.png";
import aw from "../../assets/images/aw/aw_01.png";
import aw_02 from "../../assets/images/aw/aw_02.png";
import aw_03 from "../../assets/images/aw/aw_03.png";
import aw_04 from "../../assets/images/aw/aw_04.png";
import aw_05 from "../../assets/images/aw/aw_05.png";

const sampleProjects = [
  {
    id: 1,
    title: "Chat Wazobia AI - Mobile",
    company: "Create Wealth",
    role: "UX Strategy & AI Prompt Engineering",
    tagline: "Bridging African heritage with neural intelligence.",
    thumbnail: main,
    description: [
      "Chat Wazobia AI is an innovative AI-driven platform focused on empowering African communities by preserving and promoting indigenous languages and culture.",
      "At its core is a robust translation engine trained on a wide array of African dialects and contextual nuances, ensuring meaning isn't lost in translation.",
      "The platform features an internal hotspot generator for exploring African attires and traditions, alongside culturally relevant voice and video calls with real-time translation overlays.",
    ],
    images: [
      cw_b,
      cw_c,
      cw_e,
      cw_f,
      cw_g,
      cw_h,
      cw_i,
      cw_j,
      cw_k,
      cw_l,
      cw_m,
      cw_n,
      cw_o,
      cw_p,
      cw_q,
      cw_r,
      cw_s,
      cw_t,
      cw_v,
      cw_w,
      cw_x,
    ],
    links: { website: "https://www.chatwazobiaai.com/" },
  },
  {
    id: 5,
    title: "OTI Signals",
    company: "OTI Signals",
    role: "Lead UI/UX Designer",
    tagline: "High-precision interface for real-time forex insights.",
    thumbnail: oti,
    description: [
      "OTI Signals was designed to serve a fast-paced trading community. The goal was to build a reliable platform reflecting precision, speed, and trust.",
      "A custom UI was developed using a monospaced typographic system to enhance readability of prices and signals during high-volatility periods.",
      "The minimalist palette utilizes emerald green for active trades, promoting quick decision-making and visual clarity.",
    ],
    links: {
      website: "https://otisignal.com/",
      android:
        "https://play.google.com/store/apps/details?id=com.tradersignalapp",
    },
    images: [oti, oti_b, oti_c, oti_d, oti_e],
  },
  {
    id: 2,
    title: "100 Pay",
    company: "100 Pay",
    role: "Product Designer",
    tagline: "Crypto-powered checkout for the modern enterprise.",
    thumbnail: pay,
    description: [
      "Built for businesses aiming to simplify crypto acceptance, 100Pay bridges physical and online retail spaces through seamless QR-based payments.",
      "The UI was engineered to be embeddable and intuitive, supporting multiple integrations with minimal code and reducing drop-off rates significantly.",
      "The experience supports 22+ cryptocurrencies with real-time updates within a modern, branded interaction model.",
    ],
    links: {
      website: "https://100pay.co/",
      android: "https://play.google.com/store/apps/details?id=app.pay",
    },
    images: [
      pay_a,
      pay_b,
      pay_c,
      pay_d,
      pay_e,
      pay_f,
      pay_g,
      pay_h,
      pay_i,
      pay_j,
      pay_k,
      pay_l,
      pay_m,
      pay_n,
      pay_o,
      pay_p,
      pay_q,
      pay_r,
      pay_s,
      pay_t,
      pay_u,
    ],
  },
  {
    id: 4,
    title: "Emperor Guild Studios",
    company: "Emperor Guild",
    role: "Brand Architect",
    tagline: "Futuristic identity blending storytelling and creative leadship.",
    thumbnail: em,
    description: [
      "Crafted a visual narrative that resonates with the studio's commitment to pushing creative boundaries in the storytelling space.",
      "The logo design merges the crown and quill, symbolizing leadership and narrative excellence, paired with a dominant deep blue and vibrant orange palette.",
    ],
    links: { website: "https://www.emperorguildtech.com/" },
    images: [em, em_b, em_e, em_c, em_d],
  },
  {
    id: 3,
    title: "Chat Wazobia AI - Web",
    company: "Create Wealth",
    role: "Web Experience Design",
    tagline: "Scaling cultural AI for wide-screen desktop interactions.",
    thumbnail: cw_web_a,
    description: [
      "Adapting the mobile cultural experience into a robust web interface, ensuring the translation engine and cultural archive remain accessible across devices.",
      "The web version focuses on accessibility and complex data visualization for the hotspot generator features.",
    ],
    links: { website: "https://www.chatwazobiaai.com/" },
    images: [cw_web_a, cw_web_b, cw_web_c, cw_web_d],
  },
  {
    id: 6,
    title: "Assetsworth",
    company: "Assetsworth",
    role: "UX Researcher & Designer",
    tagline: "Data-grounded financial decision-making ecosystem.",
    thumbnail: aw,
    description: [
      "AssessWorth is a user-centric investment platform delivering personalized recommendations based on five years of historical financial data.",
      "The platform supports stocks, bonds, real estate, and derivatives, focusing on financial literacy and transparent portfolio monitoring.",
    ],
    images: [aw, aw_02, aw_03, aw_04, aw_05],
  },
];

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = sampleProjects.find((p) => p.id === parseInt(id!));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project)
    return (
      <div className="h-screen bg-[#050505] flex items-center justify-center">
        <p className="text-[#03FF31] font-mono uppercase tracking-widest">
          Project Archive Not Found_
        </p>
      </div>
    );

  return (
    <section className="bg-[#050505] min-h-screen text-gray-400 pb-32 pt-[200px]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Navigation */}
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-4 mb-16 hover:text-[#03FF31] transition-colors"
        >
          <IoArrowBackCircleSharp className="text-4xl text-white group-hover:text-[#03FF31] transition-colors" />
          <span className="font-mono text-[10px] uppercase tracking-[0.4em]">
            Back to Index
          </span>
        </button>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#03FF31]"></div>
              <span className="text-[#03FF31] text-[10px] tracking-[0.4em] font-black uppercase">
                Case Study // {project.company}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              {project.title}
            </h1>
            <p className="text-xl text-white font-bold uppercase tracking-tight max-w-2xl">
              {project.tagline}
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right pt-4">
            <span className="block text-[10px] font-mono uppercase text-gray-600 mb-2">
              Role
            </span>
            <span className="text-white font-black uppercase tracking-widest text-sm italic">
              {project.role}
            </span>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="relative group mb-24 overflow-hidden border border-[#1A1A1A]">
          <div className="absolute inset-0 bg-[#03FF31]/5 mix-blend-overlay group-hover:bg-transparent transition-all duration-700"></div>
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-auto transition-all duration-1000"
          />
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 border-t border-[#1A1A1A] pt-16">
          <div className="lg:col-span-4">
            <h3 className="text-[#03FF31] font-mono text-[10px] uppercase tracking-[0.4em] sticky top-32">
              01 // Analysis & Brief
            </h3>
          </div>
          <div className="lg:col-span-8 space-y-8 text-lg leading-relaxed">
            {project.description.map((paragraph, index) => (
              <p
                key={index}
                className={index === 0 ? "text-white font-medium text-xl" : ""}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Visual Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="space-y-12 mb-32">
            <div className="flex items-center gap-4 mb-12">
              <h3 className="text-[#03FF31] font-mono text-[10px] uppercase tracking-[0.4em]">
                02 // Visual Architecture
              </h3>
              <div className="flex-1 h-[1px] bg-[#1A1A1A]"></div>
            </div>
            <div className="grid grid-cols-1 gap-12">
              {project.images.map((img, idx) => (
                <div
                  key={idx}
                  className="border border-[#1A1A1A] bg-[#0A0A0A] p-4"
                >
                  <img
                    src={img}
                    alt={`Artifact ${idx + 1}`}
                    className="w-full h-auto transition-all duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Deployments / Call to Action */}
        <div className="border-t border-[#1A1A1A] pt-24">
          <h3 className="text-[#03FF31] font-mono text-[10px] uppercase tracking-[0.4em] mb-12">
            03 // Live Environment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.links?.website && (
              <a
                href={project.links.website}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-8 border border-[#1A1A1A] hover:border-[#03FF31] transition-all duration-500 bg-[#080808]"
              >
                <span className="text-white font-black uppercase tracking-widest text-xl">
                  Explore Web
                </span>
                <IoArrowForwardCircleSharp className="text-4xl text-[#03FF31] group-hover:translate-x-2 transition-transform" />
              </a>
            )}
            {project.links?.android && (
              <a
                href={project.links.android}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-8 border border-[#1A1A1A] hover:border-[#03FF31] transition-all duration-500 bg-[#080808]"
              >
                <span className="text-white font-black uppercase tracking-widest text-xl">
                  Play Store
                </span>
                <IoArrowForwardCircleSharp className="text-4xl text-[#03FF31] group-hover:translate-x-2 transition-transform" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
