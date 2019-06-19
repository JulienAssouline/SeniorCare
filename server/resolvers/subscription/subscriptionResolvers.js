const pubsub = require("../../utils/subscriptions/pubsub")
const { withFilter } = require("graphql-subscriptions")

module.exports = {
  Subscription: {
    messageAdded: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(["messageAdded"]),
          (payload, variables) => {
            return payload.messageAdded.conversation_id == variables.conversation_id
          }
        )
    }
  }
}