import React from 'react'
import NavBar from '../../components/NavBar/Nav'
import { BbConcent } from './BbConcent'
import './BbStyle.css'
// interface Props {
    
// }

export const CalculateB2b = (props: any) => {
    return (
        <div>
              <header>
        <NavBar />
      </header>
      <main>
          <BbConcent/>
      </main>
        </div>
    )
}
