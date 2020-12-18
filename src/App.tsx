import React, { useState } from "react";
import "./App.css";
import Authentication from "./components/Authentication";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "./components/About";
import CalculatorB2B from "./components/CalculatorB2B";
import CalculatorUOP from "./components/CalculatorUOP";
import CalculatorUZ from "./components/CalculatorUZ";
import Comparator from "./components/Comparator";
import NavBar from './components/NavBar';
import Auth from '@aws-amplify/auth';
export default function App() {
  //state

  let [isAuth, setAuth]: [boolean, any] = useState(false);

  Auth.currentAuthenticatedUser()
    .then(user => {
        console.log('successful reconnected')
        console.log(user);
        setAuth(true)
    })
    .catch(err => {
        console.log(err);
    });

  //state

  //methods
  function handleLogIn() {
    setAuth(!isAuth);
  }

  function handleSignUp() {
    setAuth(!isAuth);
  }

  //methods

  return (
    <Router>
      {((isLogged) => <Redirect to={isLogged ? "/home" : "/auth"} />)(isAuth)}  

      <Switch>
        <Route path="/auth" render={
          (props) => (<Authentication {...props} onLogIn={handleLogIn}  onSignUp={handleSignUp} />) 
        } /> 
          
        <Route path="/home">
          <NavBar/>
          <Route exact path="/home/" component={About} />
          <Route path="/home/b2b" component={CalculatorB2B} />
          <Route path="/home/uop" component={CalculatorUOP} />
          <Route path="/home/uz" component={CalculatorUZ} />
          <Route path="/home/compare" component={Comparator} />
        </Route>

        <Route path="/emailconfirm">
          <div style={{color: "#fff"}}>Congratulations! Your email address has been successfully confirmed! Now you can log in</div>
        </Route>

        <Route path="*">
          <div>404 Page Not Found</div>
        </Route>
      </Switch>
    </Router>
  );
}
