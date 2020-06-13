import React, {Component} from "react";
import {MDBBtn, MDBContainer, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader} from "mdbreact";
import StarRatings from 'react-star-ratings';

import constants from "../../Constants/constants";
import * as Swal from "sweetalert2";
import axios from "axios";

export class Rating extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal14: false,
            rating: 1,
            comment: '',
            selectedItem: ''
        }
        this.changeRating = this.changeRating.bind(this);
        this.commentOnChange = this.commentOnChange.bind(this);
        this.submitComment = this.submitComment.bind(this);
    }


    componentDidMount(){

        const {selected} = this.props;
        if(selected !== ''){
            this.setState({
                selectedItem :selected
            })
        }
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    changeRating(newRating) {
        this.setState({
            rating: newRating
        });
    }

    commentOnChange(e) {
        this.setState({
            comment: e.target.value
        })
    }

    submitComment(e) {
        e.preventDefault()

        console.log(this.state.selectedItem)
        const rating = {
            rates: this.state.rating,
            comment: this.state.comment,
            userId : localStorage.getItem("CustomerId"),
            itemCode : this.state.selectedItem
        }
        axios.post(constants.backend_url + 'api/comment/add', rating)
            .then(res => {

                    if (res.data.comment === 'success') {
                        Swal.fire(
                            '',
                            'Rate & Comment Details Added Success.',
                            'success'
                        );
                        this.setState({
                            rating: 1,
                            comment: ' ',
                            modal14:false
                        })

                    } else {
                        Swal.fire(
                            '',
                            'Rate & Comment Added Faild',
                            'error'
                        )
                    }
                }
            )
    }

    render() {
        return <MDBContainer>

            <button type="button"
                    className="btn btn-info"
                    onClick={this.toggle(4)}>Add Ratings
            </button>
            <MDBModal isOpen={this.state.modal4} toggle={this.toggle(4)} size="lg">
                <MDBModalHeader toggle={this.toggle(4)}>Add New Rate & Comment</MDBModalHeader>
                <MDBModalBody>
                    <div className="row">
                        <div className="col-sm-6">
                            <StarRatings
                                rating={this.state.rating}
                                starRatedColor="blue"
                                changeRating={this.changeRating}
                                numberOfStars={5}
                                name='rating'
                            />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <textarea
                                    placeholder="Add Comment"
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="5"
                                    onChange={this.commentOnChange}
                                />
                            </div>
                        </div>
                    </div>

                </MDBModalBody>
                <MDBModalFooter>
                    <form onSubmit={this.submitComment}>
                        <MDBBtn color="primary" type="submit" onClick={this.toggle}>Save changes</MDBBtn>
                    </form>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>;
    }
}
