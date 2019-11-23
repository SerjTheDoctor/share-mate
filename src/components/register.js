import React from 'react';
import './register.scss'
class Register extends React.Component {
    render() {
        return (
            <div id="register">
                <p className="register-title">Register</p>
                <div className="already-account">
                    <p className="blue-link" onClick={() => this.props.toggleLoginOpened()}>
                        Already have an account? Sign in.
                    </p>
                </div>

                
                <input type="text" className="field field-FirstName" placeholder="First Name" alt="Name"/>
                <input type="text" className="field field-LastName" placeholder="Last Name" alt="Name"/>
                <input type="text" className="field field-email" placeholder="E-mail" alt="email"/>
                <input type="tel" className="field field-phone" placeholder="Phone number" alt="number"/>
                <input type="password" className="field field-password" placeholder="Password" alt="password"/>
                <input type="password" className="field field-password" placeholder="Confirm password" alt="password"/>

                <button className="register-button">Register</button>
            </div>
        );
    }
}

export default Register;