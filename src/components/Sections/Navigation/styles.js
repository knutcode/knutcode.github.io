import styled from 'styled-components';
import { device } from '../../../data/devices';

export const StyledHeader = styled.header`
	position: fixed;
	top: 0;
	width: 100%;
	font-size: 2.25rem;
	padding-inline: 5rem;
	height: 70px;
	background-color: #202020e4;
	z-index: 1;
	@media ${device.mobileL} {
		padding: 0 3rem 0 1.75rem;
	}
`;

export const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	height: 100%;
	max-width: 1920px;
	margin: 0 auto;
`;

export const Logo = styled.p`
	margin-right: auto;
	user-select: none;
	cursor: pointer;
	> * {
		color: #79c1ff;
	}
`;

export const NavList = styled.ul`
	list-style: none;
	display: flex;
	transition: 0.6s;

	@media ${device.tabletL} {
		position: fixed;
		top: 47px;
		right: 0;
		width: 50%;
		height: 100vh;
		background-color: #202020e4;
		flex-direction: column;
		transform: translateX(${(props) => (props.active ? '0' : '100%')});
	}
`;

export const NavListItem = styled.li`
	margin-left: 2em;
	cursor: pointer;
	&& :hover,
	.active {
		color: #79c1ff;
		border-bottom: 2px solid #f0f0f0;
	}
	@media ${device.tabletL} {
		margin: 1em;
		margin-left: 0;
		text-align: left;
	}
`;

export const NavToggle = styled.div`
	position: relative;
	width: 3rem;
	height: 3.5rem;
	cursor: pointer;
	align-self: center;
	justify-self: center;
	display: none;

	.lines {
		position: absolute;
		background: #f0f0f0;
		border-radius: 5px;
		transition: 0.4s;
		height: 3px;
		width: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.line--1 {
		transform: translate(-50%, ${(props) => (props.active ? '0' : '10px')})
			rotate(${(props) => (props.active ? '-45deg' : '0')});
	}

	.line--2 {
		width: ${(props) => (props.active ? '0%' : '')};
	}

	.line--3 {
		transform: translate(-50%, ${(props) => (props.active ? '0' : '-13px')})
			rotate(${(props) => (props.active ? '45deg' : '0')});
	}

	@media ${device.tabletL} {
		display: block;
	}
`;
