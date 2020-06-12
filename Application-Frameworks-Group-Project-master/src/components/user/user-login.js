import React, { Component } from "react";
import axios from "axios";
import swal from 'sweetalert';
import {Link} from "react-router-dom";




class UserLogin extends Component{
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


    onSubmit(e){
        e.preventDefault();


        const user = {
            name: this.state.name,
            password: this.state.password
        };

        if(user.name == "user" && user.password){

            swal({
                title: "Logged in!",
                text: "You are Successfully Logged in!",
                icon: "success",
                button: true,
            })
            window.location = "/selectPaymentMethod"


        }else{


            swal({
                title: "Logged in Failed!",
                text: "Please Enter the correct Username and Password!",
                icon: "warning",
                button: true,
            })
        }

        console.log(user);




    }


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
                <h2 >Please Login before placing the order!</h2>
                <br/>
                 <hr/>
                <h3 style={{color: "#4A235A"}}>User Login</h3>
                <form onSubmit={this.onSubmit} style={{backgroundColor:"#E8DAEF"}} className="jumbotron">
                    <div className="form-group">

                        <label>User Name: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.name}
                               onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
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
export default UserLogin;