const { DataSource } = require('apollo-datasource')
const authenticate = require('../utils/DSHelperFunctions/authenticate')


class SeniorDatabase extends DataSource {
  constructor() {
    super()
  }

  initialize(config) {
    this.context = config.context
  }

  async getSeniors(input) {

    try {
      const { id: key_contact_id } = input 

      const selectSenior = {
        text: "SELECT * FROM seniorcare.senior WHERE key_contact_id = $1",
        values: [key_contact_id]
      }

      const result = await this.context.postgres.query(selectSenior)
      return result.rows
    } catch(err) {
      throw err
    }
  }

}

module.exports = SeniorDatabase

