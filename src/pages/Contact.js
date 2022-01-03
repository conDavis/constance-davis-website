import React, { useState, useEffect } from "react";
import "./Contact.css";
import { ContactContainer, ContactList, ContactIcon, ContactLi, ContactLogo, ContactHeader } from "./PageElements";
import mailIcon from "../assets/mailIcon.png";
import phoneIcon from "../assets/phoneIcon.png";
import githubIcon from "../assets/githubIcon.png";
import linkedInIcon from "../assets/linkedInIcon.png";
import conLogo from "../assets/Con2.png";

const Contact = () => {
  const githubURL = "https://github.com/conDavis";
  const linkedInURL = "https://www.linkedin.com/in/constanceleedavis/";
  const email = "davis.con@northeastern.edu";

  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [areIconsLoaded, setAreIconsLoaded] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => setIsEmailCopied(true));
  };

  const CopyToClipboardIcon = () => {
    return (<i className="fa fa-clipboard" aria-hidden="true"
               style={{ fontSize: "22px", paddingTop: "4px", color: isEmailCopied ? "#BA0C5F" : "black" }}
               onClick={copyEmail} />);
  };

  const ToolTipText = () => {
    return (<span className="tooltiptext">
            Copy Email
            </span>);
  };

  const Email = () => {
    return (<ContactLi>
      <ContactIcon src={mailIcon} />
      {email}
      <div className="tooltip" >
        <ToolTipText/>
        <CopyToClipboardIcon/>
      </div>
    </ContactLi>);
  };

  const Phone = () => {
    return (<ContactLi>
      <ContactIcon src={phoneIcon} style={{ width: "55px", marginLeft: "-8px", paddingRight: "10px" }} />631.935.4505
    </ContactLi>);
  };

  const Github = () => {
    return (<ContactLi>
      <a href={githubURL} target="_blank"><ContactIcon src={githubIcon} />conDavis</a>
    </ContactLi>);
  };

  const LinkedIn = () => {
    return (<ContactLi>
      <a href={linkedInURL} target="_blank"><ContactIcon src={linkedInIcon} />Constance Davis</a>
    </ContactLi>);
  };



  useEffect(() => {

    isEmailCopied && setTimeout(() => setIsEmailCopied(false), 2000);
  }, [isEmailCopied]);


  return (
    <ContactContainer style = {areIconsLoaded ? {} : {display: "none"}}>
      <div style={{ display: "inline-block" }}><ContactLogo src={conLogo} onLoad={() => setAreIconsLoaded(true)}/> <ContactHeader>tact </ContactHeader></div>
      <ContactList>
        <Email />
        <Phone />
        <Github />
        <LinkedIn />
      </ContactList>

      <p>I'd love to talk</p>
    </ContactContainer>
  );
};

export default Contact;
