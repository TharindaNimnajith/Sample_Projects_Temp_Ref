import React, {Component} from "react";
import axios from 'axios';
import '../../stylesheets/edit-product.css';
import swal from "sweetalert";

class EditProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            image: '',
            imageData: '',
            isEditing: false,
            isDeleted: false
        }
    }

    componentDidMount() {
        axios.post('http://localhost:5000/categories/get')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        categories: res.data,
                    });
                }
            })
            .catch((error) =>{
                console.log(error);
            });

        axios.get('http://localhost:5000/products/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    category: res.data.category,
                    prodId: res.data.prodId,
                    name: res.data.name,
                    price: res.data.price,
                    discount: res.data.discount
                });
                console.log(this.state.prodId);
                })
            .catch(err => console.log(err));

        axios.get('http://localhost:5000/images')
            .then(res => {
                console.log(res.data);

                // finding the corresponding image to the product
                const imageData = res.data.find(imageData => (imageData.imgId === this.state.prodId));

                // checking whether there is an image already in the database
                if (imageData !== undefined) {
                    this.setState({
                        imageData: imageData,
                        isDeleted: false
                    });
                    console.log(imageData._id);

                    // creating an image using image data
                    const base64Flag = 'data:image/jpeg;base64,';
                    const imageStr = this.arrayBufferToBase64(imageData.img.data.data);
                    const image = base64Flag + imageStr;
                    this.setState({
                        image: image
                    })
                } else {
                    // if no image was found, it means it has been deleted or has no added yet
                    this.setState({
                        isDeleted: true
                    })
                }
            });
        console.log(this.state.isEditing)
    }

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
     * To update the product with newly entered values
     * @param {*} event The event object
     */
    onSubmit = event => {
        event.preventDefault();

        const product = {
            prodId: this.state.prodId,
            name: this.state.name,
            price: this.state.price,
            discount: this.state.discount,
            category: this.state.category
        };

        console.log(product);

        axios.put('http://localhost:5000/products/update/' + this.props.match.params.id, product)
            .then(res => {
                console.log(res.data);
                swal({
                    title: "Product Updated!",
                    text: "You successfully updated the product.",
                    icon: "success",
                    button: true,
                })
            })
            .catch(err => console.log(err));

        //window.location = '/';
    };

    /**
     * To convert arrayBuffer to base64 string
     * @param buffer
     * @returns {string} the image string
     */
    arrayBufferToBase64(buffer) {
        let binary = '';
        const bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    /**
     * To know when a user is editing the product image
     */
    setIsEditing = () => {
      this.setState({
          isEditing: true
      })
    };

    /**
     * To delete product image
     * @param {*} id object id of the image
     */
    deleteProductImage = id => {
        swal({
            title: "Are you sure?",
            text: "You want to delete product image of " + this.state.name,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(willDelete => {
            // checking whether the user is going to delete the product image or not
           if (willDelete) {
               axios.delete('http://localhost:5000/images/delete/' + id)
                   .then(res => {
                       console.log(res.data);
                       swal({
                           title: "Product Image Deleted!",
                           text: "You successfully deleted the product image.",
                           icon: "success",
                           button: true,
                       });
                       this.setState({
                           isDeleted: true
                       })
                   })
                   .catch(err => console.error(err));
           } else {
               swal("Product image is not deleted!", {
                   icon: "success",
                   buttons: "OK",
               });
           }
        });
    };

    render() {
        return(


            <div className="backImg">
                <div className="editProduct">
                    <br/>
                    <h3>Edit Product</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Category: </label>
                            <br/>
                            <select
                                required
                                value= {this.state.category}
                                onChange={this.onChangeCategory}>
                                {this.state.categories.map(category => {
                                    return (
                                        <option
                                            key={category._id}
                                            value={category.categoryname}>{category.categoryname}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Product Name: </label>
                            <br/>
                            <input  type="text"
                                    required
                                    pattern="[A-Za-z\s]{1,}"
                                    value={this.state.name}
                                    onChange={this.onChangeName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Price: </label>
                            <br/>
                            <input  type="text"
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
                            <input type="submit" value="Update Product" className="btnUpdate"/>
                        </div>
                    </form>
                    {
                        this.state.isDeleted ?
                            (
                                <form
                                    action="http://localhost:5000/images/add"
                                    method="POST" encType="multipart/form-data"
                                >
                                    <p>No product image found, use below to add a product image</p>
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
                                    <input
                                        style={{marginBottom: "30px"}}
                                        type="submit" value="Add Product Image"
                                        className="btnImageAdd"
                                    />
                                </form>
                            ) : (
                                <div>
                                    <img src={this.state.isEditing ? null : this.state.image} alt=""/>
                                    <form
                                        action={"http://localhost:5000/images/update/" + this.state.imageData._id}
                                        method="POST"
                                        encType="multipart/form-data"
                                    >
                                        <input
                                            type="hidden"
                                            name="imageId"
                                            id="imageId"
                                            required
                                            pattern="\d+"
                                            value={this.state.prodId}
                                            onChange={this.onChangeProdId}
                                        />
                                        {
                                            this.state.isEditing ? (
                                                <div>
                                                    <div className="custom-file mb-3">
                                                        <input type="file" name="file" id="file" className="custom-file-input"/>
                                                        <label htmlFor="file" className="custom-file-label">Choose Product Image</label>
                                                    </div>
                                                </div>
                                            ) : null
                                        }
                                        <input
                                            type={this.state.isEditing ? "hidden" : "button"}
                                            value="Edit Product Image"
                                            className="btnUpdateImg"
                                            onClick={this.setIsEditing}
                                        />
                                        <input
                                            type={this.state.isEditing ? "submit" : "hidden"}
                                            value="Update Product Image"
                                            className="btnUpdateImg"
                                            onClick={this.goBack}
                                        />
                                    </form>

                                    <input
                                        type="button"
                                        value="Delete Product Image"
                                        className="btnDeleteImg"
                                        onClick={() => this.deleteProductImage(this.state.imageData._id)}
                                    />
                                </div>
                            )
                    }
                </div>
            </div>

        );
    }
}

export default EditProduct