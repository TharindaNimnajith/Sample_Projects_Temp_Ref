import React, { Component } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'



class Navbar extends Component{
    render() {
        return (
            <nav style={{backgroundColor: "#8E44AD"}} className="navbar navbar-dark navbar-expand-lg">
                <Link to="/nav" className="navbar-brand">Admin / Store Manager Login</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/adminLogin" className="nav-link">Admin Login</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/smLogin" className="nav-link">Store Managers Login</Link>
                        </li>

                    </ul>
                    <Link to="/wishlist" className="nav-link"><FontAwesomeIcon icon={faHeart}/></Link>
                    <Link to="/cartItems" className="nav-link"><FontAwesomeIcon icon={faShoppingCart}/></Link>
                </div>
            </nav>
        );
    }
}
export default Navbar;