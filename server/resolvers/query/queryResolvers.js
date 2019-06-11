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
		}
  },
}
