const { DataSource } = require('apollo-datasource')
const authenticate = require('../utils/DSHelperFunctions/authenticate')


class JobsDatabase extends DataSource {
  constructor() {
    super()
  }

  initialize(config) {
    this.context = config.context
  }

  async queryArchiveJobs(input) {

    try {
    // this.context.postgres
      const ArchiveJob = {
        text: "SELECT * FROM seniorcare.job_posting",
      }
      const result = await this.context.postgres.query(ArchiveJob)

      return result.rows

    } catch(err) {
      throw err
    }
  }

}

module.exports = JobsDatabase