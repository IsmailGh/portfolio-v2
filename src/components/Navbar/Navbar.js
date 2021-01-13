import React from "react";
import logo from "../../static/logo.png";
import { FaBars } from "react-icons/fa";
import { Nav, NavLink, BarIcon, NavMenu } from "./NavStyling";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavLink to="/">
        <img src={logo} />
      </NavLink>
      <BarIcon onClick={toggle}>
        <FaBars />
      </BarIcon>
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
