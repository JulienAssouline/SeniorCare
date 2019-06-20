const { DataSource } = require('apollo-datasource')
const pubsub = require('../utils/subscriptions/pubsub')

class ConversationDatabase extends DataSource {
  constructor() {
    super()
  }

  initialize(config) {
    this.context = config.context
  }

  async mutationAddConversation(input){

    const key_contact_id = 1
    const caregiver_id = input.caregiver_id

    const start_convo = [key_contact_id, caregiver_id]
    const receive_convo = [key_contact_id, caregiver_id]

    const checkConversation = {
        text: "SELECT * FROM seniorcare.conversations WHERE seniorcare.conversations.key_contact_id = ANY($1) AND seniorcare.conversations.caregiver_id = ANY($2)",
        values: [start_convo, receive_convo]
      }

    const results = await this.context.postgres.query(checkConversation)

    // check if conversation exists. If it does return conversation id, if not then create a conversation
          if(results.rows.length > 0) {
            console.log("old convo")
            const conversation_id = results.rows[0].id
            return {
              id: conversation_id
            }
          }
          else {

            console.log("new convo")

            const newConversation = {
              text: 'INSERT INTO seniorcare.conversations (key_contact_id, caregiver_id) VALUES ($1, $2) RETURNING *',
              values: [key_contact_id, caregiver_id],
            }

            const result = await this.context.postgres.query(newConversation)

            const new_conversation_id = result.rows[0].id

            return {
              id: new_conversation_id
            }
          }
  }
  async queryGetConversation(input) {

    let myConversation = input.id;

    const conversation = {
      text: "SELECT * FROM seniorcare.conversations WHERE id = $1",
      values: [myConversation]
    };

    const result = await this.context.postgres.query(conversation);

    return result.rows[0]
  }
  async queryGetConversations(){
    const user_id = 1

    const conversations = {
      text: "SELECT * FROM seniorcare.conversations WHERE caregiver_id = $1 OR key_contact_id = $1",
      values: [user_id]
    };
    const result = await this.context.postgres.query(conversations);

    return result.rows
  }
}

module.exports = ConversationDatabase