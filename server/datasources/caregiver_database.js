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

    try {

      const selectCaregiver = buildSelect(input)

      const result = await this.context.postgres.query(selectCaregiver)

      return result.rows

    } catch(err) {
      throw err
    }
  }
  async getCaregiverDetails(input) {
    try {
      let user_id = input
      const selectCaregiverDetails = {
        text: `SELECT * FROM seniorcare.caregiver WHERE id = $1`,
        values: [user_id]
      }
      const result = await this.context.postgres.query(selectCaregiverDetails)
      return result.rows[0]
    } catch (e) {
      throw e
    }
  }
  async getCaregiverProfile(input) {
    try {
      let user_id = input.id
      const selectCaregiverProfile = {
        text: `SELECT * FROM seniorcare.caregiver WHERE id = $1`,
        values: [user_id]
      }
      const result = await this.context.postgres.query(selectCaregiverProfile)
      
      return result.rows[0]
    } catch (e) {
      throw e
    }
  }

}

module.exports = CaregiverDatabase

