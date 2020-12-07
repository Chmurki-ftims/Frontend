import React from 'react'


//Komponent musi sprawdzać czy mamy użytkownika zalogowanego czy nie zalogowanego i na tej podstawie wyświetlać odpowiednie przyciski

const  LogInOut = (props: any) => {return (
           <>
            <li className="nav-item " role="presentation">
              <a
                className="nav-link"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Zaloguj
              </a>
            </li>
            <h3>|</h3>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Załóż konto
              </a>
            </li>
          </>
  )
}

export default LogInOut