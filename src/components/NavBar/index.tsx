import React from 'react'
import { Link } from 'react-router-dom'
import Menu from "./components/Menu"
import LoginController from "./components/LoginController"
import Logo from '../Logo'

import {UserProps} from '../interfaces'

export interface NavBarProps {
  user: null | UserProps,
  onSignOut(): void
}

export default function NavBar(props: NavBarProps) {
  return (
    <nav>
      <Link className="d-flex d-md-inline justify-content-center justify-content-md-start" to="/home"><Logo width="300" height="100" size="small" /></Link>
      <LoginController user={props.user} onSignOut={props.onSignOut}/>
      <Menu />
    </nav>
  );
};
