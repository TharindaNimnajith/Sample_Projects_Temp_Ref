import React, {Component} from 'react';
import axios from 'axios';
import '../../stylesheets/products-products-list.css'
import swal from "sweetalert";

class ProductsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            discount: 0,
            allProducts: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/products')
            .then(res => {
                this.setState({
                    allProducts: res.data
                })
            })
            .catch(err => {
                console.error(err)
            });
    }

    /**
     * To delete the product
     * @param {*} _id object Id of product
     * @param {number} prodId Id of the product
     * @param {string} name Name of the product
     */
    deleteProduct = (_id, prodId, name) => {
        swal({
            title: "Are you sure?",
            text: "You want to delete " + name,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(willDelete => {
            // checking whether the user is going to delete the product or not
            if (willDelete) {
                axios.delete('http://localhost:5000/products/delete/' + _id)
                    .then(res => {
                        console.log(res.data);
                        swal({
                            title: "Product Deleted!",
                            text: "You successfully deleted the product.",
                            icon: "success",
                            button: true,
                        })
                    })
                    .catch(err => console.error(err));

                axios.get('http://localhost:5000/images')
                    .then(res => {
                        console.log(res.data);
                        const imageData = res.data.find(imageData => (imageData.imgId === prodId));
                        console.log(imageData);
                        if (imageData !== undefined) {
                            axios.delete('http://localhost:5000/images/delete/' + imageData._id)
                                .then(res => {
                                    console.log(res.data);
                                })
                                .catch(err => console.error(err));
                        }
                    });

                // removing the deleted product from the array and setting the state again
                this.setState({
                    allProducts: this.state.allProducts.filter(product => product._id !== _id)
                })
            } else {
                swal("Product is not deleted!", {
                    icon: "success",
                    buttons: "OK",
                });
            }
        })
    };

    /**
     * to navigate to the add-product page
     */
    gotoAddProduct = () => {
      window.location = '/addProduct';
    };

    render() {
        const products = this.state.allProducts.filter(product => (product.category === this.props.match.params.category));
        return(
            <div className="container mt-5" >
                <h3 style={{color: "#4A235A"}}>Products List</h3>
                <table className="table table-hover" style={{backgroundColor:"#EBDEF0"}}>
                    <thead style={{backgroundColor:"#AF7AC5"}}>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Discount</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.discount}</td>
                            <td>
                                <a
                                    href={'/editProduct/'+ product._id}
                                    className="btn btn-secondary"
                                >
                                    Edit
                                </a> | <button
                                    className="btn btn-danger"
                                    onClick={() => this.deleteProduct(product._id, product.prodId, product.name)}
                                >
                                    Delete Product
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button className="gotoAddBtn" onClick={this.gotoAddProduct}>Add a new product</button>
            </div>
        );
    }
}

export default ProductsList