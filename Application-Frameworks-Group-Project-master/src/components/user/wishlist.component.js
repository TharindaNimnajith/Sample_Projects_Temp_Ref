import React, {Component} from 'react';

import axios from 'axios';


class WishList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            itemId: 0,
            itemName: '',
            wishlistItems:[]

        }
    }



    componentDidMount() {

        axios.get('http://localhost:5000/wishlistItems')
            .then(res => {

                this.setState({wishlistItems: res.data})
                console.log(res.data);
            })
            .catch(error => {

                console.log(error);
            })



    }





    render() {
        return (

<div>
                <h2>My WishList</h2>
                <table className="table table-dark table-hover">
                    <thead>
                    <tr>


                        <th scope="col">Product ID</th>
                        <th scope="col">Product Name</th>

                        <th scope="col">Actions</th>

                    </tr>


                    </thead>
                    <tbody  style={{backgroundColor:"#AF7AC5"}}>


                    {this.state.wishlistItems.map(wishlistItem => (
                        <tr key={wishlistItem._id}>
                            <td>{wishlistItem.itemId}</td>
                            <td>{wishlistItem.itemName}</td>


                            <td>

                                <button
                                className="btn btn-secondary"

                                >
                                Add To Cart
                            </button>
                            </td>
                        </tr>
                    ))}



                    </tbody>
                </table>



</div>

        );
    }

}

export default WishList