import React from "react";

import Productitem from "../ProductItem/ProductItem";
import PageTitleItem from "../PageTitleItem/PageTitleItem";

import { ProductsListContainer } from "./products-list.style";
import { selectUserObject } from "../../redux/reducers/user/user-selectors";
import { useSelector } from "react-redux";

const Productslist = ({ getObjectProperties, category }) => {
  const user = useSelector(selectUserObject);
  return (
    <ProductsListContainer>
      <PageTitleItem>{category}</PageTitleItem>
      {getObjectProperties().map((p) => (
        <Productitem
          isAdmin={(user && user.role === "Admin") || false}
          category={category}
          key={p._id}
          item={p}
        />
      ))}
    </ProductsListContainer>
  );
};

export default Productslist;
