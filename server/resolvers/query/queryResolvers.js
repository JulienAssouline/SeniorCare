module.exports = {
  Query: {
		async getCaregiver(parent, { input }, { dataSources, req, app, postgres }){
			return await dataSources.caregiverDatabase.CaregiverDatabase()
		},

		async placeholderApi(parent, { input }, { dataSources, req, app, postgres }){
			return await dataSources.placeholderApi.queryPlaceholder('placeholder')
		},
  },
}
