import React from "react";
import { Field, ErrorMessage } from "formik";
import styled from "styled-components";
import FieldWrapper from "./FieldWrapper";
import FieldLabel from "./FieldLabel";
import ErrorContainer from "./ErrorContainer";

export default Input;

function Input({
  label,
  name,
  autoFocus,
  onChange,
  gutterBottom,
  horizontalLabel,
  ...props
}) {
  const fieldRef = React.useRef();

  React.useEffect(() => {
    if (autoFocus) {
      fieldRef.current.focus();
    }
  }, [fieldRef, autoFocus]);

  return (
    <FieldWrapper {...{ gutterBottom, horizontalLabel }}>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <Field
        name={name}
        render={({ field, form }) => {
          function handleChange(event) {
            if (typeof onChange === "function") {
              onChange(event.target.value);
            }
            field.onChange(event);
          }
          return (
            <StyledInput
              ref={fieldRef}
              id={name}
              {...field}
              {...props}
              onChange={handleChange}
              error={form.touched[field.name] && form.errors[field.name]}
            />
          );
        }}
      />
      <ErrorContainer>
        <ErrorMessage name={name} />
      </ErrorContainer>
    </FieldWrapper>
  );
}

const StyledInput = styled.input`
  box-sizing: border-box;
  padding: 8px 8px;
  width: 100%;
  border: 1px ${props => (props.error ? "#a00" : "#ccc")} solid;
  border-radius: 2px;
  font-family: Helvetica, sans-serif;
  font-size: 12pt;
  &[type="date"],
  &[type="time"] {
    padding: 7px 8px;
  }
  &[type="date"]::-webkit-inner-spin-button,
  &[type="time"]::-webkit-inner-spin-button {
    display: none;
  }
`;
