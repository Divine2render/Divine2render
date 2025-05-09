import React from "react";
import styles from "./AboutMe.module.css";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import pic from "../../assets/images/main.jpg";
import stylesB from "../Articles/ArticleDetails.module.css";

const AboutMe: React.FC = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const goToProjects = () => {
    navigate("/projects"); // Navigate to the projects route when clicked
  };

  const handleCall = () => {
    window.location.href = "https://wa.me/31647620170";
  };

  return (
    <section className={styles.aboutContainer}>
      <div className={styles.content}>
        <div style={{ position: "relative", height: 400, overflow: "hidden" }}>
          <img
            className={stylesB.articleImage}
            alt="Divine Chris-Korie"
            src={pic}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#00000045",
              zIndex: 1,
            }}
          />
        </div>
        <h1 className={styles.greeting} style={{ marginBottom: 64 }}>
          Hi, I'm Divine Chris-Korie
        </h1>

        <p className={styles.subtext}>
          I am a seasoned UI/UX Designer and AI Prompt Engineer with over 5
          years of experience crafting beautiful, functional, and user-centered
          digital interfaces. My expertise lies in blending design thinking with
          AI-driven solutions, creating intuitive and innovative experiences
          that enhance user interaction with cutting-edge technologies.
        </p>

        <p className={styles.subtext}>
          In 2021, when I started learning Product designing, my biggest goal
          was to create beautiful, easy-to-use apps and amazing digital
          experiences using storytelling and cutting-edge technology. Four years
          later, that goal has been attained and is exemplified in real life
          projects. The projects I have tackled is a testament of how meets
          innovation, designing how things interact, and building interfaces,
          all while keeping an eye out for clean easy-to-use, and results-driven
          design.
          <br /> <br />I excel at turning complicated systems into smooth
          engaging user journeys and I am ready to work with startups, agencies,
          individuals and big companies. Driven both by the fear of getting
          replaced by A.I and seeing how design and artificial intelligence work
          better together, I learned and mastered AI prompt engineering in 2023.
          This wasn't just about adding a new skill. It was a smart move to make
          sure that every product I create stays smart, can grow, and fits with
          where tech is going. This way, design isn't just beautiful, it can
          interact with people too.
          <br /> <br />
          As a UI/UX designer and AI prompt engineer, My approach to prompting
          is based on context, accuracy, and purpose. I believe that a carefully
          worded prompt does more than just give commands— it is a great way to
          shape designs.
        </p>

        {/* <p className={styles.subtext}>
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
        </p> */}

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

        <div
          style={{
            display: "flex",
            gap: 16,
            flexDirection: "column",
            marginTop: 48,
          }}
        >
          <button
            onClick={handleCall}
            className={styles.ctaButton}
            style={{ marginTop: 0 }}
          >
            <IoArrowForwardCircleSharp color="#fff" fontSize={48} />
            <p>Contact me</p>{" "}
          </button>

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
