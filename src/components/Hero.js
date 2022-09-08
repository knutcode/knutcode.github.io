import { HeroSection, HeroTitle, HeroSmall, HeroText } from "../components-styled/HeroStyles";

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroTitle>Hi, I'm Knut.</HeroTitle>
      <HeroSmall>- Frontend developer in the making</HeroSmall>

      <HeroText>
        Currently diving deeper in <span className="react">React</span> and discovering other technologies. <br />{" "}
      </HeroText>
    </HeroSection>
  );
};

export default Hero;
