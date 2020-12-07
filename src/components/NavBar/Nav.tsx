import React from "react";
import "./Nav.css";
import NavBottom from "./NavBottom";
import { NavUpper } from "./NavUpper";
const NavBar = (props: any) => {
  return (
    <nav className="whole-nav-bar">
    <NavUpper />
    <NavBottom />
    </nav>
  );
};

export default NavBar;
