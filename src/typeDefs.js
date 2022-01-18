const typeDefs = `
    type Query {
        hello : String!
        id : ID!
        user : User!

        getAddition(numer1 : Int!): Int
    
        getBuildingBlocks : [Int!]! 

        getUser : [User!]!
        getArrayofArry : [[User!]]!

    }

    
    type User {
        name : String!
        age : Int!
    }

`

export default typeDefs