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
  padding-top: 5%;
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

export const ContactContainer = styled.div`
  
  text-align: center;
  background-color: #EAF4CE;
  width: 30%;
  height: 100%;
  margin: 6% auto;
  padding: 16px 32px 32px 32px;
`;

export const ContactHeader = styled.h1`
  float: right;
  margin-left: -12px;
`;



export const ContactLogo = styled.img`
  width: 100px;
  margin-top: 1em;
  float: left;
`;

export const ContactList = styled.ul`
  list-style-type: none;
  display: inline-block;
  text-align: left;
  margin-left: 0;
  padding-left: 1em;
  text-indent: -1em;
  font-size: 25px;
  
`;

export const ContactLi = styled.li`
  padding-bottom: 8px;
`;

export const ContactIcon = styled.img`
  width: 40px;
  padding-bottom: 4px;
  padding-right: 16px;
  vertical-align: middle;
`;


/* Software */

export const SoftwareContainer = styled.div`
  padding: 0 1em 0 1em;
`;
