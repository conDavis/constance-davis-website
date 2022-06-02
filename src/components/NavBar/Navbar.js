import React, {useState} from "react";
import {
  Bars,
  Nav,
  NavLink,
  NavLogo,
  NavMenu,
  NavName,
  NavDropdown,
} from "./NavBarElements";
import { NavLink as Link } from "react-router-dom";

import logo from "../../assets/conlong3.png";
const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = new useState(false);
  const onDropDownClick = () => {if(isDropdownVisible){setIsDropdownVisible(false)}};
  return (
    <>
      <Nav>
        <Link to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          <NavLogo src={logo} alt="Logo" />
        </Link>

        <NavName>Constance Davis</NavName>

        <Bars onClick={() => setIsDropdownVisible(!isDropdownVisible)}/>

        <NavMenu>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Me
          </NavLink>
          <NavLink
            to="/software"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Software
          </NavLink>
          <NavLink
            to="/art"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Art
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Resume
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>


          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {isDropdownVisible &&
        <NavDropdown className="dropdown">
          <li onClick={onDropDownClick}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About Me
            </NavLink>
          </li>
          <li onClick={onDropDownClick}>
            <NavLink
              to="/software"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Software
            </NavLink>
          </li>
          <li onClick={onDropDownClick}>
            <NavLink
              to="/art"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Art
            </NavLink>
          </li>
          <li onClick={onDropDownClick}>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </NavDropdown>}
      </Nav>

    </>
  );
};

export default Navbar;
