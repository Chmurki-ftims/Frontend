//TODO: 1) optimize the code: showForm() must be more simple than actually is
//      2) make the TextFields controlled        

import React, {useState} from 'react';
import './styles.css';
import Logo from '../Logo';
import {ThemeProvider, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import theme from '../theme';

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

// interface LoginData {
//   email: string,
//   password: string
// }

const loginDataBase = {
  email: 'janek@gmail.com',
  password: '1234567890'
}

const LoginScreen = (props: any) => {
    // state
    let [wantToLogIn, setDesireToLogIn]: [boolean, any] = useState(true);
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [passwordConfirm, setPasswordConfirm] = useState('');
    // state

    //methods
    function handleSwith() {
        setName('');
        setEmail('');
        setPassword('');
        setPasswordConfirm('');

        setDesireToLogIn(!wantToLogIn);
    }

    const handleLogIn = () => {
        console.log('log in');
        if (email === loginDataBase.email && password === loginDataBase.password) {
            props.onLogIn()
        }
    }

    function handleSignUp() {
        console.log('sign up');
    }
    //methods

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
                <Logo width="100%" height="auto"/>
            </div>

            <div className="d-flex justify-content-center align-items-center col col-lg-7">
                <form className="d-flex flex-column flex-fill">
                    {showForm(wantToLogIn)}                    
                </form>
            </div>
        </div>
    );
}

export default LoginScreen;