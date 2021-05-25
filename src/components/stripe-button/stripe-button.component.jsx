import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publichableKey =
    'pk_test_51Hh6DHGcfWneNjpWf8btJMKgyCCOQKoTcL1LMhbVolga0nL7LqMQ6sxSVGSn9mHPlYZs01AC3XxYkPTuuOxR6S6m00EFRjgCm8';
  const onToken = (token) => {
    console.log(token);
    alert('Payment SuccessfulFFFF');
  };
  return (
    <StripeCheckout
      stripeKey={publichableKey}
      label="Pay Now"
      name="Crown Clothing ltd."
      image="https://sendeyo.com/en/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      shippingAddress
      billAddress
    />
  );
};

export default StripeCheckoutButton;
