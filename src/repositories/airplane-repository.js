const CrudRepository = require("./crud-repository");
const { Airplane } = require("../models");

class AireplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }
}

module.exports = AireplaneRepository;
