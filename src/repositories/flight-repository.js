const CrudRepository = require("./crud-repository");
const { Flights, Airplane, Airport, City } = require("../models");
const { Sequelize } = require("sequelize");
class FlightRepository extends CrudRepository {
  constructor() {
    super(Flights);
  }

  async getAllFlights(filter, customSort) {
    const response = Flights.findAll({
      where: filter,
      order: customSort,
      include: [
        {
          model: Airplane,
          required: true,
          as: "airplaneDetails",
        },
        {
          model: Airport,
          required: true,
          as: "departureAirport",
          on: {
            col: Sequelize.where(
              Sequelize.col("Flights.departureAirportId"),
              "=",
              Sequelize.col("departureAirport.code")
            ),
          },
          include: [
            {
              model: City,
              required: true,
            },
          ],
        },
        {
          model: Airport,
          required: true,
          as: "arrivalAirport",
          on: {
            col: Sequelize.where(
              Sequelize.col("Flights.arrivalAirportId"),
              "=",
              Sequelize.col("arrivalAirport.code")
            ),
          },
          include: [
            {
              model: City,
              required: true,
            },
          ],
        },
      ],
    });

    return response;
  }

  async updateRemainingSeats(flightId, dec = true, seats) {
    const flight = await Flights.findByPk(flightId);
    if (parseInt(dec)) {
      console.log(seats);
      await flight.decrement("totalSeats", { by: seats });
    } else {
      await flight.increment("totalSeats", { by: seats });
    }

    return flight;
  }
}

module.exports = FlightRepository;
