import React, { useState, useEffect } from "react";
import "./Contact.css";
import {
  ContactContainer,
  ContactList,
  ContactLi,
  ContactLogo,
  ContactHeader,
  ContactHeaderContainer,
} from "./ContactElements";
import phoneIcon from "../../assets/phoneIcon.png";
import githubIcon from "../../assets/githubIcon.png";
import linkedInIcon from "../../assets/linkedInIcon.png";
import conLogo from "../../assets/Con2.png";

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
    return (
      <i
        className="fa fa-clipboard"
        aria-hidden="true"
        style={{
          fontSize: "22px",
          paddingTop: "4px",
          color: isEmailCopied ? "#BA0C5F" : "black",
        }}
        onClick={copyEmail}
      />
    );
  };

  const ToolTipText = () => {
    return <span className="tooltiptext">Copy Email</span>;
  };

  const Email = () => {
    return (
      <ContactLi>
        <i
          className="fa fa-envelope-o"
          aria-hidden="true"
          style={{
            fontSize: "40px",
            marginRight: "14px",
            paddingLeft: "26px",
            verticalAlign: "bottom",
          }}
        />
        {email}
        <div className="tooltip">
          <ToolTipText />
          <CopyToClipboardIcon />
        </div>
      </ContactLi>
    );
  };

  const Phone = () => {
    return (
      <ContactLi>
        <img
          src={phoneIcon}
          style={{
            width: "55px",
            marginLeft: "-10px",
            paddingRight: "10px",
            verticalAlign: "bottom",
          }}
          alt="phone icon"
        />
        631.935.4505
      </ContactLi>
    );
  };

  const Github = () => {
    return (
      <ContactLi>
        <a href={githubURL} target="_blank">
          <img src={githubIcon} className="icon" alt="github logo" />
          conDavis
        </a>
      </ContactLi>
    );
  };

  const LinkedIn = () => {
    return (
      <ContactLi>
        <a href={linkedInURL} target="_blank">
          <img src={linkedInIcon} className="icon" alt="linkedin logo" />
          Constance Davis
        </a>
      </ContactLi>
    );
  };

  useEffect(() => {
    isEmailCopied && setTimeout(() => setIsEmailCopied(false), 3000);
  }, [isEmailCopied]);

  return (
    <ContactContainer style={areIconsLoaded ? {} : { display: "none" }}>
      <ContactHeaderContainer>
        <ContactLogo src={conLogo} onLoad={() => setAreIconsLoaded(true)} />
        <ContactHeader>tact </ContactHeader>
      </ContactHeaderContainer>
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
