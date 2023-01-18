import { gql } from "@apollo/client";

export const USER = gql`
  query User{
    user{
      name
      id
    }
  }
`;

export const INSERT_USER = gql`
  mutation InsertUser{
    insert_user(objects: { name: "haruka" }){
      returning{
        id
        name
      }
    }
  }
`;
