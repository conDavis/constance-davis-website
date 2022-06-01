import React, { useState } from "react";
import {
  SoftwareContainer,
  MentorshipContainer,
  ProjectCard,
  SkillsContainer,
  MentorshipLogo,
  ProjectContainer,
} from "./SoftwareElements";
import visionVoiceIcon from "../../assets/visionVoice.png";
import nihilittleIcon from "../../assets/nihilittleLifeIcon.png";

const Software = () => {
  const [isIconLoaded, setIsIconLoaded] = useState(false);
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
        <a href="https://www.visionvoiceinc.org/" target="_blank">
          <MentorshipLogo
            src={visionVoiceIcon}
            alt="vision voice icon"
            onLoad={() => setIsIconLoaded(true)}
          />
        </a>
        <p>
          Mentorship is extremely important to me. As a young woman
          in STEM being mentored has been invaluable, and now the mentoring
          I do with my mentees both  brings me joy and sharpens my skills.
          In September 2021 I joined <a href="https://www.visionvoiceinc.org/" target="_blank">
            VisionVoice</a>, and
          began working one-on-one with female Black/AfroX
          students to facilitate their learning of foundational
          computer science and to help them acquire skills in web development.
        </p>
      </MentorshipContainer>
    );
  };

  const ProjectsSection = () => {
    return (
      <div>
        <h1>Projects</h1>
        <br />

        <ProjectContainer>
          <ProjectCard style={{ flex: 1 }}>
            <h2>
              <b>Pyramid Solitaire</b>
            </h2>
            <p>
              Implemented a pyramid solitaire game algorithm in Java with Java
              Swing visuals. Redeveloped my application into a Web App using
              typescript and HTML to make playable online,
              <a
                href="https://condavis.github.io/PyramidSolitaire/"
                target="_blank"
              >
                {" "}
                here.
              </a>
            </p>
          </ProjectCard>
          <ProjectCard style={{ flex: 1 }}>
            <h2>
              <b>Nihilittle Life</b> (in progress)
            </h2>
            <p>
              Collaborating with my peer Max Pinheiro to design and build an
              online, bit-art style, mini life simulator. In Nihilittle Life
              your decisions don't matter, but only in that the ending is
              constant, you end up just fine :)
              <br />
              <br />
              <a href="https://github.com/maxpinheiro/nihilittle-life" target="_blank">
                <img src={nihilittleIcon} height="80px" alt ="nihilittle life icons"/>
                <br />
                Check out our repo.
              </a>
            </p>
          </ProjectCard>
          <ProjectCard style={{ flex: 1 }}>
            <h2>
              <b>Programmable Animator</b>
            </h2>
            <p>
              Collaborated with my peer Rachel Cohen to create a simple
              programmable animator that can take forms of textual or SVG input
              and output animations in the form of a text representation, a
              Java Swing animation, or an SVG output.
              <br />
              <br />
              Code available upon request.
              <br />
            </p>
          </ProjectCard>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectCard style={{ flex: 1 }}>
            <h2>
              <b>Presidential Speech Issue Tracking</b>
            </h2>
            <p>
              Predictive analysis model based on presidential speeches, built in
              Python using K-nearest neighbor algorithm for classification.
              Yielding 70%+ accuracy on the prediction of time period, and political
              party based on the text from the speech
              alone.
              <br />
              <br />
              <a
                href="https://github.com/conDavis/PresidentialPredictiveModel/blob/main/FinalReport.ipynb"
                target="_blank"
              >
                Check out our report.
              </a>
              <br />
            </p>
          </ProjectCard>
          <ProjectCard style={{ flex: 1 }}>
            <h2>
              <b>This Website!</b>
            </h2>
            <p>
              React app in HTML and JavaScript using functional components,
              react hooks, and{" "}
              <a href="https://styled-components.com/" target="_blank">styled components</a>.
              <br/>
              <br/>
              <a href="https://github.com/conDavis/constance-davis-website" target="_blank">Check out the repo.</a>
            </p>
          </ProjectCard>
        </ProjectContainer>
      </div>
    );
  };

  return (
    <SoftwareContainer style={isIconLoaded ? {} : { display: "none" }}>
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
