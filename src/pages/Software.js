import React from "react";
import {SoftwareContainer} from "./PageElements"
import visionVoiceIcon from "../assets/visionVoice.png"
const Software = () => {
  return (
    <SoftwareContainer>
      <div style={{ display: "flex", textAlign: "center" }}>
        <div style={{float: "left", flex: 1}}>
        <h1>Front-End Dev</h1>
        <p> JavaScript | TypeScript | HTML | CSS | React/Redux</p>
        </div>
        <div style={{float: "right", flex: 1}}>
          <h1>Back-End Dev</h1>
          <p>Java | Python | C++ | Spring Boot | MySQL</p>
        </div>
        <div style={{float: "left", flex: 1}}>
          <h1>Tools</h1>
          <p> Intellij | WebStorm | VSCode | Eclipse | Git</p>
        </div>
      </div>
      <div style={{ display: "flex", textAlign: "center" ,
        padding: "0 4em 0 4em"}}>
        <div style={{float: "right", flex: 1}}>
          <h1>Mentorship</h1>
          <img src={visionVoiceIcon} alt="vision voice icon" style={{width: "200px",
            float: "left", paddingRight: "24px"}}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>


      <h1 style={{ textAlign: "center"}}>Projects</h1>
    </SoftwareContainer>
  );
};

export default Software;
