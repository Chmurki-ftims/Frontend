import React, {useState} from 'react';
import './App.css';
import Header from './components/header';
import LoginScreen from './components/LoginScreen';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Redirect
  } from 'react-router-dom';


// function App() {
//   return (
//     <div className="App">
//         <Header/>
//     </div>
//   );
// }

// export default App;

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
        isLogged ? (
          <Redirect to="/" />
        ) : (
          <Redirect to="/login" />
        ))(isAuth)
      }

      <Switch>
        <Route path="/login">
          <LoginScreen onLogIn={handleLogIn}/>
        </Route>
        <Route path="/">
          <Header/>
        </Route>
      </Switch>
    </Router>
  )
};
