import React from "react";
import { ButtonContainer } from "./button-element.style";

const ButtonElement = ({ children, ...otherProps }) => {
  return <ButtonContainer {...otherProps}>{children}</ButtonContainer>;
};

export default ButtonElement;
