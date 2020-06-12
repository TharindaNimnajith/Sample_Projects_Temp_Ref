import React, { Component } from 'react';
import './styles.css'
import axios from 'axios';
import SiteLoading from '../siteloading/SiteLoading';

class ContactUs extends Component {


    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            name: '',
            email: '',
            message: '',
            subject: '',
        }
    }


    onSubmitHandler = e => {

        this.setState({
            loading: true
        })
        axios({
            method: 'post',
            url: 'https://gihan-server.azurewebsites.net/api/karate/sendMail',
            data: this.state
        }).then(res => {

            this.setState({
                loading: false
            })
            alert('Email sent successfully');
            this.setState({
                name: '',
                email: '',
                message: '',
                subject: ''
            });

        }).catch(err => {
            console.log(err);

        })


    }

    onChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {

        if (this.state.loading) {
            return (
                <SiteLoading />
            )
        } else {
            return (
                <section id="contact">
                    <div className="container">
                        <div data-aos="fade-up" className="card shadow p-3 mb-5 rounded ">
                            <br /><br />
                            <h3 className="text-center txt-base">Contact US</h3>

                            <div className="contact">
                                <div className="row">
                                    <div className="col-md-12 ">
                                        <div className="small-box contact-form">
                                            <div className="form-group">
                                                <label className="control-label col-sm-4" htmlFor="name">Name:</label>
                                                <div className="col-sm-10">
                                                    <input
                                                        value={this.state.name}
                                                        onChange={this.onChangeHandler}
                                                        type="text" className="form-control" id="name" placeholder="Enter your name" name="name" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label col-sm-4" htmlFor="email">Email:</label>
                                                <div className="col-sm-10">
                                                    <input
                                                        value={this.state.email}
                                                        onChange={this.onChangeHandler}
                                                        type="text" className="form-control" id="email" placeholder="Enter your email" name="email" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label col-sm-4" htmlFor="subject">Subject:</label>
                                                <div className="col-sm-10">
                                                    <input
                                                        value={this.state.subject}
                                                        onChange={this.onChangeHandler}
                                                        type="text" className="form-control" id="subject" placeholder="Enter the subject" name="subject" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label col-sm-4" htmlFor="comment">Comment:</label>
                                                <div className="col-sm-10">
                                                    <textarea
                                                        value={this.state.message}
                                                        onChange={this.onChangeHandler}
                                                        className=" form-control form-control-area" rows={5} name="message" id="comment" placeholder="Enter your message" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-offset-2 col-sm-10">
                                                    <button type="submit" className="btn btn-default submit-btn " onClick={this.onSubmitHandler}>Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }



    }
}

export default ContactUs;