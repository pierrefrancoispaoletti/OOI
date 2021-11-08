import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addItemToCart } from "../../redux/reducers/cart/cart-actions";

import { faPlus } from "@fortawesome/pro-light-svg-icons";
import ButtonElement from "../ButtonElement/ButtonElement";

import {
  DescriptionContainer,
  DescriptionElement,
  PriceContainer,
  PriceElement,
  ProductItemContainer,
  ProductTitleAndPriceContainer,
  TitleContainer,
  TitleElement,
} from "./product-item.style";

const Productitem = ({ item, addItemToCart }) => {
  const { title, contenant, price, ingredients } = item;
  return (
    <ProductItemContainer>
      <ProductTitleAndPriceContainer>
        <TitleContainer>
          <TitleElement>{`${title} ${
            contenant ? "(" + contenant + ")cl" : ""
          }`}</TitleElement>
        </TitleContainer>
        <PriceContainer>
          <PriceElement>
            {Number(price).toFixed(2)} <small>€</small>
          </PriceElement>
        </PriceContainer>
      </ProductTitleAndPriceContainer>
      {ingredients && (
        <DescriptionContainer>
          <DescriptionElement>{ingredients}</DescriptionElement>
        </DescriptionContainer>
      )}
      <ButtonElement type="button" circular onClick={() => addItemToCart(item)}>
        <FontAwesomeIcon icon={faPlus} size="2x" pull="left" />
        <span>Ajouter</span>
      </ButtonElement>
    </ProductItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(Productitem);
