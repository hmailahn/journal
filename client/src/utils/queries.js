import { gql } from '@apollo/client';

export const QUERY_JOURNALENTRIES = gql`
  query journalEntries($username: String) {
    journalEntries(username: $username) {
      _id
      journalText
      createdAt
      username
    }
  }
`;