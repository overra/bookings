import React from "react";
import { Formik } from "formik";
import Select from "./Select";

export default PaginationLimit;

function PaginationLimit({ onChange, limit }) {
  return (
    <Formik name="limit-form" initialValues={{ limit }} onSubmit={onChange}>
      {({ submitForm }) => (
        <Select
          id="select-limit"
          name="limit"
          label="Results"
          horizontalLabel
          onChange={() => setTimeout(submitForm, 0)}
          style={{ width: 50 }}
          options={[
            { value: 10, label: "10" },
            { value: 20, label: "20" },
            { value: 50, label: "50" }
          ]}
        />
      )}
    </Formik>
  );
}
