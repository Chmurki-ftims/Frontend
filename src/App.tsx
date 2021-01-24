import React, { useState, useEffect } from "react";
import "./App.css";
import Authentication from "./components/Authentication";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import About from "./components/About";
import CalculatorB2B from "./components/CalculatorB2B";
import CalculatorUOP from "./components/CalculatorUOP";
import CalculatorUZ from "./components/CalculatorUZ";
import Comparator from "./components/Comparator";
import NavBar from './components/NavBar';
import {UserProps} from './components/interfaces'
import ThankfulPage from "./components/ThankfulPage";

import {
  getCurrentUser,
  signOut
} from './service/auth'

export default function App() {
  //state
  const [mounted, setMounted]: [boolean, any] = useState(true)
  const [user, setUser]: [null | UserProps, any] = useState(null)
  const history = useHistory()
  
  useEffect(() => {
    if (mounted) {
      getCurrentUser().then(data => {
        if (data) {
          const {
            aud: id,
            email,
            nickname: fullname
          } = data.idToken.payload

          setUser({
            id: id,
            email: email,
            fullname: fullname
          })
        }
      })
    }  return () => {setMounted(false)}
  },[mounted])


  //methods
  const handleSignIn = (user: UserProps) => {
    setUser(user)
  }

  const handleSignUp = (user: UserProps) => {
    setUser(user)
  }

  const handleSignOut = () => {
    signOut().then(() => {
      setUser(null)
    })
  }
  

  return (
    <Router>
      <Redirect to={user ? "/home" : "/auth"} />

      <Switch>
        <Route path="/auth" render={
          (props) => (<Authentication {...props} onSignIn={handleSignIn}  onSignUp={handleSignUp} />) 
        } /> 

        <Route path="/emailconfirm">
          <div className="row d-flex justify-content-center align-items-center text-light" style={{width: '100%', height: '100vh'}}>
            <h2>Potwierdź email, żebyś zmógł korzystać ze swojego konta</h2>
          </div>
        </Route>  

        <Route path="/confirmed">
          <ThankfulPage />
        </Route>

        <Route path="/home">
          <NavBar user={user} onSignOut={handleSignOut}/>
          <Route exact path="/home/" component={About} />
          <Route path="/home/b2b" component={CalculatorB2B} />
          <Route path="/home/uop">
            <CalculatorUOP user={user} />
          </Route>
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
