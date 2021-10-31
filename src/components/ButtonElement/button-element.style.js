import styled, { css } from "styled-components";

const ButtonStyleNormal = css`
  background: transparent;
  border: 2px solid black;
  color: black;
  &:active {
    transition: all 0.2s ease;
    background: transparent;
    border: 2px solid white;
    color: white;
  }
`;

const ButtonStyleInverted = css`
  background: black;
  border: 2px solid white;
  color: white;
  &:active {
    transition: all 0.2s ease;
    background: transparent;
    border: 2px solid black;
    color: black;
  }
`;
const ButtonStyleCircular = css`
  border-radius: 100px;
`;

const ButtonStyleFluid = css`
  width: 100%;
`;

const GetButtonStyle = (props) => {
  if (props.inverted) {
    return ButtonStyleInverted;
  }
  return ButtonStyleNormal;
};

const ButtonCircular = (props) => {
  if (props.circular) {
    return ButtonStyleCircular;
  }
};

const ButtonFluid = (props) => {
  if (props.fluid) {
    return ButtonStyleFluid;
  }
};

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.3em;
  padding: 0.8em;
  ${ButtonFluid}
  ${ButtonCircular}
  ${GetButtonStyle}
`;
