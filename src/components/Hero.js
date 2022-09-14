import { HeroSection, HeroTitle, HeroSmall, HeroText } from "../components-styled/HeroStyles";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

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

  //animations
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <HeroSection id="hero">
      <HeroTitle data-aos="fade-right">{isDesktop ? "Hi, I'm Knut!" : "I'm Knut!"}</HeroTitle>

      <HeroSmall data-aos="fade-up" data-aos-delay="300">
        {isDesktop ? "- Frontend developer in the making" : "Frontend dev in the making"}
      </HeroSmall>

      <HeroText data-aos="fade-up" data-aos-delay="800">
        Currently diving deeper in <span className="react">React</span> and discovering other technologies.
      </HeroText>
    </HeroSection>
  );
};

export default Hero;
