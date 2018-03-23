import React, { Component } from 'react'
import './login.css'
import * as firebase from 'firebase'
import { Link } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUser: false,
            isError: false,
            errorMessage: ''
        }
        this.registerWithEmail = this.registerWithEmail.bind(this);
        console.log('USER ', firebase.auth().currentUser);
    }

    componentDidUpdate() {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log('user', user);
            } else {
                console.log('not found')
            }
        });
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

    signInWithEmail(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(snapshot => {
            })
            .catch(function (error) {
                console.log(error.message);
                this.setState({
                    isError: true,
                    errorMessage: error.message
                })
            });
    }
    signOut() {
        firebase.auth().signOut().then(function () {
            console.log('Sign-out successful.')
            this.setState({
                isUser: false
            })
        }).catch(function (error) {
            console.log('An error happened.')
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
                            <div id="remember" className="checkbox">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                            </div>
                            <button onClick={() => this.signInWithEmail('sarmad.zaki@yahoo.com', '123456')} className="btn btn-lg btn-primary btn-block btn-signin">Sign in</button>
                        </form>
                        <Link to="/register" className="btn btn-lg btn-primary btn-block btn-signin">Register</Link>
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;