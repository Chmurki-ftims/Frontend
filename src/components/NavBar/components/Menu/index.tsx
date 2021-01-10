import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

export default function Menu(props: any) {
  console.log(styles);
  return (
    <nav className="mb-4 mt-4 nav d-flex justify-content-around">
      <NavLink
        className={styles.link}
        to="/home/uop"
        activeClassName="selected"
        activeStyle={{ color: "#2155fb" }}
        // activeStyle={{ color: "#2155fb", borderBottom: "1px solid #2155fb" }}
      >
        Umowa o pracę
      </NavLink>
      <NavLink
        className={styles.link}
        to="/home/uz"
        activeClassName="selected"
        activeStyle={{ color: "#2155fb" }}
        // activeStyle={{ color: "#2155fb", borderBottom: "1px solid #2155fb" }}
      >
        Umowa zlecenie
      </NavLink>
      <NavLink
        className={styles.link}
        to="/home/b2b"
        activeClassName="selected"
        activeStyle={{ color: "#2155fb" }}
        // activeStyle={{ color: "#2155fb", borderBottom: "1px solid #2155fb" }}
      >
        Umowa B2B
      </NavLink>
      <NavLink
        className={styles.link}
        to="/home/compare"
        activeClassName="selected"
        activeStyle={{ color: "#2155fb" }}
        // activeStyle={{ color: "#2155fb", borderBottom: "1px solid #2155fb" }}
      >
        Porównywarka
      </NavLink>
    </nav>
  );
}
