import styled from "styled-components";

/* Elements for About Me Page.*/

export const AboutMeContainer = styled.div`
  display: flex;
  height: 100%;
  @media (max-width: 768px) {
    padding-top: 24px;
    padding-bottom: 24px;
    overflow-y: auto;
  }
`;

export const AboutMeSideBar = styled.div`
  flex: 1;
  padding-top: 3%;
  background-color: #f1f6f6;
  text-align: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const AboutMeContent = styled.div`
  flex: 3;
  padding-left: 4%;
  padding-top: 4%;
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

  @media (max-width: 768px) {
    &:after {
      display: none;
    }
  }
`;