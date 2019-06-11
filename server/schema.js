const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    getCaregiver: [QueryGetCaregiver]
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
    gender: String
    availability: String
    average_rating: Float
	}

	type Mutation {
		placeholder: MutationPlaceholder
		placeholderApi: MutationPlaceholder
	}

	type MutationPlaceholder {
		id: ID
	}

	# type Subscription {

	# }
`

