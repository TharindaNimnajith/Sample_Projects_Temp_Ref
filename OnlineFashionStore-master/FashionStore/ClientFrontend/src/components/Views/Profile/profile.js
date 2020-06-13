import React, {Component} from "react";
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBInputGroup,
    MDBContainer, MDBPagination, MDBPageItem, MDBPageNav,
    MDBNavbar,
    MDBAvatar,
    MDBIcon, MDBDataTable, MDBFormInline,
    MDBCard, MDBEdgeHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBInput, MDBBtn, MDBTableHead, MDBTableBody, MDBTable, MDBNavLink
} from 'mdbreact';
import './profile.css';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import axios from "axios";
import constants from "../../Constants/constants";


export default class profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feedback: '',
            CustfName: '',
            CustLName: '',
            CustomerId: localStorage.getItem("CustomerId"),
            detailList: []
        };
        this.sweetalertfunction = this.sweetalertfunction.bind(this);
        this.submitfeedback = this.submitfeedback.bind(this);
        this.getDetailuser = this.getDetailuser.bind(this);
        this.onChangeFeedback = this.onChangeFeedback.bind(this);
    }

    componentDidMount() {
        this.getDetailuser();
        if (localStorage.getItem("CustomerLogged") !== "CustomerLogged") {
            this.props.history.push('/Login');
        }
    }

    sweetalertfunction() {
        console.log("button clicks");
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Customer deleted.',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Customer details not deleted',
                    'error'
                )
            }
        })
    }

    onChangeFeedback(event) {
        this.setState({
            feedback: event.target.value
        })
    }

    submitfeedback(event) {
        event.preventDefault();

        if (this.state.feedback != '') {

            console.log("Validation complete");
            console.log(this.state.feedback);
            console.log(this.state.CustfName);
            console.log(this.state.CustLName);


            const newfeedback = {
                feedback: this.state.feedback,
                firstName: this.state.CustfName,
                lastName: this.state.CustLName
            }

            console.log("@@@@@@@@@@@");
            console.log(newfeedback);
            axios.post(constants.backend_url + 'api/feedback/add', newfeedback)
                .then(res => {
                        console.log(res.data)


                        if (res.data.feedback === 'successful') {
                            Swal.fire(
                                '',
                                'Feedback added successfully !.',
                                'success'
                            );
                            this.setState({
                                feedback: '',
                                CustfName: ''

                            })

                            this.getDetailuser();
                        } else {
                            Swal.fire(
                                '',
                                'Feedback not added !',
                                'error'
                            )
                        }
                    }
                ).catch(function (error) {
                console.log(error);
            })

        } else {
            console.log("Feedback empty");
            Swal.fire(
                '',
                'Please enter a feedback',
                'error'
            );
        }
    };


    getDetailuser() {
        console.log("get user details");
        axios.get(constants.backend_url + 'api/userDetail/getDetailuser/' + this.state.CustomerId).then(response => {

            let custFirst = '';
            let custLast = '';
            response.data.map(user => {
                custFirst = user.firstName;
                custLast = user.lastName;
            })

            this.setState({
                detailList: response.data,
                CustfName: custFirst,
                CustLName: custLast
            })


        }).catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div id='parallaxintro'>

                <MDBCard className="my-5 px-5 pb-5">
                    <MDBCardBody>

                        <MDBRow>
                            <MDBCol md="12">

                                {
                                    this.state.detailList.map(item => {

                                        const base64String = btoa(new Uint8Array(item.image.data).reduce(function (data, byte) {
                                            return data + String.fromCharCode(byte);
                                        }, ''));

                                        return (

                                            <div>
                                                <MDBCard reverse>
                                                    {/*<MDBView hover cascade waves>*/}
                                                    {/*    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(146).jpg" alt="" className="img-fluid"/>*/}
                                                    {/*    <MDBMask overlay="white-slight" className="waves-light" />*/}
                                                    {/*</MDBView>*/}
                                                    <MDBCardBody cascade className="text-center ">
                                                        <br/>
                                                        <h2 className="font-weight-bold h2col"> {item.firstName + " " + item.lastName}  </h2>

                                                        <MDBNavLink to={"/profileEdit"}>
                                                            <MDBBtn className="waves-light">
                                                                <i className="fas fa-user-edit"></i>&nbsp;&nbsp;&nbsp;
                                                                Edit Profile
                                                            </MDBBtn>
                                                        </MDBNavLink>

                                                    </MDBCardBody>
                                                </MDBCard>

                                                <MDBContainer className="mt-5">
                                                    <section className="my-5">
                                                        <MDBRow className="txtalign">

                                                            <MDBCol xl="5" md="4" className="mb-3 text-center">
                                                                <img
                                                                    src={`data:image/jpeg;base64,${base64String}`}
                                                                    className="img-fluid z-depth-1 rounded-circle"
                                                                    alt=""/>
                                                            </MDBCol>
                                                            <MDBCol lg="7">
                                                                <MDBRow className="mb-3">
                                                                    <MDBCol size="1">
                                                                        <MDBIcon icon="user" size="lg"
                                                                                 className="indigo-text"/>
                                                                    </MDBCol>
                                                                    <MDBCol xl="10" md="11" size="10">
                                                                        <h5 className="font-weight-bold mb-3">Name</h5>
                                                                        <p className="grey-text">
                                                                            {item.firstName}
                                                                        </p>

                                                                    </MDBCol>
                                                                </MDBRow>
                                                                <MDBRow className="mb-3">
                                                                    <MDBCol size="1">
                                                                        <MDBIcon icon="envelope" size="lg"
                                                                                 className="indigo-text"/>
                                                                    </MDBCol>
                                                                    <MDBCol xl="10" md="11" size="10">
                                                                        <h5 className="font-weight-bold mb-3">Email
                                                                            Address</h5>
                                                                        <p className="grey-text">
                                                                            {item.email}
                                                                        </p>
                                                                    </MDBCol>
                                                                </MDBRow>
                                                                <MDBRow className="mb-3">
                                                                    <MDBCol size="1">
                                                                        <MDBIcon icon="calendar-alt" size="lg"
                                                                                 className="indigo-text"/>
                                                                    </MDBCol>
                                                                    <MDBCol xl="10" md="11" size="10">
                                                                        <h5 className="font-weight-bold mb-3">Phone
                                                                            Number</h5>
                                                                        <p className="grey-text">
                                                                            {item.phoneNumber}
                                                                        </p>
                                                                    </MDBCol>
                                                                </MDBRow>
                                                                <MDBRow className="mb-3">
                                                                    <MDBCol size="1">
                                                                        <MDBIcon icon="calendar-alt" size="lg"
                                                                                 className="indigo-text"/>
                                                                    </MDBCol>
                                                                    <MDBCol xl="10" md="11" size="10">
                                                                        <h5 className="font-weight-bold mb-3">Date of
                                                                            Birth</h5>
                                                                        <p className="grey-text">
                                                                            {item.dob}
                                                                        </p>

                                                                        {/*<p className="hide">*/}
                                                                        {/*    {*/}
                                                                        {/*        this.state.CustfName = item.firstName*/}
                                                                        {/*    }*/}
                                                                        {/*</p>*/}


                                                                    </MDBCol>
                                                                </MDBRow>
                                                            </MDBCol>
                                                        </MDBRow>
                                                    </section>
                                                </MDBContainer>
                                            </div>


                                        )
                                    })}


                                <MDBRow className="Feedbakadmin">
                                    <MDBCol md="12">
                                        <form onSubmit={this.submitfeedback}>
                                            <br></br>
                                            <h2 className="font-weight-bold h2col2">Feedback</h2>
                                            <MDBInputGroup
                                                prepend="Your feedback"
                                                type="textarea"
                                                value={this.state.feedback}
                                                onChange={this.onChangeFeedback}
                                            />
                                            <div className="text-center mt-4">
                                                <MDBBtn type="submit" color="danger" rounded
                                                        className="btn-block z-depth-1a">
                                                    <i className="fas fa-envelope"> </i> &nbsp;&nbsp;&nbsp;<b>Submit</b>
                                                </MDBBtn>
                                            </div>
                                            <br></br>
                                        </form>
                                    </MDBCol>
                                </MDBRow>


                            </MDBCol>
                        </MDBRow>


                    </MDBCardBody>
                </MDBCard>
            </div>
        );
    }
}
