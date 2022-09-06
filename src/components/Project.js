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
  return (
    <ProjectContainer className="projects">
      <ImgWrapper>
        <ProjectImg src={props.image} alt="project image" />
      </ImgWrapper>

      <TextWrapper>
        <ProjectTitle>{props.title}</ProjectTitle>
        <ProjectText>{props.desc}</ProjectText>

        <ProjectLink href={props.github} target="_blank">
          github
        </ProjectLink>
        <ProjectLink href={props.pages} target="_blank">
          website
        </ProjectLink>
      </TextWrapper>
    </ProjectContainer>
  );
};

export default Project;
