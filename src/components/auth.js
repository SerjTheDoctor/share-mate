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
        console.log('Changing state');
        this.setState({loginOpened: !this.state.loginOpened});
    }

    render() {
        return (
            <div id="auth">
                <div className="auth-center">
                    <img src="images/logo_color.png" alt=""/>
                </div>
                <div className="login-register">
                    {
                        this.state.loginOpened ?
                        <Login toggleLoginOpened={this.toggleLoginOpened}></Login> :
                        <Register></Register>
                    }
                </div>
            </div>
        );
    }
}

export default Auth;