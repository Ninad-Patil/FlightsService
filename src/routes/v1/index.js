const express = require("express");

const airplaneRouter = require("./airplane-routes");
const cityRouter = require("./city-routes");
const router = express.Router();

router.use("/airplanes", airplaneRouter);
router.use("/cities", cityRouter);
module.exports = router;
