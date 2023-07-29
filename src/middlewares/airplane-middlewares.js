// technically the repo layer will handle this error as the implementation is already there but
//we can stop the app from reaching till repo and wasting the resources by handling it with the middleware

const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const appError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = "someting went wrong while creating an plane";
    ErrorResponse.error = new appError(
      ["model number not found"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

function validateUpdateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = "someting went wrong while updating an plane";
    ErrorResponse.error = new appError(
      ["model number cannot be empty"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCreateRequest,
  validateUpdateRequest,
};
