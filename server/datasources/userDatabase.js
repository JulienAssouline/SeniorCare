const { DataSource } = require('apollo-datasource')

const bcrypt = require('bcrypt')
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

  async signup(input, req, app) {
    
    let fullname = input.fullname.toLowerCase();
    let email =  input.email.toLowerCase();
    let hashedpassword = await bcrypt.hash(input.password, saltRounds)

    const newUserInsert ={
      text: "INSERT INTO bazaar.users( fullname,email,password ) VALUES ($1, $2, $3) RETURNING *",
      values: [fullname, email, hashedpassword]
    }

    try {

    await this.context.postgres.query(newUserInsert)

    let myjwttoken = await jwt.sign({
      data: insertResult.rows[0],
      exp: Math.floor(Date.now()/ 1000) + (60* 60),
  }, 'secret');
    
    } catch(err) {
      throw err
    }
  }
}

module.exports = UserDatabase