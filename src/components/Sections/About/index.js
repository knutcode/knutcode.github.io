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
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5, FaGithub, FaFigma, FaPaintBrush } from 'react-icons/fa';
import { SiVisualstudiocode } from 'react-icons/si';
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
					<AboutImg
						src={Portrait}
						alt="Portrait of Knut"
					/>
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
							<FaReact /> React <br />
							<FaJsSquare /> JavaScript <br />
							<FaCss3Alt /> CSS <br />
							<FaHtml5 /> HTML5 <br />
						</AboutSkillsText>
					</AboutSkillsWrapper>
					<AboutSkillsWrapper
						data-aos="fade-left"
						data-aos-anchor-placement="bottom-bottom"
					>
						<AboutSkillsText>
							<FaGithub /> GitHub <br />
							<FaFigma /> Figma <br />
							<FaPaintBrush /> Styled Components <br />
							<SiVisualstudiocode /> VSCode <br />
						</AboutSkillsText>
					</AboutSkillsWrapper>
				</AboutSkillsContainer>
			</AboutSkills>
		</AboutSection>
	);
};

export default About;
