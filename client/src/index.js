import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAH8MpedAHMXK4NthVHc6bz2hxf_e1AZnY",
//   authDomain: "book-web-app-dc65f.firebaseapp.com",
//   databaseURL: "https://book-web-app-dc65f-default-rtdb.firebaseio.com",
//   projectId: "book-web-app-dc65f",
//   storageBucket: "book-web-app-dc65f.appspot.com",
//   messagingSenderId: "297935202745",
//   appId: "1:297935202745:web:a05fe6d534992f57c82e68",
//   measurementId: "G-EB7JYE2XEP"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
