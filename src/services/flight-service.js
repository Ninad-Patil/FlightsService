const { FlightRepository } = require("../repositories");
const appError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");
const { Op } = require("sequelize");
const flightRepository = new FlightRepository();

async function createFlight(data) {
  try {
    const flight = await flightRepository.create(data);
    return flight;
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      let explaination = [];
      error.errors.forEach((err) => {
        explaination.push(err.message);
      });
      throw new appError(explaination, StatusCodes.BAD_REQUEST);
    }
    throw new appError(
      "cannot create a new flight obj",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAllFlights(query) {
  let customParams = {};
  let customSort = [];
  if (query.trip) {
    const [departureAirportId, arrivalAirportId] = query.trip.split("-");
    customParams.departureAirportId = departureAirportId;
    customParams.arrivalAirportId = arrivalAirportId;
  }

  if (query.price) {
    [minPrice, maxPrice] = query.price.split("-");
    customParams.price = {
      [Op.between]: [minPrice, maxPrice],
    };
  }

  if (query.travellers) {
    customParams.totalSeats = {
      [Op.gte]: query.travellers,
    };
  }

  if (query.sort) {
    let Params = query.sort.split(",");
    customSort = Params.map((param) => {
      return param.split("_");
    });
    console.log(customSort);
  }

  try {
    const flights = await flightRepository.getAllFlights(
      customParams,
      customSort
    );
    return flights;
  } catch (error) {
    throw new appError(
      "cannot get the plane data ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createFlight,
  getAllFlights,
};
