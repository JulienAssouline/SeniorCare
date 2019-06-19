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

  async deleteJob(input){
    console.log('whats is it',input.id)
    try{
      const removeJob ={
        text: "DELETE FROM seniorcare.job_posting WHERE ID = $1",
        values : [input.id]
      }
      const result = await this.context.postgres.query(removeJob)

      console.log('ehllllo', result.rows)
      return result

    }catch(err){
      throw err
    }
  }

  async duplicateRepost(input){
console.log('query area',input)
    try{
      const getJob = {
        text: `INSERT INTO seniorcare.job_posting(  
        key_contact_id, date_created, title, start_date, end_date, address, city,province, postal_code, availability, hourly_rate, gender_pref, req_drivers_license, cig_smoking, pets, cannabis )
        
       SELECT key_contact_id, date_created, title, start_date, end_date, address, city, province, postal_code, availability, hourly_rate, gender_pref, req_drivers_license, cig_smoking, pets, cannabis
       FROM seniorcare.job_posting WHERE id=$1 RETURNING  *; `,
        values : [input.id]
      }
      const result = await this.context.postgres.query(getJob)
      console.log('duplicateJob', result)
      return result.rows
      
    }

    catch(err){
      throw err
    }
  }

}




module.exports = JobsDatabase


/*
- someone clicks duplicate and repost
- send id of post to backend
- look up info of job post id
- insert new row in the table with the info


*/