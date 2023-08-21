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
    await queryInterface.bulkInsert("Airports", [
      {
        name: "IGI Airport",
        cityId: "3",
        code: "DEL",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "CST Airport",
        cityId: "1",
        code: "MUM",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kampegoda Airport",
        cityId: "2",
        code: "BLR",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Airports", null, {});
  },
};
