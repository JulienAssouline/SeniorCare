const { gql } = require('apollo-server-express')

module.exports = gql`

  scalar Date

  type Query {
    getCaregiver(input: FilterInput!): [QueryGetCaregiver]
		placeholderApi: QueryPlaceholder
		testDatabase: QueryPlaceholder
    getKeyContactProfile(id: ID!): KeyContact
    getSeniors: [QueryGetSenior]
		ArchivedJobs(id:ID): [QueryArchiveJobs]
    getMessages(conversation_id:ID):[Messages]
    getConversation(id:ID): ConversationRoom
    getCaregiverConvos: [ConversationRoom]
    getKeyContactConvos: [ConversationRoom]
  }

  type ConversationRoom {
    email:String
    caregiver_id: ID
    fullname: String
    conversation_id: ID
    key_contact_id: ID
  }

  type QueryPlaceholder{
  	id: ID
  }

  type KeyContact {
    id: ID
    fullname: String
    avatar: String
    getSeniors: [QueryGetSenior]
  }

  type QueryGetSenior {
		id: ID
		fullname: String
		date_created: Date
		birthdate: String
		gender: String
		relation: String
		language: String
    medical_condition: String
    bio: String
    avatar: String
	}
  input FilterInput {
    gender: String
    availability: String
    hourly_rate: Int
    years_experience: Int
  }

	type QueryGetCaregiver {
		id: ID
		fullname: String
		location: String
		years_experience: Int
		num_hired: Int
		birthdate: String
		hourly_rate: Int
    gender: String
    availability: String
    average_rating: Float
    avatar: String
	}

	type QueryArchiveJobs {
		id: ID
		key_contact_id: ID
		date_created: Date
		title: String
		start_date: String
		end_date: String
		address: String
		city:String
    province:String
    postal_code:String
    availability:String
    hourly_rate:Int
    gender_pref:String
    req_drivers_license: Boolean,
    cig_smoking: Boolean,
    pets: Boolean,
    cannabis: Boolean

	}


  type Messages {
    id: ID!
    conversation_id: ID!
    from_user: ID!
    date_created: Date
    content: String
  }

   type Subscription{
    messageAdded(conversation_id: ID!): Messages
  }



	type Mutation {
		placeholder: MutationPlaceholder
		placeholderApi: MutationPlaceholder
		signUp(input:SignUpObjects!): MessageResponse
		login(input: LoginObject!): LoginResponse!
		Delete(id:ID!):DeleteResponse!
    addMessages(content: String, conversation_id: Int): addMessagesResponse!
    addConversation(caregiver_id: ID): addConversationResponse!
	}

  type addConversationResponse {
    id: ID
  }

  type addMessagesResponse {
    message: String
  }


	input SignUpObjects{
		 fullname: String,
		 email: String,
		 phonenumber:String,
		 location:String,
		 password: String,

	}

  input LoginObject {
    email: String!,
    password: String!,
  }

  type LoginResponse {
    message: String
  }

	type MutationPlaceholder {
		id: ID
	}

	type MessageResponse {
  	message: String
	}

	type DeleteResponse{
		message: String
	}
`


