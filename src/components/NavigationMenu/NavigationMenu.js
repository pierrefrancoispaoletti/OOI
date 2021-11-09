import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { categories } from "../../data/categories/categories";

import { MenuContainer, MenuElement } from "./navigation-menu.style";

const NavigationMenu = () => {
  const keys = Object.keys(categories);
  return (
    <MenuContainer>
      {keys.map((category) => (
        <MenuElement key={category} to={`/category/${category}`}>
          <div className="icon">
            <FontAwesomeIcon icon={categories[category].icon} size="3x" />
          </div>
          <h3>{category.toUpperCase()}</h3>
        </MenuElement>
      ))}
    </MenuContainer>
  );
};

export default NavigationMenu;
