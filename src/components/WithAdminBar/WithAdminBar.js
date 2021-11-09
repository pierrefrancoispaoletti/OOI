import {
  faEdit,
  faEye,
  faEyeSlash,
  faTrashAlt,
} from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ButtonElement from "../ButtonElement/ButtonElement";
import {
  ButtonContainer,
  EditModeTagContainer,
  WithAdminContainer,
} from "./with-admin-style";

const WithAdminBar = (WrappedComponent) => {
  const WithStateComponent = ({ isAdmin, ...otherProps }) => {
    const {
      item: { isHidden },
    } = otherProps;
    const [editMode, setEditMode] = useState(false);
    const [isHiddenMode, setIsHiddenMode] = useState(isHidden);

    const dispatch = useDispatch();

    return isAdmin ? (
      <WithAdminContainer editMode={editMode}>
        <ButtonContainer>
          <ButtonElement
            type="button"
            circular
            inverted
            onClick={() => setEditMode(!editMode)}
          >
            <FontAwesomeIcon
              icon={faEdit}
              color={!editMode ? "white" : "green"}
              size="1x"
            />
          </ButtonElement>
          <ButtonElement type="button" circular inverted>
            <FontAwesomeIcon
              icon={isHiddenMode ? faEye : faEyeSlash}
              color="white"
              size="1x"
              onClick={() => setIsHiddenMode(!isHiddenMode)}
            />
          </ButtonElement>
          <ButtonElement type="button" circular inverted>
            <FontAwesomeIcon icon={faTrashAlt} color="red" size="1x" />
          </ButtonElement>
        </ButtonContainer>
        <EditModeTagContainer>
          {editMode ? <span className="tag">MODE ÉDITION ACTIVÉ</span> : ""}
        </EditModeTagContainer>
        <WrappedComponent editMode={editMode} isAdmin {...otherProps} />
      </WithAdminContainer>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return WithStateComponent;
};
export default WithAdminBar;
