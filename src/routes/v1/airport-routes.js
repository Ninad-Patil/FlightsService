const express = require("express");
const { airportController } = require("../../controllers");
const { AirportMiddlewares } = require("../../middlewares");
const router = express.Router();

// api/v1/airplanes/  Post
router.post(
  "/",
  AirportMiddlewares.validateCreateRequest,
  airportController.createAirport
);

// api/v1/airplanes/   Get
router.get("/", airportController.getAirports);

// api/v1/airplanes/:id  Get
router.get("/:id", airportController.getAirport);

// api/v1/airplanes/:id  DELETE
router.delete("/:id", airportController.destroyAirport);

module.exports = router;
