import React, {Component} from "react";
import {MDBCard, MDBCardBody, MDBCardText, MDBCol, MDBIcon, MDBRow} from "mdbreact";
import axios from "axios";
import constants from "../../../constants/constants";

export class AdminAnalysis extends Component{

    constructor(props){
        super(props)
        this.getDetails= this.getDetails.bind(this);
        this.getUserDetails= this.getUserDetails.bind(this);
        this.getAllSuppliers= this.getAllSuppliers.bind(this);

        this.state={
            orderList:[],
            total : 0,
            detailList :[],
            customerCount :0,
            supplierCount :0
        }
    }

    componentDidMount(){
        this.getDetails();
        this.getUserDetails();
        this.getAllSuppliers();
    }

    getDetails() {
        let total=0;
        axios.get(constants.backend_url + 'api/cart/getOrders').then(response => {

            response.data.map(orders=>{
                total += orders.itemTotal;
            })
            this.setState({
                orderList: response.data,
                total :total
            });
        }).catch(function (error) {
            console.log(error);
        })

    }

    getUserDetails() {
       let count=0;
        axios.get(constants.backend_url + 'api/userDetail/getAllusers').then(response => {

            response.data.map(orders=>{
                count += 1;
            })
            this.setState({
                detailList: response.data,
                customerCount :count
            })
        }).catch(function (error) {
            console.log(error);
        })
    }

    getAllSuppliers() {
        let count=0;
        axios.get(constants.backend_url + 'api/supplier/getAllSuppliers').then(response => {
            response.data.map(orders=>{
                count += 1;
            })

            this.setState({
                suppliers: response.data,
                supplierCount :count
            });
        }).catch(function (error) {
            console.log(error);
        })
        console.log(this.state.suppliers);
    }


    render() {
        return (
            <div>
                <MDBRow className="mb-4">
                    <MDBCol xl="3" md="6" className="mb-r">
                        <MDBCard className="cascading-admin-card">
                            <div className="admin-up">
                                <MDBIcon icon="money-bill-alt" className="primary-color"/>
                                <div className="data">
                                    <p>Total Sales</p>
                                    <h4>
                                        <strong>Rs :{this.state.total}</strong>
                                    </h4>
                                </div>
                            </div>
                            <MDBCardBody>
                                <div className="progress">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow={this.state.total} className="progress-bar bg-primary" role="progressbar"
                                         style={{width: '25%'}}></div>
                                </div>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol xl="3" md="6" className="mb-r">
                        <MDBCard className="cascading-admin-card">
                            <div className="admin-up">
                                <MDBIcon icon="chart-line" className="warning-color"/>
                                <div className="data">
                                    <p>Total Customer</p>
                                    <h4>
                                        <strong>{this.state.customerCount}</strong>
                                    </h4>
                                </div>
                            </div>
                            <MDBCardBody>
                                <div className="progress">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow={this.state.customerCount} className="progress-bar bg grey" role="progressbar"
                                         style={{width: '25%'}}></div>
                                </div>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol xl="3" md="6" className="mb-r">
                        <MDBCard className="cascading-admin-card">
                            <div className="admin-up">
                                <MDBIcon icon="chart-pie" className="light-blue lighten-1"/>
                                <div className="data">
                                    <p>Total Suppliers</p>
                                    <h4>
                                        <strong>{this.state.supplierCount}</strong>
                                    </h4>
                                </div>
                            </div>
                            <MDBCardBody>
                                <div className="progress">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow={this.state.supplierCount} className="progress-bar grey darken-2" role="progressbar"
                                         style={{width: '75%'}}></div>
                                </div>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                </MDBRow>
            </div>
        );
    }
}
