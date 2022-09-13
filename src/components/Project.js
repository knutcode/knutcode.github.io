import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  ImgWrapper,
  ProjectContainer,
  ProjectImg,
  ProjectLink,
  ProjectText,
  ProjectTitle,
  TextWrapper,
} from "../components-styled/ProjectsStyles";

const Project = (props) => {
  //animations
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <ProjectContainer className="projects" data-aos="zoom-in" data-aos-anchor-placement="center-bottom">
      <ImgWrapper>
        <ProjectImg src={props.image} alt={props.alt} />
      </ImgWrapper>

      <TextWrapper>
        <ProjectTitle>{props.title}</ProjectTitle>
        <ProjectText>{props.desc}</ProjectText>

        <div>
          <ProjectLink href={props.github} target="_blank" className="p--link">
            GitHub
          </ProjectLink>
          <ProjectLink href={props.pages} target="_blank">
            website
          </ProjectLink>
        </div>
      </TextWrapper>
    </ProjectContainer>
  );
};

export default Project;
