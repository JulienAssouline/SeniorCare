import gql from 'graphql-tag'


export const ADD_CONVERSATION_MUTATION = gql`
  mutation addConversationMutation($caregiver_id: ID) {
    addConversation(caregiver_id: $caregiver_id) {
      id
    }
  }
`

export const ADD_MESSAGES = gql`
mutation addMessageMutation($content: String, $conversation_id: ID){
  addMessages(content: $content, conversation_id: $conversation_id) {
    message
  }
}
`

export const SUBMIT_JOB_POST = gql`
	mutation addJobPostVars($input: NewJobObject!) {
		addJobRequest(input: $input) {
			message
		}
	}
`