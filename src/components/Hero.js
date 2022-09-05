import { HeroSection, HeroTitle, HeroSmall, HeroText } from "../components-styled/HeroStyles";
import { TEXT_AND_CONTENT } from "../textAndcontent/textAndContent";

const Hero = () => {
  const { PORTFOLIO } = TEXT_AND_CONTENT;
  return (
    <HeroSection id="hero">
      <HeroTitle>I'm Knut</HeroTitle>
      <HeroSmall>Frontend developer student.</HeroSmall>
      <HeroText>{PORTFOLIO.HERO.TEXT}</HeroText>
    </HeroSection>
  );
};

export default Hero;
