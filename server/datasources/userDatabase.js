const { DataSource } = require('apollo-datasource')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const saltRounds = 12
const crypto = require('crypto')
const Promise = require('bluebird')
const authenticate = require('../utils/DSHelperFunctions/authenticate')

class UserDatabase extends DataSource {
	constructor() {
		super()
	}

	initialize(config) {
		this.context = config.context
	}

  async mutationSignUp(input) {
    console.log( 'helloooo',input)
    let fullname = input.fullname.toLowerCase();
    let email = input.email.toLowerCase();
    let phonenumber = input.phonenumber;
    let location = input.location;
    // console.log('wa email', email)
    let hashedpassword = await bcrypt.hash(input.password, saltRounds)
      console.log('hashedpassword',hashedpassword)
      
      const newUserInsert ={
        text: "INSERT INTO seniorcare.key_contact( fullname,email,phone_number,location,password ) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        values: [fullname, email, phonenumber, location, hashedpassword]
      }
  
      try {
  
      let answer = await this.context.postgres.query(newUserInsert)
        console.log('my answer!!!!!!!! ',answer)
    //   let myjwttoken = await jwt.sign({
    //     data: insertResult.rows[0],
    //     exp: Math.floor(Date.now()/ 1000) + (60* 60),
    // }, 'secret');
  
    return "hello"
      
      } catch(err) {
        return err
      }
  }
}

module.exports = UserDatabase