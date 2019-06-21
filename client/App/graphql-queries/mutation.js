import gql from 'graphql-tag'


export const ADD_CONVERSATION_MUTATION = gql`
  mutation addConversationMutation($caregiver_id: ID, $key_contact_id: ID) {
    addConversation(caregiver_id: $caregiver_id, key_contact_id: $key_contact_id) {
      id
    }
  }
`

export const ADD_MESSAGES = gql`
mutation addMessageMutation($content: String, $conversation_id: ID, $from_user: ID){
  addMessages(content: $content, conversation_id: $conversation_id, from_user: $from_user) {
    message
  }
}
`
