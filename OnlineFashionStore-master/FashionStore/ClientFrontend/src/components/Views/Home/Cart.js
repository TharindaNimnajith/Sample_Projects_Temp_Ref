
import React, {Component} from 'react';
import CartColumns from './CartColumns';
import axios from "axios";
import constants from "../../Constants/constants";
import Loader from "react-loader-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import './CartStyle.css';
import 'sweetalert2/src/sweetalert2.scss';
import Paypal from "./Paypal";

import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle,
    MDBNavLink, MDBTableHead, MDBTooltip,
    MDBTypography
} from "mdbreact";

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartitem:'',
            cartList:[],
            userId:localStorage.getItem("CustomerId"),
            cartName:'',
            cartPrice:'',
            quantity:'',
            itemTot:'',
            fullTot:0,
            orderId:'',
            status:true,
            user:[],
            fullDiscount:'',
            tot:'',
            loaderStatus :true

        }
        this.printSelected=this.printSelected.bind(this);
        this.getDetails=this.getDetails.bind(this);
        this.decrement=this.decrement.bind(this);
        this.remove1=this.remove1.bind(this);
        this.increment=this.increment.bind(this);
        this.clearCart=this.clearCart.bind(this);
        this.getSubTotal=this.getSubTotal.bind(this);
        this.confirmPurchase=this.confirmPurchase.bind(this);
        this.getLastId=this.getLastId.bind(this);
        this.transactionSuccess=this.transactionSuccess.bind(this);
        this.transactionError=this.transactionError.bind(this);
        this.transactionCancel=this.transactionCancel.bind(this);
        this.sendMail=this.sendMail.bind(this);
       this.getDiscount=this. getDiscount.bind(this);
    }

    componentDidMount() {

        if(localStorage.getItem("CustomerLogged")!=="CustomerLogged"){
            this.props.history.push('/Login');
        }else{
            this.setState({
                userId:localStorage.getItem("CustomerId")
            })
        }
        this.getDetails();

    }
    printSelected(){
        console.log(this.state.cartitem);
        console.log(this.state.cartList);
    }
    getDetails() {
        console.log(this.state.userId)
        axios.get(constants.backend_url + 'api/cart/getDetails/'+ this.state.userId).then(response => {
            console.log(response.data)
            this.setState({cartList: response.data});
            if(this.state.cartList!=''){
                console.log("true")
                this.setState({
                    status:false
                })
            }


        }).catch(function (error) {
            console.log(error);
        })
        this.getSubTotal(this.state.userId);

    }
    decrement(id,quantity){

        if(quantity != 1 ){
            console.log("dec");
            axios.get(constants.backend_url + 'api/cart/decQuantity/'+ id+'/'+(quantity-1)).then(response => {

            });
            this.getDetails();

            // window.location.reload(false);
        }else{
            Swal.fire(
                '',
                'Item quantity is not valid!!',
                'error'

            );
        }


    }
    increment(id,quantity){
        console.log("inc");
        axios.get(constants.backend_url + 'api/cart/incQuantity/'+ id+'/'+(quantity+1)).then(response => {

        })
        //window.location.reload(false);
        this.getDetails();

    }

    remove1(id){
        console.log("remove");
        axios.get(constants.backend_url + 'api/cart/deleteItem/'+ id).then(response => {
            if (response.data.cart === 'success') {
                Swal.fire(
                    '',
                    'Cart Deleted Fail',
                    'error'

                );

            } else {
                Swal.fire(
                    '',


                    'Cart Deleted Sucessfull',
                    'success'
                )
            }
        })
        //window.location.reload(false);
        this.getDetails();
    }
    clearCart(userId){
        console.log("clear");
        axios.get(constants.backend_url + 'api/cart/clearCart/'+ userId).then(response => {
            this.setState({
                status:true
            })
        });
       // window.location.reload(false);
        this.getDetails();
    }
    getSubTotal(userId){
        console.log("subbb");
        axios.get(constants.backend_url + 'api/cart/getSub/'+ userId).then(response => {
            this.getDiscount(this.state.userId,response.data);
            this.setState({
                fullTot:response.data
            })
        });

    }
    getDiscount(userId,price){
        console.log("dis");
        axios.get(constants.backend_url + 'api/cart/getDis/'+ userId).then(response => {
            this.setState({
                fullDiscount:response.data,
                tot:price.valueOf()-response.data.valueOf()
            })
        });

    }
    confirmPurchase(){
            let a=this.getLastId();
            let mapCount = this.state.cartList.length;
            let count =0;
        this.state.cartList.map(item => {
            let order={
                orderId:a,
                userId: this.state.userId,
                itemTotal:this.state.fullTot,
                itemName:item.cartName,
                itemId:item.itemId,
                itemPrice:item.cartPrice,
                oderTime: new Date().toLocaleString()
            }
            axios.post(constants.backend_url + 'api/cart/addOrder', order)
                    .then(res => {
                        console.log("status");
                        console.log(res.data)
                        console.log("status")
                        if (res.data.order === 'successful') {
                            this.clearCart(this.state.userId);
                            count +=1;
                        } else {
                            // Swal.fire(
                            //     '',
                            //     'Order Purchase Fail',
                            //     'error'
                            //
                            // )
                        }
                        if(mapCount===count){

                            if(this.sendMail(a)===true){

                            }else{
                                //Swal.fire(
                                // '',
                                //'Order Purchase Fail',
                                //'error'

                                //)
                            }
                        }
                    }


                );

        })
        console.log("Map Count :"+mapCount);
        console.log("count Count :"+count);




        // window.location.reload(false);

    }
    getLastId(){


       let a=Math.floor(Math.random() * Date.now());
       console.log(a);
        this.setState({
            orderId:a
        })
        return a;

    }
    transactionSuccess(data){
        console.log("success")

        this.confirmPurchase();
    }
    transactionError(){
        Swal.fire(
            '',
            'Transaction Error!',
            'error'
        );
    }
    transactionCancel(){
        Swal.fire(
            '',
            'Transaction Cancelled!',
            'error'
        );

    }
    sendMail(orderId){
        axios.get(constants.backend_url + 'api/userDetail/getDetailuser/' + this.state.userId).then(response => {
           this.setState({user:response.data})

            console.log(response.data[0].email)
            axios.get(constants.spring_backend_url + '/OrderController/sendMail/'+response.data[0].email+'/'+orderId+'/'+this.state.tot+'/'+this.state.fullDiscount).then(response => {
                if(response.data===true){
                    Swal.fire(
                        '',
                        ' Your Order has Placed  Successfully.',
                        'success'
                    );
                }
            }).catch(function (error) {
                console.log(error);
            })
        });

    }
    render() {
        return (
            <div>
            <br/><br/><br/><br/><br/>
                <MDBTypography tag='h1' variant="h1">Shopping Cart</MDBTypography>


        <div>

                <br/>
                <CartColumns></CartColumns>
                <br/>
        {this.state.cartList.map(item => {
                const base64String = btoa(new Uint8Array(item.image.data).reduce(function (data, byte) {
                    return data + String.fromCharCode(byte);
                }, ''));
            return(

                <div className="row my-1  text-center justify-content">
                    <div className="col-10 mx-auto col-lg-2">
                        <MDBCard style={{height: "11.5rem",width:"11.5rem"}}>
                        <MDBCardImage className="img-fluid z-depth-0"
                                      src={`data:image/jpeg;base64,${base64String}`}
                                      waves/>
                        </MDBCard>

                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <span style={{ font: "10px" }}><strong>{item.cartName}</strong></span>
                        <br/>
                       <p className="text-muted">Item Size  : {item.itemSize}</p>
                        <p className="text-muted">Item Discount : {item.itemDiscount}</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <span><strong>LKR {item.cartPrice}</strong></span>

                    </div>

                    <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                        <div className="d-flex justify-content-center">
                            <div>
                                <button className="btn1 mx-1 btn-outline-light" onClick={() => this.increment(item._id, item.quantity)}>+
                                </button>
                            </div>
                            <span className="btn11"><strong>{item.quantity}</strong></span>
                            <div className="d-flex justify-content-center">
                                <div>
                                    <button className="btn1 mx-1  btn-outline-light"
                                            onClick={() => this.decrement(item._id, item.quantity)}><strong>-</strong>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <span><strong>$ {(item.cartPrice.valueOf() * item.quantity)-(item.itemDiscount*item.quantity)}</strong></span>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">

                        <MDBTooltip placement="top">
                            <MDBBtn color="primary" size="sm" onClick={() => this.remove1(item._id)}>
                                X
                            </MDBBtn>
                            <div>Remove item</div>
                        </MDBTooltip>
                    </div>
                    <div>
                        <span className="block-example border-bottom border-light"></span>
                    </div>
                </div>


            )




        })}


    <br/>
    <div>

        {this.state.status ?

            <div className="alert alert-success" role="alert">
                Currently Product Cart is Empty!!
                <br/>
            </div>

                        :
            <div>
                <div style={{ fontSize: "25px" }}>


                    <span><strong>Sub Total     :</strong></span>
                    <span><strong>{this.state.fullTot}</strong></span>


                </div>
                <div style={{ fontSize: "25px" }}>


                    <span><strong>Discount     :</strong></span>
                    <span><strong>{this.state.fullDiscount}</strong></span>


                </div>
                <div style={{ fontSize: "25px" }}>


                    <span><strong>Total     :</strong></span>
                    <span><strong>{this.state.tot}</strong></span>


                </div>
                <br/>

                <Paypal
                    toPay={this.state.tot}
                    onSuccess={()=>this.transactionSuccess()}
                    transactionError={()=>this.transactionError()}
                    transactioncancel={()=>this.transactionCancel()}/>



                <br/>
                <MDBBtn gradient="blue" rounded onClick={()=>this.clearCart(this.state.userId)}>Clear Cart</MDBBtn>
            </div>


        }





    </div>
    </div>



        </div>
    );
    }
}

export default Cart;
