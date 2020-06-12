import React from 'react';

function Application(){

    const cashDelivery = () => {
        window.location = "/creditCardPayment"
    }
    const cardPayment = () => {
        window.location = "/cashOnDelivery"
    }

    return(
        <div>
            <br/><br/><br/><br/><br/><br/><br/>
            <div className="container">
                <div className="jumbotron" style={{backgroundColor:"#E8F8F5"}}>
                    <h1 align="center">Select Payment Method</h1>
                    <br/><br/>
                    <div className="form-group" align="center">
                        <button type="submit" className="btn btn-primary btn-lg" onClick={cashDelivery} style={{backgroundColor: "#AF7AC5"}}>Credit Card Payments</button>
                    </div>
                    <br/><br/><br/>
                    <div className="form-group" align="center">
                        <button type="submit" className="btn btn-primary btn-lg " onClick={cardPayment} style={{backgroundColor: "#AF7AC5"}}>Cash On Delivery    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Application;