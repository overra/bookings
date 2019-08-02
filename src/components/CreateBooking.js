import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as yup from "yup";
import Modal from "./Modal";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
import Title from "./Title";
import Loading from "./Loading";
import { createBooking } from "../api";

export default CreateBooking;

function CreateBooking({ show, onClose, onSave }) {
  if (!show) return null;

  return (
    <Modal onClose={onClose}>
      <Formik
        name="create-booking"
        validationSchema={validationSchema}
        initialValues={{}}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isSubmitting, isValid }) => (
          <Form onSubmit={handleSubmit} data-testid="create-booking-form">
            <Title gutterBottom>Create booking</Title>
            <Grid container>
              <Grid item size={6}>
                <Input
                  id="create-booking-name"
                  label="Name"
                  name="name"
                  autoFocus
                />
                <Input
                  id="create-booking-email"
                  label="Email"
                  name="email"
                  type="email"
                />
                <Input
                  id="create-booking-address"
                  label="Street Address"
                  name="address"
                />
                <Input id="create-booking-city" label="City" name="city" />
                <Grid container>
                  <Grid item size={6}>
                    <Input
                      id="create-booking-state"
                      label="State"
                      name="state"
                    />
                  </Grid>
                  <Grid item size={6}>
                    <Input
                      id="create-booking-zipcode"
                      label="Zip code"
                      name="zipcode"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item size={6}>
                <Select
                  id="create-booking-type"
                  label="Booking Type"
                  name="type"
                  options={[
                    { value: "HOUSEKEEPING", label: "House Keeping" },
                    { value: "DOG_WALK", label: "Dog Walk" }
                  ]}
                />
                <Input
                  id="create-booking-date"
                  label="Booking Date"
                  name="date"
                  type="date"
                />
                <Input
                  id="create-booking-time"
                  label="Booking Time"
                  name="time"
                  type="time"
                />
              </Grid>
            </Grid>
            <FormActions>
              {!isSubmitting ? null : <Loading />}
              <Button
                type="submit"
                disabled={isSubmitting || !isValid}
                data-testid="create-booking-submit"
              >
                Create booking
              </Button>
            </FormActions>
          </Form>
        )}
      </Formik>
    </Modal>
  );

  function handleSubmit({ time, date, ...values }) {
    const booking = {
      ...values,
      date: Math.floor(new Date(date + " " + time).getTime() / 1000)
    };

    return createBooking(booking)
      .then(res => {
        onSave();
        onClose();
      })
      .catch(err => {
        console.error(err);
      });
  }
}

const validationSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup
    .string()
    .email()
    .required("Required"),
  address: yup.string().required("Required"),
  city: yup.string().required("Required"),
  state: yup.string().required("Required"),
  zipcode: yup.string().required("Required"),
  type: yup.string().required("Required"),
  date: yup.string().required("Required"),
  time: yup.string().required("Required")
});

const Grid = styled.div`
  /* Grid container styles */
  ${props =>
    props.container
      ? `
          display: flex;
          width: calc(100% + 16px);
          margin: -8px;
        `
      : ""}
  /* Grid item styles */
  ${props =>
    props.item
      ? `
          flex-basis: ${(props.size / 12) * 100}%
          padding: 8px;
        `
      : ""}
`;
const Form = styled.form`
  padding: 16px;
`;
const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;
