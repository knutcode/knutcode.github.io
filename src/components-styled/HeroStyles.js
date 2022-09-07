import styled from "styled-components";

export const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5%;
`;

export const HeroTitle = styled.h1.attrs({
  className: "highlight",
})`
  margin: 2px 0;
  font-size: 8rem;
`;

export const HeroSmall = styled.small`
  font-size: 2rem;
`;

export const HeroText = styled.p`
  font-size: 2.5rem;
  max-width: 55rem;
`;
