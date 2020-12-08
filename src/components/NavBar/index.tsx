import React from 'react'
import { Link } from 'react-router-dom'
import Menu from "./components/Menu"
import LoginController from "./components/LoginController"
import Logo from '../Logo'

export default function NavBar(props: any) {
  return (
    <nav>
      <Link className="d-flex d-md-inline justify-content-center justify-content-md-start" to="/"><Logo width="300" height="100" size="small" /></Link>
      <LoginController />
      <Menu />
    </nav>
  );
};
