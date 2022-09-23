import styled from 'styled-components';
import { device } from '../../../data/devices';

export const HeroSection = styled.section`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 5%;
	@media ${device.mobileL} {
		padding-left: 0%;
		text-align: center;
	}
`;

export const HeroTitle = styled.h1`
	font-family: 'Inter', sans-serif;
	font-weight: 600;
	margin: 0 0 0 -4px;
	font-size: 10rem;
	@media ${device.tabletL} {
		font-size: 8rem;
	}
	@media ${device.mobileL} {
		text-decoration: underline #79c1ff 3px;
		margin-bottom: 1.75rem;
		font-size: 7.25rem;
	}
	@media ${device.mobileS} {
		font-size: 6.5rem;
	}
`;

export const HeroSmall = styled.small`
	font-size: 2.25rem;
	@media ${device.tabletL} {
		font-size: 1.75rem;
	}
`;

export const HeroText = styled.p`
	font-family: 'Inter', sans-serif;
	margin: 15px 0;
	font-size: 3rem;
	max-width: 30ch;
	@media ${device.tabletL} {
		font-size: 2.3rem;
	}
	@media ${device.mobileL} {
		font-size: 2rem;
		margin: 15px auto;
	}
`;

export const HeroScroll = styled.div`
	opacity: 0;
	position: absolute;
	bottom: 140px;
	left: 50%;
	right: 50%;
	margin-left: -20px;
	background: #f0f0f0;
	animation: animate 4s infinite;
	animation-delay: 3.5s;
	&::before {
		content: '';
		position: absolute;
		width: 20px;
		height: 20px;
		border-bottom: 5px solid #f0f0f0;
		border-right: 5px solid #f0f0f0;
		transform: rotate(45deg);
	}
	@keyframes animate {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(50px);
			opacity: 1;
		}
		100% {
			transform: translateY(100px);
		}
	}
`;
