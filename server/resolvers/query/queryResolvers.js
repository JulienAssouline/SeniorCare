module.exports = {
  Query: {
		async getCaregiver(parent, { input }, { dataSources }){
			return await dataSources.caregiverDatabase.CaregiverDatabase()
		},

		async placeholderApi(parent, { input }, { dataSources }){
			return await dataSources.placeholderApi.queryPlaceholder('placeholder')
		},
  },
}
