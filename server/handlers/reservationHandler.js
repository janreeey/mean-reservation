const Reservation = require("../db/reservationCollection");

// ADD ReservationS
const addReservation = async (reservationModel) => {
  let reservation = new Reservation({
    ...reservationModel,
  });

  await reservation.save();
  return reservation.toObject();
};

// GET ReservationS
const getReservations = async () => {
  const reservations = await Reservation.find();

  return reservations.map((x) => x.toObject());
};

// GET SPECIFIC Reservation
const getReservation = async (id) => {
  const reservation = await Reservation.findById(id);

  return reservation.toObject();
};

// UPDATE ReservationS
const updateReservation = async (id, reservationModel) => {
  const filter = { _id: id };
  await Reservation.findOneAndUpdate(filter, reservationModel);
};

// DELETE ReservationS
const deleteReservation = async (id) => {
  const filter = { _id: id };
  await Reservation.findOneAndDelete(filter);
};

module.exports = {
  addReservation,
  getReservations,
  getReservation,
  updateReservation,
  deleteReservation,
};
