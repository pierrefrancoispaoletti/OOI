import React from "react";
import { LoaderStyled } from "./withloader.style";

const WithLoader = () => {
  return (
    <LoaderStyled type="MutatingDots" color="#00BFFF" height={80} width={80} />
  );
};

export default WithLoader;
