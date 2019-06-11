const { DataSource } = require('apollo-datasource')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 12
const crypto = require('crypto')
const Promise = require('bluebird')
const authenticate = require('../utils/DSHelperFunctions/authenticate')

const { createSelectQuery } = require('../utils/DSHelperFunctions/makeQueries')

class Database extends DataSource {
	constructor() {
		super()
	}

	initialize(config) {
		this.context = config.context
	}

	async queryPlaceholder(input) {
		try {
			console.log(input)

			const id = 1

			const selectColumns = [
				'id'
			]
			const testQuery = createSelectQuery(selectColumns, 'seniorcare.key_contact', 'id', id)
			const testQueryResult = await this.context.postgres.query(testQuery)

			console.log(testQueryResult.rows)

			return { id: input }
		} catch(err) {
			throw err
		}
	}

	async mutationPlaceholder(input) {
		try {
			return { id: input }
		} catch(err) {
			throw err
		}
	}
}

module.exports = Database