import { ProjectsSection } from '../components-styled/ProjectsStyles';
import './Projects.css';
import Project from './ProjectCard';
import data from '../projectData';

const ProjectSection = () => {
	const projects = data.map((item) => {
		return (
			<Project
				key={item.id}
				title={item.title}
				desc={item.desc}
				image={item.image}
				alt={item.alt}
				github={item.github}
				pages={item.pages}
			/>
		);
	});

	return (
		<ProjectsSection id="projects">
			<h2 className="section-title">Some projects</h2>
			{projects}
		</ProjectsSection>
	);
};

export default ProjectSection;
