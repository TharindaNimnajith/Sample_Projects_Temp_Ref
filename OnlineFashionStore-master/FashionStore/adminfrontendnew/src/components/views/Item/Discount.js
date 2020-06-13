import React, {Component} from 'react';
import {
    MDBAlert,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCol, MDBIcon,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from "mdbreact";
import {NavLink} from "react-router-dom";
import TextField from "@material-ui/core/TextField/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";
import uuid from "react-uuid";
import axios from "axios";
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import constants from "../../../constants/constants";

export class Discount extends Component {

    constructor(props) {
        super(props);

        this.state = {
            itemCodes: [],
            newArraivalId: '',
            itemCodeObject: '',
            itemDiscount: 0,
            itemDiscountValidation: false,
            itemDiscountIncreaseValidation: false,
            newArraivalItems: [],
            itemId: ''

        }
        this.getAllItemCodes = this.getAllItemCodes.bind(this);
        this.onChangeGetItemCode = this.onChangeGetItemCode.bind(this);
        this.onChangeDiscount = this.onChangeDiscount.bind(this);
        this.saveDetails = this.saveDetails.bind(this);

    }

    componentDidMount() {
        this.getAllItemCodes();
    }

    getAllItemCodes() {
        axios.get(constants.backend_url + 'api/item/getAllItems').then(response => {
            this.setState({itemCodes: response.data});
        }).catch(function (error) {
            console.log(error);
        })

    }

    onChangeGetItemCode(value) {
        console.log("Value")
        console.log(value)
        console.log("value")
        if (value !== null) {
            this.state.itemCodeObject = value;
            this.state.itemDiscount = value.discount;
            this.setState({
                itemDiscount: value.discount,
                itemId: value._id
            })

        }

    }

    saveDetails(e) {
        e.preventDefault();
        axios.get(constants.backend_url + 'api/item/updateDiscount/' + this.state.itemId + '/' + this.state.itemDiscount)
            .then(res => {
                    console.log(res);
                    if (res.data.item === 'successful') {
                        Swal.fire(
                            '',
                            'Discount Updated Success.',
                            'success'
                        );
                        this.getAllItemCodes();
                        this.setState({
                            itemDiscount: 0
                        })
                    } else {
                        Swal.fire(
                            '',
                            'Updated Faild',
                            'error'
                        )
                    }
                }
            )
    }

    onChangeDiscount(e) {
        if (e.target.value >= 0 && e.target.value <= 100) {
            this.setState({
                itemDiscount: e.target.value,
                itemDiscountValidation: false,
                itemDiscountIncreaseValidation: false
            });
        } else {
            this.setState({
                itemDiscount: 0,
                itemDiscountIncreaseValidation: true
            });
        }
    }

    render() {
        return (
            <div>
                <MDBCard className="mb-5">
                    <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
                        <NavLink exact={true} to="/item/discount">
                            <button type="button" className="btn btn-primary ">Discount</button>

                        </NavLink>
                        <NavLink exact={true} to="/item" activeClassName="activeClass">
                            <button type="button" className="btn btn-success">New Item</button>
                        </NavLink>
                        {
                            localStorage.getItem("Position") === "Admin" ?
                                <NavLink exact={true} to="/item/brandcategory">
                                    <button type="button" className="btn btn-success"> Brand & Category</button>
                                </NavLink>
                                :
                                ''
                        }

                        <NavLink exact={true} to="/item/itemcolor">
                            <button type="button" className="btn btn-success"> ItemColor</button>
                        </NavLink>

                        <NavLink exact={true} to="/item/newarraivalitems">
                            <button type="button" className="btn btn-success"> New Arrivals</button>

                        </NavLink>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </MDBCardBody>
                </MDBCard>

                <MDBRow>
                    <MDBCol size="8">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Update Discount</MDBCardTitle>
                                <MDBRow>
                                    <MDBCol size="5">
                                        <Autocomplete
                                            id="combo-box-demo"
                                            options={this.state.itemCodes}
                                            getOptionLabel={(option) => option.itemCode}
                                            style={{width: 300}}
                                            onChange={(event, value) => this.onChangeGetItemCode(value)}
                                            renderInput={(params) => <TextField {...params} label="Item Code"/>}
                                        />
                                        {
                                            this.state.itemCodeObjectValidation ?
                                                <MDBAlert color="danger">
                                                    Item Code Field Is Empty
                                                </MDBAlert> : ''
                                        }
                                    </MDBCol>
                                </MDBRow>

                                <br/>
                                <MDBRow>
                                    <MDBCol size="6">
                                        <TextField id="standard-basic" label="Item Discount"
                                                   value={this.state.itemDiscount}
                                                   onChange={this.onChangeDiscount}
                                                   style={{width: 300}}
                                        />
                                        {
                                            this.state.itemDiscountValidation ? <MDBAlert color="danger">
                                                Item Discount Field Is Empty
                                            </MDBAlert> : ''
                                        }
                                        {
                                            this.state.itemDiscountIncreaseValidation ? <MDBAlert color="danger">
                                                Item Discount Is greter than 100
                                            </MDBAlert> : ''
                                        }
                                    </MDBCol>
                                </MDBRow>

                                <br/>

                                <MDBRow>
                                    <form onSubmit={this.saveDetails}>
                                        <MDBCol size="4">
                                            <MDBBtn type="submit">Save</MDBBtn>
                                        </MDBCol>
                                    </form>

                                </MDBRow>

                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>


                </MDBRow>

            </div>
        );
    }
}
