const { GraphQLServer } = require("graphql-yoga");

import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const server = new GraphQLServer( {
    typeDefs ,
    resolvers
})

server.start(() => {
    console.log("Server is running on http://localhost:4000");
})