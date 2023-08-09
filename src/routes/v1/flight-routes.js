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

// api/v1/flights?trips=MUM-DEL  Post
router.get("/", flightController.getAllFlights);

module.exports = router;
