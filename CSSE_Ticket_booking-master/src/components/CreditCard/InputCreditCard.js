import React from 'react';
import Card from 'react-credit-cards';


import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
} from './CreditCardUtils';
import './creditCardStyles.css';
import 'react-credit-cards/es/styles-compiled.css';
import axios from "axios";
import Button from "../CustomButtons/Button";




class InputCreditCard extends React.Component {

    state = {
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        issuer: '',
        focused: '',
        formData: null,
        cost : 1000
    };


    componentDidMount() {

        console.log(this.props.user)
        this.setState({
            number : this.props.user.creditCardNo,
            name : this.props.user.userFullName,
            expiry : this.props.user.expireDate ? this.props.user.expireDate : ''
        })

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // if(this.props.data !== prevProps.data){
        //     this.calculateCost()
        // }
    }



    handleCallback = ({issuer}, isValid) => {
        if (isValid) {
            this.setState({issuer});
        }
    };

    handleInputFocus = ({target}) => {
        this.setState({
            focused: target.name,
        });
    };

    handleInputChange = ({target}) => {
        if (target.name === 'number') {
            target.value = formatCreditCardNumber(target.value);

        } else if (target.name === 'expiry') {
            target.value = formatExpirationDate(target.value);
        } else if (target.name === 'cvc') {
            target.value = formatCVC(target.value);
        }

        this.setState({[target.name]: target.value});
    };

    handleSubmit = e => {


    };

    // onClickConfirmPay() {
    //
    //
    //     var url = "http://localhost:8080/seat/bookSeats?timeTableId=" + this.props.data.timeTableId + "&seatList=" + this.props.data.myRecerved.toString()+ "&email="+this.props.data.email +"&cost="+this.state.cost;
    //     axios.post(url).then(
    //         response => {
    //
    //             console.log(response)
    //
    //         }
    //     ).catch(error => {
    //         console.log(error)
    //     })
    // }

    // calculateCost() {
    //     if (this.props.data.email !== '') {
    //         var url = "http://localhost:8080/seat/getCost?email=" + this.props.data.email + "&timaTableId=" + this.props.data.timeTableId + "&noOfSeats=" + this.props.data.myRecerved.length + "&SeatClass=" + this.props.data.seatClass;
    //
    //         axios.post(url).then(
    //             response => {
    //
    //                 this.setState({
    //                     cost: response.data
    //                 })
    //             }
    //         ).catch(error => {
    //             console.log(error)
    //         })
    //     } else {
    //        console.log('input email')
    //     }
    // }

    rechargeButtonClick = () => {

        console.log(this.props)
        axios({
            method: 'put',
            url: 'http://localhost:8081/api/v1/smartCards/TopUp/'+this.props.card.id+'/'+this.state.cost,

        }).then(res => {

            this.props.updatebalance(res.data);

        }).catch(err => {
            console.log(err);


        }).finally(a => {

        })




    }

    render() {

        const {name, number, expiry, cvc, focused} = this.state;

        return (
            <div key="Payment">

                <div className="App-payment" style={{width: '700px'}}>

                    <div style={{float: 'left'}}>
                        <Card
                            number={number}
                            name={name}
                            expiry={expiry}
                            cvc={cvc}
                            focused={focused}
                            callback={this.handleCallback}
                        />
                    </div>
                    <div style={{float: 'right'}}>
                        <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>

                            <div className="form-group">
                                <input

                                    type="text"
                                    name="cost"
                                    className="form-control"
                                    placeholder="Cost"
                                    defaultValue={this.state.cost}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <input

                                    type="text"
                                    name="number"
                                    className="form-control"
                                    placeholder="Card Number"
                                    defaultValue= {this.state.number ? this.state.number : ''}
                                    pattern="[\d| ]{16,22}"
                                    required
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Name"
                                    defaultValue={this.state.name ? this.state.name : ''}
                                    required
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="expiry"
                                    className="form-control"
                                    placeholder="Valid Thru"
                                    pattern="\d\d/\d\d"
                                    required
                                    defaultValue={this.state.expiry ? this.state.expiry : ''}
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="cvc"
                                    className="form-control"
                                    placeholder="CVC"
                                    pattern="\d{3,4}"
                                    required
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                />
                            </div>

                            <div className="form-actions">
                                <Button color="primary" round onClick={()=>{
                                    this.rechargeButtonClick();
                                }}>
                                    {this.state.showRecharge ? 'Hide Recharge Tab' : 'Recharge Account'}
                                </Button>

                            </div>
                        </form>
                    </div>

                </div>

            </div>
        );
    }

}


export default InputCreditCard;
