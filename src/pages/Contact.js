import React, {useState, useEffect} from "react";
import "./Contact.css"
import { ContactContainer,  ContactList, ContactIcon, ContactLi, ContactLogo, ContactHeader, } from "./PageElements";
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
  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => setIsEmailCopied(true));
  };

  

  useEffect(() => {

    isEmailCopied && setTimeout(() => setIsEmailCopied(false), 2000);
  }, [isEmailCopied]);





  return (
    <ContactContainer>
      <div style={{display: "inline-block"}}><ContactLogo src = {conLogo}/> <ContactHeader>tact </ContactHeader></div>
      <ContactList>
        <ContactLi>
          <ContactIcon src={mailIcon} />
          {email}
          <div className="tooltip" style={{marginLeft: "60px"}}>
             <span className="tooltiptext">
            Copy Email
            </span>
            <i className="fa fa-clipboard" aria-hidden="true" style={{fontSize: "22px", paddingTop: "4px", color: isEmailCopied ? "#BA0C5F": "black"}}  onClick={copyEmail}/>
          </div>


        </ContactLi>
        <ContactLi>
          <ContactIcon src={phoneIcon} style={{width: "55px", marginLeft: "-8px", paddingRight:"10px"}}/>631.935.4505

        </ContactLi>
        <ContactLi>
          <a href={githubURL} target="_blank"><ContactIcon src={githubIcon} />conDavis</a>
        </ContactLi>
        <ContactLi>
          <a href={linkedInURL} target="_blank"><ContactIcon src={linkedInIcon}/>Constance Davis</a>
        </ContactLi>
      </ContactList>

      <p>I'd love to talk</p>
    </ContactContainer>
  );
};

export default Contact;
