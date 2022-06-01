/* Elements for Contact Page.*/

import styled from "styled-components";
import bg from "../../assets/maxConCollab.jpg";

export const ContactContainer = styled.div`
  display: flex;
  height: 100%;
  background-image: url(${bg});
  background-color: #ffbadc;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const ContactCard = styled.div`
  text-align: center;
  background-color: #eaf4ce;
  width: 35%;
  margin: 7% auto;
  padding: 8px 32px 0 32px;

  @media (max-width: 768px) {
    width: 100%;
    height: 60%;
    margin-top: 30%;
    padding: 10% 4px 0 8px;
  }
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
  margin-top: 1.5em;
  float: left;
  @media (max-width: 768px) {
    margin-top: 8px;
  }
`;

export const ContactList = styled.ul`
  list-style-type: none;
  display: inline-block;
  text-align: left;
  margin-left: 0;
  padding-left: 1em;
  text-indent: -1em;
  font-size: 25px;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 24px;
  }
`;

export const ContactLi = styled.li`
  padding-bottom: 8px;
`;

export const ContactIcon = styled.i`
  font-size: ${(props) => props.fontSize};
  margin-right: 14px;
  padding-left: 26px;
  vertical-align: bottom;
  color: black !important;
  @media (max-width: 768px) {
    margin-right: 7px;
  }
`;
