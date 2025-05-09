import { useParams, useNavigate } from "react-router-dom";
import "./ProjectDetails.css";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import main from "../../assets/images/cw/cw_a.png";
import cw_b from "../../assets/images/cw/cw_b.png";
import cw_c from "../../assets/images/cw/cw_c.png";
// import cw_d from "../../assets/images/cw/cw_d.png";
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
// import cw_u from "../../assets/images/cw/cw_u.png";
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
// import pay_v from "../../assets/images/pay/pay_v.png";
// import pay_w from "../../assets/images/pay/pay_w.png";
// import pay_x from "../../assets/images/pay/pay_x.png";

import cw_web_a from "../../assets/images/cw_web/cw_web_a.png";
//import cw_web from "../../assets/images/cw_web/cw_web.png";
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
    title: "Chat Wazobia AI -  Mobile app",
    company: "Create Wealth",
    role: "A culturally intelligent AI assistant that bridges the gap between African languages and modern technology through seamless translations and engaging cultural experiences.",
    thumbnail: main, // replace with actual image reference
    description: [
      "Chat Wazobia AI is an innovative AI-driven platform developed by Create Wealth, focused on empowering African communities by preserving and promoting indigenous languages and culture. The vision behind this project was to create a technology product that goes beyond utility, becoming a cultural companion that enables people to connect, communicate, and celebrate their heritage.",
      "At the core of Chat Wazobia AI is a robust translation engine trained on a wide array of African languages, dialects, and contextual nuances. From Igbo to Yoruba, Hausa to Swahili, the system is designed to understand not just literal translations, but also the cultural meaning behind words and expressions. This was made possible through intensive data collection, native speaker collaborations, and ethical AI training practices.",
      "In addition to translation, Chat Wazobia AI features an internal hotspot generator that enables users to explore African attires, traditions, and games. From generating vibrant traditional clothing combinations to recreating age-old games like Ayo and Ludu, the AI acts as both a stylist and cultural archivist. These features help users visually and interactively engage with the diversity of African identities.",
      "To further deepen user engagement, the platform also supports culturally relevant voice and video calls. These aren't just standard communication features—they're enriched with real-time translation overlays and dialect switching, allowing for fluid cross-language conversations in a natural setting. This functionality is especially powerful for diaspora users looking to reconnect with their roots or collaborate across regions.",
      "Through thoughtful UX design, voice-first interfaces, and mobile-first performance optimization, Chat Wazobia AI stands out as a digital tool that honors tradition while embracing the future. It’s not just an AI assistant—it’s a living archive, a teacher, and a bridge for African culture in the digital age.",
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
      cw_x, // New image imports
    ],

    links: {
      website: "https://www.chatwazobiaai.com/",
      android: "",
    },
  },

  {
    id: 5,
    title: "OTI Signals",
    company: "OTI Signals",
    role: "Mobile app for forex traders to follow real-time signals and get accurate insights.",
    thumbnail: oti,
    description: [
      "OTI Signals was designed to serve a fast-paced trading community. The goal was to build a reliable platform that reflects precision, speed, and trust. We started with deep user research and competitor analysis to identify gaps in existing solutions.",
      "A custom UI was developed using a data-focused typographic system. Monospaced numerals enhance readability of prices and signals, while clean geometric fonts guide users through the interface intuitively.",
      "We adopted a minimalist color palette with emerald green (for active trades), black, and white. These choices promote quick decision-making and align with visual cues traders already trust.",
      "The app’s logo and icon were designed around the concept of candlestick charts—integral to trading. These visuals strengthen brand recognition and stand out in crowded app stores.",
      "Performance and usability were core priorities. Real-time notifications, signal cards, and animated transitions were optimized for mobile responsiveness. OTI Signals is now a go-to companion for both beginners and advanced traders.",
    ],
    links: {
      website: "https://otisignal.com/",
      android:
        "https://play.google.com/store/apps/details?id=com.tradersignalapp&pcampaignid=web_share",
      ios: "",
    },
    images: [oti, oti_b, oti_c, oti_d, oti_e],
  },

  {
    id: 2,
    title: "100 Pay",
    company: "100 Pay",
    role: "A next-gen crypto-powered checkout experience for businesses aiming to simplify in-person and online payments.",
    thumbnail: pay,
    description: [
      "100Pay’s physical and online checkout features were built for businesses that want to speed up crypto acceptance. The challenge was to create a seamless, secure, and fast experience across offline and online retail spaces.",
      "For physical checkouts, we designed QR code-based stickers and table tops that let customers scan and pay instantly. This solution requires no hardware and fits into any business setting — from kiosks to cafes.",
      "The UI for online checkouts was engineered to be embeddable and intuitive, reducing drop-off rates and enhancing conversion. We supported multiple integrations with just a few lines of code.",
      "The branding used consistent typography and color treatments from the 100Pay system, ensuring familiarity and trust across environments. We also introduced dynamic loading states and success animations to improve interaction feedback.",
      "With our checkout solution, businesses can accept 22+ cryptocurrencies and access real-time payment updates — all within a modern, branded experience that customers enjoy.",
    ],
    links: {
      website: "https://100pay.co/",
      android: "https://play.google.com/store/apps/details?id=app.pay&hl=en",
    },
    images: [
      pay_a,
      pay_b,
      pay_c,
      pay_d,
      pay_e,
      pay_n,
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
    company: "Emperor Guild Studios",
    role: "A bold and immersive brand identity crafted for a creative studio, blending futuristic design with storytelling elegance.",
    thumbnail: em,
    images: [em, em_b, em_e, em_c, em_d],
    description: [
      "The inception of the Emperor Guild Studios brand identity was driven by a desire to encapsulate the essence of innovation and storytelling. Our team embarked on a journey to create a visual narrative that resonates with the studio's commitment to pushing creative boundaries. We began by conducting in-depth research into the studio's core values, target audience, and the competitive landscape. This foundational understanding informed our design direction, ensuring that every element we crafted was purposeful and aligned with the studio's vision.",
      "Typography played a pivotal role in conveying the brand's character. We selected a modern, sans-serif typeface that exudes professionalism while maintaining a sense of approachability. The clean lines and balanced proportions of the typeface reflect the studio's precision and attention to detail. To add a unique flair, we customized certain letterforms, subtly integrating elements that hint at the studio's creative prowess and forward-thinking approach.",
      "Color theory was meticulously applied to develop a palette that embodies Emperor Guild Studios' identity. We chose a dominant deep blue hue, symbolizing trust, depth, and stability—qualities that clients can expect from the studio. Complementary accents of vibrant orange were introduced to inject energy and creativity into the brand, creating a harmonious balance that appeals to a diverse audience.",
      "The logo design process was an exercise in blending symbolism with simplicity. We crafted an emblem that merges the imagery of a crown and a quill, representing leadership and storytelling, respectively. This fusion not only reinforces the 'Emperor' aspect of the brand but also pays homage to the studio's narrative-driven projects. The emblem's geometric construction ensures scalability and versatility across various mediums.",
      "To bring the brand to life, we developed a comprehensive visual language that extends beyond the logo. This included designing business stationery, social media templates, and a dynamic website interface. Each touchpoint was thoughtfully designed to maintain consistency and reinforce brand recognition. The culmination of these efforts resulted in a cohesive brand identity that positions Emperor Guild Studios as a formidable force in the creative industry.",
    ],
    links: {
      website: "https://www.emperorguildtech.com/",
    },
    //https://www.emperorguildtech.com/
  },
  {
    id: 3,
    title: "Chat Wazobia AI - web",
    company: "Create Wealth",
    role: "A culturally intelligent AI assistant that bridges the gap between African languages and modern technology through seamless translations and engaging cultural experiences.",
    thumbnail: cw_web_a, // replace with actual image reference
    description: [
      "Chat Wazobia AI is an innovative AI-driven platform developed by Create Wealth, focused on empowering African communities by preserving and promoting indigenous languages and culture. The vision behind this project was to create a technology product that goes beyond utility, becoming a cultural companion that enables people to connect, communicate, and celebrate their heritage.",
      "At the core of Chat Wazobia AI is a robust translation engine trained on a wide array of African languages, dialects, and contextual nuances. From Igbo to Yoruba, Hausa to Swahili, the system is designed to understand not just literal translations, but also the cultural meaning behind words and expressions. This was made possible through intensive data collection, native speaker collaborations, and ethical AI training practices.",
      "In addition to translation, Chat Wazobia AI features an internal hotspot generator that enables users to explore African attires, traditions, and games. From generating vibrant traditional clothing combinations to recreating age-old games like Ayo and Ludu, the AI acts as both a stylist and cultural archivist. These features help users visually and interactively engage with the diversity of African identities.",
      "To further deepen user engagement, the platform also supports culturally relevant voice and video calls. These aren't just standard communication features—they're enriched with real-time translation overlays and dialect switching, allowing for fluid cross-language conversations in a natural setting. This functionality is especially powerful for diaspora users looking to reconnect with their roots or collaborate across regions.",
      "Through thoughtful UX design, voice-first interfaces, and mobile-first performance optimization, Chat Wazobia AI stands out as a digital tool that honors tradition while embracing the future. It’s not just an AI assistant—it’s a living archive, a teacher, and a bridge for African culture in the digital age.",
    ],

    links: {
      website: "https://www.chatwazobiaai.com/",
      android: "",
    },
    images: [cw_web_a, cw_web_b, cw_web_c, cw_web_d],
  },

  {
    id: 3,
    title: "Assetsworth",
    company: "Assetsworth",
    role: "A culturally intelligent AI assistant that bridges the gap between African languages and modern technology through seamless translations and engaging cultural experiences.",
    thumbnail: cw_web_a, // replace with actual image reference
    description: [
      "Chat Wazobia AI is an innovative AI-driven platform developed by Create Wealth, focused on empowering African communities by preserving and promoting indigenous languages and culture. The vision behind this project was to create a technology product that goes beyond utility, becoming a cultural companion that enables people to connect, communicate, and celebrate their heritage.",
      "At the core of Chat Wazobia AI is a robust translation engine trained on a wide array of African languages, dialects, and contextual nuances. From Igbo to Yoruba, Hausa to Swahili, the system is designed to understand not just literal translations, but also the cultural meaning behind words and expressions. This was made possible through intensive data collection, native speaker collaborations, and ethical AI training practices.",
      "In addition to translation, Chat Wazobia AI features an internal hotspot generator that enables users to explore African attires, traditions, and games. From generating vibrant traditional clothing combinations to recreating age-old games like Ayo and Ludu, the AI acts as both a stylist and cultural archivist. These features help users visually and interactively engage with the diversity of African identities.",
      "To further deepen user engagement, the platform also supports culturally relevant voice and video calls. These aren't just standard communication features—they're enriched with real-time translation overlays and dialect switching, allowing for fluid cross-language conversations in a natural setting. This functionality is especially powerful for diaspora users looking to reconnect with their roots or collaborate across regions.",
      "Through thoughtful UX design, voice-first interfaces, and mobile-first performance optimization, Chat Wazobia AI stands out as a digital tool that honors tradition while embracing the future. It’s not just an AI assistant—it’s a living archive, a teacher, and a bridge for African culture in the digital age.",
    ],

    links: {
      website: "https://www.chatwazobiaai.com/",
      android: "",
    },
    images: [cw_web_a, cw_web_b, cw_web_c, cw_web_d],
  },

  {
    id: 6,
    title: "Assetsworth",
    company: "Assetsworth",
    description: [
      `AssessWorth is a robust and user-centric investment platform designed to meet all your financial decision-making needs. Whether you’re looking for educational resources, in-depth asset analysis, real-time market insights, or community support, AssessWorth offers a complete ecosystem tailored to individual investors. The platform empowers users with accurate, unbiased data and personalized recommendations, helping them make smart, confident investment decisions.
    At its core, AssessWorth values trust, clarity, and relevance. With over five years of historical financial data, the platform ensures that every analysis and suggestion is grounded in fact. Unlike one-size-fits-all solutions, AssessWorth delivers insights that are uniquely suited to each user’s financial goals and risk profile. This personalized approach ensures that users receive guidance aligned with their specific investment journey.
    AssessWorth’s services span a wide range of asset types, including stocks, bonds, real estate, and derivatives. From structuring and monitoring your portfolio to delivering real-time news alerts and technical analysis, the platform is built to support investors at every stage. Education also plays a central role, with tools and content designed to help users understand the “why” behind every recommendation.
    Ultimately, AssessWorth isn’t just a tool—it’s a trusted partner in your investment journey. With a commitment to financial literacy, transparency, and community, AssessWorth is here to help you compound wealth wisely and build a more financially informed future`,
    ],
    thumbnail: aw,
    images: [aw, aw_02, aw_03, aw_04, aw_05],
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = sampleProjects.find((p) => p.id === parseInt(id!));

  if (!project) return <p style={{ padding: 40 }}>Project not found.</p>;

  return (
    <section className="project-details">
      <button className="back-button" onClick={() => navigate("/")}>
        <IoArrowBackCircleSharp size={36} color="#000" />
        <span>Back to Projects</span>
      </button>
      <img
        src={project.thumbnail}
        alt={project.title}
        className="project-banner"
      />
      <div className="details-content">
        <h2>{project.title}</h2>
        <p>{project.role}</p>
        {project.description.map((paragraph, index) => (
          <p key={index} className="paragraph">
            {paragraph}
          </p>
        ))}

        {project.images && project.images.length > 0 && (
          <div className="project-images">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Project Image ${index + 1}`}
                className="project-banner"
                style={{ marginTop: 12 }}
              />
            ))}
          </div>
        )}

        {project.links && (
          <div
            style={{
              marginTop: 48,
              display: "flex",
              gap: 16,
              backgroundColor: "#f4f4f4",
              padding: `48px 16px`,
              flexDirection: "column",
            }}
          >
            {project.links.website && (
              <a
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <button className="ctaButtonNew">
                  <IoArrowForwardCircleSharp color="#000" fontSize={48} />
                  <p style={{ padding: 0, margin: 0, paddingRight: 12 }}>
                    View Website
                  </p>
                </button>
              </a>
            )}
            {project.links.android && (
              <a
                href={project.links.android}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <button className="ctaButtonNew">
                  <IoArrowForwardCircleSharp color="#000" fontSize={48} />
                  <p style={{ padding: 0, margin: 0, paddingRight: 12 }}>
                    Download on Android
                  </p>
                </button>
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetails;
