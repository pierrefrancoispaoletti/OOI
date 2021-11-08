import ProductsActionTypes from "./products-types";

export const getProducts = (category) => ({
  type: ProductsActionTypes.GET_PRODUCTS,
  payload: category,
});
