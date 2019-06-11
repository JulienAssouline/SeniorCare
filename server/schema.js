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
    login(input: LoginObject!): LoginResponse!
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

	# type Subscription {

	# }
`

