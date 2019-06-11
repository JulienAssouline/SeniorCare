const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    getCaregiver: [QueryGetCaregiver]
		placeholderApi: QueryPlaceholder
		testDatabase: QueryPlaceholder
  }

  type QueryPlaceholder{
  	id: ID
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


