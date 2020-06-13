import React, {Component} from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Paypal extends Component {
    render() {
        const onSuccess = (payment) => {

            console.log("The payment was succeeded!", payment);
            this.props.onSuccess(payment);

        }

        const onCancel = (data) => {

            console.log('The payment was cancelled!', data);

        }

        const onError = (err) => {

            console.log("Error!", err);

        }

        let env = 'sandbox';
        let currency = 'USD';
        let total = this.props.toPay;

        const client = {
            sandbox:    'AT_a_Yxj9eXGM57tBZFnOQTphA1mDeaQTwm0nRHTUMHfUK09JngTzGivs7786lfxU27OFm970GGB247w',
            production: 'YOUR-PRODUCTION-APP-ID',
        }

        return (
            <PaypalExpressBtn env={env}
                              client={client}
                              currency={currency}
                              total={total}
                              onError={onError}
                              onSuccess={onSuccess}
                              onCancel={onCancel}
                               style={{
                                   size:'large',
                               }}/>
        );
    }
}

export default Paypal;