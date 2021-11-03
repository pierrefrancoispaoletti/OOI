import styled, { css } from "styled-components";

const ChangeQuantityStyle = (props) => {
  if (props.plus) {
    return greenColorStyle;
  }
  if (props.minus) {
    return redColorStyle;
  }
  if (props.classic) {
    return classicStyle;
  }
};

const greenColorStyle = css`
  background-color: green;
`;

const redColorStyle = css`
  background-color: red;
`;

const classicStyle = css`
  border: none;
  color: red;
`;

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid black;
  border-bottom: 2px solid Black;
  margin-bottom: 12px;
  padding: 14px 0;
  @media (min-width: 590px) {
    flex-direction: row;
  }
`;

export const TitleElement = styled.div`
  max-width: 80px;
  line-break: auto;
  font-weight: bold;
  font-size: 1.5em;
`;

export const PriceElement = styled.div`
  font-weight: bold;
  font-size: 1.5em;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CustomIcon = styled.div`
  ${ChangeQuantityStyle}
  border-radius: 100px;
  margin: 8px;
  &:last-child {
    margin-right: 0px;
  }
  &:active {
    background: white;
    color: black;
  }
`;
