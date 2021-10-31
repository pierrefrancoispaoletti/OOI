import { lighten } from "polished";
import styled from "styled-components";
import { randomColor } from "../../assets/coolors.styles";
import { Link } from "react-router-dom";

export const MenuContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const MenuElement = styled(Link)`
  text-decoration: none;
  color: white;
  background: linear-gradient(45deg, ${randomColor}, ${randomColor});
  display: flex;
  flex-direction: column;
  flex: 1 0 33%;
  margin: 5px 15px;
  padding: 1.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  box-shadow: 2px 4px 4px 1px rgba(0, 0, 0, 0.3);
  text-align: center;
  text-transform: uppercase;
  &:hover {
    transform: scale(110%);
    transition: all 0.3s ease-in-out;
    color: ${lighten(0.3, randomColor())};
    border: 3px solid ${randomColor};
    box-shadow: -2px -4px 4px 1px rgba(0, 0, 0, 0.3);
    & .icon {
      color: ${lighten(0.3, randomColor())};
    }
  }
  &:not(:hover) {
    transition: all 0.3s ease-in-out;
  }
`;
