import styled from "styled-components";

export const ProjectsSection = styled.section`
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProjectContainer = styled.div`
  display: flex;
  height: 250px;
  margin-bottom: 5rem;
  background-color: #202020e4;
`;

export const ImgWrapper = styled.div`
  max-width: 350px;
  background-color: gray;
`;

export const ProjectImg = styled.img`
  aspect-ratio: 16 / 9;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const TextWrapper = styled.div`
  margin-left: 4.5rem;
  max-width: 350px;
  align-self: center;
`;

export const ProjectTitle = styled.h3.attrs({
  className: "highlight",
})`
  font-weight: 500;
  margin: 0;
  padding: 0;
  font-size: 2.5rem;
`;

export const ProjectText = styled.p`
  font-size: 2rem;
`;

export const ProjectLink = styled.a`
  font-size: 1.8rem;
  text-decoration: underline #f0f0f0 solid;
`;
