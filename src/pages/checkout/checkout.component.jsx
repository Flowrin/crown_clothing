import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartTotal,
  selectCartItems,
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';
const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="heder-blocks">
          <span>Product</span>
        </div>
        <div className="heder-blocks">
          <span>Description</span>
        </div>
        <div className="heder-blocks">
          <span>Quantity</span>
        </div>
        <div className="heder-blocks">
          <span>Price</span>
        </div>
        <div className="heder-blocks">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <div className="total">TOTAL: ${total}</div>
      <div className="test-warning">
        * Please use the folowing test card
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV:123{' '}
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(Checkout);
