const { graphql, buildSchema } = require("graphql") 

// construct schema, using graphsql schema language
const schema = buildSchema(`
type Query {
  hello: String
}
`)

// root provides a resolver function for each Api endpoint
const root = {
  hello: () => {
    return `Hello world!`
  }
}