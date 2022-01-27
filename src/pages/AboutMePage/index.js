import React from "react";
import {
  AboutMeContainer,
  AboutMeSideBar,
  AboutMeContent,
  SideBarImg,
  AboutMeHeading,
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
        <AboutMeHeading>What I do</AboutMeHeading>
        <p>
          I'm a software developer pursuing a B.S. in Computer Science at
          Northeastern University. I have an interest in full stack development
          and I work in both front-end and back-end development. I
          enjoy exploring design patterns and principles, in code, and in
          self-expression.
        </p>
        <AboutMeHeading>How I work: Forethought and Curiosity</AboutMeHeading>
        <p>
          I try to work as mindfully as possible. In order to ensure this,
          whenever I make something :{" "}
        </p>

        <p>
          I make an effort to honor my motivation for doing so through acting
          with intention, and with reusability and readability in mind. I want
          to make code that can and will stick around.
          <br />
          <b>(Forethought)</b>
        </p>
        <p>
          I make an effort to honor myself by approaching the task with
          curiosity and humility. This allows me to take roadblocks in stride,
          and savor opportunities to learn and absorb information which will
          help me build better next time.
          <br />
          <b>(Curiosity)</b>
        </p>
      </AboutMeContent>
    </AboutMeContainer>
  );
};

export default Index;
