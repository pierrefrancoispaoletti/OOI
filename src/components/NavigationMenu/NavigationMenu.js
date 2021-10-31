import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { categories } from "../../data/categories/categories";
import { MenuContainer, MenuElement } from "./navigation-menu.style";

const NavigationMenu = () => {
  const keys = Object.keys(categories);
  return (
    <MenuContainer>
      {keys.map((key) => (
        <MenuElement key={key} to={`/category/${key}`}>
          <div className="icon">
            <FontAwesomeIcon icon={categories[key].icon} size="3x" />
          </div>
          <h3>{key.toUpperCase()}</h3>
        </MenuElement>
      ))}
    </MenuContainer>
  );
};

export default NavigationMenu;
