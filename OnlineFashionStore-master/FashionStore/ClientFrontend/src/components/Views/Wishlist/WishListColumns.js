import React, {Component} from 'react';

class WishListColumns extends Component {
    render() {
        return (
            <div className="container-fluid text-center d-none d-lg-block rgba-grey-light" style={{ fontSize: "18px" }} >
                <br/>
                <div className="row">
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase"></p>

                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text"><strong>Product</strong></p>

                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text"><strong>price</strong></p>

                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text"><strong>Reviews</strong></p>

                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text"><strong>Add to Cart</strong></p>

                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text"></p>

                    </div>



                </div>

            </div>
        );
    }
}

export default WishListColumns;