import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import {
  selectCartHidden,
  selectCartItems,
  selectCartTotal,
} from "../../redux/reducers/cart/cart-selectors";

import CartItem from "../CartItem/CartItem";
import ButtonElement from "../ButtonElement/ButtonElement";

import {
  CartDropDownContainer,
  TotalContainer,
} from "./cart-drop-down-element.style";

const CartDromDownElement = ({ cart, hidden, total }) => {
  return (
    <CartDropDownContainer hidden={hidden}>
      {cart.map((item) => (
        <CartItem key={item._id} item={item} />
      ))}
      {total > 0 ? (
        <>
          <TotalContainer>
            {`Total: ${total}`} <small>€</small>
          </TotalContainer>
          <ButtonElement type="button">Commander</ButtonElement>
        </>
      ) : (
        <div>Your cart is empty</div>
      )}
    </CartDropDownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cart: selectCartItems,
  hidden: selectCartHidden,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CartDromDownElement);
