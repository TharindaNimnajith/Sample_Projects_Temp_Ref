import React, { Component } from 'react';

import './NewsCard.css'

class News extends Component {
    render() {

        return (
            <div className="container">
                <div >
                    <div data-aos="fade-up" className="card mb-3 news1-card" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={this.props.data.images[0]} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.data.topic}</h5>
                                    <p className="card-text">{this.props.data.body}...</p>
                                     <a href={`/n/${this.props.data.id}`} className="btn btn-primary">Read More</a>
                                    {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Created {this.props.created}</small>
                        </div>
                    </div>
                </div>
                <br/><br/>  
            </div>



            // <div align="center">
            //     <div data-aos="fade-up" className="card news-card" >
            //         <h4 className="card-title">{this.props.data.topic}</h4>
            //         <div className="container">
            //             <div className="container">
            //                 <img className="card-img-top" src={this.props.data.images[0]} alt="news" />
            //             </div>
            //         </div>

            //         <div className="card-body">
            //             <h4 className="card-title">{this.props.data.topic}</h4>
            //             <h6 className="card-title">{this.props.created}</h6>
            //             <p className="card-text">{this.props.data.body}</p>
            //             <a href={`/n/${this.props.data.id}`} className="btn btn-primary">See More</a>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default News;