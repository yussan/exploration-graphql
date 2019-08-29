const express = require("express")
const graphqlHTTP = require("express-graphql")
const { buildSchema } = require("graphql")
const port = 4000

// construct a schema, using a graphql
const schema = buildSchema(`
  type Query { 
    hello: String
   }
`)

const root = {
  hello: () => {
    return "Hello world!"
  }
}

// express server initialize
const app = express() 
app.use("/graphql", graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))

app.listen(4000) 
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);