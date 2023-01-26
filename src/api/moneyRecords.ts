import { gql } from '@apollo/client';

export const MONEY_RECORD = gql`
  query MoneyRecord {
    money_records {
      amount
      date
      id
      payer_id
      title
      user {
        id
        name
      }
    }
  }
`;

export const INSERT_MONEY_RECORD = gql`
  mutation InsertMoneyRecord(
    $amount: Int!
    $payer_id: uuid!
    $title: String!
    $date: timestamptz!
  ) {
    insert_money_records(
      objects: {
        payer_id: $payer_id
        title: $title
        amount: $amount
        date: $date
      }
    ) {
      returning {
        amount
        date
        id
        payer_id
        title
      }
    }
  }
`;

export const UPDATE_MONEY_RECORD = gql`
  mutation UpdateMoneyRecord(
    $amount: Int
    $date: timestamptz
    $payer_id: uuid
    $title: String
    $_eq: uuid
  ) {
    update_money_records(
      _set: { amount: $amount, date: $date, payer_id: $payer_id, title: $title }
      where: { id: { _eq: $_eq } }
    ) {
      returning {
        amount
        date
        id
        payer_id
        title
        user {
          id
          name
        }
      }
    }
  }
`;

export const DELETE_MONEY_RECORD = gql`
  mutation DeleteMoneyRecord($_eq: uuid!) {
    delete_money_records(where: { id: { _eq: $_eq } }) {
      returning {
        id
        payer_id
      }
    }
  }
`;
