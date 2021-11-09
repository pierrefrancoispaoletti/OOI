import ProductsActionTypes from "./products-types";

export const getProducts = (category) => ({
  type: ProductsActionTypes.GET_PRODUCTS,
  payload: category,
});

export const editProduct = (category) => ({
  type: ProductsActionTypes.EDIT_PRODUCT,
  payload: category,
});
