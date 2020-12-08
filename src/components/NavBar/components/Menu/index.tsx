import React from 'react'
import {Link} from 'react-router-dom'
import styles from './styles.module.css'

export default function Menu (props: any) {
  console.log(styles)
  return (
    <nav className="mb-4 mt-4 nav d-flex justify-content-around">
          <Link className={styles.link} to="/home/uop" >Umowa o pracę</Link>
          <Link className={styles.link} to="/home/uz" >Umowa o zlecenie</Link>
          <Link className={styles.link} to="/home/b2b">Umowa o B2B</Link>
          <Link className={styles.link} to="/home/compare">Porównywarka</Link>
    </nav>
  );
};


