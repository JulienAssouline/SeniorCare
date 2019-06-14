const { DataSource } = require('apollo-datasource')
const authenticate = require('../utils/DSHelperFunctions/authenticate')


class CaregiverDatabase extends DataSource {
  constructor() {
    super()
  }

  initialize(config) {
    this.context = config.context
  }

  async queryCaregiver(input) {

    try {
    // this.context.postgres
      const selectCaregiver = {
        text: "SELECT * FROM seniorcare.caregiver WHERE key_contact_id = $1	",
        input:[ key_contact ]
      }

      const result = await this.context.postgres.query(selectCaregiver)

      return result.rows

    } catch(err) {
      throw err
    }
  }

}

module.exports = CaregiverDatabase

