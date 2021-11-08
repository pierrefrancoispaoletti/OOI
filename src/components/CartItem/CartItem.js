import React from "react";
import { useDispatch } from "react-redux";
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

const CartItem = ({ item }) => {
  const { title, quantity } = item;
  const dispatch = useDispatch();
  return (
    <CartItemContainer>
      <TitleElement>{title}</TitleElement>
      <QuantityContainer>
        <CustomIcon minus onClick={() => dispatch(removeItem(item))}>
          <FontAwesomeIcon icon={faMinusCircle} size="2x" />
        </CustomIcon>
        <PriceElement>{quantity}</PriceElement>{" "}
        <CustomIcon plus onClick={() => dispatch(addItemToCart(item))}>
          <FontAwesomeIcon icon={faPlusCircle} size="2x" />{" "}
        </CustomIcon>
      </QuantityContainer>
      <PriceElement>
        {computePriceWithQuantity(item)} <small>€</small>
      </PriceElement>
      <CustomIcon classic onClick={() => dispatch(clearItemFromCart(item))}>
        <FontAwesomeIcon icon={faTrashAlt} size="2x" />
      </CustomIcon>
    </CartItemContainer>
  );
};

export default CartItem;
