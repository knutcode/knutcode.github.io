import { AboutContainer, AboutImg, AboutSection, AboutTextWrapper } from "../components-styled/AboutStyles";
import { ImgWrapper } from "../components-styled/ProjectsStyles";

const About = () => {
  return (
    <AboutSection id="about">
      <h2 className="section-title">Get to know me</h2>
      <AboutContainer>
        <AboutTextWrapper>
          <p>
            I have spent countless hours on the internet, gaming - and I never imagined I would learn to build and develop
            experiences for others.
          </p>
          <p>
            Now I am studying Front-end at Kodehode Bergen and Scrimba's online course, 'The Frontend Developer Career Path'
            since April 2022.
          </p>
        </AboutTextWrapper>
        <ImgWrapper>
          <AboutImg src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" />
        </ImgWrapper>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
