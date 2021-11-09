import axios from "axios";
import { getProductsByCategory } from "./category.database";

export const editProductRequest = async (product, dispatch, setLoading) => {
  setLoading(true);
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:8080/api/products/edit-product",
      data: { product },
    });

    if (response) {
      setLoading(false);
      getProductsByCategory(product.category, dispatch, setLoading);
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
