import { HeroSection, HeroTitle, HeroSmall, HeroText } from "../components-styled/HeroStyles";
import { useEffect, useState } from "react";

const Hero = () => {
  // conditionally render based on viewport - https://stackoverflow.com/a/60811141
  const [isDesktop, setDesktop] = useState(window.innerWidth > 600);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 600);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <HeroSection id="hero">
      <HeroTitle>{isDesktop ? "Hi, I'm Knut!" : "I'm Knut!"}</HeroTitle>
      <HeroSmall>{isDesktop ? "- Frontend developer in the making" : "- Frontend dev in the making"}</HeroSmall>
      <HeroText>
        Currently diving deeper in <span className="react">React</span> and discovering other technologies.
      </HeroText>
    </HeroSection>
  );
};

export default Hero;
