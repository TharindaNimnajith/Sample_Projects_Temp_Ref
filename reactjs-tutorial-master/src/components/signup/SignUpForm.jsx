import React, { Component } from 'react';
import './signupStyles.css';

class SignUpForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            pw: '',
            confpw: ''
        }
    }



    inputChangeHandler = (e) => {

        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    formSubmitHandler = (e) => {
        alert(JSON.stringify(this.state))
    }

    render() {
        return (
            <form onSubmit={this.formSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">User Name</label>
                    <input type="text"
                        name="username"
                        onChange={this.inputChangeHandler}
                        className="form-control" id="exampleInputEmail1"
                        value={this.state.username} aria-describedby="emailHelp" />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        name="email"
                        type="email" onChange={this.inputChangeHandler} className="form-control" id="exampleInputEmail1" value={this.state.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                        name="pw" onChange={this.inputChangeHandler} className="form-control" id="exampleInputPassword1" value={this.state.pw} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input name="confpw"
                        type="password" onChange={this.inputChangeHandler} className="form-control" id="exampleInputPassword1" value={this.state.confpw} />
                </div>

                <button type="submit" className="btn btn-submit">Submit</button>
            </form>
        );
    }
}

export default SignUpForm;