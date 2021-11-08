import React from "react";
import { BadgeElementContainer } from "./badge-element.style";

const BadgeElement = ({ children }) => {
  return <BadgeElementContainer>{children}</BadgeElementContainer>;
};

export default BadgeElement;
