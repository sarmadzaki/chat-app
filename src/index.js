import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as firebase from 'firebase'



  var config = {
    apiKey: "AIzaSyBbgpxWlk-f126ewt2LFXbuoqzzjBt8R58",
    authDomain: "lab-assignment-6f910.firebaseapp.com",
    databaseURL: "https://lab-assignment-6f910.firebaseio.com",
    projectId: "lab-assignment-6f910",
    storageBucket: "lab-assignment-6f910.appspot.com",
    messagingSenderId: "575799995717"
  };
  firebase.initializeApp(config);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
