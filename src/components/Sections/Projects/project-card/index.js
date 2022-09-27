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
					>
						GitHub
					</ProjectLink>
					<ProjectLink
						className="p--link"
						href={props.pages}
						target="_blank"
					>
						website
					</ProjectLink>
				</ProjectLinkWrapper>
			</TextWrapper>
		</ProjectContainer>
	);
};

export default Project;
