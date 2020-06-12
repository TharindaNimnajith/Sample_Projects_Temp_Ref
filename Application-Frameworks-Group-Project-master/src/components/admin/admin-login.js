import React, { Component } from "react";
import axios from "axios";
import swal from 'sweetalert';
import {Link} from "react-router-dom";

/**
 * Functional component
 * created a button
 * used it to go to admin home page
 * */
const goAdminHome = (
    <div>
        <Link to={"/adminHome"} style={{textDecoration:"none"}}><input type="submit" style={{ color:"#fff", fontSize:"18px", fontWeight:"bold", paddingBottom:"20px", backgroundColor:"#9B59B6"}} value="Go To Admin Home" class="btn btn-block"/><br/><br/></Link>
    </div>
);

class AdminLogin extends Component{
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeUserpassword = this.onChangeUserpassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.sweetalertfunction = this.sweetalertfunction.bind(this);

        this.state = {
            name: '',
            password: '',
            isLogin: false
        }

    }
    onChangeUsername(e){
        this.setState({
            name: e.target.value
        });
    }
    onChangeUserpassword(e){
        this.setState({
            password: e.target.value
        });
    }

    /**
     * to display the successfully logged in message
     * after log in islogin is set to true
     * */
    sweetalertfunction(){
        swal({
            title: "Logged in!",
            text: "You are Successfully Logged in!",
            icon: "success",
            button: true,
        }).then(()=>{
            this.setState({
                isLogin: true
            });
        });
    }

    goAdminHome(){
        return (goAdminHome);
    }

    /**
     * create an object and pass the values in the text fields to that object
     * the values in the object is send to the admin end point by using axios
     * if the success value that is returned from the backend is true
     * display successfully logged in alert using sweetalert
     * if the success value that is returned from the backend is false
     * display an error alert
     * */
    onSubmit(e){
        e.preventDefault();


        const storemanager = {
            name: this.state.name,
            password: this.state.password
        };

        console.log(storemanager);



        axios.post('http://localhost:5000/userDetails/admin', storemanager)
            .then(res => {
                if (res.data.success === true){
                    this.sweetalertfunction();
                }
                else if(res.data.success === false){
                    swal({
                        title: "Login Error!",
                        text: res.data.message,
                        icon: "error",
                        button: true,
                        dangerMode: true,
                    });
                }
            })
    }

    /**
     * if islogin is equal to true
     * then if statement is executed
     * if login is equal to false
     * else statement is executed
     * */
    render() {
        if(this.state.isLogin){
            return (
                <div className="container">
                    <br/>
                    <br/>
                    <div className="jumbotron" style={{backgroundColor:"#E8DAEF"}}>
                        <img src={"adminwelcom.png"} style={{width:"700px", height:"200px"}}/>
                        <h1 style={{color:"#4A235A",marginLeft:"700px", fontFamily:"Lucida Console"}}>Admin</h1>
                        <br/>
                        {this.goAdminHome()}
                    </div>
                </div>
            );
        }
        return (
            <div className="container">
                <br/>
                <br/>
                <h3 style={{color: "#4A235A"}}>Admin Login</h3>
                <form onSubmit={this.onSubmit} style={{backgroundColor:"#E8DAEF"}} className="jumbotron">
                    <div className="form-group">
                        <label>Admin Name: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.name}
                               onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <label>Admin Password: </label>
                        <input type="password"
                               className="form-control"
                               value={this.state.password}
                               onChange={this.onChangeUserpassword}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Login" style={{color:"#fff",backgroundColor:"#CC00FF"}} className="btn" />
                    </div>

                </form>

            </div>
        );
    }
}
export default AdminLogin;