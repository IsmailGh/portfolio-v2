import React from "react";
import logo from "../../static/logo.png";
import { Nav, NavLink, Bars, NavMenu } from "./NavStyling";

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <img src={logo} />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Expierience</NavLink>
        <NavLink to="/">Projects</NavLink>
        <NavLink to="/">Resume</NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
