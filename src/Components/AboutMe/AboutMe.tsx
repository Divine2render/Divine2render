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
          I am a seasoned UI/UX Designer with over 6 years of experience
          crafting beautiful, functional, and user-centered digital interfaces.
          My passion lies in creating intuitive, visually engaging products that
          enhance user experiences across web and mobile platforms.
        </p>

        <p className={styles.subtext}>
          Throughout my career, I have had the opportunity to work across
          multiple industries, including fintech, e-commerce, and SaaS. I bring
          design solutions that not only look great but also improve
          functionality and accessibility. Whether it’s conceptualizing new user
          flows or refining detailed UI components, I approach each challenge
          with empathy and precision.
        </p>

        <p className={styles.subtext}>
          I am skilled in conducting user research, building design systems,
          creating wireframes, and prototyping. I specialize in crafting UI
          designs that are both functional and aesthetically pleasing while
          always focusing on the user’s journey.
        </p>

        <p className={styles.subtext}>
          My design philosophy centers around creating meaningful experiences. I
          follow a user-centered design process that ensures each project I work
          on is intuitive, accessible, and aligned with business goals. I
          believe in the power of feedback and iteration to refine designs until
          they perfectly meet user needs.
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
              Senior Mobile Designer – Optimizing UI for Mobile-First Design
            </li>
            <li>UI Designer – Crafting UI Components for Web Applications</li>
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

        <div style={{ display: "flex", gap: 16 }}>
          <a
            href="mailto:your@email.com"
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoArrowForwardCircleSharp color="#fff" fontSize={48} />
            <p>Contact me</p>
          </a>

          <button onClick={goToProjects} className={styles.ctaButton}>
            <IoArrowForwardCircleSharp color="#fff" fontSize={48} />
            <p>View my Projects</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
