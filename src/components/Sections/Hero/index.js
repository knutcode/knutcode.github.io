import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HeroSection, HeroTitle, HeroSmall, HeroText, HeroScroll } from './styles.js';

const Hero = () => {
	const { t } = useTranslation('hero');

	// conditionally render based on viewport - https://stackoverflow.com/a/60811141
	const [isDesktop, setDesktop] = useState(window.innerWidth > 600);

	const updateMedia = () => {
		setDesktop(window.innerWidth > 600);
	};

	useEffect(() => {
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	});

	return (
		<HeroSection id="hero">
			<HeroTitle data-aos="fade-right">{isDesktop ? `${t('greeting')}` : `${t('greeting_short')}`}</HeroTitle>

			<HeroSmall
				data-aos="fade-up"
				data-aos-delay="300"
			>
				{isDesktop ? `${t('small')}` : `${t('small_short')}`}
			</HeroSmall>

			<HeroText
				data-aos="fade-up"
				data-aos-delay="800"
			>
				{t('text_leading')}
				<span className="highlight">{t('text_span')}</span>
				{t('text_ending')}
			</HeroText>
			<HeroScroll />
		</HeroSection>
	);
};

export default Hero;
