import React, {Component} from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardGroup,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle, MDBCol, MDBNavItem, MDBNavLink,
} from "mdbreact";
import axios from "axios";
import constants from "../../Constants/constants";
import uuid from 'react-uuid';
import Loader from 'react-loader-spinner';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.getAllCategories = this.getAllCategories.bind(this);
        this.getAllNewItems = this.getAllNewItems.bind(this);
        this.getAllItemDetails = this.getAllItemDetails.bind(this);
        this.getDetailsOfNewItems = this.getDetailsOfNewItems.bind(this);
        this.state = {
            categories: [],
            newItems: [],
            itemColors: [],
            newItemArray: [],
            arrayId: [],
            loaderStatus :true
        }
    }

    componentDidMount() {
        this.getAllCategories();
         this.getAllNewItems();

    }


    getAllNewItems() {
        axios.get(constants.backend_url + 'api/category/getAllCategories').then(response => {
            this.setState({categories: response.data});
            console.log(this.state.categories)
           this.getAllItemDetails();
        }).catch(function (error) {
            console.log(error);
        })
    }

    getAllCategories() {
        axios.get(constants.backend_url + 'api/itemcolor/getAllNewItems').then(response => {
            this.setState({newItems: response.data});
        }).catch(function (error) {
            console.log(error);
        })
    }

    getAllItemDetails() {
        axios.get(constants.backend_url + 'api/itemcolor/getNewItemDetailsById').then(response => {
            this.setState({itemColors: response.data});
            this.getDetailsOfNewItems();
        }).catch(function (error) {
            console.log(error);
        })

    }

    getDetailsOfNewItems() {
        this.state.newItems.map(item => {
            this.state.itemColors.map(response => {
                if (item.itemCode[0]._id === response.itemCode[0]._id) {
                    const newArray = {
                        itemArray: response,
                        arrayId: uuid()
                    }
                    let status =false;

                    if(this.state.newItemArray.length===0){
                        const array = [newArray, ...this.state.newItemArray];
                        this.setState({
                            newItemArray: array,
                            loaderStatus :false
                        })
                    }else{
                        this.state.newItemArray.map(stateItem=>{
                            if(response.itemCode[0].itemCode===stateItem.itemArray.itemCode[0].itemCode){
                                status=true;
                            }
                        })
                        if(!status){
                            const array = [newArray, ...this.state.newItemArray];
                            this.setState({
                                newItemArray: array,
                                loaderStatus :false
                            })
                        }
                    }

                }
            });
        })
    }


    render() {
        return (

            <div>
                <br/>
                <br/>
                <br/>
                <br/>

                <div>
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-10 textAlign">
                            <h1> New Arrivals</h1>
                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>

                    <br/>
                    <div className="row ">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-10 ">
                            <div className="row">

                                {
                                    this.state.loaderStatus?
                                        <div  className="col-sm-12">
                                            <div className="row">
                                                <div className="col-sm-4">

                                                </div>
                                                <div  className="col-sm-4">
                                                    <Loader className="loaderClass"

                                                            type="ThreeDots"
                                                            color="#00BFFF"
                                                            height={500}
                                                            width={350}
                                                            timeout={30000} //3 secs

                                                    />
                                                </div>
                                                <div  className="col-sm-4">

                                                </div>
                                            </div>
                                        </div>


                                        :
                                        this.state.newItemArray.map(items => {
                                            console.log(items);
                                            // = btoa(String.fromCharCode(...new Uint8Array(items.image.data)));
                                            const base64String = btoa(new Uint8Array(items.itemArray.image.data).reduce(function (data, byte) {
                                                return data + String.fromCharCode(byte);
                                            }, ''));
                                            return (
                                                <div className="col-sm-4 cardMarginTop">
                                                    <MDBCard style={{width: "22rem"}}>
                                                        <MDBCardImage className="img-fluid"
                                                                      src={`data:image/jpeg;base64,${base64String}`}
                                                                      waves/>
                                                        <MDBCardBody>
                                                            <MDBCardTitle>{items.itemArray.itemCode[0].itemName}</MDBCardTitle>
                                                            <MDBCardText>
                                                                LKR  : {items.itemArray.price}
                                                            </MDBCardText>
                                                            {
                                                                items.itemArray.itemCode[0].discount!==0 ?
                                                                    <MDBCardText>
                                                                        Discount  : {items.itemArray.itemCode[0].discount+'%'}
                                                                    </MDBCardText>
                                                                    :
                                                                    ''
                                                            }
                                                            <div className="row">
                                                                <div className="col-sm-3 "/>
                                                                <div className="col-sm-6 ">
                                                                    <MDBNavLink to={"/item/"+items.itemArray.itemCode[0]._id+"/"+items.itemArray._id}>
                                                                        <MDBBtn  >View</MDBBtn>
                                                                    </MDBNavLink>

                                                                </div>
                                                                <div className="col-sm-3 "/>

                                                            </div>

                                                        </MDBCardBody>
                                                    </MDBCard>
                                                </div>
                                            );
                                        })
                                }


                            </div>
                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-10 textAlign">
                            <h1> Categories</h1>
                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>
                    <br/>
                    <div className="row ">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-10 ">
                            <div className="row">
                                {
                                    this.state.categories.map(category => {
                                        return (
                                            <div className="col-sm-4 cardMarginTop">
                                                <MDBCard style={{width: "22rem"}}>
                                                    <MDBCardBody>
                                                        <MDBCardTitle>{category.categoryName}</MDBCardTitle>


                                                        <MDBNavLink to={"/itemsaccordingtocategory/"+category._id}>
                                                            <MDBBtn outline color="primary">View</MDBBtn>
                                                        </MDBNavLink>

                                                    </MDBCardBody>
                                                </MDBCard>
                                            </div>
                                        )

                                    })
                                }


                            </div>


                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>

                </div>


            </div>


        );
    }
}
