import React from "react";

import { PageTitleStyle } from "./page-title-item.style";

const PageTitleItem = ({ children }) => {
  return <PageTitleStyle>{children}</PageTitleStyle>;
};

export default PageTitleItem;
