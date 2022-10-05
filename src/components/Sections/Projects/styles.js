import styled from 'styled-components';
import { device } from '../../../data/devices';

export const ProjectsSection = styled.section`
	padding-top: 5rem;
	padding-bottom: 2.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${(props) => props.theme.whitecolor};
`;

export const ProjectContainer = styled.div`
	display: flex;
	height: 350px;
	margin-bottom: 5rem;
	background-color: ${(props) => props.theme.neutral};
	box-shadow: ${(props) => props.theme.projectboxshadow};

	@media ${device.tabletL} {
		flex-direction: column;
		height: fit-content;
	}
`;

export const ImgWrapper = styled.div`
	max-width: 500px;
`;

export const ProjectImg = styled.img`
	aspect-ratio: 16 / 9;
	object-fit: cover;
	width: 100%;
	height: 100%;
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 3rem;
	max-width: 500px;
	@media ${device.tabletL} {
		min-height: 300px;
	}
`;

export const ProjectTitle = styled.h3`
	font-weight: 500;
	margin: 0;
	padding: 0;
	font-size: 3rem;
	@media ${device.mobileL} {
		font-size: 2.75rem;
	}
`;

export const ProjectText = styled.p`
	font-family: 'Inter', sans-serif;
	font-size: 2.1rem;
	margin-bottom: auto;
`;

export const ProjectLink = styled.a`
	font-size: 2.5rem;
	font-weight: 400;
	color: ${(props) => props.theme.projectlink};
	text-decoration: ${(props) => props.theme.projectunderline};
`;

export const ProjectLinkWrapper = styled.div``;

export const ProjectSubLink = styled.a`
	font-size: 2rem;
	text-align: center;
	text-decoration: none;
	transition: 0.2s;
	&:visited,
	&:link {
		color: ${(props) => props.theme.whitecolor};
	}
	&:hover {
		transform: scale(1.05);
		cursor: pointer;
		color: ${(props) => props.theme.footercolor};
		text-decoration: ${(props) => props.theme.footerunderline};
	}
`;
