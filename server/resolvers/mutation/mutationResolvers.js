module.exports = {
  Mutation: {
		async placeholder(parent, { input }, { dataSources }){
			return await dataSources.database.mutationPlaceholder('placeholder')
		},
		 async addMessages(parent, input, { dataSources }) {
		 	return await dataSources.chatDatabase.mutationAddMessage(input)
		 },
		 async addConversation(parent, input, { dataSources }){
		 	return await dataSources.conversationDatabase.mutationAddConversation(input)
		 },
     async login(parent, { input }, { dataSources }){
      return await dataSources.loginDatabase.mutateLogin(input)
		},
		async placeholderApi(parent, { input }, { dataSources }){
			return await dataSources.placeholderApi.mutationPlaceholder('placeholder')
		},

		async signUp(parent, {input} , { dataSources }) {
			return dataSources.userDatabase.mutationSignUp(input)
		},

		async delete(parent, input, { dataSources }) {
			return dataSources.jobsDatabase.deleteJob(input)
		},

		async duplicateRepost(parent, input, { dataSources }) {
			console.log('hellooo input backend', input)
			return dataSources.jobsDatabase.duplicateRepost(input)
		},
	}
}




