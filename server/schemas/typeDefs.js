// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

type JournalEntry {
  _id: ID
  journalText: String
  createdAt: String
}

  type Query {
    journalEntries: [JournalEntry]
  }
`;

// export the typeDefs
module.exports = typeDefs;