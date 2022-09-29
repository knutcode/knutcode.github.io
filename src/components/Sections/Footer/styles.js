import styled from 'styled-components';

export const StyledFooter = styled.footer`
	padding: 3rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	color: #f0f0f0;
	background-color: ${(props) => props.theme.neutral};
	> * {
		margin: 3px;
	}
`;

export const FooterText = styled.p`
	padding-bottom: 6px;
`;

export const FooterLink = styled.a`
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
