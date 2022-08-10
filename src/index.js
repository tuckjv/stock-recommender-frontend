import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserInput from './Components/userInput'
import Inputs from './Components/inputs'
import './bootstrap-4.3.1-dist/css/bootstrap.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Inputs />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
