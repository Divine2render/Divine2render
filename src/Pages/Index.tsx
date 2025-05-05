import AccordionSection from "../Components/AccordionSection/AccordionSection";
import Experience from "../Components/Experience/Experience";
import Hero from "../Components/Hero/Hero";
import Projects from "../Components/Projects/Projects";

type Props = {};

function Index({}: Props) {
  return (
    <div>
      <Hero />
      <Experience />
      <Projects />
      <AccordionSection />
    </div>
  );
}

export default Index;
