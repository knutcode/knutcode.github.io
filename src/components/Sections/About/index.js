import { useTranslation } from 'react-i18next';
import { ImgWrapper } from '../../global/styles';
import { AboutContainer, AboutImg, AboutSection, AboutText, AboutTextWrapper } from './styles';
import Portrait from '../../../img/AboutPortrait.jpg';

const About = () => {
	const { t } = useTranslation('about');

	return (
		<AboutSection id="about">
			<h2 className="section-title">{t('title')}</h2>
			<AboutContainer>
				<AboutTextWrapper
					data-aos="fade-right"
					data-aos-anchor-placement="center-bottom"
				>
					<AboutText>{t('introduction_1')}</AboutText>
					<AboutText>{t('introduction_2')}</AboutText>
				</AboutTextWrapper>
				<ImgWrapper
					data-aos="fade-left"
					data-aos-anchor-placement="center-bottom"
				>
					<AboutImg src={Portrait} />
				</ImgWrapper>
			</AboutContainer>
		</AboutSection>
	);
};

export default About;
