import styled, { css } from "styled-components";
import { randomColor } from "../../assets/coolors.styles";

const FieldNormalisation = css`
  border: 2px solid white;
  padding: 0.9em;
  border-radius: 12px;
`;

export const ProductItemContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${randomColor};
  padding: 1.3em;
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50px;
  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;

export const ProductTitleAndPriceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
  @media (max-width: 400px) {
    justify-content: center;
    text-align: center;
  }
`;

export const TitleContainer = styled.div`
  ${FieldNormalisation}
`;

export const TitleElement = styled.h4`
  font-size: 1.5em;
  font-weight: bold;
`;

export const PriceContainer = styled.div`
  ${FieldNormalisation}
  @media (max-width: 400px) {
    text-align: center;
  }
`;
export const PriceElement = styled.span`
  font-size: 2em;
  font-weight: bold;
`;

export const DescriptionContainer = styled.div`
  align-self: flex-start;
  margin-bottom: 15px;
  ${FieldNormalisation}
  @media (max-width: 400px) {
    text-align: center;
  }
`;

export const DescriptionElement = styled.p`
  font-size: 1.5em;
`;
