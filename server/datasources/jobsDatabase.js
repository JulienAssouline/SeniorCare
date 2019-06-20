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

  async deleteit(input){
    console.log('whats is it',input.id)
    try{
      const removeJob ={
        text: "DELETE FROM seniorcare.job_posting WHERE ID = $1",
        values : [input.id]
      }
      const result = await this.context.postgres.query(removeJob)

      console.log('ehllllo', result.rows)
      return input.id

    }catch(err){
      throw err
    }
  }

  async duplicateRepost(input){
    console.log('query area',input.id)
    try{

      const getJob = {
       
        text: `SELECT key_contact_id, title, start_date, end_date, address, city, province, postal_code, availability, hourly_rate, gender_pref, req_drivers_license, cig_smoking, pets, cannabis
        FROM seniorcare.job_posting WHERE id=$1`,
        values : [input.id]
 
      }
      
       const result = await this.context.postgres.query(getJob)
       console.log('duplicateJob', result.rows[0])

      console.log('date_created:', result.rows[0].date_created)
      const newJob = {
        ...result.rows[0]
      }
       
      //  return result.rows

      const addNewJob = {
        text:`INSERT INTO seniorcare.job_posting(title, start_date, key_contact_id, end_date, hourly_rate ) VALUES($1, $2, $3, $4, $5) RETURNING *`,
        values:[ newJob.title, newJob.start_date, newJob.key_contact_id, newJob.end_date, newJob.hourly_rate  ]
      }

      // const text = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *'
      // const values = ['brianc', 'brian.m.carlson@gmail.com']

      //  const insertJob ={
      //   text: `INSERT INTO seniorcare.job_posting(  
      //     ${result.rows[0].key_contact_id}, ${result.rows[0].date_created}, ${result.rows[0].title}, ${result.rows[0].start_date}, ${result.rows[0].end_date}, ${result.rows[0].address}, ${result.rows[0].city},${result.rows[0].province}, ${result.rows[0].postal_code}, ${result.rows[0].availability}, ${result.rows[0].hourly_rate}, ${result.rows[0].gender_pref}, ${result.rows[0].req_drivers_license}, ${result.rows[0].cig_smoking}, ${result.rows[0].pets}, ${result.rows[0].cannabis})`
      //   }
       
      const answer = await this.context.postgres.query(addNewJob)
      console.log('duplicateJob', answer)

      return answer.rows[0]    
    }

    catch(err){
      console.log('my error',err)
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