const express = require("express");
const { infoController } = require("../../controllers");
const airplaneRouter = require("./airplane-routes");

const router = express.Router();

router.use("/airplanes", airplaneRouter);

router.get("/info", infoController.info);

module.exports = router;
