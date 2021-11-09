import styled, { css } from "styled-components";

const isEditModeOn = (props) => {
  if (props.editMode) {
    return css`
      border: 5px solid green;
    `;
  }
  return css`
    border: 5px solid white;
  `;
};

export const WithAdminContainer = styled.div`
  ${isEditModeOn}
  padding: 8px;
  border-radius: 8%;
  margin-bottom: 12px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`;

export const EditModeTagContainer = styled.div`
  border: 1px solid white;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5em;
  text-align: center;

  .tag {
    display: inline-block;
    width: 100%;
    padding: 0.8em;
    background-color: green;
  }
`;
