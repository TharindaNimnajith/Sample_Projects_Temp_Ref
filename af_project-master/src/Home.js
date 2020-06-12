import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import LeaderBoard from "./LeaderBoard";
import SignUp from "./SignUp";

class Home extends Component {
    render() {

        return (
            <div>

                <h2 class="w3-center">TRAVEL HUB</h2>

                <div class="w3-content w3-section" style={{width:"90%", height: "100px"}}>
                    <img class="mySlides" src="https://familytraveller.com/wp-content/uploads/2017/10/fishing-in-Negombo.jpg" style={{width:"100%"}}/>
                        <img class="mySlides" src="https://familytraveller.com/wp-content/uploads/2017/10/Sigiriya.jpg" style={{width:"100%"}}/>
                </div>
                <div>

                    <div>
                        <table style={{marginTop: "500px",marginLeft: "50px"}}  >

                            <tr>
                                <td>
                                    <div class="w3-container" style={{width: "550px"}}>
                                        <h2>Photo Card</h2>

                                        <div class="w3-card-4" style={{width:"50%"}}>
                                            <img src="https://familytraveller.com/wp-content/uploads/2017/10/fishing-in-Negombo.jpg" alt="Alps" style={{width:"100%"}}/>
                                                <div class="w3-container w3-center">
                                                    <p>The Italian / Austrian Alps</p>
                                                </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="w3-container" style={{width: "550px"}}>
                                        <h2>Photo Card</h2>

                                        <div class="w3-card-4" style={{width:"50%"}}>
                                            <img src="https://familytraveller.com/wp-content/uploads/2017/10/fishing-in-Negombo.jpg" alt="Alps" style={{width:"100%"}}/>
                                                <div class="w3-container w3-center">
                                                    <p>The Italian / Austrian Alps</p>
                                                </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="w3-container" style={{width: "550px"}}>
                                        <h2>Photo Card</h2>

                                        <div class="w3-card-4" style={{width:"50%"}}>
                                            <img src="https://familytraveller.com/wp-content/uploads/2017/10/fishing-in-Negombo.jpg" alt="Alps" style={{width:"100%"}}/>
                                                <div class="w3-container w3-center">
                                                    <p>The Italian / Austrian Alps</p>
                                                </div>
                                        </div>
                                    </div>
                                </td>

                            </tr>

                        </table>
                    </div>

                </div>
                </div>);
    }}


export default Home;
