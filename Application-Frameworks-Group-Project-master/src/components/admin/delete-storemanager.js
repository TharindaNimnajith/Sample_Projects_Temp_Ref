import React, { Component } from "react";
import axios from "axios";
import swal from 'sweetalert';

class DeleteStoreManager extends Component{
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
     * setting the details of the store manager that admin wants to delete
     * by using the object id
     * */
    componentDidMount() {
        axios.get('http://localhost:5000/userDetails/'+this.props.match.params.id)
            .then(response =>{
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
     * asking admin that he exactly want to delete store manager by using sweetalert
     * if admin gives cancel
     * then store manager will not delete
     * if admin gives ok
     * the values in the object is send to the delete end point by using axios
     * if the success value that is returned from the backend is true
     * display successfully deleted alert using sweetalert
     * text fields converted to empty
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

        swal({
            title: "Are you sure?",
            text: "You want to Delete "+storemanager.username+" Store Manager.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.post('http://localhost:5000/userDetails/delete', storemanager)
                        .then(res => {
                            if (res.data.success === true){
                                swal("Poof! This Store Manager is Deleted!", {
                                    icon: "success",
                                    buttons: "success",
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
                        });
                } else {
                    swal("This Store Manager is not Deleted!", {
                        icon: "success",
                        buttons: "success",
                    });
                }
            });
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
                    <h3 style={{color: "#4A235A"}}>Delete Store Manager</h3>

                    <form onSubmit={this.onSubmit} className="jumbotron" style={{backgroundColor:"#FFEBEE"}}>
                        <div className="form-group">
                            <label>Store Manager ID: </label>
                            <input type="text" className="form-control" onChange={this.onChangeUserid} value={this.state.userid} readOnly/>
                        </div>
                        <div className="form-group">
                            <label>Store Manager Name: </label>
                            <input type="text" className="form-control" onChange={this.onChangeUsername} value={this.state.username} readOnly/>
                        </div>
                        <div className="form-group">
                            <label>Store Manager Contact: </label>
                            <input type="text" className="form-control" onChange={this.onChangeUsercontact} value={this.state.contact} readOnly/>
                        </div>
                        <div className="form-group">
                            <label>Store Manager Email: </label>
                            <input type="text" className="form-control" onChange={this.onChangeUseremail} value={this.state.email} readOnly/>
                        </div>
                        <div className="form-group">
                            <label>Store Manager Password: </label>
                            <input type="password" className="form-control" onChange={this.onChangeUserpassword} value={this.state.password} readOnly/>
                        </div>

                        <div className="form-group">
                            <input type="submit" value="Delete StoreManagers" style={{color:"#fff",backgroundColor:"#F23A59"}} className="btn"/>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default DeleteStoreManager;