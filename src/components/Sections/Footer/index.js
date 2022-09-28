import { useTranslation } from 'react-i18next';
import { FooterLink, FooterText, StyledFooter } from './styles';

const Footer = () => {
	const { t } = useTranslation('footer');

	return (
		<StyledFooter>
			<FooterText>{t('text')}</FooterText>

			<FooterLink
				href={t('link_href')}
				target="_blank"
			>
				{t('link_text')}
			</FooterLink>
		</StyledFooter>
	);
};

export default Footer;
