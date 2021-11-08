import React, { useEffect, useState } from "react";
import Productslist from "../../components/ProductsList/ProductsList";
import { CategoryPageContainer } from "./categoryPage.style";
import { useParams } from "react-router";
import { connect } from "react-redux";
import { getProductsByCategory } from "../../database/category.database";
import { getProducts } from "../../redux/reducers/products/products-actions";
import WithLoader from "../../components/WithLoader/WithLoader";
import { createStructuredSelector } from "reselect";
import { selectCatObject } from "../../redux/reducers/products/products-selectors";

const CategoryPage = ({ getProducts, catObject }) => {
  const { cat } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProductsByCategory(cat, getProducts, setLoading);
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

const mapStateToProps = createStructuredSelector({
  catObject: selectCatObject,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: (category) => dispatch(getProducts(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
