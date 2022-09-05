import { AboutSection } from "../components-styled/AboutStyles";
import { TEXT_AND_CONTENT } from "../textAndcontent/textAndContent";

const About = () => {
  const { PORTFOLIO } = TEXT_AND_CONTENT;
  return (
    <AboutSection id="about">
      <h2>About</h2>
      <h2>{PORTFOLIO.HERO.TEXT}</h2>
    </AboutSection>
  );
};

export default About;
