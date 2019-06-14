const { DataSource } = require('apollo-datasource')

const authenticate = require('../utils/DSHelperFunctions/authenticate')

class KeyContactDatabase extends DataSource {
  constructor() {
    super()
  }

  initialize(config) {
    this.context = config.context
  }

  async getKeyContactProfile(input) {
    try {
      let user_id = input.id
      // !input.user_id ? user_id = authenticate(app, req) : user_id = input.user_id
      const selectKeyContactProfile = {
        text: `SELECT * FROM seniorcare.key_contact WHERE id = $1`,
        values: [user_id]
      }
      const result = await this.context.postgres.query(selectKeyContactProfile)

      return result.rows[0]
    } catch (e) {
      throw e
    }
  }

}

module.exports = KeyContactDatabase

const queryResolvers = require('./resolvers/query/queryResolvers')
const userResolvers = require('./resolvers/query/userResolvers')
const bookedLaunchesResolvers = require('./resolvers/query/bookedLaunchesResolvers')
const mutationResolvers = require('./resolvers/mutation/mutationResolvers')


module.exports = () => {
  return {
    ...queryResolvers,
    ...mutationResolvers,
    ...userResolvers,
    ...bookedLaunchesResolvers,
  }
}
Collapse




1:29 PM
Untitled 
const authenticate = require('../authenticate')

const { createSelectQuery } = require('../../utils')

module.exports = {
  User: {
    async bookedLaunches(parent, input, { req, app, postgres }){
      try {
        const user_id = authenticate(app, req)

        const selectColumns = [
          'id',
          'user_id',
          'flight_number',
          'status',
          'date_added',
        ]

        const bookedLaunchesQuery = createSelectQuery(selectColumns, 'self_space_explorer.trip_booking', 'user_id', user_id)
        const bookedLaunchesQueryResult = await postgres.query(bookedLaunchesQuery)

        const bookedLaunchesArray = bookedLaunchesQueryResult.rows.map(launchRow => {
          const {id, flight_number, status, date_added} = launchRow
          return {
            id,
            flight_number,
            status,
            date_added
          }
        })

        return bookedLaunchesArray
      }catch(err){
        throw err
      }
    },
  },
}