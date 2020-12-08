import React, { useState } from "react";
import "./App.css";
import LoginScreen from "./components/LoginScreen";
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

export default function App() {
  //state
  let [isAuth, setAuth]: [boolean, any] = useState(false);
  //state

  //methods
  function handleLogIn() {
    setAuth(!isAuth);
  }
  //methods

  return (
    <Router>
      {((isLogged) => <Redirect to={isLogged ? "/home" : "signin"} />)(isAuth)}  

      <Switch>
        <Route path="/signin" > 
        {/* </Route>component={LoginScreen} onLogIn={handleLogIn}/> */}
          <LoginScreen onLogIn={handleLogIn} />
        </Route>
        <Route path="/home">
          <NavBar/>
          <Route exact path="/home/" component={About} />
          <Route path="/home/b2b" component={CalculatorB2B} />
          <Route path="/home/uop" component={CalculatorUOP} />
          <Route path="/home/uz" component={CalculatorUZ} />
          <Route path="/home/compare" component={Comparator} />
        </Route>

        <Route path="*">
          <div>404 Page Not Found</div>
        </Route>
      </Switch>
    </Router>
  );
}
