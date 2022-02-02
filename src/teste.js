const express = require("express");
const expressGraphql = require('express-graphql').graphqlHTTP

const { buildSchema } = require("graphql");


const schema = buildSchema(`

              type Query {

                     hello: String

              }

       `);

       const rootValue = {

        hello: () => 'Hello World!'

 };

const app = express();

app.use('/graphql', expressGraphql({
schema,
rootValue,
graphiql: true
}));


app.listen(3333, () => console.log('Express GraphQL Server Now Running On localhost:3333/graphql'));


