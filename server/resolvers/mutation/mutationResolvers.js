module.exports = {
	Mutation: {
		async placeholder(parent, { input }, { dataSources }) {
			return await dataSources.database.mutationPlaceholder('placeholder')
		},
		async placeholderApi(parent, { input }, { dataSources }) {
			return await dataSources.placeholderApi.mutationPlaceholder('placeholder')
		},
		async keyContactSignup(parent, { input }, { dataSources }) {
			return await dataSources.userDatabase.keyContactSignup(input)
		},
		async deleteit(parent, input, { dataSources }) {
			return dataSources.jobsDatabase.deleteit(input)
		},
		async duplicateRepost(parent, input, { dataSources }) {
			return dataSources.jobsDatabase.duplicateRepost(input)
		},
		async caregiverSignup(parent, { input }, { dataSources }) {
			return await dataSources.userDatabase.caregiverSignup(input)
		},
		async addMessages(parent, input, { dataSources }) {
			return await dataSources.chatDatabase.mutationAddMessage(input)
		},
		async addConversation(parent, input, { dataSources }) {
			return await dataSources.conversationDatabase.mutationAddConversation(input)
		},
		// async Delete(parent, { input }, { dataSources }) {
		// 	return dataSources.mutationDelete(input)
		// },
		async addJobRequest(parent, { input }, { dataSources }) {
			const jobId = await dataSources.jobsDatabase.addJobRequest(input)
			await dataSources.seniorDatabase.addSenior(input)
			await dataSources.servicesDatabase.addJobServices({jobId, ...input})
			return {
				message: 'success'
			}
		},
	}
}




