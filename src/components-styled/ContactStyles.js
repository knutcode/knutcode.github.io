import styled from "styled-components";
import { device } from "./A-MediaQuery";

export const ContactSection = styled.section`
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${device.tabletL} {
    height: fit-content;
    h2 {
      margin-bottom: 5rem;
    }
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  max-width: 800px;
`;

export const ContactTextWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-right: 1.5rem;
  font-size: 2rem;
  text-align: right;
  > * {
    margin: 10px 15px 10px 150px;
  }
  &:last-child {
    border-left: 1px solid gray;
    padding-left: 1.5rem;
    text-align: left;
    flex-grow: 3;
  }
  &:last-child > * {
    margin-inline: 0;
  }

  @media ${device.tabletL} {
    width: 100%;

    &:first-child {
      display: none;
    }
    &:last-child {
      border: none;
      padding: none;
    }
  }
`;

export const ContactLink = styled.a`
  cursor: pointer;
  padding-inline: 10px;
  text-decoration: none;
  color: #f0f0f0;
  transition: 0.2s;

  &:visited,
  &:link {
    color: #f0f0f0;
  }
  &:active,
  &:hover {
    transform: translate(10px, 0);
    color: #79c1ff;
    text-decoration: underline #f0f0f0 1px;
  }
  > * {
    padding-right: 8px;
  }
`;
