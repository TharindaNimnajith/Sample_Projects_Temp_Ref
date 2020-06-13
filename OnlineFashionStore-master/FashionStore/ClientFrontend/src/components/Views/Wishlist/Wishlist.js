import React, {Component} from 'react';
import axios from "axios";
import constants from "../../Constants/constants";
import WishListColumns from './WishListColumns';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {MDBBtn, MDBCard, MDBCardImage, MDBTooltip, MDBTypography} from "mdbreact";
import CartStyle from '../../Views/Home/CartStyle.css';

class Wishlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: '',
            wishList: [],
            userId: localStorage.getItem("CustomerId"),
            Name: '',
            Price: '',
            inCartStatus:false,
            status:true,
            loaderStatus: true

        }
        this.getDetails=this.getDetails.bind(this);
        this.addToCart=this.addToCart.bind(this);
        this.remove1=this.remove1.bind(this);
        this.clearWishlist=this.clearWishlist.bind(this);
        this.decrementQuantity = this.decrementQuantity.bind(this);
    }
    componentDidMount() {
        if(localStorage.getItem("CustomerLogged")!=="CustomerLogged"){
            this.props.history.push('/Login');
        }
        this.getDetails();


    }
    getDetails() {
        console.log("Cart!")
        axios.get(constants.backend_url + 'api/wishlist/getDetails/'+ this.state.userId).then(response => {
            console.log("map")
            this.setState({wishList: response.data});
            if(this.state.wishList!=''){
                console.log("true")
                this.setState({
                    status:false
                })
            }
        }).catch(function (error) {
            console.log(error);
        })

    }
    addToCart(item){

        let cartItem=item;
      // this.decrementQuantity(cartItem.itemSizes._id,cartItem.itemSizes.quantity);
        console.log("HI wish cart")

        let id1=localStorage.getItem("CustomerId");
        let itemId=cartItem.itemId;
        let itemSize=cartItem.itemSize;
        axios.get(constants.backend_url + 'api/cart/checkInCart/'+id1+'/'+itemSize+'/'+itemId).then(res => {
            console.log("LLLLLLLLLLLLLLLLLLLL")
            console.log(res.data)
            console.log("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL")
            if(res.data.cart==='available'){
                console.log("HHHHHHHHHHHHHHHHHHH");
                Swal.fire(
                    '',

                    'Item is Already in the cart!!',
                    'error'
                )
            }else{
                const cartt = {
                    userId:localStorage.getItem("CustomerId"),
                    cartName:item.cartName,
                    cartPrice:item.cartPrice,
                    quantity:1,
                    itemTotal:item.cartPrice,
                    itemId:cartItem.itemId,
                    itemDiscount:cartItem.itemDiscount,
                    itemSize:cartItem.itemSize
                }
                this.decrementQuantity(cartItem.itemId,cartItem.quantity);
                axios.post(constants.backend_url + 'api/cart/add', cartt)
                    .then(res => {
                            console.log("HI wish cart")

                            if (res.data.cart === 'successful') {
                                this.remove1(item._id);
                                Swal.fire(
                                    '',
                                    'Cart Details Added Successfully.',

                                    'success'

                                );

                            } else {
                                Swal.fire(
                                    '',

                                    'Cart Added Fail',
                                    'error'
                                )


                            }
                        }
                    );
                console.log(cartt);
            }

        });





    }
    remove1(id){
        console.log("remove");
        axios.get(constants.backend_url + 'api/wishlist/deleteItem/'+ id).then(response => {
            if (response.data.wishlist === 'successful') {
                //Swal.fire(
                  //   '',
                    //'Item Deleted Sucessfull',
                    //'success'

                //);
                this.getDetails();

            } else {
               Swal.fire(
                     '',
                    'Item Deleted Fail',
                    'error'


                )
            }
        })
        // window.location.reload(false);
    }
    clearWishlist(){
        console.log("clear");
        axios.get(constants.backend_url + 'api/wishlist/clearWishlist/'+ this.state.userId).then(response => {

        });
        window.location.reload(false);
    }
    decrementQuantity(id,quantity){
        console.log(id);
        axios.get(constants.backend_url + 'api/cart/updateQuantity/'+id+'/'+(quantity-1))
            .then(res => {

                    if (res.data.cart === 'success') {
                        console.log("sucess update")

                    } else {
                        console.log("failure update")
                    }
                }
            );

    }

    render() {
        return (
            <div>
                <br/><br/><br/><br/><br/>
                <MDBTypography tag='h1' variant="h1">Product Wishlist</MDBTypography>
                <br/><br/>
                <WishListColumns></WishListColumns>
                <div>

                    {this.state.wishList.map(item => {
                        const base64String = btoa(new Uint8Array(item.image.data).reduce(function (data, byte) {
                        return data + String.fromCharCode(byte);
                    }, ''));
                        return(
                        <div className="row my-1 text-capitalize text-center">
                            <div className="col-10 mx-auto col-lg-2" >
                                <MDBCard style={{height: "11.5rem",width:"11.5rem"}}>
                                    <MDBCardImage className="img-fluid"
                                    src={`data:image/jpeg;base64,${base64String}`}
                                            waves/>
                                    </MDBCard>
                             </div>



                        <div className="col-10 mx-auto col-lg-2">
                            <span><strong>{item.cartName}</strong></span>
                        </div>

                        <div className="col-10 mx-auto col-lg-2">
                            <span><strong>$ {item.cartPrice}</strong></span>
                        </div>

                        <div className="col-10 mx-auto col-lg-2">
                        <i className="fa fa-star" aria-hidden="true" color="red"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                        <div className="cart-icon" >

                            <MDBTooltip placement="top">
                                <MDBBtn color="primary" size="sm" onClick={() => this.addToCart(item)}>
                                    <i className="fas fa-cart-plus" aria-hidden="true"></i>
                                </MDBBtn>
                                <div>Add to Cart</div>
                            </MDBTooltip>
                        </div>
                        </div>

                        <div className="col-10 mx-auto col-lg-2">
                        <div className="cart-icon" >

                            <MDBTooltip placement="top">
                                <MDBBtn color="primary" size="sm" onClick={() => this.remove1(item._id)}>
                                    X
                                </MDBBtn>
                                <div>Remove item</div>
                            </MDBTooltip>
                        </div>

                        </div>
                            <div>

                                <span className="block-example border-bottom border-light"></span>

                            </div>

                        </div>

                        )




                    })}
                    {this.state.status ?
                        <div>
                            <br/><br/>
                        <div className="alert alert-success" role="alert">
                            Currently Product Wishlist is Empty!!
                            <br/>
                        </div>
                        </div>
                        :
                        <div>
                            <br/><br/>
                            <MDBBtn gradient="blue" rounded onClick={() => this.clearWishlist()}>Clear WishList</MDBBtn>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Wishlist;
