const queryResolvers = require('./resolvers/query/queryResolvers')
const mutationResolvers = require('./resolvers/mutation/mutationResolvers')
const keyContactResolvers = require('./resolvers/query/keyContactResolvers')


module.exports = () => {
  return {
    ...queryResolvers,
    ...mutationResolvers,
    ...keyContactResolvers,
  }
}
