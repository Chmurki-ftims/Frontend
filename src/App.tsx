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
      <NavBar/>
      {((isLogged) =>
        isLogged ? <Redirect to="/" /> : null)(isAuth)}  

      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/signin" > 
        {/* </Route>component={LoginScreen} onLogIn={handleLogIn}/> */}
          <LoginScreen onLogIn={handleLogIn} />
        </Route>
        <Route path="/b2b" component={CalculatorB2B} />
        <Route path="/uop" component={CalculatorUOP} />
        <Route path="/uz" component={CalculatorUZ} />
        <Route path="/compare" component={Comparator} />
        <Route path="*">
          <div>404 Page Not Found</div>
        </Route>
      </Switch>
    </Router>
  );
}
