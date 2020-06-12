import React, { Component } from 'react';
import './SiteLoading.css';
import Logo from '../../images/uclangrad2018.png'


class SiteLoading extends Component {
    render() {
        return (
            <div className="overlay" align="center"> 
                <img className="logo" id="loading" src={Logo} alt="inner"/>
            </div>
        );
    }
}

export default SiteLoading;