//TODO: 1) optimize the code: showForm() must be more simple than actually is
//      2) make the TextFields controlled        

import React, {useState, Dispatch, SetStateAction} from 'react';
import './styles.css';
import Logo from '../Logo';
import {ThemeProvider, makeStyles} from '@material-ui/core/styles';
import {
    Button,
    TextField,
    CircularProgress,
    Box,
    Fade
} from '@material-ui/core';

import {useHistory} from 'react-router-dom';

import theme from '../theme';
import { UserProps } from '../interfaces';
import {
    signIn, 
    signUp
} from '../../service/auth'

const textFieldStyles = makeStyles({
    root: {
        fontSize: '1.4rem',
        color: '#ffffff'
    },
    input: {
        '&.MuiInput-underline::before': {
        'border-bottom-color': '#ffffff',
        },
        '&.MuiInput-underline:hover::before': {
        'border-bottom-color': '#f4f4f4',
        }
    }
})

interface AuthenticationProps {
    isDesireToLogIn?: boolean,
    onSignIn(user: UserProps): void,
    onSignUp(user: UserProps): void
}

export default function Authentication (props: AuthenticationProps) {
    const history = useHistory()
    // state
    let [wantToLogIn, setDesireToLogIn]: [boolean, Dispatch<SetStateAction<boolean>>] = useState((props.isDesireToLogIn !== undefined) ? props.isDesireToLogIn : true);
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [passwordConfirm, setPasswordConfirm] = useState('');
    const [loading, setLoading] = useState(false)
    // end state

    // methods
    function handleSwith() {
        setName('');
        setEmail('');
        setPassword('');
        setPasswordConfirm('');
        setDesireToLogIn(!wantToLogIn);
    }

    const handleSignIn = () => {
        setLoading(true)
        signIn(email, password).then(data => {
                if (data) {
                const {
                    attributes: {
                        email: AWSemail,
                        email_verified: isConfirmed,
                        nickname: AWSfullname
                    },
                    pool: {
                        clientId: id
                    }
                } = data

                props.onSignIn({
                    id: id,
                    email: AWSemail,
                    fullname: AWSfullname,
                    isConfirmed: isConfirmed
                })
                setLoading(false)
                history.push('/home')
            } else {
                alert('Wystąpil bład, zweryfikuj podane email oraz hasło')
                setLoading(false)
            }
        })

        // props.onSignIn(null)
    }

    function handleSignUp() {
        setLoading(true)
        signUp(name,email,password).then(data => {
            if (data) {
                const {
                    user: {
                        pool: {
                            clientId: id
                        },
                        username: AWSemail
                    },
                    userConfirmed: isConfirmed
                } = data             

                props.onSignUp({
                    id: id,
                    email: AWSemail,
                    fullname: name,
                    isConfirmed: isConfirmed
                })
                setLoading(false)
                history.push('/emailconfirm')
            } else {
                alert('Wystąpił bład')
                setLoading(false)
            }
        })   
    }

    const classes = textFieldStyles();

    const showForm = (isDesire: boolean) => {
        return (
            <ThemeProvider theme={theme}>
                {!isDesire ? 
                    <TextField name="fullname" 
                               label="Imię i nazwisko" 
                               InputLabelProps={{className: classes.root}}
                               InputProps={{ className: classes.root + ' ' + classes.input }} 
                               onChange={(event) => {setName(event.target.value)}} 
                               value={name} /> 
                    : null
                }

                <TextField className={!isDesire ? "mt-2" : ""} 
                           type="email" 
                           name="email" 
                           label="E-mail" 
                           InputLabelProps={{className: classes.root}}
                           InputProps={{ className: classes.root + ' ' + classes.input}}
                           onChange={(event)=> {setEmail(event.target.value)}}
                           value={email}/>

                <TextField className="mt-2" 
                           type="password" 
                           name="password" 
                           label="Hasło" 
                           InputLabelProps={{className: classes.root}}
                           InputProps={{ className: classes.root + ' ' + classes.input}}
                           onChange={(event)=> {setPassword(event.target.value)}}
                           value={password}/>

                {!isDesire ?  
                    <TextField className="mt-2" 
                               name="passwordconfirm"
                               type="password"
                               label="Potwierdź hasło"
                               InputLabelProps={{className: classes.root}}
                               InputProps={{ className: classes.root + ' ' + classes.input}}
                               onChange={(event) => {setPasswordConfirm(event.target.value)}}
                               value={passwordConfirm}/> 
                    : null
                }

                <div className="d-flex flex-column flex-md-row justify-content-between" style={{marginTop: '30px'}}>
                    <Button id={isDesire ? 'loginBtn' : 'signUpBtn'} 
                            style={{height: '45px'}}
                            className="col col-md-6"
                            color="primary"
                            variant="contained"
                            onClick={isDesire ? handleSignIn : handleSignUp}>{isDesire ? 'Zaloguj' : 'Zarejestruj'}</Button>

                    <Button style={{height: '45px'}} 
                            className="col col-md-5 mt-2 mt-md-0"
                            color="secondary"
                            variant="contained"
                            onClick={() => { handleSwith() }} >{ isDesire ? "Nie mam konta" : "Mam już konto"}</Button>
                </div>
            </ThemeProvider>
        )
    };
    
    return (
        <>
            <div className="login-screen d-flex p-2 flex-column flex-md-row justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-items-center col col-lg-5">
                    <Logo width="100%" height="auto" size="big"/>
                </div>

                <div className="d-flex justify-content-center align-items-center col col-lg-7">
                    <form className="d-flex flex-column flex-fill">
                        {showForm(wantToLogIn)}                    
                    </form>
                </div>
            </div>
             
            <Fade in={loading}>
                <Box 
                    className="d-flex justify-content-center align-items-center"  
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: '100%', 
                        height: '100vh', 
                        backgroundColor: 'rgba(255,255,255,0.5)'
                }}><CircularProgress /></Box>
            </Fade>
        </>
    )
}