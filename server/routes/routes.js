const express = require("express");
const router = express.Router();

const {
  addReservation,
  getReservations,
  getReservation,
  updateReservation,
  deleteReservation,
} = require("../handlers/reservationHandler");

// ADD RESERVATION
router.post("/reservations/create", async (req, res) => {
  console.log("req.body", req.body);
  await addReservation(req.body);
  res.send({ status: "true", message: "Created Successfully!" });
});

// GET ALL Reservations
router.get("/reservations", async (req, res) => {
  let reservations = await getReservations();
  res.send(reservations);
});

// GET SPECIFIC Reservations
router.get("/reservations/:id", async (req, res) => {
  let reservations = await getReservation(req.params.id);
  res.send(reservations);
});

//   UPDATE Reservations
router.patch("/reservations/update/:id", async (req, res) => {
  await updateReservation(req.params.id, req.body);
  res.send({ status: "true", message: "Updated Successfully!" });
});

router.delete("/reservations/delete/:id", async (req, res) => {
  await deleteReservation(req.params.id);
  res.send({ status: "true", message: "Deleted Successfully!" });
});

module.exports = router;
