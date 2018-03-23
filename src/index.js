import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as firebase from 'firebase'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/Auth/login/login'
import Registration from './components/Auth/registration/registration';


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
  <Router>
    <div>
       <Route exact path="/" component={App} />
       <Route exact path="/login" component={Login} />
       <Route exact path="/register" component={Registration} />
       
    </div>
    </Router>,
  document.getElementById('root')
);
