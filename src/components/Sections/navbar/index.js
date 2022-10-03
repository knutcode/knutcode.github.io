import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { StyledNav, Logo, NavList, NavListItem, StyledHeader, NavToggle } from './styles';

export const Navbar = () => {
	const { t } = useTranslation('navbar');

	const [active, setActive] = useState(false);

	const menuToggle = () => {
		setActive(!active);
	};

	const menu = useRef(null);

	const closeMenu = (e) => {
		if (menu.current && active && !menu.current.contains(e.target)) {
			setActive(false);
		}
	};

	document.addEventListener('mousedown', closeMenu);

	return (
		<StyledHeader ref={menu}>
			<StyledNav>
				<Logo>
					{`<`}
					<Link
						to="hero"
						spy={true}
						smooth={true}
						offset={-80}
						duration={700}
						onClick={menuToggle}
					>
						<span>{t('logo')}</span>
					</Link>
					{`/>`}
				</Logo>
				<NavList active={active}>
					<NavListItem
						data-aos="fade-down"
						data-aos-delay="1900"
						data-aos-duration="1250"
					>
						<Link
							to="hero"
							spy={true}
							smooth={true}
							offset={-80}
							duration={700}
							onClick={menuToggle}
						>
							{t('home')}
						</Link>
					</NavListItem>

					<NavListItem
						data-aos="fade-down"
						data-aos-delay="1600"
						data-aos-duration="1250"
					>
						<Link
							to="about"
							spy={true}
							smooth={true}
							offset={-35}
							duration={700}
							onClick={menuToggle}
						>
							{t('about')}
						</Link>
					</NavListItem>

					<NavListItem
						data-aos="fade-down"
						data-aos-delay="1300"
						data-aos-duration="1250"
					>
						<Link
							to="projects"
							spy={true}
							smooth={true}
							offset={-28}
							duration={700}
							onClick={menuToggle}
						>
							{t('projects')}
						</Link>
					</NavListItem>

					<NavListItem
						data-aos="fade-down"
						data-aos-delay="1000"
						data-aos-duration="1250"
					>
						<Link
							to="contact"
							spy={true}
							smooth={true}
							offset={-5}
							duration={700}
							onClick={menuToggle}
						>
							{t('contact')}
						</Link>
					</NavListItem>
				</NavList>
				<NavToggle
					active={active}
					onClick={menuToggle}
				>
					<span className="lines line--1"></span>
					<span className="lines line--2"></span>
					<span className="lines line--3"></span>
				</NavToggle>
			</StyledNav>
		</StyledHeader>
	);
};

export default Navbar;
