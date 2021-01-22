import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import { Link, useHistory } from 'react-router-dom'
import Auth from '@aws-amplify/auth'
//Komponent musi sprawdzać czy mamy użytkownika zalogowanego czy nie zalogowanego i na tej podstawie wyświetlać odpowiednie przyciski

import {getCurrentUser} from '../../../../service/auth'

import {UserProps} from '../../../interfaces'

export interface LoginControllerProps {
  user: null | UserProps,
  onSignOut(): void
}

export default function LoginController(props: LoginControllerProps) {
  return (
    <div className={"d-flex align-items-center flex-column flex-md-row " + styles.controller}>
      {props.user ? (
        <>
          <span className={styles.link}>{props.user.fullname}</span>
          <span className={"d-none d-md-block " + styles.span}></span>
          <div className={styles.link} onClick={props.onSignOut}>Wyloguj</div>
          </>
        ) : (
          <>
            <Link className={styles.link} to="/auth">Zaloguj się</Link>
          </>
        ) }

      
    </div>
  )
}