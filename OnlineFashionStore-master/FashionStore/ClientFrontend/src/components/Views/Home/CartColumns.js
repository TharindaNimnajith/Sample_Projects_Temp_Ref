import React, {Component} from 'react';

class CartColumns extends Component {
    render() {
        return (
            <div className="container-fluid text-center d-none d-lg-block rgba-grey-light" style={{ fontSize: "18px" }} >
                <br/>
                <div className="row" >
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase"> </p>

                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text"><strong>Product</strong></p>

                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text"><strong>Price</strong></p>

                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase"><strong>QTY</strong></p>

                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text"><strong>Amount</strong></p>

                    </div>
                    <div className="col-10 mx-auto col-lg-2">

                        <p className="text-uppercase"></p>

                    </div>




                </div>

            </div>
        );
    }
}

export default CartColumns;