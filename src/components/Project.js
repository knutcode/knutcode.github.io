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
