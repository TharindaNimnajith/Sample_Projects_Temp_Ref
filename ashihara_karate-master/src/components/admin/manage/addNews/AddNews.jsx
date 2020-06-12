import React, { Component } from 'react';
import './AddNewsStyles.css';
import imageUpload from './ImageUpload';
import axios from 'axios'
import { Proxy } from '../../../../data/ProxyData';
import SiteLoading from '../../../siteloading/SiteLoading';
import swal from 'sweetalert';

class AddNews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topic: '',
            body: '',
            imagesUpload: [],
            imageUrls: [],
            loading: false
        }
    }



    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleImageChange = (event) => {
        this.setState({
            imagesUpload: event.target.files
        })
    }



    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ loading: true });

        const images = this.state.imagesUpload;

        imageUpload(this.state.topic, this.state.body, images).then(res => {

            console.log(res)
            const obj = {
                topic: this.state.topic,
                body: this.state.body,
                images: res
            }

            const authToken = localStorage.getItem('karate-token');
            axios.defaults.headers.common = { Authorization: `${authToken}` };
            axios
                .post(`${Proxy}/news`, obj)
                .then((response) => {

                    this.setState({
                        loading: false,
                    });
                    swal({
                        title: "Done!",
                        text: "News Added Successfully !",
                        icon: "success",
                        button: "OK",
                    }).then(res => {
                        window.location.href = "/admin"
                    });

                })
                .catch((error) => {
                    console.log(error)
                    this.setState({
                        loading: false
                    });
                });
        })


    };




    render() {

        if (this.state.loading) {
            return <SiteLoading />
        }
        return (
            <div>
                <div>
                    <div className="login-form">
                        <form>

                            <h4 className="modal-title">Add News</h4>
                            <div className="form-group">
                                <input
                                    onChange={this.handleChange}
                                    name="topic"
                                    type="text" className="form-control" placeholder="Topic" required="required" />
                            </div>
                            <div className="form-group">
                                <textarea
                                    onChange={this.handleChange}
                                    name="body"
                                    rows="5"
                                    className="form-control" placeholder="Details" required="required" />
                            </div>
                            <div className="form-group">
                                <input
                                    onChange={this.handleImageChange}
                                    name="imagesUpload"
                                    type="file"
                                    accept="image/x-png,image/gif,image/jpeg"
                                    multiple className="form-control" placeholder="Uplod images" required="required" />
                            </div>
                            {/* <div className="form-group small clearfix">
                            <label className="checkbox-inline"><input type="checkbox" /> Remember me</label>
                            <a href="#" className="forgot-link">Forgot Password?</a>
                        </div> */}
                            <input type="button"
                                onClick={this.handleSubmit}
                                className=" btn btn-block btn-lg bg-base text-white" defaultValue="Add News" />
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default AddNews;