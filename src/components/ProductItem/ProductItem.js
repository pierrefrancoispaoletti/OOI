import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck, faPlus, faRedo } from "@fortawesome/pro-light-svg-icons";
import ButtonElement from "../ButtonElement/ButtonElement";
import { addItemToCart } from "../../redux/reducers/cart/cart-actions";

import {
  ButtonsContainer,
  DescriptionContainer,
  DescriptionElement,
  PriceContainer,
  PriceElement,
  ProductItemContainer,
  ProductTitleAndPriceContainer,
  TitleContainer,
  TitleElement,
} from "./product-item.style";
import WithAdminBar from "../WithAdminBar/WithAdminBar";
import { editProductRequest } from "../../database/products.database";

const Productitem = ({ item, category, editMode, isAdmin }) => {
  const dispatch = useDispatch();
  const { title, price, infos, _id, isHidden } = item;
  const [loading, setLoading] = useState(false);
  const [editableItem, setEditableItem] = useState({
    _id,
    title,
    price,
    category,
    infos,
    isHidden,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableItem({ ...editableItem, [name]: value });
  };
  const updateProduct = () => {
    editProductRequest(editableItem, dispatch, setLoading);
  };
  return (
    <ProductItemContainer
      style={{ display: isAdmin ? "" : isHidden ? "none" : "" }}
    >
      <ProductTitleAndPriceContainer>
        <TitleContainer>
          {!editMode && (
            <TitleElement>
              {isHidden ? `CACHÉ: ${title}` : `${title}`}
            </TitleElement>
          )}
          {editMode && (
            <input
              type="text"
              onChange={handleChange}
              name="title"
              value={editableItem.title}
            />
          )}
        </TitleContainer>
        <PriceContainer>
          <PriceElement>
            <span>{Number(price).toFixed(2)}</span>
          </PriceElement>
          <span>€</span>
        </PriceContainer>
      </ProductTitleAndPriceContainer>
      {infos && (
        <DescriptionContainer>
          <DescriptionElement>{infos}</DescriptionElement>
        </DescriptionContainer>
      )}
      <ButtonElement
        type="button"
        circular
        onClick={() => dispatch(addItemToCart(item))}
      >
        <FontAwesomeIcon icon={faPlus} size="2x" pull="left" />
        <span>Ajouter</span>
      </ButtonElement>
      {editMode && (
        <ButtonsContainer>
          <ButtonElement
            type="button"
            circular
            inverted
            onClick={() => updateProduct()}
          >
            <FontAwesomeIcon icon={faCheck} size="1x" color="green" />
          </ButtonElement>
          <ButtonElement type="button" circular inverted>
            <FontAwesomeIcon icon={faRedo} size="1x" color="red" />
          </ButtonElement>
        </ButtonsContainer>
      )}
    </ProductItemContainer>
  );
};

export default WithAdminBar(Productitem);
