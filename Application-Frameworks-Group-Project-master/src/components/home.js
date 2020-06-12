import React, {Component} from "react";
import axios from "axios";
import '../stylesheets/products-home.css';
import '../stylesheets/home.css';
import swal from "sweetalert";
import Application from "./user/selectPaymentMethod.component";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'




class Home extends Component {

    constructor(props) {
        super(props);

        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            products: [],
            quantity: 0
        }
    }

    onChangeQuantity = event => {
        this.setState({
            quantity: event.target.value
        })
    };


    componentDidMount() {

        axios.get('http://localhost:5000/images')
            .then(res => {
                console.log(res.data);
                this.setState({
                    imagesData: res.data
                });
                this.imageMapper();
            });

        axios.get('http://localhost:5000/products')
            .then(res => {
                console.log(res.data);
                this.setState({
                    products: res.data
                });

            })
            .catch(err => {
                console.log(err)
            });
    }

    imageMapper = () => {
        let products = {};

        this.state.products.forEach(prod => {
            this.state.imagesData.forEach(imageData => {
                if (imageData.imgId === prod.prodId) {
                    products[prod.prodId] = {
                        _id: prod._id,
                        id: prod.prodId,
                        name: prod.name,
                        price: prod.price,
                        image: this.imageConverter(imageData.img.data.data)
                    };
                    console.log(products[prod.prodId]);
                }
            })
        });

        this.setState({
            products: products
        });
        console.log(this.state.products)
    };

    arrayBufferToBase64(buffer) {
        let binary = '';
        const bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    imageConverter = data => {
        const base64Flag = 'data:image/jpeg;base64,';
        const imageStr = this.arrayBufferToBase64(data);
        return base64Flag + imageStr;
    };


    onSubmit = (event, prodId, name, price, discount) => {
        event.preventDefault();

        const cartItem = {
            itemId: prodId,
            itemName: name,
            price: price,
            discount: discount,
            quantity: this.state.quantity,
            totalPrice: (this.state.quantity * price) - (discount),
        };

        console.log(cartItem);

        axios.post('http://localhost:5000/cartItems/add', cartItem)
            .then(res => {
                console.log(res.data);
                swal({
                    title: "Product Added to the Cart!",
                    icon: "success",
                    button: true,
                })
            })

            .catch(err => console.log(err));



    };

    addToWishlist = (prodId,name) => {

        const wishlistItem = {

            itemId: prodId,
            itemName: name,

        };

        console.log(wishlistItem);
        axios.post('http://localhost:5000/wishlistItems/add',wishlistItem)
            .then(res => {
                console.log(res.data)

                swal({
                    title: "Product Added to the Wishlist!",
                    icon: "success",
                    button: true,
                })
            })
            .catch(err => console.error(err));

    };

    render() {
        const products = this.state.products;
        return (
            Object.keys(products).map(product => (
                <div className="background">
                <div key={products[product].id}>
                    <div className="prodArea">
                        <div className="prod">
                            <div className="prodImage">
                                <img src={products[product].image}
                                     alt={products[product].name}/>
                            </div>
                            <div className="prodDetails">
                                <h4>{products[product].name} <FontAwesomeIcon icon={faHeart} onClick={() => this.addToWishlist(products[product].id,products[product].name)}/></h4>
                                <h6>Price: LKR {products[product].price}.00</h6>
                                <h6>Discount: LKR {products[product].discount}.00</h6>

                                    <form
                                        // onSubmit={this.onSubmit(product.prodId, product.name, product.price, product.discount)}
                                        onSubmit={event => this.onSubmit(event, products[product].id, products[product].name, products[product].price, products[product].discount)}
                                    >
                                        <div className="form-group">
                                            <h6>Quantity: </h6>
                                            <input
                                                type="text"
                                                required
                                                pattern="\d+"
                                                className="form-control"
                                                placeholder="Quantity"
                                                value={this.state.quantity}
                                                onChange={this.onChangeQuantity}
                                            />
                                        </div>
                                        <input type="submit" value="Add To Shopping Cart" className="btn btn-primary "
                                               style={{backgroundColor: "#8E44AD", width: "280px"}}/>

                                    </form>
                                <br/>
                                    <a href={"/product/" + products[product]._id}>more details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))
            );
        }
}

export default Home