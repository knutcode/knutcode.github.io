import styled from "styled-components";
import { device } from "./A-MediaQueries";

export const AboutSection = styled.section`
  padding-top: 10rem;
  height: 80vh;
  margin-bottom: 10em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media ${device.tabletL} {
    height: fit-content;
    padding-top: 5rem;
    padding-inline: 1.5rem;
  }
`;

export const AboutContainer = styled.div`
  display: flex;

  @media ${device.tabletL} {
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 450px;
  margin-right: 10rem;
  > p {
    font-family: "Inter", sans-serif;
    font-size: 2.1rem;
    line-height: 1.4em;
    letter-spacing: 0.06em;
    text-align: right;
  }

  @media ${device.tabletL} {
    padding-top: 2rem;
    margin-right: 0;
    order: 1;
    > p {
      text-align: left;
    }
  }
`;

export const AboutImg = styled.img`
  aspect-ratio: 4 / 3;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
