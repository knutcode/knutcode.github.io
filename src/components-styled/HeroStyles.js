import styled from "styled-components";
import { device } from "./A-MediaQueries";

export const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%;
`;

export const HeroTitle = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  margin: 0 0 0 -4px;
  font-size: 10rem;
  @media ${device.tabletL} {
    font-size: 8rem;
  }
`;

export const HeroSmall = styled.small`
  font-size: 2.25rem;
  @media ${device.tabletL} {
    font-size: 1.75rem;
  }
`;

export const HeroText = styled.p`
  font-family: "Inter", sans-serif;
  margin: 15px 0;
  font-size: 3rem;
  max-width: 55rem;
  @media ${device.tabletL} {
    font-size: 2.3rem;
    max-width: 30ch;
  }
`;
