import React from "react";
import resume from "../assets/current_resume.pdf"
import {
    ResumeContainer,
    ResumeIframe
} from "./PageElements";
const Resume = () => {
    return(
    <ResumeContainer scrolling="no">
        <ResumeIframe src={resume} scrolling="no"/>
    </ResumeContainer>);
}

export default Resume;