import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

/**
 * functional component
 * create a table to display store manger details added by admin
 * create link to update store manager page and delete store manager page
 * */
const StoreManager = props => (
    <tr>
        <td>{props.storemanager.userid}</td>
        <td>{props.storemanager.username}</td>
        <td>{props.storemanager.contact}</td>
        <td>{props.storemanager.email}</td>
        <td>
            <Link to={"/updateSM/"+props.storemanager._id} style={{textDecoration:"none"}}>edit / </Link><Link to={"/deleteSM/"+props.storemanager._id} style={{textDecoration:"none"}}>delete</Link>
        </td>
    </tr>
)

class ViewStoreManager extends Component{
    constructor(props) {
        super(props);

        this.state = {userDetails: []};
    }

    /**
     * adding store manager details to the userDetails array using userDetails end point
     * */
    componentDidMount() {
        axios.get('http://localhost:5000/userDetails/')
            .then(response =>{
                this.setState({userDetails: response.data})
            })
            .catch((error) =>{
                console.log(error);
            })
    }

    /**
     * setting the objects in the elements in the userDetails array to the StoreManager component
     * after return it
     * */
    storeManagerList(){
        return this.state.userDetails.map(currentstoremanager =>{
            return <StoreManager storemanager={currentstoremanager} key={currentstoremanager._id}/>
        })
    }

    render() {
        return (

            <div style={{margin: "10px"}}>
                <div>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <button type="button" className="btn btn-sm"
                                    style={{backgroundColor: "#E1BEE7", marginRight: "10px"}}><a className="nav-link"
                                                                                                 style={{color: "#000"}}
                                                                                                 href="/adminHome">Back</a>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-sm"
                                    style={{backgroundColor: "#E1BEE7", marginLeft: "10px"}}><a className="nav-link"
                                                                                                style={{color: "#000"}}
                                                                                                href="/adminLogin">Logout</a>
                            </button>
                        </li>
                    </ul>
                </div>
                <br/>


                <div className="container">
                    <h3 style={{color: "#4A235A"}}>Current Store Managers</h3>
                    <table className="table" style={{backgroundColor:"#EBDEF0"}}>
                        <thead className="" style={{backgroundColor:"#AF7AC5"}}>
                        <tr>
                            <th>Store manager ID</th>
                            <th>Store manager Name</th>
                            <th>Store manager Contact</th>
                            <th>Store manager Email</th>
                            <th>Update/Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.storeManagerList()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ViewStoreManager;