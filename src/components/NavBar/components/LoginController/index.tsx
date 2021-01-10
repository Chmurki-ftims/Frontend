import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import Auth from '@aws-amplify/auth'
//Komponent musi sprawdzać czy mamy użytkownika zalogowanego czy nie zalogowanego i na tej podstawie wyświetlać odpowiednie przyciski

export default function LogInOut(props: any) {
  return (
    <div className={"d-flex align-items-center flex-column flex-md-row " + styles.controller}>
      <Link className={styles.link} to="/auth" onClick={() => {Auth.signOut()}}>Nazwa użytkownika</Link>
      <span className={"d-none d-md-block " + styles.span}></span>
      <Link className={styles.link} to="/auth">Wyloguj</Link>
    </div>
  )
}