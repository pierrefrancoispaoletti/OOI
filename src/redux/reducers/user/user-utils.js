import jwtDecode from "jwt-decode";

export const getDatasFromJWT = (jwttoken) => {
  return jwttoken ? jwtDecode(jwttoken) : null;
};
