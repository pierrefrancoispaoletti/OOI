import UserActionTypes from "./user-types";
import { getDatasFromJWT } from "./user-utils";

const initialState = {
  user: null,
  message: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.CONNECT_USER:
      return {
        ...state,
        user: getDatasFromJWT(action.payload.token),
        message: action.payload.message,
      };
    case UserActionTypes.DECONNECT_USER:
      return {
        ...state,
        user: null,
        message: "Déconnécté",
      };
    default:
      return state;
  }
};

export default userReducer;
