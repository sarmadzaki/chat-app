import React, { Component } from 'react'
import './registration.css'
import * as firebase from 'firebase'
import { Link } from "react-router-dom";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUser: false,
            isError: false,
            errorMessage: ''
        }
    }

    registerWithEmail(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((d) => {
                console.log('Registered successfully');
            })
            .catch(function (error) {
                console.log(error);
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="card card-container">
                        <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                        <p id="profile-name" className="profile-name-card"></p>
                        <form className="form-signin">
                            <span id="reauth-email" className="reauth-email"></span>
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                            <button onClick={() => this.registerWithEmail()} className="btn btn-lg btn-primary btn-block btn-signin">Register</button>
                        </form>
                        <Link to="/login" className="btn btn-lg btn-primary btn-block btn-signin">
                        <span className="glyphicon glyphicon-menu-left"></span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Registration;