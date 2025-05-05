import { useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import "./AccordionSection.css"; // 👈 Import the CSS file

const sections = [
  {
    title: "Branding",
    items: [
      "Logo Design",
      "Brand Guidelines",
      "Collateral Design",
      "Rebranding Services",
    ],
  },
  {
    title: "UX/UI Designs",
    items: [
      "User Research and Analysis",
      "Wireframing and Prototyping",
      "User Interface Design",
      "User Experience Testing",
      "Responsive Design Solutions",
    ],
  },
  {
    title: "Motion & Animation",
    items: [
      "Motion Graphics Design",
      "Animated Explainer Videos",
      "Interactive Presentations",
    ],
  },
];

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      <p>My Services</p>
      {sections.map((section, index) => (
        <div key={index} className="accordion-item">
          <button onClick={() => toggle(index)} className="accordion-button">
            <span className="accordion-title">{section.title}</span>
            <IoArrowBackCircleSharp
              className={`accordion-icon ${openIndex === index ? "open" : ""}`}
            />
          </button>
          {openIndex === index && (
            <ul className="accordion-content">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionSection;
