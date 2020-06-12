import React, { Component } from 'react';

import japaneses from '../../../images/Ashihara_Karate.png'
import logo from '../../../images/uclangrad2018.png'
import './ParalaxStyles.css'
import TopNews from '../../topNews/TopNews';

class ParallaxContainer extends Component {
    render() {
        return (
            <div >
                <div className="parallax" style={{ backgroundImage: 'url(' + this.props.img + ')' }}>
                    <div className="parallax-container" style={{ height: '100vh' }} >
                        {
                            this.props.showInner && (
                                <div>
                                    <table className="logo-table" >
                                        <tbody>
                                            <tr>
                                                <td style={{ width: '30%' }} align="right">
                                                    <img src={japaneses} style={{ width: '90%' }} alt="inner" />
                                                </td>
                                                <td style={{ width: '70%' }} align="left">
                                                    <div className="parallax-container-inner" align="center" >
                                                        <img src={require('../../../images/newlogo.png')} style={{ width: '50%' }} className="" alt="inner" />
                                                        <img src={logo} style={{ width: '50%' }} className="logo" alt="inner" />
                                                        <h2 style={{ color: 'white' }}>ASHIHARA KAIKAN KARATE</h2>
                                                        <h2 style={{ color: 'white' }}>SRI LANKA</h2>
                                                      
                                                        <button className="button button2" onClick={() => {
                                                            window.location.replace('/#contact')
                                                        }}>Join US</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br /><br />
                                </div>
                            )
                        }
                        {
                            this.props.news && (
                                <TopNews/>
                            )
                        }


                    </div>
                </div>

                <div className="parallax" style={{ backgroundImage: 'url(' + this.props.img + ')' }}></div>


            </div>
        );
    }
}

export default ParallaxContainer;