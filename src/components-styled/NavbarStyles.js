import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  font-size: 2.25rem;
  padding-inline: 5rem;
  height: 70px;
  background-color: #202020e4;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;

export const Logo = styled.p`
  margin-right: auto;
  user-select: none;
  cursor: pointer;
  > * {
    color: #79c1ff;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

export const NavListItem = styled.li`
  margin-left: 2em;
  cursor: pointer;
  && :hover,
  .active {
    color: #79c1ff;
    border-bottom: 2px solid #f0f0f0;
  }
`;
