import React, { Component } from 'react';
import axios from 'axios';
import './LoginStyles.css';

import SiteLoading from '../../siteloading/SiteLoading';
import { Proxy } from '../../../data/ProxyData';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: [],
            loading: false
        }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        axios
            .post(`${Proxy}/login`, userData)
            .then((response) => {
                console.log(response)
                localStorage.setItem('karate-token', `Bearer ${response.data.token}`);
                this.setState({
                    loading: false,
                });
                window.location.href = "/admin"
              
            })
            .catch((error) => {
                console.log(error)
                this.setState({                    
                    loading: false
                });
            });
    };


    render() {

        
        if (this.state.loading) {
            return <SiteLoading />
        }

        return (
            <div>
                <div className="login-form">
                    <form>
                        <div className="avatar bg-base">
                            <img alt="user" style={{ width: '100%', height: '100%' }} src={require('../../../images/uclangrad2018.png')} /></div>
                        <h4 className="modal-title">Login to Your Account</h4>
                        <div className="form-group">
                            <input
                                onChange={this.handleChange}
                                name="email"
                                type="text" className="form-control" placeholder="Email" required="required" />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={this.handleChange}
                                name="password"
                                type="password" className="form-control" placeholder="Password" required="required" />
                        </div>
                        {/* <div className="form-group small clearfix">
                            <label className="checkbox-inline"><input type="checkbox" /> Remember me</label>
                            <a href="#" className="forgot-link">Forgot Password?</a>
                        </div> */}
                        <input type="button"
                            onClick={this.handleSubmit}
                            className=" btn btn-block btn-lg bg-base text-white" defaultValue="Login" />
                    </form>

                </div>
            </div>
        );
    }
}

export default Login;