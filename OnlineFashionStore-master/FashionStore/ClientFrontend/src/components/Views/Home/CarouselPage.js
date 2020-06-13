import React, {Component} from 'react';
import {MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer} from
        "mdbreact";
import './Home.css'

export default class CarouselPage extends Component {

    render() {
        return (
            <MDBContainer  fluid size="sm" >
                <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                >
                    <MDBCarouselInner >
                        <MDBCarouselItem itemId="1" className="">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src="https://s3.ap-south-1.amazonaws.com/www.kellyfelder.com/banners/4f587420069060f35438cdb84b8e11273b054d6d.jpg"
                                    alt="First slide"
                                />
                                <MDBMask overlay="black-light"/>
                            </MDBView>

                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                                    alt="Second slide"
                                />
                                <MDBMask overlay="black-strong"/>
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">Strong mask</h3>
                                <p>Second text</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                                    alt="Third slide"
                                />
                                <MDBMask overlay="black-slight"/>
                            </MDBView>

                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
        );
    }
}
