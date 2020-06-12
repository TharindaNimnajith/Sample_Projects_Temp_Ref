import React, { Component } from 'react';
import './FlipCardStyles.css';


class FlipCardComp extends Component {

    render() {
        return (
            <div className="pic-wrapper">
                <div data-aos="fade-up" style={{
                    borderStyle: 'solid',
                    borderColor: 'red',
                    borderRadius: '10px',
                    margin: '5%'
                }}>

                    <div
                        style={{
                            width: '100%',
                            backgroundColor: 'red',
                            color: 'white',
                            height: '40px',
                            lineHeight: '35px'
                        }}>
                        <p align="center">{this.props.details.name}</p>
                    </div>
                    <div align="center">
                        <div className="card md-8" >
                            <img className=" mem-image card-img-top "
                                src={this.props.img}
                                alt="Card cap" />

                        </div>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            backgroundColor: 'white',
                            color: 'red',
                            height: '40px',
                            lineHeight: '35px'
                        }}>
                        <p align="center">Click for more info</p>
                    </div>
                    

                </div>
            </div>
        );
    }
}

export default FlipCardComp;
