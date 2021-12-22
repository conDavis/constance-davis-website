import styled from "styled-components";

const getResumeHeight = () => {
  return window.screen.height - 76;
};

export const ResumeIframe = styled.iframe`
  flex: 1;
  overflow: hidden;
  height: ${getResumeHeight()}px;
`;

export const ResumeContainer = styled.div`
  display: flex;
`;
