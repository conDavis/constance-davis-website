import styled from "styled-components";

/* About Me */

export const AboutMeContainer = styled.div`
  display: flex;
  height: ${window.screen.availHeight}px;
`;

export const AboutMeSideBar = styled.div`
  flex: 1;
  background-color: #f1f6f6;
  text-align: center;
`;

export const AboutMeContent = styled.div`
  flex: 3;
  padding-left: 4%;
  padding-top: 6%;
  padding-right: 5%;
`;

export const SideBarImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  padding-top: 15%;
`;

export const AboutMeHeading = styled.h1`
  &:after {
    display: inline-block;
    content: "";
    height: 1px;
    background: #487268;
    position: absolute;
    width: 100%;
    top: 50%;
    margin-top: -2px;
    margin-left: 10px;
  }
`;

/* Art */

export const ArtContainer = styled.div`
  height: ${window.screen.availHeight}px;
  display: flex;
`;

export const ArtContent = styled.div`
  height: 100%;
  width: 80%;
  background-color: #f3f9f4;
  margin: 0 auto;
  text-align: center;
`;

export const PieceContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const RandomPiece = styled.img`
  max-width: 65%;
  max-height: 55%;
`;

export const ArtButton = styled.button`
  background-color: #f1d5e3;
  color: #293d3d;
  border: none;
  padding: 4px 4px 4px 4px;
  margin: 4px 4px 4px 4px;
  font-size: 16px;
`;

/* Resume */

export const ResumeIframe = styled.iframe`
  flex: 1;
  overflow: hidden;
  height: ${window.screen.availHeight}px;
`;

export const ResumeContainer = styled.div`
  display: flex;
`;

/* Contact */

export const ContactList = styled.ul`
  list-style-type: none;
  padding-left: 0 !important;
`;

export const ContactIcon = styled.img`
  width: 30px;
`;
