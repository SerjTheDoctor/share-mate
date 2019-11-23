import React from 'react';
import './login.scss'

class Login extends React.Component {
    render() {
        return (
            <div id="login">
                <p className="login-title">Login</p>
                
                <div className="already-account">
                    <p className="blue-link" onClick={() => this.props.toggleLoginOpened()}
                        >Don't have an account? Register now.</p>
                </div>

                <input type="text" className="field field-email" placeholder="E-mail" alt="email"/>
                <input type="password" className="field field-password" placeholder="Password" alt="password"/>
                <div className="forgot-password">
                    Forgot password?
                </div>

                <button className="login-button">Login</button>
            </div>
        );
    }
}

export default Login;