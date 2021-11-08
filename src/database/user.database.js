import Axios from "axios";

export const logInWithUserCredentials = async (
  credentials,
  connectFunction,
  setLoading
) => {
  setLoading(true);
  try {
    const response = await Axios({
      method: "post",
      url: "http://localhost:8080/auth/login",
      data: { ...credentials },
    });
    const {
      data: { token, message },
    } = response;
    if (response) {
      setLoading(false);
      connectFunction(token, message);
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
