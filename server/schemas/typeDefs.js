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

// # get a single user by username (use a username from your database)
// user(username: "<username-goes-here>") {
//   username
//   email
//   journalEntries {
//     journalText
//   }
// }
