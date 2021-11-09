import {
  faCheck,
  faEdit,
  faEye,
  faEyeSlash,
  faRedo,
  faTrashAlt,
} from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editProductRequest } from "../../database/products.database";
import ButtonElement from "../ButtonElement/ButtonElement";
import {
  ButtonContainer,
  ButtonsContainer,
  EditModeTagContainer,
  WithAdminContainer,
} from "./with-admin-style";

const WithAdminBar = (WrappedComponent) => {
  const WithStateComponent = ({ isAdmin, ...otherProps }) => {
    const { item } = otherProps;
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const [editableItem, setEditableItem] = useState({});

    useEffect(() => {
      setEditableItem({ ...item });
    }, []);

    const updateProduct = () => {
      editProductRequest(editableItem, dispatch, setLoading);
    };

    const toggleHideMode = useCallback(() => {
      editableItem.isHidden = !editableItem.isHidden;
      editProductRequest(editableItem, dispatch, setLoading);
    }, [dispatch, editableItem]);

    console.log(editableItem);

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
              icon={editableItem.isHidden ? faEye : faEyeSlash}
              color="white"
              size="1x"
              onClick={() => {
                toggleHideMode();
              }}
            />
          </ButtonElement>
          <ButtonElement type="button" circular inverted>
            <FontAwesomeIcon icon={faTrashAlt} color="red" size="1x" />
          </ButtonElement>
        </ButtonContainer>
        <EditModeTagContainer>
          {editMode ? <span className="tag">MODE ÉDITION ACTIVÉ</span> : ""}
        </EditModeTagContainer>
        <WrappedComponent
          editMode={editMode}
          isAdmin
          setEditableItem={setEditableItem}
          editableItem={editableItem}
          {...otherProps}
        >
          {editMode && (
            <ButtonsContainer>
              <ButtonElement
                type="button"
                circular
                inverted
                onClick={() => updateProduct()}
              >
                <FontAwesomeIcon icon={faCheck} size="1x" color="green" />
              </ButtonElement>
              <ButtonElement type="button" circular inverted>
                <FontAwesomeIcon icon={faRedo} size="1x" color="red" />
              </ButtonElement>
            </ButtonsContainer>
          )}
        </WrappedComponent>
      </WithAdminContainer>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return WithStateComponent;
};
export default WithAdminBar;
