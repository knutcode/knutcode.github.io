import styled from "styled-components";
import { device } from "./ScreenSize";

export const ContactSection = styled.section`
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  &:first-child > * {
    transition: 0.5s;
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
  @media ${device.mobileL} {
    padding-inline: 0;
    &:last-child {
      padding-left: 0;
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

  @media ${device.mobileL} {
    padding-inline: 0;
    margin-inline: 0;
    white-space: nowrap;
  }
`;
