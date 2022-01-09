import React from "react";
import {
  SoftwareContainer,
  MentorshipContainer,
  ProjectCard,
  SkillsContainer,
} from "./SoftwareElements";
import visionVoiceIcon from "../../assets/visionVoice.png";

const Software = () => {
  /* Skills sections */
  const FEDevSection = () => {
    return (
      <div style={{ flex: 1 }}>
        <h1>Front-End Dev</h1>
        <p> JavaScript | TypeScript | HTML | CSS | React/Redux</p>
      </div>
    );
  };

  const BEDevSection = () => {
    return (
      <div style={{ flex: 1 }}>
        <h1>Back-End Dev</h1>
        <p>Java | Python | C++ | Spring Boot | MySQL</p>
      </div>
    );
  };

  const ToolsSection = () => {
    return (
      <div style={{ flex: 1 }}>
        <h1>Tools</h1>
        <p> Intellij | WebStorm | VSCode | Eclipse | Git</p>
      </div>
    );
  };

  /* Larger (full page width) sections*/
  const MentorshipSection = () => {
    return (
      <MentorshipContainer>
        <h1>Mentorship</h1>
        <img
          src={visionVoiceIcon}
          alt="vision voice icon"
          style={{
            width: "200px",
            float: "left",
            paddingRight: "24px",
          }}
        />
        <p>
          I was mentored as a young woman in S.T.E.M. and switching to the
          mentor role has shown me how the relationship can be an incredible
          learning experience for both parties. Starting September 2021, I have
          been working one-on-one with female Black/AfroX high school students
          to facilitate their learning of foundational computer science, and
          help them to acquire skills in web development. Starting
          January-February 2022 I will begin leading the mentorship program for
          a new cohort of 30 students, mentoring and training mentors.
        </p>
      </MentorshipContainer>
    );
  };

  const ProjectsSection = () => {
    return (
      <div>
        <h1>Projects</h1>
        <br />

        <div style={{ display: "flex" }}>
          <ProjectCard style={{ flex: 1 }}>Pyramid Solitaire</ProjectCard>
          <ProjectCard style={{ flex: 1 }}>Nihilittle Life</ProjectCard>
          <ProjectCard style={{ flex: 1 }}>Programmable Animator</ProjectCard>
        </div>
        <div style={{ display: "flex" }}>
          <ProjectCard style={{ flex: 1 }}>
            Presidential Speech Issue Tracking
          </ProjectCard>
          <ProjectCard style={{ flex: 1 }}>This Website!</ProjectCard>
        </div>
      </div>
    );
  };

  return (
    <SoftwareContainer>
      <SkillsContainer>
        <FEDevSection />
        <BEDevSection />
        <ToolsSection />
      </SkillsContainer>
      <MentorshipSection />
      <ProjectsSection />
    </SoftwareContainer>
  );
};

export default Software;
