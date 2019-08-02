import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, waitForDomChange, fireEvent } from "@testing-library/react";
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

it("renders without crashing", async () => {
  const {
    debug,
    getByTestId,
    queryByTestId,
    getByLabelText,
    getByText
  } = render(<App />);
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

  /* check that clicking the "Create Booking" button opens the modal */
  fireEvent.click(getByTestId("create-booking-button"));
  expect(queryByTestId("create-booking-form")).toBeInTheDocument();

  /* check that the "Create booking" form button is disabled */
  expect(queryByTestId("create-booking-submit")).toBeDisabled();

  /* check that pressing Escape closes the create booking modal */
  fireEvent.keyDown(getByLabelText("Name"), { key: "Escape" });
  expect(queryByTestId("create-booking-form")).not.toBeInTheDocument();
});
