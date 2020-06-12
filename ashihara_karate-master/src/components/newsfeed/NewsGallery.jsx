import React, { Component } from 'react';
import './NewsGalleryStyles.css'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class NewsGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false,
            groups: []
        };
    }


    componentDidMount() {
        this.setState({
            groups: this.groupBy(3, this.props.images)
        })
    }

    groupBy = (amountOfItemsPerGroup, items) => {
        var groups = [],
            group,
            total = items.length;
        for (var i = 0; i < total; i += amountOfItemsPerGroup) {
            group = items.slice(i, i + amountOfItemsPerGroup);
            groups.push(group);
        }
        return groups;
    }




    imageClick = (key) => {
        this.setState({ isOpen: true, photoIndex: key })
    }

    render() {



        // console.log(imageArr)
        return (
            <div className="container lbox">
                <section>


                    

                    <div className="cards-skill">
                        {

                            this.props.images.map((ob, key) => {


                                return (
                                    <img className="card-skill" alt="ob" key={key} src={`${ob}`} onClick={() => {
                                        this.imageClick(key);
                                    }} />
                                )
                            })
                        }
                    </div>




                </section>
                {this.state.isOpen && (
                    <div className="container" style={{ zIndex: 1000 }}>
                        <Lightbox
                            mainSrc={this.props.images[this.state.photoIndex]}
                            nextSrc={this.props.images[(this.state.photoIndex + 1) % this.props.images.length]}
                            prevSrc={this.props.images[(this.state.photoIndex + this.props.images.length - 1) % this.props.images.length]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (this.state.photoIndex + this.props.images.length - 1) % this.props.images.length,
                                })
                            }
                            onMoveNextRequest={() =>
                                this.setState({
                                    photoIndex: (this.state.photoIndex + 1) % this.props.images.length,
                                })
                            }
                        />
                    </div>
                )}

            </div>
        );
    }
}

export default NewsGallery;