const { DataSource } = require('apollo-datasource')
const pubsub = require('../utils/subscriptions/pubsub')

class Database extends DataSource {
	constructor() {
		super()
	}

	initialize(config) {
		this.context = config.context
	}

  async mutationAddMessage(input){
    console.log(input)
         // const from_user = authenticate(app, req)
         const from_user = 1

          const content = input.content
          const conversation_id = input.conversation_id

          const newMessages = {
            text: `INSERT INTO seniorcare.messages (content, conversation_id, from_user) VALUES ($1, $2, $3) RETURNING *`,
            values: [content, conversation_id, from_user]
          }

          const result = await this.context.postgres.query(newMessages)

          // let from_user_id = result.rows[0].from_user

          //   const checkUserFullName = {
          //     text: "SELECT fullname FROM seniorcare.users WHERE seniorcare.users.id = $1",
          //     values: [from_user_id]
          //   }

          // const user_fullname_result = await postgres.query(checkUserFullName)

          // result.rows[0].fullname = user_fullname_result.rows[0].fullname

          pubsub.publish("messageAdded", {messageAdded: result.rows[0]})

          return {
            message: "Yes"
          }

  }
}

module.exports = Database