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

type Auth {
  token: ID!
  user: User
}

type User {
  _id: ID
  username: String
  email: String
  journalEntries: [JournalEntry]
}

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    journalEntries(username: String): [JournalEntry]
    journalEntry(_id: ID!): JournalEntry
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addEntry(journalText: String!): JournalEntry
  }

`;

// export the typeDefs
module.exports = typeDefs;

