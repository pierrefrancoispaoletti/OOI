import {
  faBook,
  faCauldron,
  faShoppingBasket,
  faUser,
} from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import Logo from "../../assets/logoOOI.png";
import { toggleCartHidden } from "../../redux/reducers/cart/cart-actions";
import { selectCartItemsCount } from "../../redux/reducers/cart/cart-selectors";
import ButtonElement from "../ButtonElement/ButtonElement";
import CartDropDownElement from "../DropDownElement/CartDropDownElement";
import { HeaderContainer, LinkItem, LinksContainer } from "./appbar.style";
const Appbar = ({ cartItemCount, toggleCart }) => {
  return (
    <HeaderContainer>
      <Link to="/">
        <img width="80px" height="80px" src={Logo} alt="Logo OOI" />
      </Link>
      <LinksContainer>
        <LinkItem to="/sign-in">
          <FontAwesomeIcon icon={faUser} size="2x" />
        </LinkItem>
        <LinkItem>
          <FontAwesomeIcon icon={faBook} size="2x" />
        </LinkItem>
        <LinkItem>
          <FontAwesomeIcon icon={faCauldron} size="2x" />
        </LinkItem>
        <ButtonElement circular type="button" onClick={() => toggleCart()}>
          <FontAwesomeIcon icon={faShoppingBasket} size="2x" />
          <sup>{cartItemCount}</sup>
        </ButtonElement>
      </LinksContainer>
      <CartDropDownElement />
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Appbar);
