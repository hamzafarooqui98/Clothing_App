import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HtHkeCWV1E6752oYlUWv35rLRQzocRYjKnRUmKa39kE6NrOq1ClOhRosWu6aP037jmJtKDwnfJsUd8qfWS4aV6x00Va13Y3ju';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return(
        <StripeCheckout   // The properties here are taken and used from 'https://www.npmjs.com/package/react-stripe-checkout'
            label= 'Pay Now'
            name= 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image= 'https://svgshare.com/i/CUz.svg'
            description= {`Your total price is $${price}`}
            amount= {priceForStripe}
            panelLabel= 'Pay Now'
            token= {onToken}      // This is used by the backend to access the payment authentication (which we don't have in our case)
            stripeKey= {publishableKey}
        />
    );
};

export default StripeCheckoutButton;