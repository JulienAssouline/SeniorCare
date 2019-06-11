const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    placeholder: QueryPlaceholder
		placeholderApi: QueryPlaceholder
  }

	type QueryPlaceholder {
		id: ID
	}

	type Mutation {
		placeholder: MutationPlaceholder
		placeholderApi: MutationPlaceholder
		signUp(fullName: String!, email: String!, password: String!): SignUpResponse!
	}

	type MutationPlaceholder {
		id: ID
	}

	type SignUpResponse {
  message:String
}
`


