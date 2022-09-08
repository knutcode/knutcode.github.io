import styled from "styled-components";

export const AboutSection = styled.section`
  padding-top: 10rem;
  height: 80vh;
  margin-bottom: 10em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const AboutContainer = styled.div`
  display: flex;
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
`;

export const AboutImg = styled.img`
  aspect-ratio: 4 / 3;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
