import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyBLh9o5LhHl-mIdPLn-QXWPDF1AA7VftuY",
  authDomain: "hostel-booking-app-bf6ec.firebaseapp.com",
  databaseURL: "https://hostel-booking-app-bf6ec.firebaseio.com",
  projectId: "hostel-booking-app-bf6ec",
  storageBucket: "hostel-booking-app-bf6ec.appspot.com",
  messagingSenderId: "545528602614",
  appId: "1:545528602614:web:eff700766f8274412f71d7",
  measurementId: "G-DC81HEJYGP"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
