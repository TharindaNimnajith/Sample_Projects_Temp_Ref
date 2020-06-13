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
    MDBInput, MDBBtn, MDBTableHead, MDBTableBody, MDBTable, MDBNavLink, MDBAlert
} from 'mdbreact';
import './profile.css';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import {colors} from "@material-ui/core";
import axios from "axios";
import constants from "../../Constants/constants";
import { MDBAnimation } from "mdbreact";


export default class profileEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feedback: '',
            CustfName: '',
            CustLName:'',
            CustomerId: localStorage.getItem("CustomerId"),
            detailList:[],
            selectedId : '',
            selectedFName : '',
            selectedLName:'',
            selectedEmail : '',
            selectedPhone : '',
            selectedDob:'',
            selectedGender: '',
            selectedPassword : '',
            selectedConfirm : '',
            MaleCount: '',
            FemaleCount:'',
            edited: true
        };
        this.sweetalertfunction = this.sweetalertfunction.bind(this);
        this.getDetailuser = this.getDetailuser.bind(this);
        this.editUser = this.editUser.bind(this);

        this.onChangeFname = this.onChangeFname.bind(this);
        this.onChangeLname = this.onChangeLname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeDOB = this.onChangeDOB.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.sweetalertfunction = this.sweetalertfunction.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount() {
        this.getDetailuser();
        if(localStorage.getItem("CustomerLogged")!=="CustomerLogged"){
            this.props.history.push('/Login');
        }
    }



    onChangeFname(event){
        this.setState({
            selectedFName:event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeLname(event){
        this.setState({
            selectedLName:event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeEmail(event){
        this.setState({
            selectedEmail:event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeGender(event){
        this.setState({
            selectedGender:event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeDOB(event){
        this.setState({
            selectedDob:event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangePassword(event){
        this.setState({
            selectedPassword:event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeConfirmPassword(event){
        this.setState({
            selectedConfirm:event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangePhone(event){
        this.setState({
            selectedPhone:event.target.value,
            [event.target.name]: event.target.value
        })

    }

    sweetalertfunction(id){
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
                axios.get(constants.backend_url + 'api/userDetail/deleteUser/'+ id).then(response => {
                    if (response.data.userDelete === 'success') {
                        swalWithBootstrapButtons.fire(
                            '',
                            'Delete Failed !.',
                            'error'
                        )
                    }else {
                        Swal.fire(
                            '',
                            'Customer Deleted !',
                            'success'
                        )
                        localStorage.removeItem('CustomerLogged');
                        localStorage.removeItem('CustomerId');
                        this.props.history.push('/');
                        window.location.reload();
                    }
                })

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




    getDetailuser(){
        console.log("get user details");
        axios.get(constants.backend_url + 'api/userDetail/getDetailuser/' + this.state.CustomerId).then(response => {

            let custFirst = '';
            let custLast = '';
            response.data.map(user=>{
                custFirst = user.firstName;
                custLast = user.lastName;
            })

            this.setState({
                detailList:response.data,
                CustfName : custFirst,
                CustLName : custLast
            })


        }).catch(function (error) {
            console.log(error);
        })
    }

    editUser(id, fname, lname, email, phone, dob, gender, password){
        console.log(id)
        this.setState({
            selectedId:id,
            selectedFName : fname,
            selectedLName:lname,
            selectedEmail : email,
            selectedPhone : phone,
            selectedDob:dob,
            selectedGender:gender,
            selectedPassword : password,
            selectedConfirm : password,
            edited : false

        })

    };

    updateUser(id, fname, lname, email, phone, dob, gender, password){

        if (this.state.selectedPassword === this.state.selectedConfirm) {
            if (this.state.selectedFName !== '') {
                if (this.state.selectedLName !== '') {
                    if (this.state.selectedEmail !== '') {
                        if (this.state.selectedGender !== '') {
                            if (this.state.selectedPhone !== '') {
                                if (this.state.selectedPassword !== '') {
                                    if (this.state.selectedConfirm !== '') {
                                        if (this.state.selectedDob !== '') {
                                            if(this.state.selectedGender === 'Male' || this.state.selectedGender == 'Female' ){
                                                if(this.state.selectedGender === 'Male'){
                                                    this.state.MaleCount = this.state.MaleCount + 1;
                                                }else{
                                                    this.state.FemaleCount = this.state.FemaleCount + 1;
                                                }


                                                axios.get(constants.backend_url + 'api/userDetail/updateDetail/'+ id+'/'+ fname+'/'+ lname+'/'+ email+'/'+ phone +'/'+ dob +'/'+ gender +'/'+ password).then(response => {
                                                    if (response.data.userUpdate === 'successful') {
                                                        Swal.fire(
                                                            '',
                                                            'Details Updated !.',
                                                            'success'
                                                        )
                                                        this.getDetailuser();
                                                        this.setState({
                                                            selectedId : '',
                                                            selectedFName : '',
                                                            selectedLName:'',
                                                            selectedEmail : '',
                                                            selectedPhone : '',
                                                            selectedDob:'',
                                                            selectedGender: '',
                                                            selectedPassword : '',
                                                            selectedConfirm : '',
                                                            edited: true})
                                                    }else {
                                                        Swal.fire(
                                                            '',
                                                            'Update Failed !',
                                                            'error'
                                                        )}


                                                });

                                                this.setState({
                                                    selectedId : '',
                                                    selectedFName : '',
                                                    selectedLName:'',
                                                    selectedEmail : '',
                                                    selectedPhone : '',
                                                    selectedDob:'',
                                                    selectedGender: '',
                                                    selectedPassword : '',
                                                    selectedConfirm : '',
                                                    edited: true})

                                            } else {
                                                Swal.fire(
                                                    '',
                                                    'Gender should be Male or Female !',
                                                    'error'
                                                );
                                            }


                                        } else {
                                            console.log("dob empty");
                                            Swal.fire(
                                                '',
                                                'Enter Date of Birth !',
                                                'error'
                                            )
                                        }
                                    } else {
                                        console.log(" confirm pass empty");
                                        Swal.fire(
                                            '',
                                            'Confirm the Password !',
                                            'error'
                                        )
                                    }
                                } else {
                                    console.log("pass empty");
                                    Swal.fire(
                                        '',
                                        'Enter Password !',
                                        'error'
                                    )
                                }
                            } else {
                                console.log("phone empty");
                                Swal.fire(
                                    '',
                                    'Enter Contact Number !',
                                    'error'
                                )
                            }
                        } else {
                            console.log("gender empty");
                            Swal.fire(
                                '',
                                'Enter Gender !',
                                'error'
                            )
                        }
                    } else {
                        console.log("email empty");
                        Swal.fire(
                            '',
                            'Enter Email !',
                            'error'
                        )
                    }
                } else {
                    console.log("lname empty");
                    Swal.fire(
                        '',
                        'Enter Last Name !',
                        'error'
                    )
                }
            } else {
                console.log("fname == ''");
                Swal.fire(
                    '',
                    'Enter First Name !',
                    'error'
                )
            }
        } else {console.log("pass != confirm pass");
            Swal.fire('',
                'password and confirm password are not the same !',
                'error');}
    }

    render() {
        return (
            <div id='parallaxintro'>

                <MDBCard className="my-5 px-5 pb-5">
                    <MDBCardBody >

                        <MDBRow>
                            <MDBCol md="12" >

                                {
                                    this.state.detailList.map(item => {
                                        const base64String = btoa(new Uint8Array(item.image.data).reduce(function (data, byte) {
                                            return data + String.fromCharCode(byte);
                                        }, ''));

                                        return(

                                            <div >
                                                <MDBCard reverse >
                                                    <MDBCardBody cascade className="text-center "  >
                                                        <br/>
                                                        <h2 className="font-weight-bold h2col"  > {item.firstName + " " + item.lastName}   </h2>

                                                        <MDBNavLink to={"/profile"}>
                                                            <MDBBtn className="btn-fb waves-light" >
                                                                <i className="fas fa-user"></i>&nbsp;&nbsp;&nbsp;
                                                                Profile
                                                            </MDBBtn>
                                                        </MDBNavLink>

                                                    </MDBCardBody>
                                                </MDBCard>

                                                <MDBContainer className="mt-5" >
                                                    <MDBRow>
                                                        <MDBCol md="8" >
                                                    <section className="my-5">
                                                        <MDBRow className="txtalign">
                                                            <MDBCol xl="5" md="4" className="mb-3 text-center">
                                                                <img   src={`data:image/jpeg;base64,${base64String}`}
                                                                       className="img-fluid z-depth-1 rounded-circle" alt="" />
                                                            </MDBCol>
                                                            <MDBCol lg="7">
                                                                <MDBRow className="mb-3">
                                                                    <MDBCol size="1">
                                                                        <MDBIcon icon="user" size="lg" className="indigo-text" />
                                                                    </MDBCol>
                                                                    <MDBCol xl="10" md="11" size="10">
                                                                        <h5 className="font-weight-bold mb-3">Name</h5>
                                                                        <p className="grey-text">
                                                                            {item.firstName + " " + item.lastName}
                                                                        </p>

                                                                    </MDBCol>
                                                                </MDBRow>
                                                                <br/>

                                                                <MDBRow className="mb-3">
                                                                    <MDBCol size="1">
                                                                        <MDBIcon icon="envelope" size="lg" className="indigo-text" />
                                                                    </MDBCol>
                                                                    <MDBCol xl="10" md="11" size="10">
                                                                        <h5 className="font-weight-bold mb-3">Email Address</h5>
                                                                        <p className="grey-text">
                                                                            {item.email}
                                                                        </p>
                                                                    </MDBCol>
                                                                </MDBRow>
                                                                <br/>
                                                                <MDBRow className="mb-3">
                                                                    <MDBCol size="1">
                                                                        <MDBIcon icon="calendar-alt" size="lg" className="indigo-text" />
                                                                    </MDBCol>
                                                                    <MDBCol xl="10" md="11" size="10">
                                                                        <h5 className="font-weight-bold mb-3">Phone Number</h5>
                                                                        <p className="grey-text">
                                                                            {item.phoneNumber}
                                                                        </p>
                                                                    </MDBCol>
                                                                </MDBRow>
                                                                <br/>
                                                                <MDBRow className="mb-3">
                                                                    <MDBCol size="1">
                                                                        <MDBIcon icon="calendar-alt" size="lg" className="indigo-text" />
                                                                    </MDBCol>
                                                                    <MDBCol xl="10" md="11" size="10">
                                                                        <h5 className="font-weight-bold mb-3">Date of Birth</h5>
                                                                        <p className="grey-text">
                                                                            {item.dob}
                                                                        </p>

                                                                    </MDBCol>
                                                                </MDBRow>
                                                            </MDBCol>
                                                        </MDBRow>
                                                                    <br/>
                                                        <MDBBtn tag="a" size="lg" color="success"  onClick={()=>this.editUser(item._id, item.firstName,item.lastName, item.email, item.phoneNumber, item.dob, item.gender, item.password )}>
                                                            <MDBIcon size="lg" icon="pen" /> EDIT PROFILE
                                                        </MDBBtn>&nbsp;&nbsp;&nbsp;

                                                        <MDBBtn tag="a" size="lg" color="danger"  onClick={() => this.sweetalertfunction(item._id)} >
                                                            <MDBIcon size="lg" icon="times-circle" /> DELETE PROFILE
                                                        </MDBBtn>

                                                    </section>
                                                        </MDBCol>

                                                        {
                                                            this.state.edited ?
                                                                <MDBAnimation type="bounce" infinite>
                                                                    <MDBCol style={{textAlign : "center", fontWeight: "bold"  }}>
                                                                        <MDBAlert color="success" >
                                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Click Edit Profile !&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                        </MDBAlert>
                                                                    </MDBCol>
                                                                </MDBAnimation> :

                                                        <MDBCol md="4" style={{textAlign: "left"}}>
                                                            <MDBCard>
                                                                <MDBCardBody>



                                                                    <form   >

                                                                        <label htmlFor="defaultFormCardNameEx1"
                                                                               className="grey-text font-weight-light">First Name</label>
                                                                        <div className="input-group">
                                                                            <div className="input-group-prepend">
                                                                                    <span className="input-group-text" id="basic-addon">
                                                                                      <i className="fa fa-user prefix"></i>
                                                                                    </span>
                                                                            </div>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="First Name"
                                                                                aria-label="Name"
                                                                                aria-describedby="basic-addon"
                                                                                value={this.state.selectedFName}
                                                                                name="fname"
                                                                                onChange={this.onChangeFname}
                                                                            />
                                                                        </div>


                                                                        <label htmlFor="defaultFormCardNameEx1"
                                                                               className="grey-text font-weight-light">Last Name</label>
                                                                        <div className="input-group">
                                                                            <div className="input-group-prepend">
                                                                                <span className="input-group-text" id="basic-addon">
                                                                                  <i className="fa fa-user prefix"></i>
                                                                                </span>
                                                                            </div>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder=" Last Name"
                                                                                aria-label="Name"
                                                                                aria-describedby="basic-addon"
                                                                                value={this.state.selectedLName}
                                                                                name="lname"
                                                                                onChange={this.onChangeLname}
                                                                            />
                                                                        </div>


                                                                        <label htmlFor="defaultFormCardEmailEx2"
                                                                               className="grey-text font-weight-light">Email Address</label>

                                                                        <div className="input-group">
                                                                            <div className="input-group-prepend">
                                                                                <span className="input-group-text" id="basic-addon">
                                                                                 <MDBIcon far icon="envelope"/>
                                                                                </span>
                                                                                                                </div>
                                                                            <input
                                                                                className="form-control"
                                                                                placeholder="Email Address"
                                                                                aria-label="Email Address"
                                                                                aria-describedby="basic-addon"
                                                                                value={this.state.selectedEmail}
                                                                                onChange={this.onChangeEmail}
                                                                                type="email"
                                                                            />
                                                                        </div>


                                                                        <label htmlFor="defaultFormCardEmailEx3"
                                                                               className="grey-text font-weight-light">Phone Number</label>

                                                                        <div className="input-group">
                                                                            <div className="input-group-prepend">
                                                                                <span className="input-group-text" id="basic-addon">
                                                                                 <MDBIcon icon="phone" />
                                                                                </span>
                                                                            </div>
                                                                            <input

                                                                                className="form-control"
                                                                                placeholder="Phone Number"
                                                                                aria-label="Phone Number"
                                                                                aria-describedby="basic-addon"
                                                                                onChange={this.onChangePhone}
                                                                                type="text"
                                                                                value={this.state.selectedPhone}
                                                                                id="phoneid"
                                                                            />
                                                                        </div>

                                                                        <label htmlFor="defaultFormCardEmailEx3"
                                                                                       className="grey-text font-weight-light">Date of Birth</label>

                                                                        <div className="input-group">
                                                                            <div className="input-group-prepend">
                                                                                <span className="input-group-text" id="basic-addon">
                                                                                 <MDBIcon icon="birthday-cake" />
                                                                                </span>
                                                                            </div>
                                                                            <input

                                                                                className="form-control"
                                                                                placeholder="Date of Birth"
                                                                                aria-label="dob"
                                                                                aria-describedby="basic-addon"
                                                                                onChange={this.onChangeDOB}
                                                                                type="date"
                                                                                value={this.state.selectedDob}
                                                                            />
                                                                        </div>

                                                                        <label htmlFor="defaultFormCardEmailEx3"
                                                                               className="grey-text font-weight-light">Gender</label>

                                                                        <div className="input-group">
                                                                            <div className="input-group-prepend">
                                                                                <span className="input-group-text" id="basic-addon">
                                                                                 <MDBIcon icon="users" />
                                                                                </span>
                                                                            </div>
                                                                            <input

                                                                                className="form-control"
                                                                                placeholder="Gender"
                                                                                aria-label="dob"
                                                                                aria-describedby="basic-addon"
                                                                                value={this.state.selectedGender} onChange={this.onChangeGender} type="text"
                                                                            />
                                                                        </div>


                                                                        <label htmlFor="defaultFormCardEmailEx4"
                                                                               className="grey-text font-weight-light">Password</label>

                                                                        <div className="input-group">
                                                                            <div className="input-group-prepend">
                                                                                <span className="input-group-text" id="basic-addon">
                                                                                 <MDBIcon icon="lock"/>
                                                                                </span>
                                                                            </div>
                                                                            <input

                                                                                className="form-control"
                                                                                placeholder="Password"
                                                                                aria-label="password"
                                                                                aria-describedby="basic-addon"
                                                                                onChange={this.onChangePassword} type="password" value={this.state.selectedPassword}
                                                                            />
                                                                        </div>

                                                                        <label htmlFor="defaultFormCardEmailEx5"
                                                                               className="grey-text font-weight-light">Confirm password</label>

                                                                        <div className="input-group">
                                                                            <div className="input-group-prepend">
                                                                                <span className="input-group-text" id="basic-addon">
                                                                                  <MDBIcon icon="shield-alt"/>
                                                                                </span>
                                                                            </div>
                                                                            <input

                                                                                className="form-control"
                                                                                placeholder="Confirm Password"
                                                                                aria-label="ConfirmPassword"
                                                                                aria-describedby="basic-addon"
                                                                                onChange={this.onChangeConfirmPassword} type="password" value={this.state.selectedConfirm }
                                                                            />
                                                                            {
                                                                                this.state.selectedPassword != this.state.selectedConfirm ? <MDBAlert color="danger">
                                                                                    password and confirm password does not match
                                                                                </MDBAlert> : ''
                                                                            }

                                                                        </div>

                                                                        <div className="text-center py-4 mt-0">
                                                                            <MDBBtn outline color="success" type="button" onClick={()=> this.updateUser(this.state.selectedId , this.state.selectedFName, this.state.selectedLName, this.state.selectedEmail, this.state.selectedPhone, this.state.selectedDob, this.state.selectedGender, this.state.selectedPassword)}>
                                                                                <b>Update Details</b>
                                                                                <MDBIcon icon="pen" className="ml-2"/>
                                                                            </MDBBtn>
                                                                        </div>
                                                                    </form>


                                                                </MDBCardBody>
                                                            </MDBCard>
                                                        </MDBCol>
                                                        }


                                                    </MDBRow>
                                                </MDBContainer>

                                            </div>

                                        )
                                    })}




                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </div>
        );
    }
}
