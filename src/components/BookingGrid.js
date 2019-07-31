import React from "react";
import styled from "styled-components";
import formatDate from "date-fns/format";

export default BookingGrid;

function BookingGrid({ bookings }) {
  if (!bookings) return null;
  return (
    <>
      {bookings.map(booking => (
        <Row key={booking.id}>
          <NameCol>{booking.name}</NameCol>
          <EmailCol>{booking.email}</EmailCol>
          <AddyCol>
            {" "}
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

const Row = styled.div`
  display: -ms-grid;
  display: grid;
  font-family: Helvetica, sans-serif;
  background-color: #f5f5f5;
  padding: 10px;
  &:not(:last-child) {
    border-bottom: 1px #d8d8d8 solid;
  }
  -ms-grid-columns: 1fr 1fr;
  grid-template-areas:
    "name type"
    "email email"
    "addy addy"
    "date date";

  @media (min-width: 600px) {
    -ms-grid-columns: 1fr 1fr;
    grid-template-areas:
      "name type"
      "email email"
      "date addy";
  }
  @media (min-width: 1200px) {
    -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: "name email addy type date";
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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
  @media (min-width: 1200px) {
    -ms-grid-column: 1;
    font-weight: normal;
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
  @media (min-width: 1200px) {
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
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
    text-align: right;
  }
  @media (min-width: 1200px) {
    -ms-grid-row: 1;
    -ms-grid-column: 3;
    -ms-grid-column-span: 1;
    margin-bottom: auto;
    text-align: left;
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
  @media (min-width: 1200px) {
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
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    text-align: left;
    align-self: end;
  }
  @media (min-width: 1200px) {
    -ms-grid-row: 1;
    -ms-grid-column: 5;
    -ms-grid-column-span: 1;
    text-align: right;
    align-self: auto;
  }
`;
