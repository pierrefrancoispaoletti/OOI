import React from "react";
import { useSelector } from "react-redux";
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

const CartDromDownElement = () => {
  const cart = useSelector(selectCartItems);
  const hidden = useSelector(selectCartHidden);
  const total = useSelector(selectCartTotal);
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

export default CartDromDownElement;
