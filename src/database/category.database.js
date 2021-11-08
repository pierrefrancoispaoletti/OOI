import axios from "axios";
import { getProducts } from "../redux/reducers/products/products-actions";

export const getProductsByCategory = async (category, dispatch, setLoading) => {
  setLoading(true);
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:8080/api/categories/${category}`,
    });
    const { data } = response;

    if (response) {
      setLoading(false);
      dispatch(getProducts(data.category));
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
