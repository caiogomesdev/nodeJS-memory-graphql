const express = require('express')
const expressGraphql = require('express-graphql').graphqlHTTP

const {schema, resolvers} = require("./models/User")
class App {
    constructor(){
        this.server = express()
        this.routes()
        this.Middleware()
    }
    Middleware(){
        this.server.use(
            "/graphql",
            expressGraphql({
              schema,
              rootValue: resolvers,
              graphiql: true
            }))
    }
    routes(){

    }
}


module.exports = new App().server;