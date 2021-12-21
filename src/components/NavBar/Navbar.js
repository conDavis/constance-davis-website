import React from "react";
import {
  Bars,
  Nav,
  NavBtn,
  NavBtnLink,
  NavLink,
  NavMenu,
} from "./NavBarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/" className={({ isActive }) => isActive? "active": ''}>
            AboutMe
          </NavLink>
          <NavLink to="/software" className={({ isActive }) => isActive? "active": ''}>
            Software
          </NavLink>
          <NavLink to="/art" className={({ isActive }) => isActive? "active": ''}>
            Art
          </NavLink>
          <NavLink to="/resume" className={({ isActive }) => isActive? "active": ''}>
            Resume
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive? "active": ''}>
            Contact
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
