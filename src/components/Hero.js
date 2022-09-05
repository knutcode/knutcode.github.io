import { HeroSection, HeroTitle, HeroSmall, HeroText } from "../components-styled/HeroStyles";
import { TEXT_AND_CONTENT } from "../textAndcontent/textAndContent";

const Hero = () => {
  const { PORTFOLIO } = TEXT_AND_CONTENT;
  return (
    <HeroSection id="hero">
      <HeroTitle>Hi, I'm Knut.</HeroTitle>
      <HeroSmall>Frontend dev in the making.</HeroSmall>
      <HeroText>{PORTFOLIO.HERO.TEXT}</HeroText>
    </HeroSection>
  );
};

export default Hero;
