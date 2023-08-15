const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const appError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if (!req.body.flightNumber) {
    ErrorResponse.message = "someting went wrong while creating a flight";
    ErrorResponse.error = new appError(
      ["flightNumber not found"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.airplaneId) {
    ErrorResponse.message = "someting went wrong while creating an flight";
    ErrorResponse.error = new appError(
      ["airplaneId not found"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.departureAirportId) {
    ErrorResponse.message = "someting went wrong while creating an flight";
    ErrorResponse.error = new appError(
      ["departureAirportId not found"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

function validateUpdateSeatsRequest(req, res, next) {
  if (!req.body.seats) {
    ErrorResponse.message = "someting went wrong while creating an flight";
    ErrorResponse.error = new appError(
      ["seats not found"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCreateRequest,
  validateUpdateSeatsRequest,
};
