import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #f6ecf6;
  height: 76px;
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  padding: 0.2rem calc((75vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
  @media (max-width: 768px) {
    padding: 0.1rem calc((75vw - 1000px) / 2);
  }
`;

export const NavLink = styled(Link)`
  color: #414e1c;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #728f20;
    font-weight: bold;
  }
`;

export const NavName = styled.p`
  font-weight: bold;
  font-size: 25px;
  color: #414e1c;
  padding-right: 45%;
  padding-left: 8px;
  @media (max-width: 768px) {
    padding-right: 75px;
    padding-top: 10px;
  }
`;

export const NavLogo = styled.img`
  height: 96px;
  padding-top: 12px;
  overflow: visible;
  @media (max-width: 768px) {
    padding-left: 20%;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    padding-top: 8px;
    margin-left: 8px; 
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
    padding-top: 10px;

  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
`;

export const NavIcon = styled.img`
  width: 32px;
  filter: invert(45%);
  &:hover {
    transition: all 0.2s ease-in-out;
    filter: none;
  }
`;

export const NavDropdown = styled.ul`
  background: #f1f6f6;
  font-size: 18px;
  margin-top: 20%;
  margin-left: -50%;
  height: 100%;
  padding: 5% 3% 5% 0;
  list-style-type: none;
`;
