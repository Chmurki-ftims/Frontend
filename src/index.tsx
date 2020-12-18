import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
    mandatorySignId: true, //not todo :)
    region: 'us-east-1', //todo
    userPoolId: 'us-east-1_fSEXlNKaS', //todo
    userPoolWebClientId: '7oggb52tk02qes33dfbno787m9' //todo
  }
})

ReactDOM.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
