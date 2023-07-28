const express = require("express");
const { airplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");
const router = express.Router();

// api/v1/airplanes/  Post
router.post(
  "/",
  AirplaneMiddlewares.validateCreateRequest,
  airplaneController.createAirplane
);

// api/v1/airplanes/   Get
router.get("/", airplaneController.getAirplanes);

// api/v1/airplanes/:id  Get
router.get("/:id", airplaneController.getAirplane);

// api/v1/airplanes/:id  DELETE
router.delete("/:id", airplaneController.destroyAirplane);
module.exports = router;
