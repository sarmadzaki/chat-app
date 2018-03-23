import React, { Component } from 'react'
import './login.css'
import * as firebase from 'firebase'
class Login extends Component {
    constructor(props) {
        super(props);

    }
    signInWithEmail(email, password) {
        firebase.auth().createUserWithEmailAndPassword('s@s.com', '123456')
            .then((d) => {
                console.log('signed in')
            })
            .catch(function (error) {
                console.log(error);
                var errorCode = error.code;
                var errorMessage = error.message;
            });

    }
    signOut() {
        firebase.auth().signOut().then(function () {
            console.log('Sign-out successful.')
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
                            <button onClick={() => this.signInWithEmail('s', 's')} className="btn btn-lg btn-primary btn-block btn-signin">Sign in</button>
                            <button onClick={() => this.signOut()} className="btn btn-lg btn-primary btn-block btn-signin">Sign out</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;