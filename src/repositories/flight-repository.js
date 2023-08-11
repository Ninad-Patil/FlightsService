const CrudRepository = require("./crud-repository");
const { Flights } = require("../models");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flights);
  }

  async getAllFlights(filter, customSort) {
    const response = Flights.findAll({
      where: filter,
      order: customSort,
    });
    return response;
  }
}

module.exports = FlightRepository;
