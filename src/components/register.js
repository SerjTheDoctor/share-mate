import React from 'react';
import './register.scss'
import { Redirect } from 'react-router-dom';
import { AuthRegister } from '../services/auth';
class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmedPassword: '',
            toCompleteProfilePage: false
        }
    }

    handleSubmit = () => {
        if (this.state.password !== this.state.confirmedPassword)
            return ;

        AuthRegister(this.state.firstName, this.state.lastName, this.state.email, this.state.phoneNumber, this.state.password)
            .then(response => response.json())
            .then(res => {
                if (res === 'true') {
                    console.log('Successfully logged in.');
                    this.setState({toCompleteProfilePage: true});
                } else {
                    console.warn('Hmm, the database said no.');
                }
            })
            .catch(e => console.error(e));
    }

    render() {
        if (this.state.toCompleteProfilePage) {
            return <Redirect to='/home'/>
        }
        return (
            <div id="register">
                <p className="register-title">Register</p>
                <div className="already-account">
                    <p className="blue-link" onClick={() => this.props.toggleLoginOpened()}>
                        Already have an account? Sign in.
                    </p>
                </div>

                
                <input type="text" className="field field-FirstName" placeholder="First Name" alt="Name"  onChange={(event) => this.setState({firstName: event.target.value})} />
                <input type="text" className="field field-LastName" placeholder="Last Name" alt="Name" onChange={(event) => this.setState({lastName: event.target.value})} />
                <input type="email" className="field field-email" placeholder="E-mail" alt="email" onChange={(event) => this.setState({email: event.target.value})} />
                <input type="tel" className="field field-phone" placeholder="Phone number" alt="number" onChange={(event) => this.setState({phoneNumber: event.target.value})} />
                <input type="password" className="field field-password" placeholder="Password" alt="password" onChange={(event) => this.setState({password: event.target.value})} />
                <input type="password" className="field field-password" placeholder="Confirm password" alt="password" 
                    onChange={(event) => this.setState({confirmedPassword: event.target.value})} 
                    onKeyDown={(event) => {
                        if (event.keyCode === 13) {
                            this.handleSubmit();
                        }
                    }}
                />

                <button onClick={this.handleSubmit} 
                    className="register-button">Register</button>
            </div>
        );
    }
}

export default Register;