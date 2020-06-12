import React, { Component } from 'react';
import axios from 'axios';
import '../../stylesheets/cashOnDelivery.css';

const Swal = require('sweetalert2');

export default class cashOnDelivery extends Component{
    constructor(props) {
        super(props);

        this.onChangeDeliveryAddress = this.onChangeDeliveryAddress.bind(this);
        this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            deliveryAddress: "",
            contactNumber: '',
        }
    }

    onChangeDeliveryAddress(e){
        this.setState({
            deliveryAddress: e.target.value
        })
    }

    onChangeContactNumber(e){
        this.setState({
            contactNumber: e.target.value
        })
    }

    // componentDidMount() {
    //     axios.get('http://localhost:5000/cartItemList/')
    //         .then(res => {
    //             this.setState({
    //                 FinaltotPrice: res.data.totalPrice
    //             })
    //             console.log(this.state.FinaltotPrice)
    //         })
    //         .catch(err => console.log(err));
    // }

    onSubmit(e){
        e.preventDefault();

        const cashOnDelivery = {
            deliveryAddress: this.state.deliveryAddress,
            contactNumber: this.state.contactNumber
        }


        console.log(cashOnDelivery);
        axios.post('http://localhost:5000/cashOnDelivery/add', cashOnDelivery)
            .then(res => console.log(res.data),
                Swal.fire({
                    position: 'center',
                    title: "Are you sure you want to continue?",
                    text: "",
                    icon: 'warning',
                    type: "warning",
                    showCancelButton: true,
                    cancelButtonText: 'Go back',
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Confirm Delivery Details",
                },
                    ).then((result) => {
                    if (result.value) {
                        Swal.fire(
                            'Delivery Added',
                            '',
                            'success',
                            window.location = "/cashOnDeliveryDetails/"+this.state.contactNumber
                        )}
                })
            );
    }

    render() {
        return (
            <div id="all">
                <br/><br/><br/><br/><br/>
                <div className="container">
                <form className="jumbotron" style={{backgroundColor:"#E8F8F5"}}>
                <h3 id="intro"><u>Cash On Delivery</u></h3>
                    <br/>
                <h4>Total Price : {this.state.FinaltotPrice}</h4>
                    <br/>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Delivery Address: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.deliveryAddress}
                               onChange={this.onChangeDeliveryAddress}/>
                    </div>
                    <div className="form-group">
                        <label> Contact Number: </label>
                        <input type="text"
                               required
                               placeholder="10 digit number starting with 0"
                               pattern="0[0-9]{9}"
                               className="form-control"
                               value={this.state.contactNumber}
                               onChange={this.onChangeContactNumber}/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" style={{backgroundColor: "#AF7AC5"}}/>
                    </div>
                </form>
                </form>
                </div>
            </div>
        )
    }
}