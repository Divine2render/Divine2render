import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import main from "../../assets/images/cw/cw_a.png";
import oti from "../../assets/images/oti/oti_a.png";
import pay from "../../assets/images/100/100_a.png";
import cw_web from "../../assets/images/cw_web/cw_web_a.png";
import em from "../../assets/images/em/em_a.png";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import "../Hero/Hero.css";
import aw from "../../assets/images/aw/aw_01.png";

const sampleProjects = [
  {
    id: 1,
    title: "Chat Wazobia AI (Mobile)",
    company: "Chat Wazobia AI",
    role: "A multilingual AI chatbot designed for African languages, featuring a seamless mobile interface for real-time conversations.",
    thumbnail: main,
  },
  {
    id: 2,
    title: "100pay",
    company: "100pay",
    role: "A secure, intuitive payment platform for effortless local and international transactions by individuals and businesses.",
    thumbnail: pay,
  },
  {
    id: 3,
    title: "Chat Wazobia AI (Web)",
    company: "Chat Wazobia AI",
    role: "The web version of Chat Wazobia AI with a responsive UI that supports rich, multilingual interactions across African dialects.",
    thumbnail: cw_web,
  },
  {
    id: 4,
    title: "Emperor Guild Studios",
    company: "Emperor Guild Studios",
    role: "A bold and immersive brand identity crafted for a creative studio, blending futuristic design with storytelling elegance.",
    thumbnail: em,
  },
  {
    id: 5,
    title: "OTI Signals",
    company: "OTI Tech",
    role: "A trading signal platform with a sharp, data-driven UI, built to help users make informed trading decisions with ease.",
    thumbnail: oti,
  },
  {
    id: 6,
    title: "Assetsworth",
    company: "Assetsworth",
    role: `AssessWorth is a robust and user-centric investment platform designed to meet all your financial decision-making needs.`,
    thumbnail: aw,
  },
];

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="projects">
      <div className="projects-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-description">
          A showcase of the designs and products I’ve worked on — from mobile
          apps to web dashboards. Each project reflects a unique challenge,
          creative solution, and collaborative effort.
        </p>
      </div>
      <div className="projects-grid">
        {sampleProjects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            <img src={project.thumbnail} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.role}</p>
              {/* View Project Button */}
              <button
                className="ctaButtonNew"
                style={{
                  backgroundColor: "#000",
                  padding: `16px 14px`,
                  marginTop: 16,
                }}
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <IoArrowForwardCircleSharp color="#fff" fontSize={24} />
                <p
                  style={{
                    padding: 0,
                    margin: 0,
                    paddingRight: 12,
                    color: "#fff",
                  }}
                >
                  View Project
                </p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
