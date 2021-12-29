import React from "react";

import { ContactList, ContactIcon, ContactLi} from "./PageElements";
import mailIcon from "../assets/mailIcon.png";
import phoneIcon from "../assets/phoneIcon.png";
import githubIcon from "../assets/githubIcon.png";
import linkedInIcon from "../assets/linkedInIcon.png";
const Contact = () => {
  return (
    <div style={{ textAlign: "center", paddingTop: "2em" }}>
      <h1>I'd love to talk</h1>
      <ContactList>
        <ContactLi>
          <ContactIcon src={mailIcon} />davis.con@northeastern.edu
        </ContactLi>
        <ContactLi>
          <ContactIcon src={phoneIcon} style={{width: "60px",     marginLeft: "-6px"}}/>631.935.4505

        </ContactLi>
        <ContactLi>
          <ContactIcon src={githubIcon} />conDavis
        </ContactLi>
        <ContactLi>
          <ContactIcon src={linkedInIcon}/>Constance Davis
        </ContactLi>
      </ContactList>
    </div>
  );
};

export default Contact;
