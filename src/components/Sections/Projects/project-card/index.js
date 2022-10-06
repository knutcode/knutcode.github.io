import { ImgWrapper } from '../../../global/styles';
import {
	ProjectContainer,
	ProjectImg,
	ProjectLink,
	ProjectLinkWrapper,
	ProjectText,
	ProjectTitle,
	TextWrapper,
} from '../styles';

const Project = (props) => {
	return (
		<ProjectContainer
			className="projects"
			data-aos="zoom-in"
			data-aos-anchor-placement="center-bottom"
		>
			<ImgWrapper>
				<ProjectImg
					src={props.image}
					alt={props.alt}
				/>
			</ImgWrapper>

			<TextWrapper>
				<ProjectTitle>{props.title}</ProjectTitle>
				<ProjectText>{props.desc}</ProjectText>

				<ProjectLinkWrapper>
					<ProjectLink
						className="p--link"
						href={props.github}
						target="_blank"
						alt={props.title}
						aria-label={props.desc}
					>
						GitHub
					</ProjectLink>
					<ProjectLink
						className="p--link"
						href={props.pages}
						target="_blank"
						alt={`${props.title} website`}
						aria-label={`Visit ${props.title} website`}
					>
						website
					</ProjectLink>
				</ProjectLinkWrapper>
			</TextWrapper>
		</ProjectContainer>
	);
};

export default Project;
