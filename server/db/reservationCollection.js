const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
  fullname: String,
  email: String,
  address: String,
  date: String,
});

const Reservation = mongoose.model("mean-reservation", reservationSchema);

module.exports = Reservation;
