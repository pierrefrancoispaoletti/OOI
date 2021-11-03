import { Link } from "react-router-dom";
import styled from "styled-components";
import { randomColor } from "../../assets/coolors.styles";

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 12px;
  background: linear-gradient(
    45deg,
    ${randomColor},
    ${randomColor},
    ${randomColor},
    ${randomColor},
    ${randomColor}
  );
  background-size: 400% 400%;
  border-radius: 50px;
  animation: gradient 15s ease infinite;
  box-shadow: 2px 4px 6px 3px rgba(0, 0, 0, 0.2);

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const LinkItem = styled(Link)`
  color: black;
  text-decoration: none;
  display: inline-block;
  background: transparent;
  border-radius: 50px;
  padding: 1rem;
  border: 3px solid black;
  &:not(:last-child) {
    margin-right: 0.1rem;
  }

  &:hover {
    transition: all 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    background: black;
    color: white;
  }
`;
