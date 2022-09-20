import { FooterLink, FooterText, StyledFooter } from './styles';
import { footer_link, footer_text } from '../../../language/en';

const Footer = () => {
	return (
		<StyledFooter>
			<FooterText>{footer_text}</FooterText>

			<FooterLink
				href={footer_link.href}
				target="_blank"
			>
				{footer_link.text}
			</FooterLink>
		</StyledFooter>
	);
};

export default Footer;
