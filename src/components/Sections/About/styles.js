import styled from 'styled-components';
import { device } from '../../../data/devices';

export const AboutSection = styled.section`
	padding-top: 10rem;
	margin-bottom: 10em;
	height: fit-content;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	@media ${device.tabletL} {
		/* height: fit-content; */
		padding-top: 5rem;
		padding-inline: 1.5rem;
	}
`;

export const AboutContainer = styled.div`
	display: flex;
	margin-bottom: 8rem;

	@media ${device.tabletL} {
		flex-direction: column;
		align-items: center;
	}
`;

export const AboutTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 450px;
	margin-right: 5rem;

	@media ${device.tabletL} {
		padding-top: 2rem;
		margin-right: 0;
		order: 1;
	}
`;

export const AboutImg = styled.img`
	aspect-ratio: 4 / 3;
	object-fit: cover;
	width: 100%;
	height: 100%;

	@media ${device.tabletL} {
		padding-inline: 2rem;
	}
`;

export const AboutText = styled.p`
	font-family: 'Inter', sans-serif;
	font-size: 2.1rem;
	line-height: 1.4em;
	letter-spacing: 0.06em;
	text-align: right;
	@media ${device.tabletL} {
		text-align: left;
	}
	@media ${device.mobileL} {
		text-align: center;
		font-size: 2rem;
	}
`;

export const AboutSkills = styled.div`
	display: flex;
	> h2 {
		margin-top: 10rem;
	}

	@media ${device.tabletL} {
		flex-direction: column;
		align-items: center;
		> h2 {
			margin-top: 7rem;
		}
	}
`;

export const AboutSkillsWrapper = styled.div`
	min-width: 350px;
`;

export const AboutSkillsText = styled.p`
	font-family: 'Inter', sans-serif;
	font-size: 2.1rem;
	line-height: 1.4em;
	letter-spacing: 0.06em;
	margin: 0;
`;
