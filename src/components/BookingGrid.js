import React from "react";
import styled from "styled-components";
import formatDate from "date-fns/format";
import ErrorContainer from "./ErrorContainer";

export default BookingGrid;

function BookingGrid({ bookings, loading, error }) {
  return (
    <>
      <Row header>
        <NameCol>Customer</NameCol>
        <EmailCol>Email</EmailCol>
        <AddyCol>Address</AddyCol>
        <TypeCol>Booking Type</TypeCol>
        <DateCol>Booking Date/Time</DateCol>
      </Row>
      {error ? (
        <BaseRow>
          <ErrorContainer centered>{error}</ErrorContainer>
        </BaseRow>
      ) : null}
      {loading && !bookings ? (
        <BaseRow>Loading booking records.</BaseRow>
      ) : null}
      {!bookings
        ? null
        : bookings.map(booking => (
            <Row key={booking.id}>
              <NameCol>{booking.name}</NameCol>
              <EmailCol>{booking.email}</EmailCol>
              <AddyCol>
                {booking.address}
                <br />
                {booking.city}, {booking.state}, {booking.zipcode}
              </AddyCol>
              <TypeCol>{BOOKING_TYPES[booking.type]}</TypeCol>
              <DateCol>
                {formatDate(booking.date, "MMMM D, YYYY [at] hh:mm a")}
              </DateCol>
            </Row>
          ))}
    </>
  );
}

const BOOKING_TYPES = {
  HOUSEKEEPING: "Housekeeping",
  DOG_WALK: "Dog Walk"
};

const BaseRow = styled.div`
  background-color: ${props => (props.header ? "transparent" : "#f5f5f5")};
  padding: 10px;
  text-align: center;
`;

const Row = styled(BaseRow)`
  display: ${props => (props.header ? `none` : `-ms-grid`)};
  display: ${props => (props.header ? `none` : `grid`)};
  &:not(:last-child) {
    border-bottom: 1px #d8d8d8 solid;
  }
  -ms-grid-columns: 1fr 1fr;
  grid-template-areas:
    "name type"
    "email email"
    "addy addy"
    "date date";
  text-align: left;

  @media (min-width: 600px) {
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "name type"
      "email email"
      "addy date";
  }
  @media (min-width: 960px) {
    -ms-grid-columns: 240px 1fr 105px 250px;
    grid-template-columns: 240px 1fr 105px 250px;
    ${props =>
      props.header
        ? `
            display: -ms-grid;
            display: grid;
            grid-template-areas:
              "name addy type date";
            & ${EmailCol} {
              display: none;
            }
          `
        : `
            grid-template-areas:
              "name addy type date"
              "email email email email";
          `}
  }
  @media (min-width: 1280px) {
    -ms-grid-columns: 175px 300px 1fr 105px 250px;
    grid-template-areas: "name email addy type date";
    grid-template-columns: 175px 300px 1fr 105px 250px;
    ${props =>
      props.header
        ? `
            display: -ms-grid;
            display: grid;
            & ${EmailCol} {
              display: block;
            }
          `
        : ``}
  }
`;

const Col = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const NameCol = styled(Col)`
  grid-area: name;
  -ms-grid-row: 1;
  -ms-grid-column: 1;
  -ms-grid-column-span: 1;
  font-weight: bold;

  @media (min-width: 600px) {
    -ms-grid-row: 1;
    -ms-grid-column: 1;
    -ms-grid-column-span: 1;
  }
  @media (min-width: 960px) {
    -ms-grid-column: 1;
    font-weight: inherit;
  }
  @media (min-width: 1280px) {
    -ms-grid-column: 1;
    font-weight: inherit;
  }
`;
const EmailCol = styled(Col)`
  grid-area: email;
  -ms-grid-row: 2;
  -ms-grid-column: 1;
  -ms-grid-column-span: 2;
  margin-bottom: 8px;
  font-size: 0.8em;

  @media (min-width: 600px) {
    -ms-grid-row: 2;
    -ms-grid-column-span: 1;
  }
  @media (min-width: 960px) {
    -ms-grid-row: 2;
    -ms-grid-column: 1;
    -ms-grid-column-span: 3;
    margin-bottom: auto;
    font-size: 0.8em;
  }
  @media (min-width: 1280px) {
    -ms-grid-row: 1;
    -ms-grid-column: 2;
    margin-bottom: auto;
    font-size: 1em;
  }
`;
const AddyCol = styled(Col)`
  grid-area: addy;
  -ms-grid-row: 3;
  -ms-grid-column: 1;
  -ms-grid-column-span: 2;
  margin-bottom: 8px;

  @media (min-width: 600px) {
    -ms-grid-row: 2;
    -ms-grid-column: 1;
    -ms-grid-column-span: 1;
    margin-bottom: auto;
    align-self: end;
  }
  @media (min-width: 960px) {
    -ms-grid-row: 1;
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
    margin-bottom: auto;
  }
  @media (min-width: 1280px) {
    -ms-grid-row: 1;
    -ms-grid-column: 3;
    -ms-grid-column-span: 1;
    margin-bottom: auto;
  }
`;
const TypeCol = styled(Col)`
  grid-area: type;
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  -ms-grid-column-span: 1;
  text-align: right;

  @media (min-width: 600px) {
    -ms-grid-row: 1;
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
    text-align: right;
  }
  @media (min-width: 960px) {
    -ms-grid-row: 1;
    -ms-grid-column: 3;
    -ms-grid-column-span: 1;
    text-align: left;
  }
  @media (min-width: 1280px) {
    -ms-grid-row: 1;
    -ms-grid-column: 4;
    -ms-grid-column-span: 1;
    text-align: left;
  }
`;
const DateCol = styled(Col)`
  grid-area: date;
  -ms-grid-row: 4;
  -ms-grid-column: 1;
  -ms-grid-column-span: 2;

  @media (min-width: 600px) {
    -ms-grid-row: 3;
    -ms-grid-column: 2;
    -ms-grid-column-span: 2;
    text-align: right;
    align-self: end;
  }
  @media (min-width: 960px) {
    -ms-grid-row: 1;
    -ms-grid-column: 4;
    -ms-grid-column-span: 1;
    text-align: right;
    align-self: auto;
  }
  @media (min-width: 1280px) {
    -ms-grid-row: 1;
    -ms-grid-column: 5;
    -ms-grid-column-span: 1;
    text-align: right;
    align-self: auto;
  }
`;
