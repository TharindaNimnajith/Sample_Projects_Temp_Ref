import {Component} from "react";
import React from "react";
import axios from "axios";
import constants from "../../Constants/constants";
import uuid from "react-uuid";
import Loader from "react-loader-spinner";
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBNavLink} from "mdbreact";

export class Itemsaccordingtocategory extends Component {

    constructor(props){
        super(props)
        this.state = {
            id: '',
            newItems:[],
            itemColor:[],
            itemArray :[],
            newItemArray :[],
            categoryItems :[],
            loaderStatus :true
        }
        this.getItemDetailsAccordingtoCategory = this.getItemDetailsAccordingtoCategory.bind(this);
    }
    componentDidMount() {
        this.setState({
            id:this.props.match.params.id
        })
        this.getItemDetailsAccordingtoCategory(this.props.match.params.id);
    }
    getItemDetailsAccordingtoCategory(id){
        axios.get(constants.backend_url + 'api/item/itemCategory/').then(response => {
            response.data.map(item=>{
                if(item.brandCategory[0].categoryCode[0] === id){
                    const newArray = {
                        itemArray: item,
                    }
                    const array = [newArray, ...this.state.newItemArray];

                    this.setState({
                        newItemArray: array,
                    })
                }
            })
            console.log("response");
            console.log(response.data);
            console.log("response")
            this.setState({newItems: response.data});
            this.getItemColorDetails();
        }).catch(function (error) {
            console.log(error);
        })

    }
    getItemColorDetails(){
        console.log(this.state.id)
        axios.get(constants.backend_url + 'api/itemcolor/getAllItemColors').then(response => {
            this.state.newItemArray.map(item=>{
                response.data.map(itemColor=>{
                    if(itemColor.itemCode[0].itemCode===item.itemArray.itemCode){
                        const newArray = {
                            itemArray: itemColor
                        }
                        const array = [newArray, ...this.state.categoryItems];
                        this.setState({
                            categoryItems: array,

                        })
                    }

                })

            })

            this.setState({
                itemColor: response.data,
                loaderStatus :false
            });
        }).catch(function (error) {
            console.log(error);
        })

    }

    render() {
        return (
            <div>
                <br/><br/><br/><br/>
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
                                    this.state.categoryItems.map(items => {
                                        console.log(items);
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
                                                        <MDBCardText>
                                                            Size  : {items.itemArray.itemSize}
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

            </div>
        );
    }
}
