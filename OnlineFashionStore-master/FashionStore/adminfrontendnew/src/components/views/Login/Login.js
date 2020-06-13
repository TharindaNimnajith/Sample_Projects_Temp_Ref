import React,{Component} from "react";
import { MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBAnimation, MDBAlert} from 'mdbreact';
import './Login.css';
import { MDBCard, MDBCardBody, MDBInput} from 'mdbreact';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import axios from "axios";
import constants from "../../../constants/constants";


export default  class Login extends Component {
    constructor(props){
        super(props);
        this.state ={
            loginEmail:'',
                loginPass: '',
                loginEmailV: false,
                loginPassV: false
        }
        this.login = this.login.bind(this);
        this.onChangeEmailV = this.onChangeEmailV.bind(this);
        this.onChangePassV = this.onChangePassV.bind(this);
        this.validateUser = this.validateUser.bind(this);
    }

    login(){

    }

    validateUser(event){
        event.preventDefault();

        if(this.state.loginEmail != '' ){
            this.setState({
                loginEmailV: false
            })
            if(this.state.loginPass != '' ){
                this.setState({
                    loginPassV: false
                })

                axios.get(constants.backend_url + 'api/adminDetail/validateUser/' + this.state.loginEmail + '/' + this.state.loginPass)
                    .then(res => {
                            console.log(res)
                            if (res.data.Message !=='fail' ) {

                                this.setState({
                                    loginEmail: '',
                                    loginPass:'',
                                    loginEmailV: false,
                                    loginPassV:false
                                })
                                localStorage.setItem("userLogged","userLogged");
                                if(res.data.Message.position ==='Admin'){
                                    localStorage.setItem("Position","Admin");
                                    console.log("Admin")
                                }else{
                                    localStorage.setItem("Position","StoreManager");
                                }
                                this.props.history.push('/');
                                window.location.reload();
                            } else {
                                Swal.fire(
                                    '',
                                    'Login unsuccessful  !',
                                    'error'
                                )
                            }
                        }
                    );


            }else{
                console.log('email field empty');
                this.setState({
                    loginPassV: true
                })
            }
        }else{
            console.log('email field empty');
            this.setState({
                loginEmailV: true
            })


        }
    };

    onChangeEmailV(event){
        this.setState({
            loginEmail:event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangePassV(event){
        this.setState({
            loginPass:event.target.value,
            [event.target.name]: event.target.value
        })
    }


    render() {
        return (
            <div id='apppage'>
                <MDBView>
                    <MDBMask className='white-text gradient' />
                    <MDBContainer
                        style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
                        className='d-flex justify-content-center white-text align-items-center'>
                        <MDBRow>
                            <MDBCol md='12' className='text-center text-md-left mt-xl-5 mb-5'>
                                <MDBAnimation type='fadeInLeft' delay='.3s'>
                                    <MDBCard className="loginContainer" >
                                        <MDBCardBody className="mx-4" >
                                            <div className="text-center">
                                                <h3 className="dark-grey-text mb-5">
                                                    <strong>Admin Login</strong>
                                                </h3>
                                            </div>
                                            <form className="needs-validation" onSubmit={this.validateUser}>
                                            <MDBInput
                                                label="Email"
                                                validate error="wrong"
                                                success="right"
                                                value={this.state.loginEmail} onChange={this.onChangeEmailV}
                                            />
                                                {
                                                    this.state.loginEmailV  ?
                                                        <MDBAlert color="danger">
                                                            Please enter the position !
                                                        </MDBAlert> : ''
                                                }
                                            <MDBInput
                                                label="Password"
                                                group type="password"
                                                validate
                                                containerClass="mb-0"
                                                value={this.state.loginPass} onChange={this.onChangePassV}
                                            />
                                                {
                                                    this.state.loginPassV  ?
                                                        <MDBAlert color="danger">
                                                            Enter Password !
                                                        </MDBAlert> : ''
                                                }
                                            <div className="text-center mb-3">
                                                <MDBBtn type="submit" color='pink' className="btn-block z-depth-1a buttonSign ">
                                                    LOGIN
                                                </MDBBtn>
                                            </div>
                                            </form>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBAnimation>
                            </MDBCol>

                            {/*<MDBCol md='12' xl='6' className='mt-xl-5'>*/}
                            {/*    <MDBAnimation type='fadeInRight' delay='.3s'>*/}
                            {/*        <img src='./Bag.png' alt='' className='img-fluid'/>*/}
                            {/*    </MDBAnimation>*/}
                            {/*</MDBCol>*/}
                        </MDBRow>
                    </MDBContainer>
                </MDBView>
            </div>
        );
    }
}
