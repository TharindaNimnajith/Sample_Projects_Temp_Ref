import React, { Component } from 'react';
import './topNews.css'
import axios from 'axios'
import { Proxy } from '../../data/ProxyData';

class TopNews extends Component {


    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }


    componentDidMount() {
        const authToken = localStorage.getItem('karate-token');
        axios.defaults.headers.common = { Authorization: `${authToken}` };
        axios
            .get(`${Proxy}/news`)
            .then((response) => {

                this.setState({
                    news: response.data,
                    loading: false,
                });
                // window.location.href = "/admin"

            })
            .catch((error) => {
                console.log(error)
                this.setState({
                    loading: false
                });
            });
    }


    getTopNews = () => {
        var rows = [];
        for (var i = 0; i < 3; i++) {
            rows.push(
                <div className="fancy-cards" key={i}>
                    <div className="fancy-card">
                        <div className="top" style={{ backgroundImage: `url('${this.state.news[i].images[0]}')` }}>
                            <div className="caption">
                                <br />
                                <h3 className="title">{this.state.news[i].topic}</h3>
                                <br />
                                <a href={`/n/${this.state.news[i].id}`} className="button">Read More </a>
                            </div>
                        </div>
                        <div className="middle" />
                        <div className="bottom" />
                    </div>
                </div>);
        }
        return rows;

    }

    render() {
        return (
            <div align="center">
                <h3 className="text-center txt-base">Top News</h3>
                <div className="card-deck">
                    {
                        this.state.news.length > 0 &&
                        this.getTopNews()
                    }
                </div>
                <br/>
                <a href="/news"><h3 className="text-center txt-base">Check Out More Exciting News...</h3></a>
                <br/><br/>
            </div>
        );
    }
}

export default TopNews;