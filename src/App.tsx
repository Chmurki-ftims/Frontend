import React, { useState } from "react";
import "./App.css";
// import Header from "./components/header";
import LoginScreen from "./components/LoginScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import StartPage from "./components/MainPage/StartPage";
import { CalculateB2b } from "./components/B2bPage/CalculateB2b";
import { CalculatorUop } from "./components/UopPage/CalculatorUop";
import { CalculatorUz } from "./components/UzPage/CalculatorUz";
import { Compare } from "./components/ComparatorPage/Compare";


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
      {((isLogged) =>
        isLogged ? <Redirect to="/" /> : '')(isAuth)}  

      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/signin" > 
        {/* </Route>component={LoginScreen} onLogIn={handleLogIn}/> */}
          <LoginScreen onLogIn={handleLogIn} />
        </Route>
        <Route path="/b2b" component={CalculateB2b} />
        <Route path="/uop" component={CalculatorUop} />
        <Route path="/uz" component={CalculatorUz} />
        <Route path="/compare" component={Compare} />
        <Route path="*">
          <div>404 Page Not Found</div>
        </Route>
      </Switch>
    </Router>
  );
}
