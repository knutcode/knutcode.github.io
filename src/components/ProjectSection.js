import { ProjectsSection } from "../components-styled/ProjectsStyles";
import Project from "./Project";
import data from "../data";

const ProjectSection = () => {
  const projects = data.map((item) => {
    return (
      <Project
        key={item.id}
        title={item.title}
        desc={item.desc}
        image={item.image}
        github={item.github}
        pages={item.pages}
      />
    );
  });

  return (
    <ProjectsSection id="projects">
      <h2 className="section-title">Things I've worked on</h2>
      {projects}
    </ProjectsSection>
  );
};

export default ProjectSection;
