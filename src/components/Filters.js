import React from "react";
import { Formik } from "formik";
import Select from "./Select";
import styled from "styled-components";

export default Filters;

function Filters({ initialValues, onSubmit }) {
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <FilterForm onSubmit={handleSubmit}>
          <Select
            id="filter-booking-type"
            label="Booking Type"
            name="type"
            horizontalLabel
            onChange={() => setTimeout(handleSubmit, 0)}
            style={{ width: 135 }}
            options={[
              { value: "", label: "All" },
              { value: "HOUSEKEEPING", label: "Housekeeping" },
              { value: "DOG_WALK", label: "Dog Walk" }
            ]}
          />
        </FilterForm>
      )}
    </Formik>
  );

  function handleSubmit(values) {
    onSubmit(values);
  }
}

const FilterForm = styled.form`
  display: flex;
  align-items: center;
  @media (min-width: 600px) {
    & > * {
      margin-right: 8px;
    }
  }
`;
