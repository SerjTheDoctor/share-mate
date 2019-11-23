import React from 'react';
import './auth.scss';
import Login from './login';
import Register from './register';

class Auth extends React.Component {

    constructor() {
        super();
        this.state = {
            loginOpened: true
        }
    }

    toggleLoginOpened = () => {
        this.setState({loginOpened: !this.state.loginOpened});
    }

    render() {
        return (
            <div id="auth">
                <div className="auth-center">
                    <img src="images/logo_color.png" alt=""/>
                </div>
                <div className="login-register">
                    <div className="already-account">
                        <p className="">Don't have an account? Register now.</p>
                    </div>
                    {
                        this.state.loginOpened ?
                        <Login></Login> :
                        <Register></Register>
                    }
                </div>
            </div>
        );
    }
}

export default Auth;