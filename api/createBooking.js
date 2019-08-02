const { json, send } = require("micro");
const { query } = require("./db");
const { BOOKING_TYPES, MalformedInputError } = require("./common");

module.exports = async (req, res) => {
  try {
    const booking = await json(req);
    await createBooking(booking);
    send(res, 200);
  } catch (err) {
    if (err.name === "MalformedInput") {
      return send(res, 400, err.message);
    }
    /* report to error logging service instead of console.error(err); */
    send(res, 500, "An error occurred while creating the booking record.");
  }
};

function createBooking({
  name,
  email,
  address,
  city,
  state,
  zipcode,
  type,
  date
}) {
  const booking = { name, email, address, city, state, zipcode, type };
  booking.date = +date;

  validateInput(booking);

  return query(
    `
      INSERT INTO booking 
        (
          email, 
          name, 
          address, 
          city, 
          state, 
          zipcode, 
          type, 
          date
        ) 
      VALUES
        (
          :email, 
          :name, 
          :address, 
          :city, 
          :state, 
          :zipcode, 
          :type, 
          FROM_UNIXTIME(:date)
        )
    `,
    booking
  );
}

function validateInput(input) {
  const falseyInputValues = Object.entries(input)
    .filter(([, value]) => value === "" || value === void 0 || value === null)
    .map(([key]) => key);

  if (falseyInputValues.length > 0) {
    throw new MalformedInputError(
      `The following inputs must be defined:\n\n${falseyInputValues.join("\n")}`
    );
  }
  if (!BOOKING_TYPES.includes(input.type)) {
    throw new MalformedInputError(
      "Booking type must be HOUSEKEEPING or DOG_WALK"
    );
  }
  if (isNaN(input.date)) {
    throw new MalformedInputError(
      "Booking date must be in unix timestamp format"
    );
  }
}
