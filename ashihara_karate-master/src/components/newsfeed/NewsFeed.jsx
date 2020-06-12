import React, { Component } from 'react';
import axios from 'axios';
import News from './News';
import SiteLoading from '../siteloading/SiteLoading';
import { Proxy } from '../../data/ProxyData';

class NewsFeed extends Component {


    constructor(props) {
        super(props);
        this.state = {
            news: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        })

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



    render() {


        if (this.state.loading) {
            return <SiteLoading />
        }
        return (
            <div className="container">
                <br /><br />

                {
                    this.state.news.map((data,key) => {                          
                        
                        let date = new Date(data.created).toDateString();
                        
                        return <News key={key} data={data} created={date}  />
                    })
                }

               
                <br /><br />
            </div>
        );
    }
}

export default NewsFeed;