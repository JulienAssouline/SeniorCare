import gql from 'graphql-tag'


export const ADD_CONVERSATION_MUTATION = gql`
  mutation addConversationMutation($caregiver_id: ID) {
    addConversation(caregiver_id: $caregiver_id) {
      id
    }
  }
`
