import { ImgWrapper } from '../../global/styles';
import { AboutContainer, AboutImg, AboutSection, AboutText, AboutTextWrapper } from './styles';
import { about_title, about_img, about_text } from '../../../language/en';

const About = () => {
	return (
		<AboutSection id="about">
			<h2 className="section-title">{about_title}</h2>
			<AboutContainer>
				<AboutTextWrapper
					data-aos="fade-right"
					data-aos-anchor-placement="center-bottom"
				>
					<AboutText>{about_text.paragraph1}</AboutText>
					<AboutText>{about_text.paragraph2}</AboutText>
				</AboutTextWrapper>
				<ImgWrapper
					data-aos="fade-left"
					data-aos-anchor-placement="center-bottom"
				>
					<AboutImg src={about_img} />
				</ImgWrapper>
			</AboutContainer>
		</AboutSection>
	);
};

export default About;
