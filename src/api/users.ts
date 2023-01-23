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
  mutation InsertUser($name: String!) {
    insert_user(objects: { name: $name }) {
      returning {
        id
        name
      }
    }
  }
`;

export const DELETE_UESR2 = gql`
  mutation MyMutation($_eq: uuid) {
    delete_user(where: { id: { _eq: $_eq } }) {
      returning {
        id
        name
      }
    }
  }
`;
