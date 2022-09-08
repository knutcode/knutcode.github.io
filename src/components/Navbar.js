import { StyledNav, Logo, NavList, NavListItem } from "../components-styled/NavbarStyles";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <header>
      <StyledNav>
        <Logo>
          {`<`}
          <Link to="hero" spy={true} smooth={true} offset={-80} duration={500}>
            <span>portfolio</span>
          </Link>
          {`/>`}
        </Logo>
        <NavList>
          <NavListItem>
            <Link to="hero" spy={true} smooth={true} offset={-80} duration={500}>
              Home
            </Link>
          </NavListItem>

          <NavListItem>
            <Link to="about" spy={true} smooth={true} offset={-30} duration={500}>
              About
            </Link>
          </NavListItem>

          <NavListItem>
            <Link to="projects" spy={true} smooth={true} offset={-29} duration={500}>
              Projects
            </Link>
          </NavListItem>

          <NavListItem>
            <Link to="contact" spy={true} smooth={true} offset={-5} duration={500}>
              Contact
            </Link>
          </NavListItem>
        </NavList>
      </StyledNav>
    </header>
  );
};

export default Navbar;
