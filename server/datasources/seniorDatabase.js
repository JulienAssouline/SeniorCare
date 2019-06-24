const { DataSource } = require('apollo-datasource')
const authenticate = require('../utils/DSHelperFunctions/authenticate')

const { createInsertQuery } = require('../utils/DSHelperFunctions/makeQueries')

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

      const selectSeniors = {
        text: "SELECT * FROM seniorcare.senior WHERE key_contact_id = $1",
        values: [key_contact_id]
      }

      const result = await this.context.postgres.query(selectSeniors)
      return result.rows
    } catch(err) {
      throw err
    }
  }

  async getSenior(input) {
    try {
      let user_id = input
      // !input.user_id ? user_id = authenticate(app, req) : user_id = input.user_id
      const selectSenior = {
        text: `SELECT * FROM seniorcare.senior WHERE id = $1`,
        values: [user_id]
      }
      const result = await this.context.postgres.query(selectSenior)
      return result.rows[0]
    } catch (e) {
      throw e
    }
  }

	async addSenior(input) {
		try {
			const insertSeniorObject = {
				...input.seniorDetails,
				key_contact_id: input.key_contact_id,
			}
			const insertSeniorQuery = createInsertQuery(insertSeniorObject, 'seniorcare.senior')
			await this.context.postgres.query(insertSeniorQuery)
		} catch(err) {
			throw err
		}
	}
}

module.exports = SeniorDatabase

  

