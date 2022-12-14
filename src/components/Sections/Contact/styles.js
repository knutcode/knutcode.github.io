import styled from 'styled-components';
import { device } from '../../../data/devices';

export const ContactSection = styled.section`
	height: 85vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const ContactContainer = styled.div`
	display: flex;
	max-width: 800px;
`;

export const ContactTextWrapper = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding-right: 1.5rem;
	font-size: 2rem;
	text-align: left;
	position: relative;

	> * {
		margin: 10px 15px 10px 150px;
	}
	&:last-child {
		border-left: 1px solid gray;
		padding-left: 1.5rem;
	}
	&:last-child > * {
		margin-inline: 0;
	}

	@media ${device.tabletL} {
		width: 100%;

		&:first-child {
			display: none;
		}
		&:last-child {
			border: none;
			padding-inline: 0;
		}
	}
`;

export const ContactLink = styled.a`
	cursor: pointer;
	padding-inline: 10px;
	text-decoration: none;
	transition: 0.2s;
	-webkit-tap-highlight-color: transparent;
	white-space: nowrap;
	position: relative;

	&:visited,
	&:link {
		color: ${(props) => props.theme.color};
	}
	&:active,
	&:hover {
		transform: translate(10px, 0);
		color: ${(props) => props.theme.contactcolor};
		text-decoration: ${(props) => props.theme.contactunderline};
	}
	> * {
		margin-right: 8px;
		vertical-align: -3px;
	}

	& p {
	}

	@media ${device.mobileL} {
		padding-inline: 0;
		margin-inline: 0;
	}
`;

export const PhoneCopied = styled.p`
	color: ${(props) => props.theme.neutral};
	background-color: ${(props) => props.theme.color};
	padding: 0 0.2em 0.1em 0.3em;
	position: absolute;
	top: -2rem;
	left: 15rem;
	opacity: 0;
	transition: 0.15s;
	&.active {
		opacity: 1;
	}
`;
