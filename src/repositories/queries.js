function addRowLockOnFlights(flightId) {
  return `select * from Flights WHERE Flights.id = ${flightId} FOR UPDATE;`;
}

module.exports = { addRowLockOnFlights };
