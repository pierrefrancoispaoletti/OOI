import React from "react";
import Productslist from "../../components/ProductsList/ProductsList";
import { CategoryPageContainer } from "./categoryPage.style";
import { withRouter } from "react-router";
import { products } from "../../data/products/products";

const CategoryPage = ({ match }) => {
  const {
    params: { cat },
  } = match;
  const getObjectProperties = () => {
    let array = [];
    if (products[cat]) {
      for (let key of Object.keys(products[cat])) {
        array.push({ title: key, ...products[cat][key] });
      }
      return array;
    }
    return [];
  };

  return (
    <CategoryPageContainer>
      <Productslist getObjectProperties={getObjectProperties} category={cat} />
    </CategoryPageContainer>
  );
};

export default withRouter(CategoryPage);
