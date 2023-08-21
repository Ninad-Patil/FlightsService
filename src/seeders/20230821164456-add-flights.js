"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Flights",
      [
        {
          flightNumber: "vistara111",
          airplaneId: "1",
          departureAirportId: "DEL",
          arrivalAirportId: "BLR",
          arrivalTime: "2023-08-21 16:40:42",
          departureTime: "2023-08-21 14:40:42",
          price: "2000",
          totalSeats: "1000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          flightNumber: "vistara111",
          airplaneId: "1",
          departureAirportId: "BLR",
          arrivalAirportId: "DEL",
          arrivalTime: "2023-08-21 12:40:42",
          departureTime: "2023-08-21 10:40:42",
          price: "2000",
          totalSeats: "1000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          flightNumber: "vistara111",
          airplaneId: "1",
          departureAirportId: "MUM",
          arrivalAirportId: "DEL",
          arrivalTime: "2023-08-21 18:40:42",
          departureTime: "2023-08-21 17:40:42",
          price: "2000",
          totalSeats: "1000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          flightNumber: "vistara111",
          airplaneId: "1",
          departureAirportId: "DEL",
          arrivalAirportId: "MUM",
          arrivalTime: "2023-08-21 19:40:42",
          departureTime: "2023-08-21 18:40:42",
          price: "2000",
          totalSeats: "1000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Flights", null, {});
  },
};
