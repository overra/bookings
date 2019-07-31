module.exports.BOOKING_TYPES = ["HOUSEKEEPING", "DOG_WALK"];
module.exports.MalformedInputError = class MalformedInputError extends Error {
  constructor(message) {
    super(message);
    this.name = "MalformedInput";
  }
};
