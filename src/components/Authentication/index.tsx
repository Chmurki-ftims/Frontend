//TODO: 1) optimize the code: showForm() must be more simple than actually is
//      2) make the TextFields controlled        

import React, {useState, Dispatch, SetStateAction} from 'react';
import './styles.css';
import Logo from '../Logo';
import {ThemeProvider, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import theme from '../theme';

import Auth from '@aws-amplify/auth';

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
    onLogIn(): void,
    onSignUp(): void
}

export default function Authentication (props: AuthenticationProps) {
    // state
    let [wantToLogIn, setDesireToLogIn]: [boolean, Dispatch<SetStateAction<boolean>>] = useState((props.isDesireToLogIn !== undefined) ? props.isDesireToLogIn : true);
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [passwordConfirm, setPasswordConfirm] = useState('');
    // end state

    // methods
    function handleSwith() {
        setName('');
        setEmail('');
        setPassword('');
        setPasswordConfirm('');

        setDesireToLogIn(!wantToLogIn);
    }

    const handleLogIn = () => {
        Auth.signIn(email, password)
	            .then(success => {
                        console.log('successful sign in')
                        props.onLogIn()
                    })
	            .catch(err => console.log(err));
    }

    function handleSignUp() {
                Auth.signUp({
	                    username: email,
	                    password: password,
	                    attributes: {
                            nickname: name, 
	            },
        }).then(success => {
                        console.log('successful sign up')
                    })
	            .catch(err => console.log(err));

    }
    // end methods

    const classes = textFieldStyles();

    const showForm = (isDesire: boolean) => {
        return (
            <ThemeProvider theme={theme}>
                {!isDesire ? 
                    <TextField name="fullname" 
                               label="Full name" 
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
                           label="Password" 
                           InputLabelProps={{className: classes.root}}
                           InputProps={{ className: classes.root + ' ' + classes.input}}
                           onChange={(event)=> {setPassword(event.target.value)}}
                           value={password}/>

                {!isDesire ?  
                    <TextField className="mt-2" 
                               name="passwordconfirm"
                               type="password"
                               label="Confirm password"
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
                            onClick={isDesire ? handleLogIn : handleSignUp}>{isDesire ? 'Log in' : 'Sign up'}</Button>

                    <Button style={{height: '45px'}} 
                            className="col col-md-5 mt-2 mt-md-0"
                            color="secondary"
                            variant="contained"
                            onClick={() => { handleSwith() }} >{ isDesire ? "I don't have an account" : "I already have an account"}</Button>
                </div>
            </ThemeProvider>
        )
    };
    
    return (
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
    );
}