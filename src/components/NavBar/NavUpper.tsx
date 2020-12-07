import React from "react";
import logo from '../Logo/images/logo_small.svg'
// interface Props {

// }

export const NavUpper = (props: any) => {
  return (
      <div className="nav-up">
    <nav className="navbar">
      <a  className="nav-link"
              href="/">
      <img
                className="logo"
                width="300"
                height="100"
                src={logo}
                alt="KalKom | Twoja ścieżka sukcesu"
              />
              {""}
      </a>
       <nav className="navbar justify-content-end">

      <a  className="nav-link"
             href="/signin">
        Zaloguj
      </a>
      <h3>|</h3>
      <a  className="nav-link"
                 href="/signout">
       Załóż konto
      </a>
        </nav>
      </nav>
    </div>
  );
};
