import React, { Component } from 'react';
import axios from 'axios';
import { Proxy } from '../../../../data/ProxyData';
import SiteLoading from '../../../siteloading/SiteLoading';
import swal from 'sweetalert';
import { storage } from '../../../../firebase/FirebaseInit'

class ViewAllNews extends Component {


    constructor(props) {
        super(props);
        this.state = {
            news: [],
            loading: false
        }
    }

    fetchData = () => {
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

    componentDidMount() {
        this.setState({
            loading: true
        })

        this.fetchData();
    }

    deleteNews = (news) => {
        console.log('delete', news.id)
        swal({
            title: "Are you sure?",
            text: `${news.topic} will be deleted. Once deleted, you will not be able to recover this news!`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {

                if (willDelete) {
                    this.setState({
                        loading: true,
                    });
                    news.images.map(url => {
                        storage.refFromURL(url).delete();
                    })


                    const authToken = localStorage.getItem('karate-token');
                    axios.defaults.headers.common = { Authorization: `${authToken}` };
                    axios
                        .delete(`${Proxy}/news/${news.id}`)
                        .then((response) => {

                            this.setState({
                                loading: false,
                            });
                            swal({
                                title: "Done!",
                                text: "Selected News Deleted !",
                                icon: "success",
                                button: "OK",
                            }).then(res => {
                                this.fetchData();
                            });

                        })
                        .catch((error) => {
                            console.log(error)
                            this.setState({
                                loading: false
                            });
                        });
                }
            });

    }

    render() {


        if (this.state.loading) {
            return <SiteLoading />
        }

        return (
            <div>
                <div>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date</th>
                                <th scope="col">Topic</th>
                                <th scope="col">Description</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.state.news.map((news, key) => {
                                    let date = new Date(news.created).toDateString();
                                    return (
                                        <tr key={key}>
                                            <th scope="row">{key + 1}</th>
                                            <td>{date}</td>
                                            <td>{news.topic}</td>
                                            <td>{news.body}</td>
                                            <td>
                                                <button
                                                    onClick={() => this.deleteNews(news)}
                                                    className="btn btn-danger" >X</button></td>
                                        </tr>
                                    )
                                })
                            }



                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default ViewAllNews;