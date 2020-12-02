import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="loginPage">
                <div className="loginContainer">
                    <h2>Login</h2>
                    <input type="text" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                    <button>Login</button>
                </div>
            </div>
        )
    }
}

export default Login;
