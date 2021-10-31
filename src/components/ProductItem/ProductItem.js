import { faPlus } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
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

const Productitem = ({ ...props }) => {
  const { title, contenant, price, ingredients } = props;
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
      <ButtonElement type="button" circular>
        <FontAwesomeIcon icon={faPlus} size="2x" pull="left" />
        <span>Ajouter</span>
      </ButtonElement>
    </ProductItemContainer>
  );
};

export default Productitem;
