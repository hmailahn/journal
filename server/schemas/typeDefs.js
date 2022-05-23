// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

type JournalEntry {
  _id: ID
  journalText: String
  createdAt: String
  username: String
}


type User {
  _id: ID
  username: String
  email: String
  journalEntries: [JournalEntry]
}

  type Query {
    users: [User]
    user(username: String!): User
    journalEntries(username: String): [JournalEntry]
    journalEntry(_id: ID!): JournalEntry
  }

  type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
  }

`;

// export the typeDefs
module.exports = typeDefs;


// # query a single thought, use the `_id` value of a thought that returned from a previous query
//   journalEntry(_id: "<thought-id-here>") {
//     _id
//     username
//     journalEntryText
//     createdAt
   
//   }


