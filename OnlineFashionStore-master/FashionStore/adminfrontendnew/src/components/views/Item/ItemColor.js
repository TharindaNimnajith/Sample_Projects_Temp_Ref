import React, {Component} from "react";
import './Style/Item.css'
import {
    MDBAlert,
    MDBBtn,
    MDBCard,
    MDBCardBody, MDBCardImage,
    MDBCardTitle,
    MDBCol,
    MDBInput,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from "mdbreact";

import {BlockPicker, SwatchesPicker, TwitterPicker} from 'react-color';
import TextField from "@material-ui/core/TextField/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";
import axios from "axios";

import ItemColorTableBody from "./ItemColorTableBody";
import uuid from "react-uuid";
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import BrandCategoryTableBody from "./BrandCategoryTableBody";
import constants from "../../../constants/constants";
import {NavLink} from "react-router-dom";

export default class ItemColor extends Component {


    constructor(props) {
        super(props);
        this.getAllItemCodes = this.getAllItemCodes.bind(this);
        this.getAllItemSizes = this.getAllItemSizes.bind(this);
        this.removePhoto = this.removePhoto.bind(this);
        this.onchangeFile = this.onchangeFile.bind(this);
        this.additemColorsToTable = this.additemColorsToTable.bind(this);
        this.submitItemsColors = this.submitItemsColors.bind(this);
        this.deleteItemColor = this.deleteItemColor.bind(this);

        this.state = {
            background: '#ba68c8',
            itemCodes: [],
            itemCodeObject: ' ',
            itemSizes: [],
            itemSizeNameObject: ' ',
            imageURLValidation: false,
            imageValidation: false,
            imageURL: ' ',
            image: '',
            itemColorArray: [],
            itemCodeObjectValidation: false,
            itemSizeNameObjectValidation: false,
            itemColorId: uuid(),
            noItem: true,
            imageName: ' ',
            brandName :'',
            categoryName :''
        };
    }

    componentDidMount() {
        this.getAllItemCodes();
        this.getAllItemSizes();
        if(localStorage.getItem("userLogged")!=="userLogged"){
            this.props.history.push('/');
        }
    }


    handleChangeComplete = (color) => {
        this.setState({background: color.hex});
    };

    getAllItemCodes() {
        axios.get(constants.backend_url + 'api/item/getAllItems').then(response => {
            this.setState({itemCodes: response.data});
        }).catch(function (error) {
            console.log(error);
        })

    }

    getAllItemSizes() {
        axios.get(constants.backend_url + 'api/itemsize/getAllSizes').then(response => {
            this.setState({itemSizes: response.data});
        }).catch(function (error) {
            console.log(error);
        })

    }


    onChangeGetItemCode(value) {
        this.state.itemCodeObject = value;
        this.setState({
            itemCodeObject: this.state.itemCodeObject,
            itemCodeObjectValidation: false
        })
    }

    onChangeGetItemSize(value) {
        this.state.itemSizeNameObject = value;
        this.setState({
            itemSizeName: this.state.itemSizeNameObject,
            itemSizeNameObjectValidation: false
        })
    }

    removePhoto() {
        this.setState({
            image: ' ',
            imageUrl: ' ',
            imageURLValidation: false,
            imageValidation: false,
            imageName: ' '
        })

    }

    onchangeFile(e) {

        // if (URL.createObjectURL(e.target.files[0]) !== ' ') {
        if(e.target.files.length){
            this.setState({
                image: e.target.files[0],
                imageUrl: URL.createObjectURL(e.target.files[0]),
                imageURLValidation: true,
                imageValidation: false,
                imageName: e.target.files[0].name
            });
        }

        // }

    }

    deleteItemColor(id) {

        const notDeletedItems = this.state.itemColorArray.filter(item => item.itemColorId !== id);
        this.setState({
                itemColorArray: notDeletedItems,
                itemColorId: id
            }
        )
        if (notDeletedItems.length === 0) {
            this.setState({
                noItem: true
            })
        }
    }


    additemColorsToTable(e) {
        e.preventDefault();
        if (this.state.itemCodeObject !== ' ') {
            if (this.state.itemSizeNameObject !== ' ') {
                if (this.state.image !== ' ') {
                    console.log("this.state.itemCodeObject._id :" + this.state.itemCodeObject._id)
                    console.log( this.state.itemCodeObject.brandCategory[0]);
                    axios.get(constants.backend_url + 'api/brandcategory/getBrandCategory/'+this.state.itemCodeObject.brandCategory[0]).then(response => {

                        const newItemColor = {
                            itemCode: this.state.itemCodeObject._id,
                            itemSize: this.state.itemSizeNameObject,
                            itemColorId: uuid(),
                            imageUrl: this.state.imageUrl,
                            colorCode: this.state.background,
                            image: this.state.image,
                            itemColorsId : this.state.itemCodeObject.itemCode+response.data.brandCode[0].brandName+ response.data.categoryCode[0].categoryName+this.state.background
                        }

                        const array = [newItemColor, ...this.state.itemColorArray];
                        this.setState({
                            itemColorArray: array,
                            noItem: false,
                            itemColorId: uuid()
                        })

                        this.setState({
                            itemColorId: uuid(),
                            imageURLValidation: false,
                            imageUrl: ' ',
                            imageName: ' '
                        })
                    }).catch(function (error) {
                        console.log(error);
                    })

                } else {
                    this.setState({
                        imageValidation: true
                    })
                }
            } else {
                this.setState({
                    itemSizeNameObjectValidation: true
                });
            }
        } else {
            this.setState({
                itemCodeObjectValidation: true
            });
        }
    }

    submitItemsColors(e) {
        e.preventDefault();

        this.state.itemColorArray.map(item => {

            let formData = new FormData();
            formData.append('file', item.image);
            formData.append('itemCode', item.itemCode);
            formData.append('itemSize', item.itemSize.sizeName);
            formData.append('itemColor', item.colorCode);
            formData.append('itemColorsId',item.itemColorsId);
            console.log(formData)
            axios.post(constants.spring_backend_url + 'ColorsController/addItemColor', formData)
                .then(res => {
                        if (res.status === 200) {
                            Swal.fire(
                                '',
                                'Item Color Details Added Successfully',
                                'success'
                            );
                            this.setState({
                                itemColorArray: [],
                                noItem: true,
                            })

                        } else {
                            Swal.fire(
                                '',
                                'Item Color Added Faild',
                                'error'
                            )
                        }
                    }
                );
        })
    }

    render() {

        return (

            <div >

                <MDBCard className="mb-5">
                    <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
                        {
                            localStorage.getItem("Position") === "StoreManager" ?
                                <NavLink exact={true} to="/item/itemcolor">
                                    <button type="button" className="btn btn-primary "> ItemColor</button>
                                </NavLink>
                                : ''
                        }

                        {
                            localStorage.getItem("Position") === "StoreManager" ?
                                <NavLink exact={true} to="/item" activeClassName="activeClass">
                                    <button type="button" className="btn btn-success">New Item</button>
                                </NavLink>
                                : ''
                        }

                        {
                            localStorage.getItem("Position") === "StoreManager" ?
                                <NavLink exact={true} to="/item/newarraivalitems">
                                    <button type="button" className="btn btn-success"> New Arrivals</button>

                                </NavLink>
                                : ''
                        }
                        {
                            localStorage.getItem("Position") === "Admin" ?
                                <NavLink exact={true} to="/item/brandcategory">
                                    <button type="button" className="btn btn-success"> Brand & Category</button>
                                </NavLink>
                                :
                                ''
                        }
                        {
                            localStorage.getItem("Position") === "StoreManager" ?
                                <NavLink exact={true} to="/item/discount">
                                    <button type="button" className="btn btn-success">Discount</button>
                                </NavLink>
                                : ''
                        }
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
                                <MDBCardTitle>Add New Item Color</MDBCardTitle>
                                <form onSubmit={this.additemColorsToTable}>

                                    <br/>
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

                                        <MDBCol size="5">

                                            <Autocomplete
                                                id="combo-box-demo"
                                                options={this.state.itemSizes}
                                                getOptionLabel={(option) => option.sizeName}
                                                style={{width: 300}}
                                                onChange={(event, value) => this.onChangeGetItemSize(value)}
                                                renderInput={(params) => <TextField {...params} label="Item Sizes"/>}

                                            />
                                            {

                                                this.state.itemSizeNameObjectValidation ?
                                                    <MDBAlert color="danger">
                                                        Item Size Field Is Empty
                                                    </MDBAlert> : ''
                                            }
                                        </MDBCol>
                                    </MDBRow>

                                    <br/>
                                    {/*<SwatchesPicker onChange={ this.handleChange } />*/}
                                    <BlockPicker color={this.state.background}
                                                 onChangeComplete={this.handleChangeComplete}
                                    />
                                    <br/>
                                    <MDBRow>
                                        <MDBCol size="4">
                                            {
                                                this.state.imageURLValidation ?
                                                    <MDBCol style={{maxWidth: "14rem"}}>
                                                        <MDBCard>
                                                            <MDBCardImage className="img-fluid "
                                                                          src={this.state.imageUrl}
                                                                          waves/>
                                                        </MDBCard>
                                                    </MDBCol>

                                                    : ''
                                            }

                                            {
                                                this.state.imageURLValidation ?
                                                    <button className="btnClass"
                                                            onClick={this.removePhoto}>Remove</button> : ''
                                            }

                                        </MDBCol>

                                    </MDBRow>
                                    <br/>

                                    <MDBRow>
                                        <MDBCol size="9">

                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="inputGroupFileAddon01">
                                                              Upload
                                                    </span>
                                                </div>
                                                <div className="custom-file">
                                                    <input
                                                        type="file"
                                                        className="custom-file-input"
                                                        id="inputGroupFile01"
                                                        aria-describedby="inputGroupFileAddon01"
                                                        onChange={this.onchangeFile}
                                                    />
                                                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                                                        {this.state.imageName}
                                                    </label>
                                                </div>
                                            </div>

                                            {
                                                this.state.imageValidation ?

                                                    <MDBAlert color="danger">
                                                        Image Field Is Empty
                                                    </MDBAlert> : ''
                                            }
                                        </MDBCol>
                                    </MDBRow>

                                    <br/>
                                    <MDBBtn type="submit">
                                        Add
                                    </MDBBtn>
                                </form>
                                <br/>
                                <br/>
                                <MDBTable>
                                    <MDBTableHead color="primary-color" textWhite>
                                        <tr>
                                            <th>Item Code</th>
                                            <th>Item Size</th>
                                            <th>Color</th>
                                            <th>Image</th>
                                        </tr>
                                    </MDBTableHead>

                                    <ItemColorTableBody
                                        itemColorArrayList={this.state.itemColorArray}
                                        noItem={this.state.noItem}
                                        deleteItemColor={this.deleteItemColor}

                                    />

                                </MDBTable>

                                <form onSubmit={this.submitItemsColors}>
                                    <MDBBtn type="submit">Save</MDBBtn>
                                </form>


                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>

                    <MDBCol size="4">


                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}
