import gql from 'graphql-tag'


export const GET_KEY_CONTACT_CONVO = gql`
  query getKeyContactConvosQuery ($caregiver_id: ID) {
    getKeyContactConvos(caregiver_id: $caregiver_id) {
      email
      fullname
      caregiver_id
      conversation_id
      key_contact_id
    }
  }
`


export const GET_CAREGIVER_CONVO = gql`
  query getCaregiverConvoQuery ($key_contact_id: ID) {
    getCaregiverConvos(key_contact_id: $key_contact_id) {
      email
      fullname
      caregiver_id
      conversation_id
      key_contact_id
    }
  }
`

export const GET_MESSAGES = gql`
  query getMessagesQuery($conversation_id:ID) {
    getMessages (conversation_id: $conversation_id){
      id
      conversation_id
      from_user
      date_created
      content
    }
  }
`