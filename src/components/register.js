import React from 'react';
import './register.scss'
class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            PhoneNumber: '',
            Password: '',
            ConfirmedPassword: ''
        }
    }

    render() {
        return (
            <div id="register">
                <p className="register-title">Register</p>
                <div className="already-account">
                    <p className="blue-link" onClick={() => this.props.toggleLoginOpened()}>
                        Already have an account? Sign in.
                    </p>
                </div>

                
                <input type="text" className="field field-FirstName" placeholder="First Name" alt="Name"  onChange={(event) => this.setState({FirstName: event.target.value})} />
                <input type="text" className="field field-LastName" placeholder="Last Name" alt="Name" onChange={(event) => this.setState({LastName: event.target.value})} />
                <input type="text" className="field field-email" placeholder="E-mail" alt="email" onChange={(event) => this.setState({Email: event.target.value})} />
                <input type="tel" className="field field-phone" placeholder="Phone number" alt="number" onChange={(event) => this.setState({PhoneNumber: event.target.value})} />
                <input type="password" className="field field-password" placeholder="Password" alt="password" onChange={(event) => this.setState({Password: event.target.value})} />
                <input type="password" className="field field-password" placeholder="Confirm password" alt="password" onChange={(event) => this.setState({LastName: event.target.value})} />

                <button className="register-button">Register</button>
            </div>
        );
    }
}

export default Register;