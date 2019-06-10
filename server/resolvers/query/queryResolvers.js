module.exports = {
  Query: {
		async placeholder(parent, { input }, { dataSources }){
			return await dataSources.database.queryPlaceholder('placeholder')
		},

		async placeholderApi(parent, { input }, { dataSources }){
			return await dataSources.placeholderApi.queryPlaceholder('placeholder')
		},
  },
}
