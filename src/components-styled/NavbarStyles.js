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
  background-color: rgba(10, 10, 10, 0.5);
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
  margin-right: 2em;
  cursor: pointer;
  > .active {
    color: #f0f0f0;
    text-decoration: underline;
  }
  && :hover {
    color: #f0f0f0;
  }
`;
