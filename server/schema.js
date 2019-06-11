const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    getCaregiver: QueryGetCaregiver
		placeholderApi: QueryPlaceholder
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
	}

	type Mutation {
		placeholder: MutationPlaceholder
		placeholderApi: MutationPlaceholder
		signUp(input:SignUpObjects!): SignUpResponse
	}

	input SignUpObjects{
		 fullname: String,
		 email: String, 
		 phonenumber:String,
		 location:String,
		 password: String,

	}
	type MutationPlaceholder {
		id: ID
	}

	type SignUpResponse {
  message:String
}
`


