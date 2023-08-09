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

function validateUpdateRequest(req, res, next) {
  if (!req.body.arrivalAirportId) {
    ErrorResponse.message = "someting went wrong while updating an flight";
    ErrorResponse.error = new appError(
      ["arrivalAirportId not found"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

function validateUpdateRequest(req, res, next) {
  if (!req.body.arrivalTime) {
    ErrorResponse.message = "someting went wrong while updating an flight";
    ErrorResponse.error = new appError(
      ["arrivalTime not found"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}
function validateUpdateRequest(req, res, next) {
  if (!req.body.departureTime) {
    ErrorResponse.message = "someting went wrong while updating an flight";
    ErrorResponse.error = new appError(
      ["departureTime not found"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}
function validateUpdateRequest(req, res, next) {
  if (!req.body.price) {
    ErrorResponse.message = "someting went wrong while updating an flight";
    ErrorResponse.error = new appError(
      ["price not found"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}
function validateUpdateRequest(req, res, next) {
  if (!req.body.totalSeats) {
    ErrorResponse.message = "someting went wrong while updating an flight";
    ErrorResponse.error = new appError(
      ["totalSeats not found"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCreateRequest,
};
