module.exports = {
  Mutation: {
		async placeholder(parent, { input }, { dataSources }){
			return await dataSources.database.mutationPlaceholder('placeholder')
		},
    async login(parent, { input }, { dataSources }){
      return await dataSources.loginDatabase.mutateLogin(input)
    },
		async placeholderApi(parent, { input }, { dataSources }){
			return await dataSources.placeholderApi.mutationPlaceholder('placeholder')
		},
  },
}



