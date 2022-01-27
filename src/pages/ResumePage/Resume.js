import React from "react";
import resume from "../../assets/current_resume2022.pdf";
import { ResumeContainer, ResumeIframe } from "./ResumeElements";

const Resume = () => {
  return (
    <ResumeContainer scrolling="no">
      <ResumeIframe src={resume} scrolling="no" />
    </ResumeContainer>
  );
};

export default Resume;
