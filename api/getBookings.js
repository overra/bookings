const { send } = require("micro");
const { query } = require("./db");
const { BOOKING_TYPES, MalformedInputError } = require("./common");

module.exports = async (req, res) => {
  try {
    const bookings = await getBookings(req.query);
    res.send(bookings);
  } catch (err) {
    if (err.name === "MalformedInput") {
      return send(res, 400, err.message);
    }
    console.error(err);
    send(res, 500, "An error occurred while fetching booking records.");
  }
};

async function getBookings({ offset = 0, limit = 20, type = "" }) {
  let input = {
    // cast string inputs to number
    limit: +limit,
    offset: +offset
  };

  if (type) {
    input.type = type;
  }

  validateInput(input);

  const condition = input.type ? "WHERE type = :type" : "";
  const [total] = await query(
    `SELECT COUNT(*) FROM booking ${condition}`,
    input
  );
  const [rows] = await query(
    `
    SELECT * FROM booking
    ${condition}
    ORDER BY date ASC
    LIMIT :limit OFFSET :offset 
    `,
    input
  );

  return { total: total[0]["COUNT(*)"], rows };
}

function validateInput(input) {
  if (isNaN(input.limit) || isNaN(input.offset)) {
    throw new MalformedInputError("Limit and offset must be a number");
  }
  if (input.type && !BOOKING_TYPES.includes(input.type)) {
    throw new MalformedInputError(
      "Booking type must be HOUSEKEEPING or DOG_WALK"
    );
  }
}
