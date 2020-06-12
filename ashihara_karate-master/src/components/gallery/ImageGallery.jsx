import React, { Component } from 'react';
import './styles.css'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class ImageGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false,
            images: []
        };
    }


    componentDidMount() {

        this.setState({
            images: this.props.images
        })
    }




    imageClick = (key) => {
        this.setState({ isOpen: true, photoIndex: key })
    }

    render() {



        // console.log(imageArr)
        return (
            <div data-aos="fade-up" className="container lbox">
                <h1 className="text-center">{this.props.topic}</h1>
                <section id={this.props.topic}>


                    {
                        this.state.images.map((ob, key) => {


                            return (
                                <img className="pic-wrapper" alt="ob" key={key} src={ob} onClick={() => {
                                    this.imageClick(key);
                                }} />
                            )
                        })
                    }



                </section>
                {this.state.isOpen && (
                    <div style={{ zIndex: 1000 }}>
                        <Lightbox
                            mainSrc={this.state.images[this.state.photoIndex]}
                            nextSrc={this.state.images[(this.state.photoIndex + 1) % this.state.images.length]}
                            prevSrc={this.state.images[(this.state.photoIndex + this.state.images.length - 1) % this.state.images.length]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (this.state.photoIndex + this.state.images.length - 1) % this.state.images.length,
                                })
                            }
                            onMoveNextRequest={() =>
                                this.setState({
                                    photoIndex: (this.state.photoIndex + 1) % this.state.images.length,
                                })
                            }
                        />
                    </div>
                )}
                <br /><br />
            </div>
        );
    }
}

export default ImageGallery;