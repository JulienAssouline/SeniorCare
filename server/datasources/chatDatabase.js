const { DataSource } = require('apollo-datasource')
const pubsub = require('../utils/subscriptions/pubsub')

class Database extends DataSource {
	constructor() {
		super()
	}

	initialize(config) {
		this.context = config.context
	}
}

module.exports = Database