module.exports = {
  Query: {
		async getCaregiver(parent, { input }, { dataSources }){
			return await dataSources.caregiverDatabase.queryCaregiver()
		},

		async placeholderApi(parent, { input }, { dataSources }){
			return await dataSources.placeholderApi.queryPlaceholder('placeholder')
		},

		async testDatabase(parent, { input }, { dataSources }) {
			return await dataSources.database.queryPlaceholder('placeholder')

		},
		
		async getKeyContactProfile(parent, input, { dataSources }) {
			return await dataSources.keyContactDatabase.getKeyContactProfile(input)
		},
		
		async getSeniors(parent, { input }, { dataSources }) {
			return await dataSources.seniorDatabase.getSenior()
		},

    async getSenior(parent, input, { dataSources }) {
			return await dataSources.seniorDatabase.getSenior(input.id)
		},

		async ArchivedJobs(parent,  input, { dataSources }) {
			return await dataSources.jobsDatabase.queryArchiveJobs(input)
		},

  },
}
