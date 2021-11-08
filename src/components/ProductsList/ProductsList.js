import React from "react";

import Productitem from "../ProductItem/ProductItem";
import PageTitleItem from "../PageTitleItem/PageTitleItem";

import { ProductsListContainer } from "./products-list.style";

const Productslist = ({ getObjectProperties, category }) => {
  return (
    <ProductsListContainer>
      <PageTitleItem>{category}</PageTitleItem>
      {getObjectProperties().map((p) => (
        <Productitem key={p._id} item={p} />
      ))}
    </ProductsListContainer>
  );
};

export default Productslist;
