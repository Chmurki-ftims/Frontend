import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

//Komponent musi sprawdzać czy mamy użytkownika zalogowanego czy nie zalogowanego i na tej podstawie wyświetlać odpowiednie przyciski

export default function LogInOut(props: any) {
  return (
    <div className={"d-flex align-items-center flex-column flex-md-row " + styles.controller}>
      <Link className={styles.link} to="/signin">Zaloguj</Link>
      <span className={"d-none d-md-block " + styles.span}></span>
      <Link className={styles.link} to="/signup">Załóż konto</Link>
    </div>
  )
}