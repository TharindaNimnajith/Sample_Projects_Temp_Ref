import React, {Component} from "react";
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBAnimation,
    MDBAlert,
    MDBModal,
    MDBModalHeader, MDBModalBody, MDBModalFooter, MDBCardImage
} from 'mdbreact';
import './Login.css';
import {MDBCard, MDBCardBody, MDBInput} from 'mdbreact';
import axios from "axios";
import constants from "../../Constants/constants";
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js'

export default class NewLogin extends Component {
    constructor(props) {
        super(props);
        // this.login = this.login.bind(this);

        this.state = {
            collapse: false,
            isWideEnough: false,
            modal: false,
            model2: false,
            fname: '',
            lname: '',
            email: '',
            gender: '',
            password: '',
            phone: '',
            confirmpass: '',
            dob: '',
            MaleCount: 0,
            FemaleCount: 0,
            loginEmail: '',
            loginPass: '',
            loginEmailV: false,
            loginPassV: false,
            imageName: ' ',
            imageURLValidation: false,
            imageValidation: false,
            imageURL: ' ',
            image: '',
        };

        this.onClick = this.onClick.bind(this);
        this.submitUser = this.submitUser.bind(this);
        this.validateUser = this.validateUser.bind(this);
        this.onChangeFname = this.onChangeFname.bind(this);
        this.onChangeLname = this.onChangeLname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeDOB = this.onChangeDOB.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onChangeEmailV = this.onChangeEmailV.bind(this);
        this.onChangePassV = this.onChangePassV.bind(this);
        this.removePhoto = this.removePhoto.bind(this);
        this.onchangeFile = this.onchangeFile.bind(this);

    }

