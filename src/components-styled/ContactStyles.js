import styled from "styled-components";

export const ContactSection = styled.section`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContactContainer = styled.div`
  display: flex;
`;

export const ContactTextWrapper = styled.div`
  width: 350px;
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
  }
  &:last-child > * {
    margin-inline: 0;
  }
`;

export const ContactLink = styled.a`
  padding-inline: 10px;
  text-decoration: none;
  color: #f0f0f0;
  transition: 0.2s;
  &:active,
  &:visited,
  &:link {
    color: #f0f0f0;
  }
  &:hover {
    cursor: pointer;
    transform: translate(10px, 0);
    color: #79c1ff;
    text-decoration: underline #f0f0f0 1px;
  }
  > * {
    padding-right: 8px;
  }
`;
