import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  render,
  waitForDomChange,
  fireEvent,
  getByLabelText,
  queryByText
} from "@testing-library/react";
import { parse } from "querystring";

/* mock window functions */
window.scrollTo = jest.fn();
window.fetch = jest.fn().mockImplementation(async url => {
  const options = parse(url.split("?")[1]);
  options.limit = +options.limit;
  options.offset = +options.offset;
  return {
    json: async () => ({
      total: rows.length,
      rows: rows.slice(options.offset, options.limit + options.offset)
    })
  };
});

/* generate mock data for testing */
const booking = {
  id: 1,
  name: "Jon Stewart",
  email: "jon@daily.show",
  address: "5323 Levander Loop",
  city: "Austin",
  state: "TX",
  zipcode: "78702",
  type: "HOUSEKEEPING",
  date: 1559743200
};
const rows = Array(40)
  .fill(0)
  .map((v, i) => ({ ...booking, id: i + 1 }));

it("renders pagination result count and updates upon page change", async () => {
  const { getByTestId } = render(<App />);

  /* check that the pagination text defaults to 0 - 0 of 0 */
  const displayingResults = getByTestId("displaying-results");
  expect(displayingResults).toHaveTextContent("Displaying bookings 0 - 0 of 0");

  /* 
    wait for results to load then check that the pagination text displays 
    1 - 20 of 40 
  */
  await waitForDomChange();
  expect(displayingResults).toHaveTextContent(
    "Displaying bookings 1 - 20 of 40"
  );

  /* check that the prev button is disabled */
  expect(getByTestId("prev-button")).toBeDisabled();
  expect(getByTestId("next-button")).not.toBeDisabled();
  fireEvent.click(getByTestId("next-button"));

  /* 
    check that the pagination text updates when the page changes and the prev 
    button is enabled.
  */
  await waitForDomChange();
  expect(displayingResults).toHaveTextContent(
    "Displaying bookings 21 - 40 of 40"
  );
  expect(getByTestId("prev-button")).not.toBeDisabled();
});

it("renders create booking modal", async () => {
  const { getByTestId, queryByTestId, getByLabelText } = render(<App />);
  await waitForDomChange();
  fireEvent.click(getByTestId("create-booking-button"));
  expect(queryByTestId("create-booking-form")).toBeInTheDocument();
});

it("closes create booking modal upon Escape keydown event", async () => {
  const { getByTestId, queryByTestId, getByLabelText } = render(<App />);
  await waitForDomChange();
  fireEvent.click(getByTestId("create-booking-button"));
  fireEvent.keyDown(getByLabelText("Name"), { key: "Escape" });
  expect(queryByTestId("create-booking-form")).not.toBeInTheDocument();
});

it("should keep create booking submit disabled until input is valid", async () => {
  const { getByTestId, queryByTestId } = render(<App />);
  await waitForDomChange();
  fireEvent.click(getByTestId("create-booking-button"));
  const form = getByTestId("create-booking-form");
  function updateInput(label, value) {
    const field = getByLabelText(form, label);
    fireEvent.focus(field);
    fireEvent.change(field, {
      target: { value }
    });
    fireEvent.blur(field);
  }
  expect(queryByTestId("create-booking-submit")).toBeDisabled();

  const nameInput = getByLabelText(form, "Name");
  fireEvent.focus(nameInput);
  fireEvent.blur(nameInput);
  await waitForDomChange();
  expect(queryByText(form, "Required")).toBeInTheDocument();

  fireEvent.change(getByLabelText(form, "Name"), {
    target: { value: "Jon Stewart" }
  });
  fireEvent.focus(nameInput);
  fireEvent.blur(nameInput);
  await waitForDomChange();

  updateInput("Name", "Jon Stewart");
  updateInput("Email", "jon@daily.show");
  updateInput("Street Address", "5323 Lavender Loop");
  updateInput("City", "Austin");
  updateInput("State", "TX");
  updateInput("Zip code", "78702");
  updateInput("Booking Date", "2019-06-05");
  updateInput("Booking Time", "08:00");
  /* select house keeping type */
  fireEvent.click(getByLabelText(form, "Booking Type"));
  fireEvent.click(queryByText(form, "Housekeeping"));

  await waitForDomChange();
  expect(queryByTestId("create-booking-submit")).not.toBeDisabled();
});
