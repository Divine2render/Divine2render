import React from "react";
import styles from "./AboutMe.module.css";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const AboutMe: React.FC = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const goToProjects = () => {
    navigate("/projects"); // Navigate to the projects route when clicked
  };

  return (
    <section className={styles.aboutContainer}>
      <div className={styles.content}>
        <h1 className={styles.greeting}>Hi, I'm Divine Chris-Korie</h1>

        <p className={styles.subtext}>
          I am a seasoned UI/UX Designer and AI Prompt Engineer with over 6
          years of experience crafting beautiful, functional, and user-centered
          digital interfaces. My expertise lies in blending design thinking with
          AI-driven solutions, creating intuitive and innovative experiences
          that enhance user interaction with cutting-edge technologies.
        </p>

        <p className={styles.subtext}>
          Throughout my career, I have worked across various industries such as
          fintech, e-commerce, and SaaS, where I led projects that not only
          resulted in visually appealing products but also ensured they were
          functional, accessible, and efficient. I also specialize in crafting
          AI prompts that ensure optimal interactions with AI systems, enhancing
          user engagement.
        </p>

        <p className={styles.subtext}>
          I’m skilled in conducting user research, building design systems,
          creating wireframes, and prototyping, as well as designing AI prompts
          that guide intelligent systems. Whether it's conceptualizing new user
          flows, creating AI prompts, or refining detailed UI components, I take
          an interdisciplinary approach to solve complex design challenges.
        </p>

        <p className={styles.subtext}>
          My design philosophy revolves around creating meaningful and
          human-centered experiences. Whether designing for human users or AI
          systems, I follow a user-centered approach, ensuring each project I
          work on aligns with user goals, business objectives, and technological
          advancements.
        </p>

        <div className={styles.toolsSection}>
          <h3 className={styles.rolesHeading}>Tools & Technologies I Use:</h3>
          <ul className={styles.roleList}>
            <li>Figma – UI/UX design, prototyping, and collaboration</li>
            <li>Sketch – High-fidelity design and vector illustrations</li>
            <li>Adobe XD – Wireframing, prototyping, and UI design</li>
            <li>InVision – Interactive prototypes and user testing</li>
            <li>Zeplin – Design handoff and collaboration with developers</li>
            <li>Framer – Advanced prototyping and animations</li>
            <li>Illustrator – Vector graphics and logo design</li>
            <li>Photoshop – Image editing and manipulation</li>
            <li>
              AI Prompt Engineering – Crafting effective prompts for AI models
            </li>
          </ul>
        </div>

        <div className={styles.rolesSection}>
          <h3 className={styles.rolesHeading}>Sample Roles I've Held:</h3>
          <ul className={styles.roleList}>
            <li>
              Lead UI/UX Designer – Design and Implementation of Design Systems
            </li>
            <li>
              Senior UI Designer – End-to-End Design for Fintech and E-commerce
            </li>
            <li>
              Branding and Visual Identity Designer – Establishing Brand
              Standards
            </li>
            <li>UI/UX Consultant – Research-Driven Design Solutions</li>
            <li>
              Product Designer – Developing Interactive Prototypes for User
              Testing
            </li>
            <li>
              AI Prompt Engineer – Crafting Precise Inputs for AI-Driven Systems
            </li>
            <li>
              Design System Specialist – Collaborating with Engineering Teams
              for Scalable Components
            </li>
            <li>
              Lead Visual Designer – Enhancing User Interfaces for SaaS
              Platforms
            </li>
          </ul>
        </div>

        <div style={{ display: "flex", gap: 16, flexDirection: "column" }}>
          <a
            href="mailto:your@email.com"
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoArrowForwardCircleSharp color="#fff" fontSize={48} />
            <p>Contact me</p>
          </a>

          <button
            onClick={goToProjects}
            className={styles.ctaButton}
            style={{ marginTop: 0 }}
          >
            <IoArrowForwardCircleSharp color="#fff" fontSize={48} />
            <p>View my Projects</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
