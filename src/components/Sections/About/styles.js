import styled from 'styled-components';
import { device } from '../../../data/devices';

export const AboutSection = styled.section`
	padding-top: 10rem;
	padding-bottom: 20rem;
	height: fit-content;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	@media ${device.tabletL} {
		padding: 5rem 1.5rem 10rem;
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
	margin-top: 12rem;
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	flex-direction: column;
	align-items: center;
	> h2 {
		margin: 5rem 0;
	}
	@media ${device.tabletL} {
		margin-top: 0;
	}
`;

export const AboutSkillsContainer = styled.div`
	display: flex;
	gap: 5rem;
	@media ${device.tabletL} {
		flex-direction: column;
		text-align: center;
	}
`;

export const AboutSkillsWrapper = styled.div`
	padding-left: 15rem;
	@media ${device.tabletL} {
		padding-left: 0;
	}
`;

export const AboutSkillsText = styled.p`
	font-size: 2.6rem;
	line-height: 1.5em;
	letter-spacing: 0.06em;
	margin: 0;
`;
