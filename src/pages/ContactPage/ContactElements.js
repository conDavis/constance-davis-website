/* Elements for Contact Page.*/

import styled from "styled-components";
import bg from "../../assets/maxConCollab.jpg"


export const ContactContainer = styled.div`
  display: flex;
  height: ${window.screen.availHeight}px;
  background-image: url(${bg});
  background-color: #ffbadc;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const ContactCard = styled.div`
  text-align: center;
  background-color: #eaf4ce;
  width: 30%;
  height: 55%;
  margin: 6% auto;
  padding: 16px 32px 32px 32px;
`;

export const ContactHeaderContainer = styled.div`
  display: inline-block;
`;

export const ContactHeader = styled.h1`
  float: right;
  margin-left: -12px;
`;

export const ContactLogo = styled.img`
  width: 100px;
  margin-top: 1em;
  float: left;
`;

export const ContactList = styled.ul`
  list-style-type: none;
  display: inline-block;
  text-align: left;
  margin-left: 0;
  padding-left: 1em;
  text-indent: -1em;
  font-size: 25px;
`;

export const ContactLi = styled.li`
  padding-bottom: 8px;
`;
