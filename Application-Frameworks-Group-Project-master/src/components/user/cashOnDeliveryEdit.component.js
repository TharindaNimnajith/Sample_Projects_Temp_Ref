import React, {Component} from 'react';
import axios from 'axios';
import swal from "sweetalert";


export default class EditCashOnDelivery extends Component {
    constructor(props) {
        super(props);

        this.onChangeDeliveryAddress = this.onChangeDeliveryAddress.bind(this);
        this.onChangeContactNumber = this.onChangeContactNumber.bind(this);

        this.state = {
            deliveryAddress: "",
            contactNumber: 0,
        }
    }


    componentDidMount() {
        axios.get('http://localhost:5000/cashOnDelivery/')
            .then(res => {
                console.log(res.data);
                const del = res.data.find(del => (del.contactNumber === Number(this.props.match.params.contactNumber)))
                this.setState({
                    del: del,
                    deliveryAddress: del.deliveryAddress,
                    contactNumber: del.contactNumber,
                })
            })
            .catch(err => console.log(err));
    }

    onChangeDeliveryAddress = event => {
        this.setState({
            deliveryAddress: event.target.value
        })
    };

    onChangeContactNumber = event => {
        this.setState({
            contactNumber: event.target.value
        })
    };


    onSubmit = event  => {
        event.preventDefault();

        const cashOnDelivery = {
            deliveryAddress: this.state.deliveryAddress,
            contactNumber: this.state.contactNumber
        };

        console.log(cashOnDelivery);


        axios.put('http://localhost:5000/cashOnDelivery/update/' + this.state.del._id ,cashOnDelivery)
            .then(res => {
                console.log(res.data);
                swal({
                    title: "Product Quantity has been updated!",
                    icon: "success",
                    button: true,
                })
            })
            .catch(err => console.log(err));

        // window.location = '/cartItems';
    };

    // back = () => {
    //     window.location = "/"
    // }

    render() {
        return (
            <div className="container">
                <br/><br/>
                <h3>Update Delivery Order Details</h3>
                <form onSubmit={ this.onSubmit} className="jumbotron" style={{backgroundColor:"#E8F8F5"}}>
                    <div className="form-group">
                        <h5>New Delivery Address: </h5>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.deliveryAddress}
                            onChange={this.onChangeDeliveryAddress}
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <h5>New Delivery Contact Number: </h5>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.contactNumber}
                            onChange={this.onChangeContactNumber}
                        />
                    </div>
                    <br/>
                    <input type="submit" value="Update" className="btn btn-primary" style={{backgroundColor: "#AF7AC5"}}/>
                    {/*<button className="btn btn-primary" onClick={this.home} style={{backgroundColor: "#AF7AC5"}}>Homepage</button>*/}
                </form>
            </div>
        );
    }
}