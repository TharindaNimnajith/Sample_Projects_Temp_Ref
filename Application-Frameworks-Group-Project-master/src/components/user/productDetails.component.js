import React, {Component} from "react";
import axios from 'axios'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faStar} from '@fortawesome/free-solid-svg-icons';

library.add(faStar);

class Product extends Component{

    constructor(props) {
        super(props);

        this.state = {
            prodId: 0,
            nickname: "",
            comments: '',
            ratings: 0,
            // prodIdArr: [],
            reviews: []
        }
    }

    onChangeNickname = event => {
        this.setState({
            nickname: event.target.value
        });
        console.log(this.state.comments)
    };

    onChangeComments = event => {
        this.setState({
            comments: event.target.value
        });
        console.log(this.state.comments)
    };

    onChangeRatings = event => {
        this.setState({
            ratings: event.target.value
        });
        console.log(this.state.ratings)
    };

    componentDidMount() {
        axios.get('http://localhost:5000/products/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    category: res.data.category,
                    prodId: res.data.prodId,
                    name: res.data.name,
                    price: res.data.price,
                    discount: res.data.discount,
                    // comments: res.data.comments,
                    // ratings: res.data.ratings
                })
            })

        axios.get('http://localhost:5000/productDetails/')
            .then(res => {
                console.log(res.data)
                const prodDetails = res.data;
                // let prodId = [];
                // let item = {};
                // let nickname = [];
                // let comments = [];
                // let ratings = [];
                let reviewItems = [];
                prodDetails.forEach(prodDetail => {
                    let item = {};
                    item["prodId"] = prodDetail.prodId;
                    item["nickname"] = prodDetail.nickname;
                    item["comment"] = prodDetail.comments;
                    item["ratings"] = prodDetail.ratings;
                    reviewItems.push(item);
                });
                this.setState({
                    reviews: reviewItems
                });

                let averageRating = 0;
                res.data.forEach(prodDetails => {
                    averageRating = (averageRating + prodDetails.ratings) / (1);
                });
                this.setState({
                    ratings: averageRating
                });

                // this.setState({
                //     prodIdArr: prodId
                // });
                // prodDetails.forEach(prodDetail => {
                //     nickname.push(prodDetail.nickname);
                // })
                // this.setState({
                //     nicknameArr: nickname
                // });
                // prodDetails.forEach(prodDetail => {
                //     comments.push(prodDetail.comments);
                // })
                // this.setState({
                //     commentsArr: comments
                // });
                // prodDetails.forEach(prodDetail => {
                //     ratings.push(prodDetail.ratings);
                // })
                // this.setState({
                //     ratingsArr: ratings
                // });
                // console.log(comments)
                // // this.setState({
                // //     nicknameget: res.data.map,
                // //     commentsget: res.data.map,
                // //     ratingsget: res.data.map
                // // })
            })

        console.log(this.state.prodId)
        console.log(this.state.category)
        console.log(this.state.comments)
        console.log(this.state.ratings)
    }


    onSubmit = e => {
        e.preventDefault();
        console.log(this);
        console.log(this.state.prodId);
        console.log(this.state.comments);
        console.log(this.state.ratings);
        const commentRating = {
            prodId: this.state.prodId,
            nickname: this.state.nickname,
            comments: this.state.comments,
            ratings: this.state.ratings
        };

        console.log(commentRating);
        axios.post('http://localhost:5000/productDetails/add', commentRating)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    render() {
        const prodReviews = this.state.reviews.filter(review => (review.prodId === this.state.prodId))
        return (
                <div className="container">
                    <br/>
                    <form className="jumbotron" style={{backgroundColor:"#E8F8F5"}}>
                    <h2 align="center">Product Name : {this.state.name}</h2>
                    <hr/><br/><br/>
                    <h3><u>Product Details</u></h3><br/>
                    <h4 align="left">Product Price : {this.state.price} Rps.</h4>
                    <h4 align="left">Product Category : {this.state.category}</h4>
                    <h4 align="left">Product Discount : {this.state.discount} Rps.</h4>
                    <h4 align="left">Average User Rating : {this.state.ratings}</h4>
                    <br/><br/><hr/>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <br/>
                            <h5><b>Please Use Review Section Respectfully</b></h5>
                            <label> Anonymous Username * </label>
                            <input type="text"
                                   required
                                   className="form-control"
                                   value={this.state.nickname}
                                   onChange={this.onChangeNickname}/>
                        </div>
                        <div className="form-group">
                            <label> Comment * </label>
                            <input type="text"
                                   required
                                   className="form-control"
                                   value={this.state.comments}
                                   onChange={this.onChangeComments}/>
                        </div>
                        <div className="form-group">
                            <label> Ratings * </label>
                            <br/>
                            <select id="lang" onChange={this.onChangeRatings} value={this.state.value}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Submit Review & Ratings" className="btn btn-primary" style={{backgroundColor: "#AF7AC5"}}/>
                        </div>
                        <br/>
                        <hr/>
                        <br/>
                        <h3><u>User Ratings and Comments</u></h3>
                        <br/>
                        {/*<table className="table table-hover" style={{backgroundColor:"#EBDEF0"}}>*/}
                        {/*    <thead style={{backgroundColor:"#AF7AC5"}}>*/}
                        {/*    <tr>*/}
                        {/*        <th scope="col">Nickname</th>*/}
                        {/*        <th scope="col">Comment</th>*/}
                        {/*        <th scope="col">Rating</th>*/}
                        {/*        <th/>*/}
                        {/*    </tr>*/}
                        {/*    </thead>*/}
                        {/*    <tbody>*/}
                        {/*    <tr>*/}
                        {/*        {this.state.nicknameArr.map(comment => (*/}

                        {/*                <td>{comment}</td>*/}

                        {/*        ))}*/}
                        {/*        {this.state.commentsArr.map(comment => (*/}
                        {/*                <td>{comment}</td>*/}
                        {/*        ))}*/}
                        {/*        {this.state.ratingsArr.map(comment => (*/}

                        {/*                <td>{comment}</td>*/}

                        {/*        ))}*/}
                        {/*    </tr>*/}

                        {/*    </tbody>*/}
                        {/*</table>*/}
                        {/*{this.state.prodIdArr.map(comment => (*/}
                        {/*    <p>{comment}</p>*/}
                        {/*))}*/}

                        {prodReviews.map(review => (
                            <p style={{color: "#000000"}}>Anonymous Username : {review.nickname} <br/> Comment : {review.comment} <br/> Rating : {review.ratings}<hr/></p>
                            ))}
                        {/*<hr/>*/}
                        {/*{this.state.reviewItems.map(nickname => (*/}
                        {/*    <p>Nickname : {nickname}</p>*/}
                        {/*))}*/}
                        {/*<hr/>*/}
                        {/*{this.state.reviewItems.map(comment => (*/}
                        {/*    <p>Comment : {comment}</p>*/}
                        {/*))}*/}
                        {/*<hr/>*/}
                        {/*{this.state.reviewItems.map(rating => (*/}
                        {/*    <p>Rating : {rating}</p>*/}
                        {/*))}*/}
                        <br/>
                        {/*<h4 align="left">Nickname : {this.state.nicknameget}</h4>*/}
                        {/*<h4 align="left">Comment : {this.state.commentsget}</h4>*/}
                        {/*<h4 align="left">Rating : {this.state.ratingsget}</h4>*/}
                    </form>
                    </form>
                </div>
        )
    }
}

export default Product