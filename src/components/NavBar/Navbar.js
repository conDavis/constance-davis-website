import React, {useState} from "react";
import {
  Bars,
  Nav,
  NavLink,
  NavLogo,
  NavMenu,
  NavName,
} from "./NavBarElements";
import { NavLink as Link } from "react-router-dom";

import logo from "../../assets/conlong3.png";
const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = new useState(false);
  return (
    <>
      <Nav>
        <Link to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          <NavLogo src={logo} alt="Logo" />
        </Link>

        <NavName>Constance Davis</NavName>

        <Bars onClick={() => setIsDropdownVisible(!isDropdownVisible)}/>
        {isDropdownVisible &&
        <ul className="dropdown">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/software"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Software
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/art"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Art
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>}

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
      </Nav>
    </>
  );
};

export default Navbar;
