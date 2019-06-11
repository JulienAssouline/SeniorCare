const { DataSource } = require('apollo-datasource')
const authenticate = require('../utils/DSHelperFunctions/authenticate')


class CaregiverDatabase extends DataSource {
  constructor() {
    super()
  }

  initialize(config) {
    this.context = config.context
  }

  async getCaregiver(input) {

    // this.context.postgres

    try {
      return
    } catch(err) {
      throw err
    }
  }

}

module.exports = CaregiverDatabase

