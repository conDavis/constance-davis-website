import React from "react";
import {
  AboutMeContainer,
  AboutMeSideBar,
  AboutMeContent,
  SideBarImg,
  AboutMeHeading,
} from "./PageElements";
import selfPortrait from "../assets/SelfPotrait.jpg";
const Index = () => {
  return (
    <AboutMeContainer>
      <AboutMeSideBar>
        <SideBarImg src={selfPortrait} />
        <p>Self Portrait 2020</p>
      </AboutMeSideBar>
      <AboutMeContent>
        <AboutMeHeading>What I do</AboutMeHeading>
        <AboutMeHeading>How I work: Motivation and Care</AboutMeHeading>
      </AboutMeContent>
    </AboutMeContainer>
  );
};

export default Index;
