import React, { Component } from 'react';
import axios from 'axios';
const swal = require('sweetalert2');

class cashOnDeliveryDetails extends Component{

    constructor(props) {
        super(props);

        this.state = {
            // deliveryId: 0,
            deliveryAddress: "",
            contactNumber: 0,
            delivery: []
        }
    }


    componentDidMount() {
        axios.get('http://localhost:5000/cashOnDelivery')
            .then(res => {
                console.log(res.data);
                console.log(this.props.match.params.contactNumber);
                console.log(res.data.find(del => (del.contactNumber === Number(this.props.match.params.contactNumber))));
                this.setState({
                            delivery: res.data.find(del => (del.contactNumber === Number(this.props.match.params.contactNumber)))
                        })
                console.log(this.state.delivery._id)

                // this.setState({
                //     delivery: res.data.find(del => (del.contactNumber === this.props.match.params.contactNumber))
                // })
                // console.log(this.state.delivery);
                // this.setState({
                //     // deliveryId: res.data.deliveryId,
                //     deliveryAddress: res.data.deliveryAddress,
                //     contactNumber: res.data.contactNumber,
                // })
            // })

        console.log(this.state.deliveryAddress)
        console.log(this.state.contactNumber)

        // axios.get('http://localhost:5000/finalPayment')
        //     .then(res => {
        //         this.setState({
        //             finalPayment: res.data
        //         });
        //         console.log(this.state.finalPayment)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     });
    })
    }
    deleteCashOnDeliveryItem = () => {
        axios.delete('http://localhost:5000/cashOnDelivery/' + this.state.delivery._id)
            .then(res => console.log(res.data))
            .catch(err => console.error(err));

        swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Order Cancelled!',
            showConfirmButton: false,
        })
        window.location = "/"


        this.setState({
            // cartItems: this.state.cartItems.filter(cartItem => cartItem.contactNumber !== contactNumber)
        })
    };

    homepage = () => {
        window.location = "/"
    }

    edit = () => {
        window.location = "/cashOnDeliveryEdit/" + this.props.match.params.contactNumber
    }


    render() {
        return (
            <div>
                {/*{this.state.cashOnDelivery.map(cashOnDelivery => (*/}
                {/*    <p>Nickname : {cashOnDelivery.deliveryAddress} <br/> Comment : {cashOnDelivery.contactNumber}</p>*/}
                {/*))}*/}
                <br/><br/><br/><br/><br/><br/><br/>
                <div className="container" align="center">
                    <div className="jumbotron" style={{backgroundColor:"#E8F8F5"}}>
                    <h4>Delivery Address : {this.state.delivery.deliveryAddress}</h4><br/>
                    <h4>Contact Number : {this.state.delivery.contactNumber}</h4><br/><br/>
                    <button className="btn btn-primary btn-lg" onClick={this.deleteCashOnDeliveryItem} style={{backgroundColor: "#AF7AC5"}}>Cancel Delivery Order</button><br/><br/>
                    <button className="btn btn-primary btn-lg" onClick={this.homepage} style={{backgroundColor: "#AF7AC5"}}>Back To Home</button><br/><br/>
                    <button className="btn btn-primary btn-lg" onClick={this.edit} style={{backgroundColor: "#AF7AC5"}}>Edit Delivery Information</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default cashOnDeliveryDetails

