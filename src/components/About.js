import { AboutContainer, AboutImg, AboutSection, AboutTextWrapper } from "../components-styled/AboutStyles";
import { ImgWrapper } from "../components-styled/ProjectsStyles";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  //animations
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <AboutSection id="about">
      <h2 className="section-title">Get to know me</h2>
      <AboutContainer>
        <AboutTextWrapper data-aos="fade-right" data-aos-anchor-placement="center-bottom">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
          <p>
            Currently studying Front-end at Kodehode Bergen and Scrimba's online course, 'The Frontend Developer Career Path'
            since April 2022.
          </p>
        </AboutTextWrapper>
        <ImgWrapper data-aos="fade-left" data-aos-anchor-placement="center-bottom">
          <AboutImg src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" />
        </ImgWrapper>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
