/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** 入出金の履歴を保存するテーブル */
export type Money_Records = {
  __typename?: 'money_records';
  amount: Scalars['Int'];
  date: Scalars['date'];
  id: Scalars['uuid'];
  payer_id: Scalars['uuid'];
  title: Scalars['String'];
};

/** aggregated selection of "money_records" */
export type Money_Records_Aggregate = {
  __typename?: 'money_records_aggregate';
  aggregate?: Maybe<Money_Records_Aggregate_Fields>;
  nodes: Array<Money_Records>;
};

/** aggregate fields of "money_records" */
export type Money_Records_Aggregate_Fields = {
  __typename?: 'money_records_aggregate_fields';
  avg?: Maybe<Money_Records_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Money_Records_Max_Fields>;
  min?: Maybe<Money_Records_Min_Fields>;
  stddev?: Maybe<Money_Records_Stddev_Fields>;
  stddev_pop?: Maybe<Money_Records_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Money_Records_Stddev_Samp_Fields>;
  sum?: Maybe<Money_Records_Sum_Fields>;
  var_pop?: Maybe<Money_Records_Var_Pop_Fields>;
  var_samp?: Maybe<Money_Records_Var_Samp_Fields>;
  variance?: Maybe<Money_Records_Variance_Fields>;
};


