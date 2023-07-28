const { AirplaneRepository } = require("../repositories");
const appError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");
console.log(AirplaneRepository);
const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      let explaination = [];
      error.errors.forEach((err) => {
        explaination.push(err.message);
      });
      throw new appError(explaination, StatusCodes.BAD_REQUEST);
    }
    throw new appError(
      "cannot create a new airplane obj",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane,
};
