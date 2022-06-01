import React from "react";
import {
  AboutMeContainer,
  AboutMeSideBar,
  AboutMeContent,
  SideBarImg,
  AboutMeHeading,
  CenterImg,
} from "./AboutMeElements";
import selfPortrait from "../../assets/SelfPotrait.jpg";

const Index = () => {
  return (
    <AboutMeContainer>
      <AboutMeSideBar>
        <SideBarImg src={selfPortrait} />
        <p style={{ fontSize: "17px" }}>Self Portrait 2020</p>
      </AboutMeSideBar>
      <AboutMeContent>
        <CenterImg src={selfPortrait} />
        <AboutMeHeading>What I do</AboutMeHeading>
        <p>
          I'm a software developer pursuing a B.S. in Computer Science at
          Northeastern University. I have an interest in full stack development
          and I work in both front-end and back-end development. I
          enjoy exploring design patterns and principles in code, as well as in
          self-expression.
        </p>
        <AboutMeHeading>How I work: Forethought and Curiosity</AboutMeHeading>
        <p>
          I try to work as mindfully as possible. Whenever I make something :{" "}
        </p>

        <p>
          I remind myself often to revisit my intentions. I work with with reusability and readability in mind. I strive to create code that
          will endure through time. I want the user, be they developer or customer, to feel their needs were intuited.
          <br />
        </p>
        <p>
          I approach the task at hand with
          curiosity and humility. This allows me to take roadblocks in stride,
          and savor opportunities to learn and absorb information which will
          help me build better next time.
          <br />
        </p>
      </AboutMeContent>
    </AboutMeContainer>
  );
};

export default Index;
