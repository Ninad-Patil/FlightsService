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

module.exports = { validateCreateRequest };
