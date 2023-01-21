import { gql } from '@apollo/client';

export const USER = gql`
  query User {
    user {
      name
      id
    }
  }
`;

export const INSERT_USER = gql`
  mutation INSERT_USER($name: String!) {
    insert_user(objects: { name: $name }) {
      returning {
        id
        name
      }
    }
  }
`;
