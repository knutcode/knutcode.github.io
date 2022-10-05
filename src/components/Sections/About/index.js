import { useTranslation } from 'react-i18next';
import { ImgWrapper } from '../../global/styles';
import {
	AboutContainer,
	AboutImg,
	AboutSection,
	AboutSkills,
	AboutSkillsContainer,
	AboutSkillsText,
	AboutSkillsWrapper,
	AboutText,
	AboutTextWrapper,
} from './styles';
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

			<AboutSkills>
				<h2 className="section-title">{t('title_skills')}</h2>
				<AboutSkillsContainer>
					<AboutSkillsWrapper
						data-aos="fade-right"
						data-aos-anchor-placement="bottom-bottom"
					>
						<AboutSkillsText>
							React <br />
							JavaScript <br />
							CSS <br />
							HTML5 <br />
						</AboutSkillsText>
					</AboutSkillsWrapper>
					<AboutSkillsWrapper
						data-aos="fade-left"
						data-aos-anchor-placement="bottom-bottom"
					>
						<AboutSkillsText>
							GitHub <br />
							Figma <br />
							Styled Components <br />
							VSCode <br />
						</AboutSkillsText>
					</AboutSkillsWrapper>
				</AboutSkillsContainer>
			</AboutSkills>
		</AboutSection>
	);
};

export default About;
