import React from "react";

import { ContactList, ContactIcon } from "./PageElements";
import mailIcon from "../assets/mailIcon.png";
const Contact = () => {
  return (
    <div style={{ textAlign: "center", paddingTop: "2em" }}>
      <h1>I'd love to talk</h1>
      <ContactList>
        <li>
          <ContactIcon src={mailIcon} /> davis.con@northeastern.edu
        </li>
        <li>631.935.4505</li>
        <li>conDavis</li>
        <li>Constance Davis</li>
      </ContactList>
    </div>
  );
};

export default Contact;
