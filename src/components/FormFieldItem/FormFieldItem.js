import React from "react";
import {
  FormFieldContainer,
  InputItem,
  LabelItem,
} from "./form-field-item.style";

const FormFieldItem = ({ handleChange, label, ...otherProps }) => {
  return (
    <FormFieldContainer>
      <InputItem onChange={handleChange} className="input" {...otherProps} />
      <LabelItem
        className={`${otherProps.value?.length ? "shrink" : ""} : "label"`}
      >
        {label}
      </LabelItem>
    </FormFieldContainer>
  );
};

export default FormFieldItem;
