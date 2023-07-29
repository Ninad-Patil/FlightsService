const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { successResponse, ErrorResponse } = require("../utils/common");

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    successResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAirplanes(req, res) {
  try {
    const airplane = await AirplaneService.getAirplanes();
    successResponse.data = airplane;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAirplane(req, res) {
  try {
    const airplane = await AirplaneService.getAirplane(req.params.id);
    successResponse.data = airplane;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}

async function destroyAirplane(req, res) {
  try {
    const airplane = await AirplaneService.destroyAirplane(req.params.id);
    successResponse.data = airplane;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}

async function updateAirplane(req, res) {
  try {
    const airplane = await AirplaneService.updateAirplane(req.params.id, {
      capacity: req.body.capacity,
    });
    successResponse.data = airplane;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
  updateAirplane,
};
