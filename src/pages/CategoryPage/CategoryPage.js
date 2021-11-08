import React, { useEffect, useState } from "react";
import Productslist from "../../components/ProductsList/ProductsList";
import { CategoryPageContainer } from "./categoryPage.style";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "../../database/category.database";
import WithLoader from "../../components/WithLoader/WithLoader";
import { selectCatObject } from "../../redux/reducers/products/products-selectors";

const CategoryPage = () => {
  const catObject = useSelector(selectCatObject);
  const dispatch = useDispatch();
  const { cat } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProductsByCategory(cat, dispatch, setLoading);
  }, []);

  const getObjectProperties = () => {
    let array = [];
    if (catObject[cat]) {
      for (let key of Object?.keys(catObject[cat])) {
        array.push({ title: key, ...catObject[cat][key] });
      }
      return array;
    }
    return [];
  };

  return (
    <CategoryPageContainer>
      {loading ? (
        <WithLoader />
      ) : (
        <Productslist
          getObjectProperties={getObjectProperties}
          category={cat}
        />
      )}
    </CategoryPageContainer>
  );
};

export default CategoryPage;
