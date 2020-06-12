import React, { Component } from 'react';
import './loginStyles.css'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''

        }
    }

    onSubmitHandler = () => {
        alert(JSON.stringify(this.state))

    }

    onChangeHandler = (e) => {
        const {name, value} = e.target;
       
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="login-parent">
                <div className="login-name">
                    <h1 className="title-login">LOGIN</h1>
                </div>
                <div className="login-form">
                    <form onSubmit={this.onSubmitHandler}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input name="email" onChange={this.onChangeHandler} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input name="password" onChange={this.onChangeHandler} type="password" className="form-control" id="exampleInputPassword1" value={this.state.password} />
                        </div>



                        <button type="submit" className="btn submit-button">Submit</button>
                    </form>

                </div>
            </div>
        );
    }
}

export default Login;