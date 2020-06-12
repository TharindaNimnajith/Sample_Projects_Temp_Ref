import React, {Component} from 'react';

import axios from 'axios';
import swal from "sweetalert";


 class CartItemList extends Component {




    constructor(props) {
        super(props);
        this.state = {
            itemId: 0,
            itemName: '',
            price: 0,
            discount: 0,
            quantity: 0,
            totalPrice: 0,
            cartItems: [],


        }
    }



    componentDidMount() {
        axios.get('http://localhost:5000/cartItems/')
            .then(res => {

                this.setState({cartItems: res.data})

                console.log(res.data);

            })
            .catch(error => {

                console.log(error);
            })


             axios.get('http://localhost:5000/cartItems/')

                 .then( res => {
                     console.log(res.data);
                     let FinaltotPrice = 0;
                     res.data.forEach(cartItem => {
                         FinaltotPrice = FinaltotPrice + cartItem.totalPrice;
                     });
                     this.setState({
                         totalPrice: FinaltotPrice
                     });
                     console.log(this.state.totalPrice);
                 })

    }



     onSubmit = event => {
         event.preventDefault();

         const finalPayment = {


             totalPrice: this.state.totalPrice,


         };

         console.log(finalPayment);

         axios.post('http://localhost:5000/finalPayment/add', finalPayment)
             .then(res => {
                 console.log(res.data);
                 alert("final payment amount added");
             })
             .catch(err => console.log(err));



     };







     deleteCartItem = id => {
        axios.delete('http://localhost:5000/cartItems/' + id)
            .then(res => console.log(res.data))
            .catch(err => console.error(err));

         swal({
             title: "Pruduct deleted from the Cart.!",
             button: true,
             dangerMode: true,
         });

        this.setState({
            cartItems: this.state.cartItems.filter(cartItem => cartItem._id !== id)
        })

    };


    onSubmit = event => {
        event.preventDefault();

        const finalPayment = {
            fp: this.state.totalPrice,
        }
        console.log(finalPayment);
        axios.post('http://localhost:5000/finalPayment/add', finalPayment)
            .then(res => {
                console.log(res.data);
                alert("final payment added!");
            })
            .catch(err => console.log(err));
    };

    selectPayment = () => {
         window.location = "/userLogin"
     }




    render() {
        return (
            <div >

                    <h2>Shopping Cart</h2>
                    <table className="table table-dark table-hover" >
                        <thead >
                        <tr>


                           <th scope="col">Product ID</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Discount</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total Price</th>
                            <th scope="col">Actions</th>

                        </tr>


                      </thead>
                        <tbody style={{backgroundColor:"#AF7AC5"}}>


                        {this.state.cartItems.map(cartItem => (
                            <tr key={cartItem._id}>
                                <td>{cartItem.itemId}</td>
                                <td>{cartItem.itemName}</td>
                                <td>{cartItem.price}</td>
                                <td>{cartItem.discount}</td>
                                <td>{cartItem.quantity}</td>
                                <td>{cartItem.totalPrice}</td>



                                <td>
                                    {/*<Link to={'/edit/'+ product._id}>Edit</Link>*/}
                                    <a
                                        href={'/cartItems/'+ cartItem._id}
                                        className="btn btn-secondary"
                                    >
                                        Edit
                                    </a> | <button
                                    className="btn btn-danger"
                                    onClick={() => this.deleteCartItem(cartItem._id)}
                                >
                                    Delete
                                </button>
                                </td>
                            </tr>
                        ))}



                        </tbody>
                    </table>


                <h3 style={{float:"right"}}>Total Price = LKR {this.state.totalPrice}.00 </h3>

                <br/>
                    <br/>

                <div className="form-group">
                    <input type="submit" value="CHECKOUT" className="btn btn-primary " onClick={this.selectPayment} style={{backgroundColor: "#AF7AC5",float:"right"}} onSubmit={this.onSubmit}/>
                </div>


                </div>


        );
    }



}
export default CartItemList

