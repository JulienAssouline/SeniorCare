const { gql } = require('apollo-server-express')

module.exports = gql`

  scalar Date

  type Query {
    getCaregiver(input: FilterInput!): [QueryGetCaregiver]
    getCaregiverDetails(id: ID) : QueryGetCaregiver
    getCaregiverProfile(id: ID): QueryGetCaregiver
		placeholderApi: QueryPlaceholder
		testDatabase: QueryPlaceholder
    getKeyContactProfile(id: ID!): KeyContact
    getSeniors: [QueryGetSenior]
    getSenior(id: ID!): QueryGetSenior
		ArchivedJobs(id:ID): [QueryArchiveJobs]
    getMessages(conversation_id:ID):[Messages]
    getConversation(id:ID): ConversationRoom
    getCaregiverConvos(key_contact_id: ID): [ConversationRoom]
    getKeyContactConvos(caregiver_id: ID): [ConversationRoom]
		getJobPosts: [JobPost]
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
    phone_number: String
    email: String
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
    description: String
	}

	type QueryArchiveJobs {
		id: ID
		key_contact_id: ID
		date_created: Date
		title: String
		start_date: Date
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

	type JobPost {
		id: ID
		key_contact_id: ID
		date_created: Date
		getBasicInformation: BasicInformation
		getSeniorDetails: SeniorDetails
		getHouseDetails: HouseDetails
		getCaregiverPreferences: CaregiverPreferences
	}

	type BasicInformation {
		title: String
		start_date: Date
		end_date: Date
		address: String
		city: String
		province: String
		postal_code: String
		hourly_rate: Int
	}

	type SeniorDetails {
		fullname: String!
		gender: Gender
		birthdate: Date
		relation: String
		bio: String
		medical_condition: String
		language: String
	}

	type HouseDetails {
		cig_smoking: Boolean
		pets: Boolean
		cannabis: Boolean
	}

	type CaregiverPreferences {
		availability: LiveInAvailability
		gender_pref: Gender
		req_drivers_license: Boolean
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
		keyContactSignup(input: SignupObject!): TokenResponse
		caregiverSignup(input: SignupObject!): TokenResponse
		login(input: LoginObject!): LoginResponse!
		deleteit(id:ID!):ID!
		duplicateRepost(id:ID!):QueryArchiveJobs!
    addMessages(content: String, conversation_id: ID, from_user: ID): addMessagesResponse!
    addConversation(caregiver_id: ID, key_contact_id: ID): addConversationResponse!
		addJobRequest(input: NewJobObject!): MessageResponse!
	}

  type addConversationResponse {
    id: ID
  }

  type addMessagesResponse {
    message: String
  }

	type MessageResponse {
		message: String
	}
  	input SignupObject{
		id: ID!,
	  fullname: String,
		email: String,
		phone_number:String,
		avatar: String,
	}

  input LoginObject {
    email: String!,
    password: String!,
  }

	input NewJobObject {
		key_contact_id: ID
		basicInformation: BasicInformationObject
		seniorDetails: SeniorDetailsObject
		houseDetails: HouseDetailsObject
		caregiverPreferences: CaregiverPreferencesObject
	}

	input BasicInformationObject {
		title: String
		start_date: Date
		end_date: Date
		address: String
		city: String
		province: String
		postal_code: String
		hourly_rate: Int
	}

	input SeniorDetailsObject {
		fullname: String!
		gender: Gender
		birthdate: Date
		relation: String
		bio: String
		medical_condition: String
		language: String
	}

	input HouseDetailsObject {
		cig_smoking: Boolean
		pets: Boolean
		cannabis: Boolean
	}

	input CaregiverPreferencesObject {
		availability: LiveInAvailability
		gender_pref: Gender
		req_drivers_license: Boolean
	}

	enum LiveInAvailability {
		LIVEIN
		LIVEOUT
	}

	enum Gender {
		FEMALE
		MALE
		OTHER
		NOPREFERENCE
	}

  type LoginResponse {
    message: String
  }

	type MutationPlaceholder {
		id: ID
	}

	type TokenResponse {
  	token: String
	}

	type DeleteResponse{
		message: String
	}

	type duplicateRepostMessage{
		message: String
	}

`


