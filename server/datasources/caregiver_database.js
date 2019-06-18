const { DataSource } = require('apollo-datasource')
const authenticate = require('../utils/DSHelperFunctions/authenticate')
const buildSelect = require('../utils/DSHelperFunctions/buildSelect')



class CaregiverDatabase extends DataSource {
  constructor() {
    super()
  }

  initialize(config) {
    this.context = config.context
  }

  async queryCaregiver(input) {

   let gender = input.activeGender
   let availability = input.availability

    try {
      const selectCaregiver = buildSelect(input)

      const result = await this.context.postgres.query(selectCaregiver)

      return result.rows

    } catch(err) {
      throw err
    }
  }

}

module.exports = CaregiverDatabase

