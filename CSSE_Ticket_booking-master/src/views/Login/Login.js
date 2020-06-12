import React from "react";
import "../../assets/css/SignUpStyles.css";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen.js";
import axios from "axios";


class Login extends React.Component {


    componentDidMount(){

    }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            reloaded: false
        };
    }

    onSubmitHandler = e => {
        e.preventDefault();

        this.setState({
            isLoading: true
        });


        axios({
            method: 'post',
            url: 'http://localhost:8081/authenticate',
            data:
                {
                    "username": this.state.username,
                    "password": this.state.password,
                }

        }).then(res => {

            localStorage.setItem('csse_we_32', res.data.token);
            window.location.replace(
            "/");
        }).catch(err => {
            console.log(err)
        }).finally(x => {
            this.setState({
                isLoading: false,
                email: '',
                password: ''
            })
            window.location.replace('/user')

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
                {this.state.isLoading && <LoadingScreen/>}

                <div className="signup-form">
                    <form onSubmit={this.onSubmitHandler}>
                        <h2>Login</h2>
                        <p>Please login using your credentials..!</p>
                        <hr/>


                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-user"/> </span>
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
                                <span className="input-group-addon"><i className="fa fa-lock"/><i className="fa fa-check"/></span>
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
                            <button type="submit" className="btn btn-primary btn-lg">
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        Don't have an account ? <a href="/signup">Create a new one here </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
