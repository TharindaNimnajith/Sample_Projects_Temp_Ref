import React, {Component} from 'react';
import {
    MDBCard, MDBCardBody,
    MDBCollapse, MDBContainer, MDBIcon, MDBInput,
    MDBMask,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem, MDBNavLink, MDBRow, MDBView
} from "mdbreact";
import {Route, Switch} from "react-router-dom";

import Home from "../Views/Home/Home";
import Cart from "../Views/Home/Cart";
import {TestComponent} from "../Views/Home/TestComponent";
import {HomePageImage} from "../Views/Home/HomePageImage";
import {ItemDetail} from "../Views/Item/ItemDetail";
import Wishlist from "../Views/Wishlist/Wishlist";
import './Navigationbar.css'
import {MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCol, MDBAlert} from 'mdbreact';
import {Itemsaccordingtocategory} from "../Views/Category/Itemsaccordingtocategory";
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import styled from "styled-components";
import profile from "../Views/Profile/profile";
import axios from "axios";
import constants from "../Constants/constants";
import Login from "../Views/Login/Login";
import NewLogin from "../Views/Login/NewLogin";
import Logout from "../Views/LogOut/Logout";
import profileEdit from "../Views/Profile/profileEdit";
import AboutUs from "../Views/Profile/AboutUs";

export default class Navigationbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header>

                    <MDBNavbar color="black" fixed="top" dark expand="md"
                    >
                        <MDBNavbarBrand href="/">
                            <strong>GSTD Stores</strong>
                        </MDBNavbarBrand>
                        {/*<MDBCollapse isOpen={this.state.collapse} navbar>*/}
                        <MDBNavbarNav left>

                            <MDBNavItem>
                                <MDBNavLink to="/" className="ml-auto">
                                    <MDBBtn color="#000"> &nbsp;&nbsp;&nbsp;Home</MDBBtn>
                                </MDBNavLink>
                            </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/aboutUs" className="ml-auto">
                                            <MDBBtn color="#000"> &nbsp;&nbsp;&nbsp;About Us</MDBBtn>
                                        </MDBNavLink>
                                    </MDBNavItem>

                            {
                                localStorage.getItem("CustomerLogged") === "CustomerLogged" ?

                                    <MDBNavItem>
                                        <MDBNavLink to="/profile" className="ml-auto">
                                            <MDBBtn color="#000"> <i className="fas fa-user"></i>&nbsp;&nbsp;&nbsp;Profile</MDBBtn>
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    :
                                    ''
                            }
                            {
                                localStorage.getItem("CustomerLogged") === "CustomerLogged" ?
                                    <MDBNavItem>
                                        <MDBNavLink to="/cart" className="ml-auto">
                                            <MDBBtn color="#000"> <i className="fas fa-cart-plus"></i>&nbsp;&nbsp;&nbsp;Cart</MDBBtn>
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    :
                                    ''
                            }

                        </MDBNavbarNav>
                        <MDBNavbarNav right>

                            {
                                localStorage.getItem("CustomerLogged") === "CustomerLogged" ?
                                    <MDBNavItem>
                                        <MDBNavLink to="/Wishlist" className="ml-auto">
                                            <MDBBtn color="#000"> <i className="fas fa-heart"></i>&nbsp;&nbsp;&nbsp;WishList</MDBBtn>
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    :
                                    ''
                            }

                            {
                                localStorage.getItem("CustomerLogged") === "CustomerLogged" ?

                                    <MDBNavItem>
                                        <MDBNavLink to="/logout" className="ml-auto">
                                            <MDBBtn color="#000"> <i className="fas fa-user"></i>&nbsp;&nbsp;&nbsp;LogOut</MDBBtn>
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    :
                                    <MDBNavItem>
                                        <MDBNavLink to="/Login" className="ml-auto">
                                            <MDBBtn color="#000"> <i className="fas fa-user"></i>&nbsp;&nbsp;&nbsp;Login</MDBBtn>
                                        </MDBNavLink>
                                    </MDBNavItem>
                            }


                        </MDBNavbarNav>
                        {/*</MDBCollapse>*/}
                    </MDBNavbar>

                    <Route exact path="/" component={HomePageImage}/>
                    <Route exact path="/Login" component={NewLogin}/>

                </header>

                <main className="container-fluid">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/test" component={TestComponent}/>
                        <Route exact path="/item/:id/:colorId" component={ItemDetail}/>
                        <Route exact path="/itemsaccordingtocategory/:id" component={Itemsaccordingtocategory}/>
                        <Route exact path="/Cart" component={Cart}/>
                        <Route exact path="/Wishlist" component={Wishlist}/>
                        <Route exact path="/profile" component={profile}/>
                        <Route exact path="/logout" component={Logout}/>
                        <Route exact path="/aboutUs" component={AboutUs}/>
                        <Route exact path="/profileEdit" component={profileEdit}/>
                    </Switch>
                </main>
            </div>
        );


    }
}
const ButtonContainer = styled.button`
 text-transform:capitalize;
 font-size:1rem;
 background:transparent; 
 color:#fff;
 border-radius:0.4rem;
 border:0rem;
 cursor:pointer;
 transition:all 0.5s ease-in-out;
 &:hover{
    background-color: black;
 }
  &:focus{
    outline:none;
 }
 
`;
