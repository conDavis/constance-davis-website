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
          Northeastern University. I have an interest in FullStack Development
          and I practice design in both Front-End and Back-End Development. I
          enjoy exploring design patterns and principles, in code, and in
          self-expression.
        </p>
        <AboutMeHeading>How I work: Motivation and Care</AboutMeHeading>
        <p>
          Whenever I’m making something, I remind myself of my motivation
          for doing so, as well as reminding myself to be mindful and act with
          forethought.
          <br />
          <br />
          <b>Motivation</b>
          <br />
          What problem or need am I addressing?
          <br />
          What do I want the end user to experience?
          <br />
          What led me to this project in the first place?
          <br />
          <br />
          <b>Care</b>
          <br />
          As I move through the process of design and implementation, I try to
          do justice to this motivation through care, through working with
          intention, honesty, effort and curiosity.
        </p>
      </AboutMeContent>
    </AboutMeContainer>
  );
};

export default Index;
