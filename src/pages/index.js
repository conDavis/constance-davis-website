import React from "react";
import {
  AboutMeContainer,
  AboutMeSideBar,
  AboutMeContent,
  SideBarImg,
  AboutMeHeading
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <AboutMeHeading>How I work: Motivation and Care</AboutMeHeading>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </AboutMeContent>
    </AboutMeContainer>
  );
};

export default Index;
