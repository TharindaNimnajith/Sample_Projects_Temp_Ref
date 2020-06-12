import React, { Component } from 'react';
import axios from 'axios';
import { Proxy } from '../../data/ProxyData';
import SiteLoading from '../siteloading/SiteLoading'
import NewsGallery from './NewsGallery';

class CompleteNews extends Component {


    constructor(props) {
        super(props);
        this.state = {
            news: null,
            loading: false
        }
    }

    componentDidMount() {
        this.setState({
            loading: true,
        });
        const authToken = localStorage.getItem('karate-token');
        axios.defaults.headers.common = { Authorization: `${authToken}` };
        axios
            .get(`${Proxy}/news/${this.props.match.params.id}`)
            .then((response) => {

                response.data.created = new Date(response.data.created).toDateString();

                this.setState({
                    loading: false,
                    news: response.data
                });
                console.log(this.state.news)
            })
            .catch((error) => {
                console.log(error)
                this.setState({
                    loading: false
                });
            });
    }

    render() {

        if (this.state.loading) {
            return <SiteLoading />
        }
        if (this.state.news) {
            return (
                <div>
                    <br /><br />
                    <div align="center">
                        <div data-aos="fade-up" className="card news-card" >
                            <h4 className="card-title">{this.state.news.topic}</h4>
                            {/* <img className="card-img-top" src={this.state.news.images[0]} alt="news" /> */}
                            <NewsGallery images={this.state.news.images} />
                            <div className="card-body">
                                <h4 className="card-title">{this.state.news.topic}</h4>
                                <h6 className="card-title">{this.state.news.created}</h6>
                                <p className="card-text">{this.state.news.body}</p>

                            </div>
                        </div>
                        <br /><br />
                        <a href="/news"><button className="text-center btn bg-base text-white">Back to news</button></a>

                    </div>
                    <br /><br />

                </div>
            );
        } else {
            return <div></div>;
        }

    }
}

export default CompleteNews;