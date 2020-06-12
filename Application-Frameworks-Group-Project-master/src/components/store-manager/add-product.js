import React, {Component} from 'react';
import axios from 'axios';
import '../../stylesheets/add-product.css';
import swal from "sweetalert";

class AddProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            discount: ''
        }
    }

    componentDidMount() {
        axios.post('http://localhost:5000/categories/get')
            .then(res =>{
                if (res.data.length > 0) {
                    this.setState({
                        categories: res.data,
                        category: res.data[0].categoryname
                    });
                }
            })
            .catch((error) =>{
                console.log(error);
            });
    }

    /**
     * Assigning the input value of prodId to state
     * @param {*} event The event object
     */
    onChangeProdId = event => {
        this.setState({
            prodId: event.target.value
        })
    };

    /**
     * Assigning the input value of name to state
     * @param {*} event The event object
     */
    onChangeName = event => {
        this.setState({
            name: event.target.value
        })
    };

    /**
     * Assigning the input value of price to state
     * @param {*} event The event object
     */
    onChangePrice = event => {
        this.setState({
            price: event.target.value
        })
    };

    /**
     * Assigning the input value of discount to state
     * @param {*} event The event object
     */
    onChangeDiscount = event => {
        this.setState({
            discount: event.target.value
        })
    };

    /**
     * Assigning the input value of category to state
     * @param {*} event The event object
     */
    onChangeCategory = event => {
        this.setState({
            category: event.target.value
        })
    };

    /**
     * Adding the new product to the database
     * @param {*} event The event object
     */
    onSubmit = event => {
        event.preventDefault();

        // creating a product object
        const product = {
            category: this.state.category,
            prodId: this.state.prodId,
            name: this.state.name,
            price: this.state.price,
            discount: this.state.discount,
            comments: this.state.comments,
            ratings: this.state.ratings
        };

        console.log(product);

        axios.post('http://localhost:5000/products/add', product)
            .then(res => {
                console.log(res.data);
                swal({
                    title: "Product Added!",
                    text: "You successfully added the new product.",
                    icon: "success",
                    button: true,
                })
            })
            .catch(err => {
                console.log(err);
                swal({
                    title: "Error!",
                    text: "Couldn't add the product.",
                    icon: "error",
                    button: true,
                    dangerMode: true,
                });
            });
    };

    render() {
        return(
            <div className="backImage">
                <div className="addProduct">
                    <br/>
                    <h3>Add New Product</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Category: </label>
                            <br/>
                            <select
                                required
                                value={this.state.category}
                                onChange={this.onChangeCategory}>
                                {this.state.categories.map(category => {
                                    return (
                                        <option
                                            key={category._id}
                                            value={category.categoryname}>{category.categoryname}
                                        </option>
                                    )
                                })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Product ID: </label>
                            <br/>
                            <input
                                type="text"
                                required
                                pattern="\d+"
                                value={this.state.prodId}
                                onChange={this.onChangeProdId}
                            />
                        </div>
                        <div className="form-group">
                            <label>Name: </label>
                            <br/>
                            <input
                                type="text"
                                required
                                pattern="[A-Za-z\s]{1,}"
                                value={this.state.name}
                                onChange={this.onChangeName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Price: </label>
                            <br/>
                            <input
                                type="text"
                                required
                                pattern="\d+"
                                value={this.state.price}
                                onChange={this.onChangePrice}
                            />
                        </div>
                        <div className="form-group">
                            <label>Discount: </label>
                            <br/>
                            <input
                                type="text"
                                pattern="\d+"
                                value={this.state.discount}
                                onChange={this.onChangeDiscount}
                            />
                        </div>

                        <div className="form-group">
                            <input type="submit" value="Add Product" className="btnAdd" />
                        </div>
                    </form>

                    <form action="http://localhost:5000/images/add" method="POST" encType="multipart/form-data">
                        <h4>Product Image Upload</h4>
                        <div>
                            <input
                                type="hidden"
                                name="imageId"
                                id="imageId"
                                required
                                pattern="\d+"
                                value={this.state.prodId}
                                onChange={this.onChangeProdId}
                            />
                        </div>
                        <div className="custom-file mb-3">
                            <input type="file" name="file" id="file" className="custom-file-input"/>
                            <label htmlFor="file" className="custom-file-label">Choose Product Image</label>
                        </div>
                        <input style={{marginBottom: "30px"}} type="submit" value="Add Product Image" className="btnImageAdd"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddProduct