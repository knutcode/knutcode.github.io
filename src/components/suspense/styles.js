import styled from 'styled-components';
import { device } from '../../data/devices';

export const SkeletonScreen = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: ${(props) => props.theme.background};
	color: ${(props) => props.theme.color};
	text-shadow: ${(props) => props.theme.textshadow};
`;

export const SkeletonHeader = styled.div`
	height: 70px;
	width: 100vw;
	background-color: ${(props) => props.theme.neutral};
	position: fixed;
	top: 0;
	font-size: 2.25rem;
	padding-inline: 5rem;
	display: flex;
	align-items: center;
	@media ${device.mobileL} {
		padding: 0 3rem 0 1.75rem;
	}
`;

export const SkeletonLogo = styled.p`
	color: ${(props) => props.theme.color};
	text-shadow: ${(props) => props.theme.textshadow};
	margin-right: auto;
	user-select: none;
	cursor: pointer;
	> * {
		color: ${(props) => props.theme.navlogo};
	}
`;
