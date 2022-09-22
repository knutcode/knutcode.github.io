import { HeroSection, HeroTitle, HeroSmall, HeroText, HeroScroll } from './styles.js';
import { hero_greeting, hero_greeting_short, hero_small, hero_small_short, hero_text } from '../../../language/en';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
	// conditionally render based on viewport - https://stackoverflow.com/a/60811141
	const [isDesktop, setDesktop] = useState(window.innerWidth > 600);

	const updateMedia = () => {
		setDesktop(window.innerWidth > 600);
	};

	useEffect(() => {
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	});

	//animations
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
		<HeroSection id="hero">
			<HeroTitle data-aos="fade-right">{isDesktop ? `${hero_greeting}` : `${hero_greeting_short}`}</HeroTitle>

			<HeroSmall
				data-aos="fade-up"
				data-aos-delay="300"
			>
				{isDesktop ? `${hero_small}` : `${hero_small_short}`}
			</HeroSmall>

			<HeroText
				data-aos="fade-up"
				data-aos-delay="800"
			>
				{hero_text.leading}
				<span className="highlight">{hero_text.span}</span>
				{hero_text.ending}
			</HeroText>
			<HeroScroll />
		</HeroSection>
	);
};

export default Hero;
