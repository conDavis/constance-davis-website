import React from "react";
import { SoftwareContainer, MentorshipContainer } from "./SoftwareElements";
import visionVoiceIcon from "../../assets/visionVoice.png";

const Software = () => {
  /* Skills sections */
  const FEDevSection = () => {
    return (<div style={{ flex: 1 }}>
      <h1>Front-End Dev</h1>
      <p> JavaScript | TypeScript | HTML | CSS | React/Redux</p>
    </div>);
  };

  const BEDevSection = () => {
    return (<div style={{ flex: 1 }}>
      <h1>Back-End Dev</h1>
      <p>Java | Python | C++ | Spring Boot | MySQL</p>
    </div>);
  };

  const ToolsSection = () => {
    return (<div style={{ flex: 1 }}>
      <h1>Tools</h1>
      <p> Intellij | WebStorm | VSCode | Eclipse | Git</p>
    </div>);
  };

  /* Larger (full page width) sections*/
  const MentorshipSection = () => {
    return (<MentorshipContainer>
      <h1>Mentorship</h1>
      <img src={visionVoiceIcon} alt="vision voice icon" style={{
        width: "200px",
        float: "left", paddingRight: "24px"
      }} />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </MentorshipContainer>);
  };

  const ProjectsSection = () => {
    return (<div><h1>Projects</h1>
    </div>);
  };


  return (
    <SoftwareContainer>
      <div style={{ display: "flex" }}>
        <FEDevSection />
        <BEDevSection />
        <ToolsSection />
      </div>
      <MentorshipSection />
      <ProjectsSection />
    </SoftwareContainer>
  );
};

export default Software;
