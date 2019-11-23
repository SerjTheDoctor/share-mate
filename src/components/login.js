import React from 'react';
import './login.scss'

class Login extends React.Component {
    render() {
        return (
            <div id="login">
                <p className="login-title">Login</p>
                <input type="text" className="field field-email" placeholder="E-mail" alt="email"/>
                <input type="password" className="field field-password" placeholder="Password" alt="password"/>
            </div>
        );
    }
}

export default Login;