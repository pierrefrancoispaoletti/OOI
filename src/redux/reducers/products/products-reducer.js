import { updateProductInCategory } from "./product-utils";
import ProductsActionTypes from "./products-types";

const initialState = {
  category: {},
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS:
      return {
        ...state,
        category: action.payload,
      };
    case ProductsActionTypes.EDIT_PRODUCT:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
