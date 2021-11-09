import axios from "axios";
import { editProduct } from "../redux/reducers/products/products-actions";

export const editProductRequest = async (product, dispatch, setLoading) => {
  setLoading(true);
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:8080/api/products/edit-product",
      data: { product },
    });

    if (response) {
      const { data } = response;
      setLoading(false);
      dispatch(editProduct(data.newProduct));
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
