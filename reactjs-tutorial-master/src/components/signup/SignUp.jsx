import React, { Component } from 'react';
import SignUpForm from './SignUpForm'
import './signupStyles.css'

class SignUp extends Component {
    render() {
        return (
            <div className="signup-main">
              
                <div className="signup-box-form">
                    <SignUpForm />
                </div>
                <div className="signup-box-name">
                    <h1 className="title-text">SIGN UP</h1>
                </div>

            </div>
        );
    }
}

export default SignUp;