/** aggregate fields of "money_records" */
export type Money_Records_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Money_Records_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Money_Records_Avg_Fields = {
  __typename?: 'money_records_avg_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "money_records". All fields are combined with a logical 'AND'. */
export type Money_Records_Bool_Exp = {
  _and?: InputMaybe<Array<Money_Records_Bool_Exp>>;
  _not?: InputMaybe<Money_Records_Bool_Exp>;
  _or?: InputMaybe<Array<Money_Records_Bool_Exp>>;
  amount?: InputMaybe<Int_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  payer_id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "money_records" */
export enum Money_Records_Constraint {
  /** unique or primary key constraint on columns "payer_id" */
  MoneyRecordsPayerIdKey = 'money_records_payer_id_key',
  /** unique or primary key constraint on columns "id" */
  MoneyRecordsPkey = 'money_records_pkey'
}

/** input type for incrementing numeric columns in table "money_records" */
export type Money_Records_Inc_Input = {
  amount?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "money_records" */
export type Money_Records_Insert_Input = {
  amount?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  payer_id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Money_Records_Max_Fields = {
  __typename?: 'money_records_max_fields';
  amount?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  payer_id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Money_Records_Min_Fields = {
  __typename?: 'money_records_min_fields';
  amount?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  payer_id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "money_records" */
export type Money_Records_Mutation_Response = {
  __typename?: 'money_records_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Money_Records>;
};

/** on_conflict condition type for table "money_records" */
export type Money_Records_On_Conflict = {
  constraint: Money_Records_Constraint;
  update_columns?: Array<Money_Records_Update_Column>;
  where?: InputMaybe<Money_Records_Bool_Exp>;
};

/** Ordering options when selecting data from "money_records". */
export type Money_Records_Order_By = {
  amount?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payer_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: money_records */
export type Money_Records_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "money_records" */
export enum Money_Records_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  PayerId = 'payer_id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "money_records" */
export type Money_Records_Set_Input = {
  amount?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  payer_id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Money_Records_Stddev_Fields = {
  __typename?: 'money_records_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Money_Records_Stddev_Pop_Fields = {
  __typename?: 'money_records_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Money_Records_Stddev_Samp_Fields = {
  __typename?: 'money_records_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "money_records" */
export type Money_Records_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Money_Records_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Money_Records_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  payer_id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Money_Records_Sum_Fields = {
  __typename?: 'money_records_sum_fields';
  amount?: Maybe<Scalars['Int']>;
};

/** update columns of table "money_records" */
export enum Money_Records_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  PayerId = 'payer_id',
  /** column name */
  Title = 'title'
}

export type Money_Records_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Money_Records_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Money_Records_Set_Input>;
  where: Money_Records_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Money_Records_Var_Pop_Fields = {
  __typename?: 'money_records_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Money_Records_Var_Samp_Fields = {
  __typename?: 'money_records_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Money_Records_Variance_Fields = {
  __typename?: 'money_records_variance_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "money_records" */
  delete_money_records?: Maybe<Money_Records_Mutation_Response>;
  /** delete single row from the table: "money_records" */
  delete_money_records_by_pk?: Maybe<Money_Records>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "money_records" */
  insert_money_records?: Maybe<Money_Records_Mutation_Response>;
  /** insert a single row into the table: "money_records" */
  insert_money_records_one?: Maybe<Money_Records>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "money_records" */
  update_money_records?: Maybe<Money_Records_Mutation_Response>;
  /** update single row of the table: "money_records" */
  update_money_records_by_pk?: Maybe<Money_Records>;
  /** update multiples rows of table: "money_records" */
  update_money_records_many?: Maybe<Array<Maybe<Money_Records_Mutation_Response>>>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Money_RecordsArgs = {
  where: Money_Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Money_Records_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Money_RecordsArgs = {
  objects: Array<Money_Records_Insert_Input>;
  on_conflict?: InputMaybe<Money_Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Money_Records_OneArgs = {
  object: Money_Records_Insert_Input;
  on_conflict?: InputMaybe<Money_Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Money_RecordsArgs = {
  _inc?: InputMaybe<Money_Records_Inc_Input>;
  _set?: InputMaybe<Money_Records_Set_Input>;
  where: Money_Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Money_Records_By_PkArgs = {
  _inc?: InputMaybe<Money_Records_Inc_Input>;
  _set?: InputMaybe<Money_Records_Set_Input>;
  pk_columns: Money_Records_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Money_Records_ManyArgs = {
  updates: Array<Money_Records_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "money_records" */
  money_records: Array<Money_Records>;
  /** fetch aggregated fields from the table: "money_records" */
  money_records_aggregate: Money_Records_Aggregate;
  /** fetch data from the table: "money_records" using primary key columns */
  money_records_by_pk?: Maybe<Money_Records>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootMoney_RecordsArgs = {
  distinct_on?: InputMaybe<Array<Money_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Money_Records_Order_By>>;
  where?: InputMaybe<Money_Records_Bool_Exp>;
};


export type Query_RootMoney_Records_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Money_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Money_Records_Order_By>>;
  where?: InputMaybe<Money_Records_Bool_Exp>;
};


export type Query_RootMoney_Records_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "money_records" */
  money_records: Array<Money_Records>;
  /** fetch aggregated fields from the table: "money_records" */
  money_records_aggregate: Money_Records_Aggregate;
  /** fetch data from the table: "money_records" using primary key columns */
  money_records_by_pk?: Maybe<Money_Records>;
  /** fetch data from the table in a streaming manner: "money_records" */
  money_records_stream: Array<Money_Records>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
};


export type Subscription_RootMoney_RecordsArgs = {
  distinct_on?: InputMaybe<Array<Money_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Money_Records_Order_By>>;
  where?: InputMaybe<Money_Records_Bool_Exp>;
};


export type Subscription_RootMoney_Records_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Money_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Money_Records_Order_By>>;
  where?: InputMaybe<Money_Records_Bool_Exp>;
};


export type Subscription_RootMoney_Records_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMoney_Records_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Money_Records_Stream_Cursor_Input>>;
  where?: InputMaybe<Money_Records_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/**  ユーザー情報 */
export type User = {
  __typename?: 'user';
  id: Scalars['uuid'];
  name: Scalars['String'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserIdKey = 'user_id_key',
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', name: string, id: any }> };

export type Insert_UserMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type Insert_UserMutation = { __typename?: 'mutation_root', insert_user?: { __typename?: 'user_mutation_response', returning: Array<{ __typename?: 'user', id: any, name: string }> } | null };


export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const Insert_UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"INSERT_USER"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<Insert_UserMutation, Insert_UserMutationVariables>;