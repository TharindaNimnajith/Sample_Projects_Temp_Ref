import React, {Component} from "react";
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import {
    MDBRow,
    MDBCol,MDBCarouselItem,MDBCarousel,MDBCarouselInner,MDBView,
    MDBCardBody, MDBCard, MDBIcon, MDBCardTitle, MDBCardImage, MDBBtn, MDBCardText,

} from 'mdbreact';
import './AboutUs.css';
import 'sweetalert2/src/sweetalert2.scss';
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink,  } from
        "mdbreact"


export default class AboutUs extends Component {
    state = {
        activeItem: "1"
    }

    toggle = tab => () => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
    }




    render() {
        return (
            <div id='parallaxintro'>
                <MDBCard className="my-5 px-5 pb-5">
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md="7">

                                <section class="my-5">
                                        <div class="col-lg-11">
                                            <div id="map-container-section" class="z-depth-1-half map-container-section mb-4" style={{height: "500px"}}>
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7984671121426!2d79.97075581409538!3d6.914682820412032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2slk!4v1590153528945!5m2!1sen!2slk" frameborder="0"
                                                        style= {{border:"0"}} allowfullscreen></iframe>
                                            </div>

                                            <div class="row text-center">
                                                <div class="col-md-4">
                                                    <MDBCol size="1">
                                                        <MDBIcon icon="map-marker-alt" size="lg"
                                                                 className="indigo-text"/>
                                                    </MDBCol>
                                                    <p>SLIIT Malabe Campus, New Kandy Rd, Malabe 10115</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <MDBCol size="1">
                                                        <MDBIcon icon="phone" size="lg"
                                                                 className="indigo-text"/>
                                                    </MDBCol>
                                                    <p>0772218111</p>

                                                </div>
                                                <div class="col-md-4">
                                                    <MDBCol size="1">
                                                        <MDBIcon icon="envelope" size="lg"
                                                                 className="indigo-text"/>
                                                    </MDBCol>
                                                    <p>1995gnanod@gmail.com</p>

                                                </div>
                                            </div></div>
                                </section>
                            </MDBCol>


                            <MDBCol md="4" style={{paddingTop: "4rem", paddingLeft: "0rem", textAlign: "left"}}>
                                <MDBRow className="mb-3">
                                    <MDBCol md="1" size="2">
                                        <MDBIcon icon="book" size="2x" className="cyan-text" />
                                    </MDBCol>

                                    <MDBCol md="11" size="10">
                                        <h5 className="font-weight-bold mb-3">Subject</h5>
                                        <p className="grey-text">
                                            The ultimate project concept is to handle three device users; the admin, customer, and store manager where they are allowed to execute the system's normal CRUD operations.
                                        </p>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className="mb-3">
                                    <MDBCol md="1" size="2">
                                        <MDBIcon icon="code" size="2x" className="red-text" />
                                    </MDBCol>
                                    <MDBCol md="11" size="10">
                                        <h5 className="font-weight-bold mb-3">Technology</h5>
                                        <p className="grey-text">
                                            1.HTML/JavaScript front end<br/>
                                            2.ReactJS<br/>
                                            3.NodeJS<br/>
                                            4.ExpressJS<br/>
                                            5.Spring Boot Framework<br/>
                                            6.JSON base Web Services<br/>
                                            7.NoSQL Database (MongoDB)<br/>
                                            8.JEST<br/>
                                        </p>
                                    </MDBCol>
                                </MDBRow>

                                <MDBRow className="mb-3">
                                    <MDBCol md="1" size="2">
                                        <MDBIcon icon="users" size="2x" className="green-text" />
                                    </MDBCol>
                                    <MDBCol md="11" size="10">
                                        <h5 className="font-weight-bold mb-3">Group Members</h5>
                                        <p className="grey-text">
                                            1.Akalanka P.K.G.C - IT18045918 <br/>
                                            2.Gunasekara R.P.T.I - IT18051780<br/>
                                            3.Rajapaksha H.M.U.D - IT18051612<br/>
                                            4.Vidhanaarachchi S.P - IT18078510<br/>
                                        </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>


                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>



            </div>
        );
    }
}
