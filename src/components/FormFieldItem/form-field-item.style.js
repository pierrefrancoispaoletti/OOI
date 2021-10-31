import styled, { css } from "styled-components";

const shrinkStyle = css`
  top: -24px;
  left: 37%;
  font-size: 1.5em;
  color: white;
`;

export const FormFieldContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 1.3em 0;
  padding: 0 24px;
  border-radius: 50px;
  border: 2px solid white;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

export const LabelItem = styled.label`
  color: black;
  font-size: 1.5em;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 40px;
  transition: 300ms ease all;
  text-transform: capitalize;
  &.shrink {
    ${shrinkStyle}
  }
`;

export const InputItem = styled.input`
  background: none;
  background-color: transparent;
  color: white;
  font-size: 1.8em;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 2px solid black;
  margin: 1.3em 0;
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkStyle}
  }
`;
