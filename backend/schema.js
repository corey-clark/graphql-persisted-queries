const Greeting = `
  type Greeting {
    name: String
    text: String
  }
`

const Query = `
  type Query {
    greeting(name: String): Greeting
  }
`

module.exports = [Greeting, Query]
