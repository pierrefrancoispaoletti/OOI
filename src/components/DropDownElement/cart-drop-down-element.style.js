import styled from "styled-components";

export const CartDropDownContainer = styled.div`
  position: absolute;
  z-index: 4;
  width: 50vw;
  top: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 50px 50px;
  background: white;
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
  padding: 2em;
  line-height: 1.5;
  height: auto;
`;

export const TotalContainer = styled.div`
  align-self: flex-end;
  font-weight: bold;
  font-size: 1.5em;
  border: 1px solid black;
  padding: 8px 5px;
  margin-bottom: 12px;
`;
