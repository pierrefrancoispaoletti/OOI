import CartActionTypes from "./cart-types";
import { addItemToCart, removeItem } from "./cart-utils";

const initialState = {
  hidden: true,
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cart: addItemToCart(state.cart, action.payload),
      };
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cart: removeItem(state.cart, action.payload),
      };

    case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
