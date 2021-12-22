import styled from "styled-components";
import ComponentConstants from "../constants/componentConstants"
/**
 * Gets the height for the resume iframe by calculating screen height and subtracting nav height.
 * @returns {number}
 */
const getResumeHeight = () => {
  return window.screen.availHeight - ComponentConstants.NAV_HEIGHT;
};

export const ResumeIframe = styled.iframe`
  flex: 1;
  overflow: hidden;
  height: ${getResumeHeight()}px;
`;

export const ResumeContainer = styled.div`
  display: flex;
`;
