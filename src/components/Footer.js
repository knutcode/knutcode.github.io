import { FooterLink, FooterText, StyledFooter } from '../components-styled/FooterStyles';

const Footer = () => {
	return (
		<StyledFooter>
			<FooterText>KNUT C - 2022</FooterText>

			<FooterLink
				href="https://github.com/knutcode/portfolio"
				target="_blank"
			>
				This page is open-source on GitHub
			</FooterLink>
		</StyledFooter>
	);
};

export default Footer;
