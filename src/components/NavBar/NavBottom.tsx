import React from "react";
import "./Nav.css";
const NavBottom = (props: any) => {
  return (
    <nav className="nav flex-column">
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <a className="nav-link" href="/uop" role="tab">
            Umowa o pracę
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" href="/uz" role="tab">
            Umowa o zlecenie
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" href="/b2b" role="tab">
            Umowa o B2B
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" href="/compare" role="tab">
            Porównywarka
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBottom;
