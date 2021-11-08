import React from "react";
import { connect } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItem,
} from "../../redux/reducers/cart/cart-actions";

import { computePriceWithQuantity } from "../../redux/reducers/cart/cart-utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  faPlusCircle,
  faTrashAlt,
} from "@fortawesome/pro-light-svg-icons";

import {
  CartItemContainer,
  CustomIcon,
  PriceElement,
  QuantityContainer,
  TitleElement,
} from "./cart-item.style";

const CartItem = ({ item, addItemToCart, removeItemFromCart, removeItem }) => {
  const { title, quantity } = item;
  return (
    <CartItemContainer>
      <TitleElement>{title}</TitleElement>
      <QuantityContainer>
        <CustomIcon minus onClick={() => removeItem(item)}>
          <FontAwesomeIcon icon={faMinusCircle} size="2x" />
        </CustomIcon>
        <PriceElement>{quantity}</PriceElement>{" "}
        <CustomIcon plus onClick={() => addItemToCart(item)}>
          <FontAwesomeIcon icon={faPlusCircle} size="2x" />{" "}
        </CustomIcon>
      </QuantityContainer>
      <PriceElement>
        {computePriceWithQuantity(item)} <small>€</small>
      </PriceElement>
      <CustomIcon classic onClick={() => removeItemFromCart(item)}>
        <FontAwesomeIcon icon={faTrashAlt} size="2x" />
      </CustomIcon>
    </CartItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
