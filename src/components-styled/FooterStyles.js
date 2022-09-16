import styled from 'styled-components';

export const StyledFooter = styled.footer`
	padding: 3rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	background-color: #202020e4;
	> * {
		margin: 3px;
	}
`;

export const FooterText = styled.p`
	padding-bottom: 6px;
`;

export const FooterLink = styled.a`
	text-align: center;
	color: #f0f0f0;
	text-decoration: none;
	transition: 0.2s;
	&:visited,
	&:link {
		color: #f0f0f0;
	}
	&:hover {
		transform: scale(1.05);
		cursor: pointer;
		color: #79c1ff;
		text-decoration: underline #f0f0f0 1px;
	}
`;
