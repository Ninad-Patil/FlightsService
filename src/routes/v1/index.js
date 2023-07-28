const express = require("express");

const airplaneRouter = require("./airplane-routes");

const router = express.Router();

router.use("/airplanes", airplaneRouter);

module.exports = router;
