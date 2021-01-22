import React from 'react'
import {useHistory} from 'react-router-dom'
import {Button} from '@material-ui/core'

export default function ThankfulPage(props: any) {
    const history = useHistory()

    return (
        <div className="row d-flex flex-column justify-content-center align-items-center text-light" style={{width: '100%', height: '100vh'}}>
            <h1>Dziękujemy</h1>
            <Button color="primary" variant="contained" style={{marginTop: '25px', fontSize: '1rem'}} onClick={() => {history.push('/home')}}>Przejdź na stronę główną</Button>
        </div>
    )
}