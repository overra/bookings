const micro = require("micro");
const db = require("../db");
const createBooking = require("../createBooking");

jest.mock("../db");
jest.mock("micro");

test("creates booking record with valid input", async () => {
  const requestBody = {
    name: "Adam Snodgrass",
    email: "overra@gmail.com",
    address: "123 Main St",
    city: "Austin",
    state: "TX",
    zipcode: "78701",
    type: "HOUSEKEEPING",
    date: 1564707355
  };
  const req = { body: JSON.stringify(requestBody) };
  micro.json.mockResolvedValue(requestBody);

  await createBooking(req, "response");
  expect(micro.json).toHaveBeenCalled();
  expect(db.query).toHaveBeenCalled();
  expect(micro.send).toHaveBeenCalledWith("response", 200);
});

test("responds with 400 error when input is missing", async () => {
  const requestBody = {
    name: "",
    email: null,
    type: "HOUSEKEEPING",
    date: 1564707355
  };
  const req = { body: JSON.stringify(requestBody) };
  micro.json.mockResolvedValue(requestBody);

  await createBooking(req, "response");
  expect(micro.send).toHaveBeenCalledWith(
    "response",
    400,
    "The following inputs must be defined:\n\nname\nemail\naddress\ncity\nstate\nzipcode"
  );
});

test("responds with 400 error when booking type isn't valid", async () => {
  const requestBody = {
    name: "Adam Snodgrass",
    email: "overra@gmail.com",
    address: "123 Main St",
    city: "Austin",
    state: "TX",
    zipcode: "78701",
    type: "CARPET_CLEANING",
    date: 1564707355
  };
  const req = { body: JSON.stringify(requestBody) };
  micro.json.mockResolvedValue(requestBody);

  await createBooking(req, "response");
  expect(micro.send).toHaveBeenCalledWith(
    "response",
    400,
    "Booking type must be HOUSEKEEPING or DOG_WALK"
  );
});

test("responds with 400 error when date format is incorrect", async () => {
  const requestBody = {
    name: "Adam Snodgrass",
    email: "overra@gmail.com",
    address: "123 Main St",
    city: "Austin",
    state: "TX",
    zipcode: "78701",
    type: "HOUSEKEEPING",
    date: "2019/01/01 10:00:00"
  };
  const req = { body: JSON.stringify(requestBody) };
  micro.json.mockResolvedValue(requestBody);

  await createBooking(req, "response");
  expect(micro.send).toHaveBeenCalledWith(
    "response",
    400,
    "Booking date must be in unix timestamp format"
  );
});

test("responds with 500 error when query fails", async () => {
  const requestBody = {
    name: "Adam Snodgrass",
    email: "overra@gmail.com",
    address: "123 Main St",
    city: "Austin",
    state: "TX",
    zipcode: "78701",
    type: "HOUSEKEEPING",
    date: 1564707355
  };
  const req = { body: JSON.stringify(requestBody) };
  micro.json.mockResolvedValue(requestBody);
  db.query.mockRejectedValue(new Error());

  await createBooking(req, "response");
  expect(micro.send).toHaveBeenCalledWith(
    "response",
    500,
    "An error occurred while creating the booking record."
  );
});
