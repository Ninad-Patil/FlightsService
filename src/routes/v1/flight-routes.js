const express = require("express");
const { flightController } = require("../../controllers");
const { FlightMiddlewares } = require("../../middlewares");
const router = express.Router();

// api/v1/flights/  Post
router.post(
  "/",
  FlightMiddlewares.validateCreateRequest,
  flightController.createFlight
);

// api/v1/flights?trips=MUM-DEL  GET
router.get("/", flightController.getAllFlights);

// api/v1/flights?trips=MUM-DEL  GET
router.get("/:id", flightController.getFlight);

// api/v1/flights/:id/seats  PATCH
router.patch(
  "/:id/seats",
  FlightMiddlewares.validateUpdateSeatsRequest,
  flightController.updateSeats
);

module.exports = router;
