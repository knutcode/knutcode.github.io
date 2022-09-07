import { HeroSection, HeroTitle, HeroSmall, HeroText } from "../components-styled/HeroStyles";

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroTitle>Hi, I'm Knut</HeroTitle>
      <HeroSmall>- Frontend developer in the making.</HeroSmall>
      {/* <HeroSmall>
        <span className="react">React</span>, <span className="javascript">JavaScript</span>,{" "}
        <span className="html">HTML</span> & <span className="css">CSS</span>.
      </HeroSmall> */}
      <HeroText>
        Currently diving deeper in <span className="react">React</span> and discovering other technologies. <br /> React, JS,
        HTML and CSS
      </HeroText>
    </HeroSection>
  );
};

export default Hero;
