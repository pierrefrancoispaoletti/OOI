import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlus } from "@fortawesome/pro-light-svg-icons";
import ButtonElement from "../ButtonElement/ButtonElement";
import { addItemToCart } from "../../redux/reducers/cart/cart-actions";

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
import WithAdminBar from "../WithAdminBar/WithAdminBar";

const Productitem = ({
  children,
  item,
  editableItem,
  setEditableItem,
  editMode,
  isAdmin,
}) => {
  const dispatch = useDispatch();
  const { title, price, infos, isHidden } = item;

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setEditableItem({ ...editableItem, [name]: value });
    },
    [editableItem, setEditableItem]
  );
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
          {!editMode && (
            <PriceElement>
              <span>{Number(price).toFixed(2)}</span>
            </PriceElement>
          )}
          {editMode && (
            <input
              type="number"
              onChange={handleChange}
              name="price"
              value={editableItem.price}
            />
          )}
          <span>€</span>
        </PriceContainer>
      </ProductTitleAndPriceContainer>
      {infos && (
        <DescriptionContainer>
          {!editMode && <DescriptionElement>{infos}</DescriptionElement>}
          {editMode && (
            <input
              type="text"
              onChange={handleChange}
              name="infos"
              value={editableItem.infos}
            />
          )}
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
      {children}
      {/* ici se charge la 2e partie de l'admin pour valider les modifications */}
    </ProductItemContainer>
  );
};

export default WithAdminBar(Productitem);
