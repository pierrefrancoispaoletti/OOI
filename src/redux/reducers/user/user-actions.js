import UserActionTypes from "./user-types";

export const connectUser = (token = "", message = "") => ({
  type: UserActionTypes.CONNECT_USER,
  payload: { token, message },
});

export const deconnectUser = () => ({
  type: UserActionTypes.DECONNECT_USER,
});
