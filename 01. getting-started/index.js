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

// run the grapql query `{hello}` and then print out the response
graphql(schema, `{ hello }`, root).then(response => {
  console.log("response.data", response.data)
})