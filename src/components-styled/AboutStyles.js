import styled from "styled-components";

export const AboutSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const AboutContainer = styled.div`
  display: flex;
`;

export const AboutTextWrapper = styled.div`
  max-width: 450px;
  margin-right: 10rem;
  > p {
    font-size: 2rem;
    line-height: 1.4em;
    letter-spacing: 0.075em;
  }
`;

export const AboutImg = styled.img`
  aspect-ratio: 4 / 3;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
