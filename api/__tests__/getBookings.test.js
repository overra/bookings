const micro = require("micro");
const db = require("../db");
const getBookings = require("../getBookings");

jest.mock("../db");
jest.mock("micro");

afterEach(() => {
  db.query.mockReset();
  micro.send.mockReset();
});

test("returns a list of bookings", async () => {
  let query = { limit: "5", offset: "0", type: "" };
  let input = { limit: 5, offset: 0 };

  db.query.mockResolvedValue([[{ "COUNT(*)": 3 }]]);

  await getBookings({ query }, "response");
  expect(db.query).toHaveBeenNthCalledWith(
    1,
    "SELECT COUNT(*) FROM booking ",
    input
  );
  expect(db.query).toHaveBeenNthCalledWith(
    2,
    `
    SELECT * FROM booking
    
    ORDER BY date ASC
    LIMIT :limit OFFSET :offset 
    `,
    input
  );
});

test("returns a list of bookings with type filter", async () => {
  let query = { limit: "5", offset: "0", type: "HOUSEKEEPING" };
  let input = { limit: 5, offset: 0, type: "HOUSEKEEPING" };

  db.query.mockResolvedValue([[{ "COUNT(*)": 3 }]]);

  await getBookings({ query }, "response");
  expect(db.query).toHaveBeenNthCalledWith(
    1,
    "SELECT COUNT(*) FROM booking WHERE type = :type",
    input
  );

  expect(db.query).toHaveBeenNthCalledWith(
    2,
    `
    SELECT * FROM booking
    WHERE type = :type
    ORDER BY date ASC
    LIMIT :limit OFFSET :offset 
    `,
    input
  );
  expect(micro.send).toHaveBeenCalledWith("response", 200, {
    total: 3,
    rows: [{ "COUNT(*)": 3 }]
  });
});

test("responds with 400 error when limit or offset are invalid", async () => {
  let query = { limit: 5, offset: "zero", type: "HOUSEKEEPING" };
  let error = "Limit and offset must be a number";

  await getBookings({ query }, "response");
  expect(micro.send).toHaveBeenCalledWith("response", 400, error);

  query = { ...query, limit: "five", offset: 0 };
  await getBookings({ query }, "response");
  expect(micro.send).toHaveBeenCalledWith("response", 400, error);
});

test("responds with 400 error when booking type is invalid", async () => {
  let query = { limit: 5, offset: 0, type: "CARPET_CLEANING" };
  let error = "Booking type must be HOUSEKEEPING or DOG_WALK";

  await getBookings({ query }, "response");
  expect(micro.send).toHaveBeenCalledWith("response", 400, error);
});
