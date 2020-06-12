import React, { Component } from "react";
import {Link} from "react-router-dom";

/**
 * Functional component
 * created 3 buttons
 * used those buttons to go to view store manager page, add store manager page and add category page
 * */
const goAdminPages = (
    <div className="jumbotron">
        <Link to={"/viewSM"} style={{textDecoration:"none"}}><input type="submit" style={{ color:"#fff", fontSize:"18px", fontWeight:"bold", backgroundColor:"#3EE2E6"}} value="View Store Managers" class="btn btn-block"/><br/><br/></Link>
        <Link to={"/addSM"} style={{textDecoration:"none"}}><input type="submit" style={{color:"#fff",fontSize:"18px", fontWeight:"bold",backgroundColor:"#C86691"}} value="Add Store Managers" class="btn btn-block" /><br/><br/></Link>
        <Link to={"/addCategory"} style={{textDecoration:"none"}}><input type="submit" style={{color:"#fff",fontSize:"18px", fontWeight:"bold",backgroundColor:"#9DDA54"}} value="Add Category" class="btn btn-block" /></Link>
    </div>
)

class AdminHome extends Component{
    adminPages(){
        return (goAdminPages);
    }
    render() {
        return (
            <div style={{margin:"10px"}}>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <button type="button" class="btn btn-sm" style={{backgroundColor:"#E1BEE7",marginLeft:"10px"}}><a className="nav-link" style={{color:"#000"}} href="/adminLogin">Logout</a></button>
                    </li>
                </ul>
                <br/>
                <div className="container">
                    <h3 style={{color: "#4A235A"}} >Admin Home Page</h3>
                    <br/>
                    {this.adminPages()}
                </div>
            </div>
        );
    }
}

export default AdminHome;