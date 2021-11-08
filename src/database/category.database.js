import axios from "axios";

export const getProductsByCategory = async (
  category,
  productsFunc,
  setLoading
) => {
  setLoading(true);
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:8080/api/categories/${category}`,
    });
    const { data } = response;

    if (response) {
      setLoading(false);
      productsFunc(data.category);
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
