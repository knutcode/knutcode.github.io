import styled from "styled-components";

//***************************//
//           HERO            //
//***************************//

/**
 * **Hero**
 * ~ Styled section
 */
export const HeroSection = styled.section`
  height: 100vh;
  padding-top: 20rem;
`;

/**
 * **HeroTitle**
 * ~ Styled h1
 */
export const HeroTitle = styled.h1.attrs({
  className: "highlight",
})`
  margin: 2px 0;
  font-size: 6rem;
`;

/**
 * **HeroSmall**
 * ~ Styled text
 */
export const HeroSmall = styled.small`
  font-size: 1.8rem;
`;

/**
 * **HeroText**
 * ~ Styled text
 */
export const HeroText = styled.p`
  font-size: 2.8rem;
  max-width: 55rem;
`;