    // login(){
    //     localStorage.setItem("userLogged","userLog");
    //     this.props.history.push('/');
    //     window.location.reload();
    // }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    toggle2 = () => {
        this.setState({
            modal: !this.state.modal,
            modal2: !this.state.model2
        });
    }

    toggle3 = () => {
        this.setState({
            modal2: false,
            fname: "",
            lname: "",
            email: "",
            gender: "",
            password: "",
            phone: "",
            dob: '',
            confirmpass: ""

        });
    }

    onChangeEmailV(event) {
        this.setState({
            loginEmail: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangePassV(event) {
        this.setState({
            loginPass: event.target.value,
            [event.target.name]: event.target.value
        })
    }


    onChangeFname(event) {
        this.setState({
            fname: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeLname(event) {
        this.setState({
            lname: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeEmail(event) {
        this.setState({
            email: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeGender(event) {
        this.setState({
            gender: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeDOB(event) {
        this.setState({
            dob: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangePassword(event) {
        this.setState({
            password: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeConfirmPassword(event) {
        this.setState({
            confirmpass: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangePhone(event) {
        this.setState({
            phone: event.target.value,
            [event.target.name]: event.target.value
        })

    }


    submitUser(event) {
        event.preventDefault();
        event.target.className += " was-validated";
        if (this.state.password == this.state.confirmpass) {
            if (this.state.fname != '') {
                if (this.state.lname != '') {
                    if (this.state.email != '') {
                        if (this.state.gender != '') {
                            if (this.state.phone != '') {
                                if (this.state.password != '') {
                                    if (this.state.confirmpass != '') {
                                        if (this.state.dob != '') {
                                            if (this.state.imageName !== ' ') {
                                                console.log("Validation complete");
                                                if(this.state.gender == 'Male' || this.state.gender == 'Female' ){
                                                    if(this.state.gender == 'Male'){
                                                        this.state.MaleCount = this.state.MaleCount + 1;
                                                    }else{
                                                        this.state.FemaleCount = this.state.FemaleCount + 1;
                                                    }



                                                    const newuserDetail = {
                                                        firstName: this.state.fname,
                                                        lastName: this.state.lname,
                                                        phoneNumber: this.state.phone,
                                                        gender: this.state.gender,
                                                        email: this.state.email,
                                                        password: this.state.password,
                                                        dob: this.state.dob,
                                                        male:this.state.MaleCount,
                                                        female:this.state.FemaleCount
                                                    }

                                                    axios.post(constants.backend_url + 'api/userDetail/add', newuserDetail)
                                                        .then(res => {
                                                                console.log(res)
                                                                console.log(newuserDetail);
                                                                if (res.data.userDetail === 'successful') {
                                                                    console.log("########################## success");
                                                                    let formData = new FormData();
                                                                    formData.append('file',  this.state.image);
                                                                    formData.append('firstName',  this.state.fname);
                                                                    formData.append('lastName', this.state.lname);
                                                                    formData.append('phoneNumber', this.state.phone);
                                                                    formData.append('gender', this.state.gender);
                                                                    formData.append('email', this.state.email);
                                                                    formData.append('password',this.state.password);
                                                                    formData.append('dob',this.state.dob);
                                                                    formData.append('male',this.state.MaleCount);
                                                                    formData.append('female',this.state.FemaleCount);

                                                                    axios.post(constants.spring_backend_url + 'UserDetailController/addUser', formData)
                                                                        .then(res => {
                                                                                if (res.status === 200) {
                                                                                    Swal.fire(
                                                                                        '',
                                                                                        'User Details added successfully !.',
                                                                                        'success'
                                                                                    );
                                                                                    this.setState({
                                                                                        fname: '',
                                                                                        lname: '',
                                                                                        email: '',
                                                                                        gender: '',
                                                                                        password: '',
                                                                                        phone: '',
                                                                                        dob: '',
                                                                                        confirmpass: '',
                                                                                        imageName: ' ',
                                                                                        imageURLValidation: false,
                                                                                        imageValidation: false,
                                                                                        imageURL: ' ',
                                                                                        image: ''
                                                                                    })
                                                                                } else {
                                                                                    Swal.fire(
                                                                                        '',
                                                                                        'User Details not added !',
                                                                                        'error'
                                                                                    )
                                                                                }
                                                                            }
                                                                        );
                                                                    this.setState({
                                                                        fname: '',
                                                                        lname: '',
                                                                        email: '',
                                                                        gender: '',
                                                                        password: '',
                                                                        phone: '',
                                                                        dob: '',
                                                                        confirmpass: ''
                                                                    })
                                                                } else if(res.data.userDetail === 'userAvailable') {
                                                                    Swal.fire(
                                                                        '',
                                                                        'Email already in use !',
                                                                        'error'
                                                                    )
                                                                }else{
                                                                    Swal.fire(
                                                                        '',
                                                                        'User not Added !',
                                                                        'error'
                                                                    )
                                                                    this.setState({
                                                                        fname: '',
                                                                        lname: '',
                                                                        email: '',
                                                                        gender: '',
                                                                        password: '',
                                                                        phone: '',
                                                                        dob: '',
                                                                        confirmpass: ''
                                                                    })
                                                                }
                                                            }
                                                        );



                                            } else {
                                                    Swal.fire(
                                                        '',
                                                        'Gender should be Male or Female !',
                                                        'error'
                                                    );
                                            }


                                        } else {

                                                Swal.fire(
                                                    '',
                                                    'Add an image !',
                                                    'error'
                                                )

                                                this.setState({
                                                    imageValidation: true
                                                })
                                        }


                                    } else {
                                        console.log("dob empty");
                                    }
                                } else {
                                    console.log(" confirm pass empty");
                                }
                            } else {
                                console.log("pass empty");
                            }
                        } else {
                            console.log("phone empty");
                        }
                    } else {
                        console.log("gender empty");
                    }
                } else {
                    console.log("email empty");
                }
            } else {
                console.log("lname empty");
            }
        } else {
            console.log("fname == ''");
        }
    } else {console.log("pass != confirm pass");
    Swal.fire('',
    'password and confirm password are not the same !',
    'error');}};


validateUser(event)
{
    event.preventDefault();

    if (this.state.loginEmail != '') {
        this.setState({
            loginEmailV: false
        })
        if (this.state.loginPass != '') {
            this.setState({
                loginPassV: false
            })

            axios.get(constants.backend_url + 'api/userDetail/validateUser/' + this.state.loginEmail + '/' + this.state.loginPass)
                .then(res => {
                        if (res.data.Message !== 'unsuccessful') {
                            localStorage.setItem("CustomerLogged", "CustomerLogged");
                            localStorage.setItem("CustomerId", res.data.Message._id);
                            this.props.history.push('/');
                            window.location.reload();
                            this.setState({
                                loginEmail: '',
                                loginPass: '',
                                loginEmailV: false,
                                loginPassV: false
                            });

                        } else {
                            Swal.fire(
                                '',
                                'Login unsuccessful  !',
                                'error'
                            )
                        }
                    }
                );


        } else {
            console.log('email field empty');
            this.setState({
                loginPassV: true
            })
        }
    } else {
        console.log('email field empty');
        this.setState({
            loginEmailV: true
        })


    }
}
;


//Image Functions
removePhoto()
{
    this.setState({
        image: ' ',
        imageUrl: ' ',
        imageURLValidation: false,
        imageValidation: false,
        imageName: ' '
    })

}

onchangeFile(e)
{

    // if (URL.createObjectURL(e.target.files[0]) !== ' ') {
    if (e.target.files.length) {
        this.setState({
            image: e.target.files[0],
            imageUrl: URL.createObjectURL(e.target.files[0]),
            imageURLValidation: true,
            imageValidation: false,
            imageName: e.target.files[0].name
        });
    }

    // }

}

render()
{
    return (
        <div id='apppage'>
            <MDBView>
                <MDBMask className='white-text gradient'/>
                <MDBContainer
                    style={{height: '100%', width: '100%', paddingTop: '10rem'}}
                    className='d-flex justify-content-center white-text align-items-center'
                >
                    <MDBRow>
                        <MDBCol md='12' className='text-center text-md-left mt-xl-5 mb-5'>
                            <MDBAnimation type='fadeInLeft' delay='.3s'>
                                <MDBCard className="loginContainer">
                                    <form className="needs-validation" onSubmit={this.validateUser}>
                                        <MDBCardBody className="mx-4">
                                            <div className="text-center">
                                                <h3 className="dark-grey-text mb-5">
                                                    <strong>Admin Login</strong>
                                                </h3>
                                            </div>
                                            <MDBInput label="Your email" group type="email" validate error="wrong"
                                                      success="right" value={this.state.loginEmail}
                                                      onChange={this.onChangeEmailV}/>
                                            {
                                                this.state.loginEmailV ?
                                                    <MDBAlert color="danger">
                                                        Please enter a value for email !
                                                    </MDBAlert> : ''
                                            }

                                            {/*<input value={this.state.loginPass} onChange={this.onChangePassV}/>*/}
                                            <MDBInput label="Your password" group type="password" validate
                                                      containerClass="mb-0" value={this.state.loginPass}
                                                      onChange={this.onChangePassV}/>
                                            {
                                                this.state.loginPassV ?
                                                    <MDBAlert color="danger">
                                                        Please enter a value for email !
                                                    </MDBAlert> : ''
                                            }

                                            <div className="text-center mb-3">
                                                <MDBBtn type="submit" color='pink'
                                                        className="btn-block z-depth-1a buttonSign "
                                                        onClick={this.login}>
                                                    LOGIN
                                                </MDBBtn>
                                            </div>
                                            <MDBModalFooter className="mx-5 pt-3 mb-1">
                                                <p className="font-small grey-text d-flex justify-content-end">
                                                    Not a member?
                                                    <MDBBtn outline color="info" size="sm" onClick={this.toggle2}>Sign
                                                        Up</MDBBtn>
                                                </p>
                                            </MDBModalFooter>
                                        </MDBCardBody>
                                    </form>

                                </MDBCard>
                            </MDBAnimation>
                        </MDBCol>

                        {/*<MDBCol md='6' xl='6' className='mt-xl-5'>*/}
                        {/*    <MDBAnimation type='fadeInRight' delay='.3s'>*/}
                        {/*        <img src='/image/Bag.png' alt='' className='img-fluid'/>*/}
                        {/*    </MDBAnimation>*/}
                        {/*</MDBCol>*/}
                    </MDBRow>
                </MDBContainer>
            </MDBView>

            <MDBContainer>
                <MDBModal isOpen={this.state.modal2} toggle={this.toggle3}>
                    <MDBModalHeader toggle={this.toggle3}></MDBModalHeader>
                    <MDBModalBody>
                        <MDBCard>
                            <MDBCardBody className="mx-2">
                                <div className="text-center">
                                    <h2 className="loginh3 mb-1">
                                        <strong className="loginh3 ">REGISTER</strong>
                                    </h2>
                                </div>
                                {/*<MDBInput label="Your email" group type="email" validate error="wrong" success="right"/>*/}
                                {/*<MDBInput label="Your password" group type="password" validate containerClass="mb-0"/>*/}

                                <form className="needs-validation" onSubmit={this.submitUser} noValidate>
                                    <MDBRow>
                                        {/*<MDBCol  md="12" className="mb-3">*/}
                                        <label htmlFor="firstnameid" className="grey-text">First name</label>
                                        <input value={this.state.fname} name="fname" onChange={this.onChangeFname}
                                               type="text" id="firstnameid" className="form-control"
                                               placeholder="First name" required/>
                                        <div className="invalid-feedback">Please provide the first name.</div>

                                        {/*</MDBCol>*/}
                                        {/*<MDBCol  md="12" className="mb-3">*/}
                                        <label htmlFor="lastnameid" className="grey-text">Last name</label>
                                        <input value={this.state.lname} name="lname" onChange={this.onChangeLname}
                                               type="text" id="lastnameid" className="form-control"
                                               placeholder="Last name" required/>
                                        <div className="invalid-feedback">Please provide the last name.</div>

                                        {/*</MDBCol>*/}
                                        {/*<MDBCol md="4" className="mb-3">*/}
                                        <label htmlFor="emailid" className="grey-text">Email</label>
                                        <input value={this.state.email} onChange={this.onChangeEmail} type="email"
                                               id="emailid" className="form-control" name="email"
                                               placeholder="Your Email address"/>
                                        <div className="invalid-feedback">Please provide an email.</div>

                                        {/*</MDBCol>*/}
                                    </MDBRow>
                                    <MDBRow>
                                        {/*<MDBCol md="6" className="mb-0">*/}
                                        <label htmlFor="phoneid" className="grey-text">Contact number</label>
                                        <input onChange={this.onChangePhone} type="text" value={this.state.phone}
                                               id="phoneid" className="form-control" name="phone"
                                               placeholder="Contact number"  required/>
                                        <div className="invalid-feedback">Please provide the contact number</div>

                                        {/*</MDBCol>*/}

                                        {/*<MDBCol md="6" className="mb-0">*/}
                                        <label htmlFor="phoneid" className="grey-text">Date of Birth</label>
                                        <input onChange={this.onChangeDOB} type="date" value={this.state.dob} id="dobid"
                                               className="form-control" name="dob" required/>
                                        <div className="invalid-feedback">Please provide the Date of Birth</div>
                                        {/*</MDBCol>*/}

                                        {/*<MDBCol md="6" className="mb-0">*/}
                                        <label htmlFor="passwordid" className="grey-text">Password</label>
                                        <input onChange={this.onChangePassword} type="password"
                                               value={this.state.password} id="passwordid" className="form-control"
                                               name="password" placeholder="Password" required/>
                                        <div className="invalid-feedback">Please provide the password</div>

                                        {/*</MDBCol>*/}


                                        {/*<MDBCol md="6" className="mb-0">*/}
                                        <label htmlFor="conpasswordid" className="grey-text">Confirm Password</label>
                                        <input onChange={this.onChangeConfirmPassword} type="password"
                                               value={this.state.confirmpass} id="conpasswordid"
                                               className="form-control" name="confirmpass"
                                               placeholder="Confirm Password" required/>
                                        <div className="invalid-feedback">Please provide the confirm password</div>
                                        {
                                            this.state.password != this.state.confirmpass ? <MDBAlert color="danger">
                                                password and confirm password does not match
                                            </MDBAlert> : ''
                                        }


                                        {/*</MDBCol>*/}

                                        {/*<MDBCol md="6" className="mb-0">*/}
                                        <label htmlFor="genderid" className="grey-text">Gender</label>
                                        <input value={this.state.gender} onChange={this.onChangeGender} type="text"
                                               id="genderid" className="form-control" name="gender" placeholder="Gender"
                                               required/>

                                        <div className="invalid-feedback">Please provide your gender.</div>


                                        {
                                            this.state.imageURLValidation ?


                                                <MDBCol style={{width: "200px"}}>
                                                    <MDBCard>
                                                        <MDBCardImage className="imageSize"
                                                                      src={this.state.imageUrl}
                                                                      waves/>
                                                        <button className="btnClass"
                                                                onClick={this.removePhoto}>Remove</button>
                                                    </MDBCard>
                                                </MDBCol>


                                                :
                                                ''
                                        }
                                        {/*{*/}
                                        {/*    this.state.imageURLValidation ?*/}
                                        {/*        <button className="btnClass"*/}
                                        {/*                onClick={this.removePhoto}>Remove</button> : ''*/}
                                        {/*}*/}
                                        {/*    */}


                                    </MDBRow>
                                    <br/>

                                    <MDBRow className="imageC">
                                        <label htmlFor="imageid" className="grey-text  ">Image</label>
                                        <MDBCol size="12" >

                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="inputGroupFileAddon01">
                                                              Upload
                                                    </span>
                                                </div>
                                                <div className="custom-file">
                                                    <input
                                                        type="file"
                                                        className="custom-file-input"
                                                        id="inputGroupFile01"
                                                        aria-describedby="inputGroupFileAddon01"
                                                        onChange={this.onchangeFile}
                                                    />
                                                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                                                        {this.state.imageName}
                                                    </label>
                                                </div>
                                            </div>

                                            {
                                                this.state.imageValidation ?

                                                    <MDBAlert color="danger">
                                                        Image Field Is Empty
                                                    </MDBAlert> : ''
                                            }
                                        </MDBCol>
                                    </MDBRow>

                                    <br></br>
                                    <MDBBtn gradient="blue" rounded className="btn-block z-depth-1a" type="submit">
                                        REGISTER
                                    </MDBBtn>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBModalBody>
                </MDBModal>
            </MDBContainer>


        </div>
    );
}
}
