import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

class UpdateStoreManager extends Component{
    constructor(props) {
        super(props);

        this.onChangeUserid = this.onChangeUserid.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeUsercontact = this.onChangeUsercontact.bind(this);
        this.onChangeUseremail = this.onChangeUseremail.bind(this);
        this.onChangeUserpassword = this.onChangeUserpassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            userid: 0,
            username: '',
            contact: 0,
            email: '',
            password: ''
        }
    }

    /**
     * setting the details of the store manager that admin wants to update
     * by using the object id
     * */
    componentDidMount() {
        axios.get('http://localhost:5000/userDetails/'+this.props.match.params.id)
            .then(response =>{
                console.log(response.data)
                this.setState({
                    userid: response.data.userid,
                    username: response.data.username,
                    contact: response.data.contact,
                    email: response.data.email,
                    password: response.data.password,
                })
            })
            .catch(function (error) {

                console.log(error);
            })
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

    /**
     * create an object and pass the values in the text fields to that object
     * checking password is valid
     * if it is not valid
     * display an error message
     * if it is valid
     * the values in the object is send to the update end point by using axios
     * if the success value that is returned from the backend is true
     * display successfully added alert using sweetalert
     * text fields change to empty
     * if the success value that is returned from the backend is false
     * display an error alert
     * */
    onSubmit(e){
        e.preventDefault();

        const storemanager = {
            userid: this.state.userid,
            username: this.state.username,
            contact: this.state.contact,
            email: this.state.email,
            password: this.state.password
        }

        console.log(storemanager);


        let pass = '((?=.*[a-z])(?=.*[@#$%!]).{6,40})';
        if (storemanager.password.match(pass)) {
            axios.put('http://localhost:5000/userDetails/update', storemanager)
                .then(res => {
                    if (res.data.success === true) {
                        swal({
                            title: "Store Manager Updated",
                            text: "You are Successfully Updated Store Manager Details.",
                            icon: "success",
                            button: true,
                        }).then(()=>{
                            this.setState({
                                userid: 0,
                                username: '',
                                contact: 0,
                                email: '',
                                password: ''
                            });
                        });
                    }
                    if (res.data.success === false) {
                        swal({
                            title: "Store Manager Details Not Updated!",
                            text: res.data.message,
                            icon: "error",
                            button: true,
                            dangerMode: true,
                        });
                    }
                });
        }
        else {
            swal({
                title: "Store Manager Not Updated!",
                text: "Please Enter the valid Password",
                icon: "error",
                button: true,
                dangerMode: true,
            });
        }
    }


    render() {
        return (

            <div style={{margin: "10px"}}>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <button type="button" className="btn btn-sm"
                                style={{backgroundColor: "#E1BEE7", marginRight: "10px"}}><a className="nav-link active"
                                                                                             style={{color: "#000"}}
                                                                                             href="/viewSM">Back</a></button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-sm"
                                style={{backgroundColor: "#E1BEE7", marginLeft: "10px"}}><a className="nav-link"
                                                                                            style={{color: "#000"}}
                                                                                            href="/adminLogin">Logout</a>
                        </button>
                    </li>
                </ul>
                <br/>

                <div className="container">
                    <h3 style={{color: "#4A235A"}}>Update Store Manager</h3>
                    <form onSubmit={this.onSubmit} className="jumbotron" style={{backgroundColor:"#FFFFCC"}}>
                        <div className="form-group">
                            <label>Store Manager ID: </label>
                            <input type="text" className="form-control" onChange={this.onChangeUserid} value={this.state.userid} readOnly/>
                        </div>
                        <div className="form-group">
                            <label>Store Manager Name: </label>
                            <input type="text"
                                   className="form-control"
                                   value={this.state.username}
                                   onChange={this.onChangeUsername}
                            />
                        </div>
                        <div className="form-group">
                            <label>Store Manager Contact: </label>
                            <input type="text"
                                   className="form-control"
                                   value={this.state.contact}
                                   onChange={this.onChangeUsercontact}
                            />
                        </div>
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
                            <input type="submit" value="Update StoreManagers" style={{color:"#fff",backgroundColor:"#FF9900"}} className="btn"/>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default UpdateStoreManager;