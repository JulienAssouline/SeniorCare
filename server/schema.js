const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    getCaregiver: [QueryGetCaregiver]
		placeholderApi: QueryPlaceholder
		testDatabase: QueryPlaceholder
    getKeyContactProfile(id: ID!): KeyContact
    getSeniors: [QueryGetSenior]
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
		date_created: String
		birthdate: String 
		gender: String
		relation: String
		language: String
    medical_condition: String
    bio: String
    avatar: String
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

	type Mutation {
		placeholder: MutationPlaceholder
		placeholderApi: MutationPlaceholder
		signUp(input:SignUpObjects!): MessageResponse
		login(input: LoginObject!): LoginResponse!
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
`


