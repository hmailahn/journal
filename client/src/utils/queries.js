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

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      journalEntries {
        _id
        journalText
        createdAt
  
      }
    }
  }
`;

export const QUERY_JOURNALENTRY = gql`
  query journalEntry($id: ID!) {
    journalEntry(_id: $id) {
      _id
      journalText
      createdAt
      username
    }
  }
`;