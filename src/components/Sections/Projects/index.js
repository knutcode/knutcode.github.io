import './index.css';
import Project from './project-card';
import data from '../../../data/projectData';
import { useTranslation } from 'react-i18next';
import { ProjectsSection } from './styles';

const ProjectSection = () => {
	const { t } = useTranslation('projects');
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
			<h2 className="section-title">{t('title')}</h2>
			{projects}
		</ProjectsSection>
	);
};

export default ProjectSection;