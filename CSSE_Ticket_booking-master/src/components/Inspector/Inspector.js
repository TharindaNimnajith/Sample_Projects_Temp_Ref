import React, {Component} from 'react';
import axios from "axios";

class Inspector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            fullname:'',
            email:'',
            nic:'',
            contactNo:'',
            userType:'',
            profileImg:'',
        }

    }

    onSubmitHandler = e => {
        e.preventDefault();

        this.setState({
            isLoading: true
        });

        console.log(this.state);
        axios({
            method: 'post',
            url: 'http://localhost:8081/api/v1/users/inspector',
            data:
                {
                    "username": this.state.username,
                    "password": this.state.password,
                    "userFullName": this.state.fullname,
                    "email": this.state.email,
                    "creditCardNo": '',
                    "nic": this.state.nic,
                    "contactNo": this.state.contactNo,
                    "userType": "INSPECTOR",
                    "profileImg": ''
                }

        }).then(res => {

            console.log(res);
            localStorage.setItem('csse_we_32', res.data.token);
            window.location.replace("/admin/addInspector");

        }).catch(err => {
            console.log('error'.err);
        }).finally(x => {
            this.setState({
                isLoading: false,
                email: '',
                password: ''
            })

        });
    };

    onChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };





    render() {
        return (
            <div>
                <div className="addInspector-form">
                    <form onSubmit={this.onSubmitHandler}>
                        <h2>Add New Inspector</h2>
                        <hr/>

                        <div className="form-group">
                            <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-user"/>
                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    placeholder="Username"
                                    required="required"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-user"/>
                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="fullname"
                                    placeholder="Full Name"
                                    required="required"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>


                        <div className="form-group">
                            <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-paper-plane"/>
                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Email Address"
                                    required="required"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-mobile"/>
                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="contactNo"
                                    placeholder="Mobile Number"
                                    required="required"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-id-card"/>
                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nic"
                                    placeholder="NIC"
                                    required="required"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-lock"/>
                </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    required="required"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-lock"/>
                  <i className="fa fa-check"/>
                </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="confirm_password"
                                    placeholder="Confirm Password"
                                    required="required"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-lg">
                                Add
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        Already have an account? <a href="/login">Login here</a>
                    </div>
                </div>

            </div>
        );
    }


}

export default Inspector;