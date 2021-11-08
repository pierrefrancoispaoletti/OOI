import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleCartHidden } from "../../redux/reducers/cart/cart-actions";
import { deconnectUser } from "../../redux/reducers/user/user-actions";
import { selectCartItemsCount } from "../../redux/reducers/cart/cart-selectors";
import { selectUserObject } from "../../redux/reducers/user/user-selectors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCauldron,
  faDoorOpen,
  faShoppingBasket,
  faUser,
} from "@fortawesome/pro-light-svg-icons";

import { Link } from "react-router-dom";
import ButtonElement from "../ButtonElement/ButtonElement";
import CartDropDownElement from "../DropDownElement/CartDropDownElement";
import BadgeElement from "../BadgeElement/BadgeElement";
import Logo from "../../assets/logoOOI.png";

import { HeaderContainer, LinkItem, LinksContainer } from "./appbar.style";

const Appbar = () => {
  const user = useSelector(selectUserObject);
  const cartItemCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <Link to="/">
        <img width="80px" height="80px" src={Logo} alt="Logo OOI" />
      </Link>
      <LinksContainer>
        {user ? (
          <ButtonElement
            circular
            inverted
            type="button"
            onClick={() => dispatch(deconnectUser())}
          >
            <FontAwesomeIcon icon={faDoorOpen} size="2x" />
          </ButtonElement>
        ) : (
          <LinkItem to="/sign-in">
            <FontAwesomeIcon icon={faUser} size="2x" />
          </LinkItem>
        )}
        {user && user.role === "Admin" && (
          <>
            <LinkItem>
              <FontAwesomeIcon icon={faBook} size="2x" />
            </LinkItem>
            <LinkItem>
              <FontAwesomeIcon icon={faCauldron} size="2x" />
            </LinkItem>
          </>
        )}
        <ButtonElement
          circular
          type="button"
          onClick={() => dispatch(toggleCartHidden())}
        >
          <FontAwesomeIcon icon={faShoppingBasket} size="2x" />
          {cartItemCount > 0 && <BadgeElement>{cartItemCount}</BadgeElement>}
        </ButtonElement>
      </LinksContainer>
      <CartDropDownElement />
    </HeaderContainer>
  );
};

export default Appbar;
