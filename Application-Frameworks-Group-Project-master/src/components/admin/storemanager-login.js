import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";
import {Link} from "react-router-dom";

/**
 * Functional component
 * created a button
 * used it to go to category view page
 * */
const goCategoryHome = (
    <div>
        <Link to={"/gocategory"} style={{textDecoration:"none"}}><input type="submit" style={{ color:"#fff", fontSize:"18px", fontWeight:"bold", backgroundColor:"#9B59B6"}} value="Go to Category List" class="btn btn-lg btn-block"/><br/><br/></Link>
    </div>
)

class StoreManagerLogin extends Component{
    constructor(props) {
        super(props);

        this.onChangeUserid = this.onChangeUserid.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeUsercontact = this.onChangeUsercontact.bind(this);
        this.onChangeUseremail = this.onChangeUseremail.bind(this);
        this.onChangeUserpassword = this.onChangeUserpassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.sweetalertfunction = this.sweetalertfunction.bind(this);

        this.state = {
            userid: 0,
            username: '',
            contact: 0,
            email: '',
            password: '',
            isLogin: false,
            smdetails: []
        }
    }

    onChangeUserid(e){
        this.setState({
            userid: e.target.value
        });
    }
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onChangeUsercontact(e){
        this.setState({
            contact: e.target.value
        });
    }
    onChangeUseremail(e){
        this.setState({
            email: e.target.value
        });
    }
    onChangeUserpassword(e){
        this.setState({
            password: e.target.value
        });
    }
    goCategoryHome(){
        return (goCategoryHome);
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

    /**
     * create an object and pass the values in the text fields to that object
     * the values in the object is send to the signin end point by using axios
     * if the success value that is returned from the backend is true
     * display successfully logged in alert using sweetalert
     * if the success value that is returned from the backend is false
     * display an error alert
     * */
    onSubmit(e){
        e.preventDefault();

        const storemanager = {
            email: this.state.email,
            password: this.state.password
        };

        console.log(storemanager);

        axios.post('http://localhost:5000/userDetails/signin', storemanager)
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
            });

    }

    /**
     * if islogin is equal to true
     * then if statement is executed
     * if login is equal to false
     * else statement is executed
     * */
    render() {
        if (this.state.isLogin){
            return (
                <div className="container">
                    <br/>
                    <br/>
                    <div className="jumbotron" style={{backgroundColor:"#E8DAEF"}}>
                        <img src={"adminwelcom.png"} style={{width:"700px", height:"200px"}}/>
                        <h1 style={{color:"#4A235A",marginLeft:"500px", fontFamily:"Lucida Console"}}>to the Web Site</h1>
                        <br/>
                        {this.goCategoryHome()}
                    </div>

                </div>
            );
        }
        return (
            <div className="container">
                <br/>
                <br/>
                <h3 style={{color: "#4A235A"}}>Store Manager Login</h3>
                <form onSubmit={this.onSubmit} style={{backgroundColor:"#E8DAEF"}} className="jumbotron">
                    <div className="form-group">
                        <label>Store Manager Email: </label>
                        <input type="email"
                               className="form-control"
                               value={this.state.email}
                               onChange={this.onChangeUseremail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Store Manager Password: </label>
                        <input type="password"
                               className="form-control"
                               value={this.state.password}
                               onChange={this.onChangeUserpassword}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Login" style={{color:"#fff",backgroundColor:"#CC00FF"}} className="btn"/>
                    </div>
                </form>

            </div>
        );
    }
}
export default StoreManagerLogin;