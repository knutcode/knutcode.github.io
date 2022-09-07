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
        <ProjectImg src={props.image} alt={props.alt} />
      </ImgWrapper>

      <TextWrapper>
        <ProjectTitle>{props.title}</ProjectTitle>
        <ProjectText>{props.desc}</ProjectText>

        <ProjectLink href={props.github} target="_blank" className="p--link">
          GitHub
        </ProjectLink>
        <ProjectLink href={props.pages} target="_blank">
          Website
        </ProjectLink>
      </TextWrapper>
    </ProjectContainer>
  );
};

export default Project;
