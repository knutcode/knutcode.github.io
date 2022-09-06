import styled from "styled-components";

//***************************//
//          HEADER           //
//***************************//

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  font-size: 2.25rem;
  padding-inline: 5rem;
  height: 70px;
  display: flex;
  align-items: center;
  /* background-color: #141415e0; */
  background-color: #202020e4;
  box-shadow: 0px -10px 25px black;
`;

/**
 * **Logo**
 * ~ Styled text
 */
export const Logo = styled.p`
  margin-right: auto;
  color: #f0f0f0;
  user-select: none;
  cursor: pointer;
  > * {
    color: #79c1ff;
  }
`;

/**
 * **NavList**
 * ~ Styled unordered-list
 */
export const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

/**
 * **NavListItem**
 * ~ Styled list-item
 */
export const NavListItem = styled.li`
  margin-left: 2em;
  cursor: pointer;
  && :hover,
  .active {
    color: #79c1ff;
    border-bottom: 2px solid #f0f0f0;
  }
`;
