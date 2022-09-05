import { StyledNav, Logo, NavList, NavListItem } from "../components-styled/NavbarStyles";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <header>
      <StyledNav>
        <Logo>
          {`<`}
          <Link to="hero" spy={true} smooth={true} offset={-200} duration={500} activeClass="active">
            <span>Portfolio</span>
          </Link>
          {`/>`}
        </Logo>

        <NavList>
          <NavListItem>
            <Link to="hero" spy={true} smooth={true} offset={0} duration={500} activeClass="active">
              Home
            </Link>
          </NavListItem>

          <NavListItem>
            <Link to="about" spy={true} smooth={true} offset={0} duration={500} activeClass="active">
              About
            </Link>
          </NavListItem>

          <NavListItem>
            <Link to="projects" spy={true} smooth={true} offset={0} duration={500} activeClass="active">
              Projects
            </Link>
          </NavListItem>

          <NavListItem>
            <Link to="contact" spy={true} smooth={true} offset={0} duration={500} activeClass="active">
              Contact
            </Link>
          </NavListItem>
        </NavList>
      </StyledNav>
    </header>
  );
};

export default Navbar;
