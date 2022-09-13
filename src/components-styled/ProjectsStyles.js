import styled from "styled-components";
import { device } from "./A-MediaQueries";

export const ProjectsSection = styled.section`
  padding-top: 5rem;
  padding-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProjectContainer = styled.div`
  display: flex;
  height: 350px;
  margin-bottom: 5rem;
  background-color: #202020e4;
  @media ${device.tabletL} {
    flex-direction: column;
    height: fit-content;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 500px;
`;

export const ProjectImg = styled.img`
  aspect-ratio: 16 / 9;
  object-fit: cover;
  width: 100%;
  height: 100%;
  @media ${device.tabletL} {
    object-position: top;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  max-width: 500px;
  @media ${device.tabletL} {
    height: 300px;
  }
`;

export const ProjectTitle = styled.h3`
  font-weight: 500;
  margin: 0;
  padding: 0;
  font-size: 3rem;
  @media ${device.mobileL} {
    font-size: 2.75rem;
  }
`;

export const ProjectText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 2.1rem;
  margin-bottom: auto;
`;

export const ProjectLink = styled.a`
  font-size: 2.5rem;
  font-weight: 400;
  text-decoration: underline #f0f0f0 2px;
  @media ${device.tabletL} {
  }
`;
