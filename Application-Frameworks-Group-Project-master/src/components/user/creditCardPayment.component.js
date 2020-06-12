import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
const Swal = require('sweetalert2');

export default class creditCardPayment extends Component{
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
        this.onChangeExpiration = this.onChangeExpiration.bind(this);
        this.onChangeCVC = this.onChangeCVC.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            userName: "",
            cardNumber: "",
            expiration: new Date(),
            cvc: '',
            // totalPrice: 0
        }
    }

    onChangeUsername(e){
        this.setState({
            userName: e.target.value
        })
    }

    onChangeCardNumber(e){
        this.setState({
            cardNumber: e.target.value
        })
    }

    onChangeExpiration(expiration){
        this.setState({
            expiration: expiration
        })
    }

    onChangeCVC(e){
        this.setState({
            cvc: e.target.value
        })
    }

    // componentDidMount() {
    //     axios.get('http://localhost:5000/cartItems/' )
    //         .then(res => {
    //             this.setState({
    //                 FinaltotPrice: res.data.FinaltotPrice
    //             })
    //             console.log(this.state.FinaltotPrice)
    //         })
    //         .catch(err => console.log(err));
    // }

    onSubmit = (event, totalPrice) => {
        event.preventDefault();

        const payment = {
            userName: this.state.userName,
            cardNumber: this.state.cardNumber,
            expiration: this.state.expiration,
            cvc: this.state.cvc,
            // totalPrice: 10000
        }

        console.log(payment);
        axios.post('http://localhost:5000/creditCardPayment/add', payment)
            .then(res => console.log(res.data),
            Swal.fire({
                position: 'center',
                title: "Are you sure you want to continue your payment?",
                text: "",
                icon: 'warning',
                type: "warning",
                showCancelButton: true,
                cancelButtonText: 'Go back',
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Pay",
            }).then((result) => {
                if (result.value) {
                    Swal.fire(
                        'Payment Successful!',
                        'Thank You For Using Our Services',
                        'success',
                        window.location = "/"
                    )}
            })
            );
    }

    render() {
        return (
            <div>
                <br/><br/>
                    <div className="container">
                        <form className="jumbotron" style={{backgroundColor:"#E8F8F5"}}>
                            <h3><u>Payment</u></h3>
                            <h4>Total Price : {this.state.FinaltotPrice} </h4>
                            <form onSubmit={event => this.onSubmit(event)}>
                                <div className="form-group">
                                    <label> Name On Card: </label>
                                    <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.userName}
                                    onChange={this.onChangeUsername}/>
                                </div>
                                <div className="form-group">
                                    <label> Card Number: </label>
                                    <input type="text"
                                           required
                                           placeholder="16 digit number starting with 4"
                                           pattern="4[0-9]{3}[0-9]{4}[0-9]{4}[0-9]{4}"
                                           className="form-control"
                                           value={this.state.cardNumber}
                                           onChange={this.onChangeCardNumber}/>
                                </div>
                                <div className="form-group">
                                    <label>Expiry Date: </label>
                                    <div>
                                        <DatePicker
                                            selected={this.state.expiration}
                                            onChange={this.onChangeExpiration}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label> CVC/CW: </label>
                                    <input type="text"
                                           required
                                           placeholder="xxx (3 digit number)"
                                           pattern="[0-9]{3}"
                                           className="form-control"
                                           value={this.state.cvc}
                                           onChange={this.onChangeCVC}/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Pay" className="btn btn-primary" style={{backgroundColor: "#AF7AC5"}}/>
                                </div>
                            </form>
                        </form>
                    </div>
            </div>
        )
    }
}
