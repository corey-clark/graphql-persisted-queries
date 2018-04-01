const resolvers = {
  Query: {
    greeting: (_, { name }) => ({ 
      name,
      text: 'How are you today?'
    })
  }
}

module.exports = resolvers
