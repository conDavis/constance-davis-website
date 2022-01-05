/* Elements for Contact Page.*/

import styled from "styled-components";

export const ContactContainer = styled.div`
  text-align: center;
  background-color: #eaf4ce;
  width: 30%;
  height: 100%;
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
