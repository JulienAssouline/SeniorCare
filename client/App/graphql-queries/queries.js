import gql from 'graphql-tag'


export const GET_KEY_CONTACT_CONVO = gql`
  query {
    getKeyContactConvos {
      email
      fullname
      caregiver_id
      conversation_id
      key_contact_id
    }
  }
`

export const GET_CAREGIVER_CONVO = gql`
  query {
    getCaregiverConvos {
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
