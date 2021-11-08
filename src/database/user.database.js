import Axios from "axios";
import { connectUser } from "../redux/reducers/user/user-actions";

export const logInWithUserCredentials = async (
  credentials,
  dispatch,
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
      dispatch(connectUser(token, message));
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
