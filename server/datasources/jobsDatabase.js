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
   
      const ArchiveJob = {
        text: "SELECT * FROM seniorcare.job_posting",
      }
      const result = await this.context.postgres.query(ArchiveJob)

      return result.rows

    } catch(err) {
      throw err
    }
  }

  async deleteit(input){
  
    try{
      const removeJob ={
        text: "DELETE FROM seniorcare.job_posting WHERE ID = $1",
        values : [input.id]
      }
      const result = await this.context.postgres.query(removeJob)

      return input.id

    }catch(err){
      throw err
    }
  }

  async duplicateRepost(input){
    try{

      const getJob = {
       
        text: `SELECT key_contact_id, title, start_date, end_date, address, city, province, postal_code, availability, hourly_rate, gender_pref, req_drivers_license, cig_smoking, pets, cannabis
        FROM seniorcare.job_posting WHERE id=$1`,
        values : [input.id]
 
      }
      
       const result = await this.context.postgres.query(getJob)
     

      const newJob = {
        ...result.rows[0]
      }
       
    
      const addNewJob = {
        text:`INSERT INTO seniorcare.job_posting(title, start_date, key_contact_id, end_date, hourly_rate ) VALUES($1, $2, $3, $4, $5) RETURNING *`,
        values:[ newJob.title, newJob.start_date, newJob.key_contact_id, newJob.end_date, newJob.hourly_rate  ]
      }

       
      const answer = await this.context.postgres.query(addNewJob)
     

      return answer.rows[0]    
    }

    catch(err){
   
      throw err
    }
  }
}

module.exports = JobsDatabase


