import React, {Component} from 'react';
import axios from 'axios';
import swal from "sweetalert";


 class EditCartItem extends Component {


     constructor(props) {
         super(props);


         this.onChangeQuantity = this.onChangeQuantity.bind(this);
         this.onSubmit = this.onSubmit.bind(this);

         this.state = {

             itemId: 0,
             itemName: '',
             price: 0,
             discount: 0,
             quantity: 0,
             totalPrice: 0,
             cartItems:[]
         }
     }


     componentDidMount() {
         axios.get('http://localhost:5000/cartItems/' + this.props.match.params.id)
             .then(res =>
                 this.setState({


                     itemId: res.data.itemId,
                     itemName: res.data.itemName,
                     price: res.data.price,
                     discount: res.data.discount,
                     quantity: res.data.quantity,
                     totalPrice: res.data.totalPrice,


                 }))
             .catch(err => console.log(err));
     }




     onChangeQuantity = event => {
         this.setState({
             quantity: event.target.value

         })
     };



     onSubmit = event  => {
         event.preventDefault();

         const cartItem = {



             quantity: this.state.quantity,
             totalPrice: (this.state.quantity * this.state.price)-(this.state.discount) ,


         };

         console.log(cartItem);


         axios.put('http://localhost:5000/cartItems/update/' + this.props.match.params.id, cartItem)
             .then(res => {
                 console.log(res.data);


                 swal({
                     title: "Product Quantity has been updated!",
                     icon: "success",
                     button: true,
                 })
             })
             .catch(err => console.log(err));


     };


     render() {

         return (




             <div>
                 <h3>Update the Product Quantity</h3>
                 <form onSubmit={ this.onSubmit}>




                     <div className="form-group">
                         <h5>New Quantity: </h5>
                         <input
                             type="text"
                             required
                             pattern="\d+" className="form-control"
                             value={this.state.quantity}
                             onChange={this.onChangeQuantity}
                         />
                     </div>



                         <input type="submit" value="Update" className="btn btn-primary" style={{backgroundColor: "#AF7AC5"}}/>

                 </form>


             </div>

         );

     }

 }
    export default EditCartItem;