import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
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
export const Cursor_Ordering = {
  /** ascending ordering of the cursor */
  Asc: 'ASC',
  /** descending ordering of the cursor */
  Desc: 'DESC'
} as const;

export type Cursor_Ordering = typeof Cursor_Ordering[keyof typeof Cursor_Ordering];
/** ????????????????????????????????????????????? */
export type Money_Records = {
  amount: Scalars['Int'];
  date: Scalars['timestamptz'];
  id: Scalars['uuid'];
  payer_id: Scalars['uuid'];
  title: Scalars['String'];
  /** An object relationship */
  user: User;
};

/** aggregated selection of "money_records" */
export type Money_Records_Aggregate = {
  aggregate?: Maybe<Money_Records_Aggregate_Fields>;
  nodes: Array<Money_Records>;
};

/** aggregate fields of "money_records" */
export type Money_Records_Aggregate_Fields = {
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
  amount?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "money_records". All fields are combined with a logical 'AND'. */
export type Money_Records_Bool_Exp = {
  _and?: InputMaybe<Array<Money_Records_Bool_Exp>>;
  _not?: InputMaybe<Money_Records_Bool_Exp>;
  _or?: InputMaybe<Array<Money_Records_Bool_Exp>>;
  amount?: InputMaybe<Int_Comparison_Exp>;
  date?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  payer_id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "money_records" */
export const Money_Records_Constraint = {
  /** unique or primary key constraint on columns "id" */
  MoneyRecordsPkey: 'money_records_pkey'
} as const;

export type Money_Records_Constraint = typeof Money_Records_Constraint[keyof typeof Money_Records_Constraint];
/** input type for incrementing numeric columns in table "money_records" */
export type Money_Records_Inc_Input = {
  amount?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "money_records" */
export type Money_Records_Insert_Input = {
  amount?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  payer_id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Money_Records_Max_Fields = {
  amount?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  payer_id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Money_Records_Min_Fields = {
  amount?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  payer_id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "money_records" */
export type Money_Records_Mutation_Response = {
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
  user?: InputMaybe<User_Order_By>;
};

/** primary key columns input for table: money_records */
export type Money_Records_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "money_records" */
export const Money_Records_Select_Column = {
  /** column name */
  Amount: 'amount',
  /** column name */
  Date: 'date',
  /** column name */
  Id: 'id',
  /** column name */
  PayerId: 'payer_id',
  /** column name */
  Title: 'title'
} as const;

export type Money_Records_Select_Column = typeof Money_Records_Select_Column[keyof typeof Money_Records_Select_Column];
/** input type for updating data in table "money_records" */
export type Money_Records_Set_Input = {
  amount?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  payer_id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Money_Records_Stddev_Fields = {
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Money_Records_Stddev_Pop_Fields = {
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Money_Records_Stddev_Samp_Fields = {
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
  date?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  payer_id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Money_Records_Sum_Fields = {
  amount?: Maybe<Scalars['Int']>;
};

/** update columns of table "money_records" */
export const Money_Records_Update_Column = {
  /** column name */
  Amount: 'amount',
  /** column name */
  Date: 'date',
  /** column name */
  Id: 'id',
  /** column name */
  PayerId: 'payer_id',
  /** column name */
  Title: 'title'
} as const;

export type Money_Records_Update_Column = typeof Money_Records_Update_Column[keyof typeof Money_Records_Update_Column];
export type Money_Records_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Money_Records_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Money_Records_Set_Input>;
  /** filter the rows which have to be updated */
  where: Money_Records_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Money_Records_Var_Pop_Fields = {
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Money_Records_Var_Samp_Fields = {
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Money_Records_Variance_Fields = {
  amount?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
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
export const Order_By = {
  /** in ascending order, nulls last */
  Asc: 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst: 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast: 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc: 'desc',
  /** in descending order, nulls first */
  DescNullsFirst: 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast: 'desc_nulls_last'
} as const;

export type Order_By = typeof Order_By[keyof typeof Order_By];
export type Query_Root = {
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

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/**  ?????????????????? */
export type User = {
  id: Scalars['uuid'];
  name: Scalars['String'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
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
export const User_Constraint = {
  /** unique or primary key constraint on columns "id" */
  UserIdKey: 'user_id_key',
  /** unique or primary key constraint on columns "id" */
  UserPkey: 'user_pkey'
} as const;

export type User_Constraint = typeof User_Constraint[keyof typeof User_Constraint];
/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
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
export const User_Select_Column = {
  /** column name */
  Id: 'id',
  /** column name */
  Name: 'name'
} as const;

export type User_Select_Column = typeof User_Select_Column[keyof typeof User_Select_Column];
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
export const User_Update_Column = {
  /** column name */
  Id: 'id',
  /** column name */
  Name: 'name'
} as const;

export type User_Update_Column = typeof User_Update_Column[keyof typeof User_Update_Column];
export type User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
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

export type MoneyRecordQueryVariables = Exact<{ [key: string]: never; }>;


export type MoneyRecordQuery = { money_records: Array<{ amount: number, date: any, id: any, payer_id: any, title: string, user: { id: any, name: string } }> };

export type InsertMoneyRecordMutationVariables = Exact<{
  amount: Scalars['Int'];
  payer_id: Scalars['uuid'];
  title: Scalars['String'];
  date: Scalars['timestamptz'];
}>;


export type InsertMoneyRecordMutation = { insert_money_records?: { returning: Array<{ amount: number, date: any, id: any, payer_id: any, title: string }> } | null };

export type UpdateMoneyRecordMutationVariables = Exact<{
  amount?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['timestamptz']>;
  payer_id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type UpdateMoneyRecordMutation = { update_money_records?: { returning: Array<{ amount: number, date: any, id: any, payer_id: any, title: string, user: { id: any, name: string } }> } | null };

export type DeleteMoneyRecordMutationVariables = Exact<{
  _eq: Scalars['uuid'];
}>;


export type DeleteMoneyRecordMutation = { delete_money_records?: { returning: Array<{ id: any, payer_id: any }> } | null };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { user: Array<{ name: string, id: any }> };

export type InsertUserMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type InsertUserMutation = { insert_user?: { returning: Array<{ id: any, name: string }> } | null };

export type MyMutationMutationVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
}>;


export type MyMutationMutation = { delete_user?: { returning: Array<{ id: any, name: string }> } | null };


export const MoneyRecordDocument = gql`
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

/**
 * __useMoneyRecordQuery__
 *
 * To run a query within a React component, call `useMoneyRecordQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoneyRecordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoneyRecordQuery({
 *   variables: {
 *   },
 * });
 */
export function useMoneyRecordQuery(baseOptions?: Apollo.QueryHookOptions<MoneyRecordQuery, MoneyRecordQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MoneyRecordQuery, MoneyRecordQueryVariables>(MoneyRecordDocument, options);
      }
export function useMoneyRecordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MoneyRecordQuery, MoneyRecordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MoneyRecordQuery, MoneyRecordQueryVariables>(MoneyRecordDocument, options);
        }
export type MoneyRecordQueryHookResult = ReturnType<typeof useMoneyRecordQuery>;
export type MoneyRecordLazyQueryHookResult = ReturnType<typeof useMoneyRecordLazyQuery>;
export type MoneyRecordQueryResult = Apollo.QueryResult<MoneyRecordQuery, MoneyRecordQueryVariables>;
export const InsertMoneyRecordDocument = gql`
    mutation InsertMoneyRecord($amount: Int!, $payer_id: uuid!, $title: String!, $date: timestamptz!) {
  insert_money_records(
    objects: {payer_id: $payer_id, title: $title, amount: $amount, date: $date}
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
export type InsertMoneyRecordMutationFn = Apollo.MutationFunction<InsertMoneyRecordMutation, InsertMoneyRecordMutationVariables>;

/**
 * __useInsertMoneyRecordMutation__
 *
 * To run a mutation, you first call `useInsertMoneyRecordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertMoneyRecordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertMoneyRecordMutation, { data, loading, error }] = useInsertMoneyRecordMutation({
 *   variables: {
 *      amount: // value for 'amount'
 *      payer_id: // value for 'payer_id'
 *      title: // value for 'title'
 *      date: // value for 'date'
 *   },
 * });
 */
export function useInsertMoneyRecordMutation(baseOptions?: Apollo.MutationHookOptions<InsertMoneyRecordMutation, InsertMoneyRecordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertMoneyRecordMutation, InsertMoneyRecordMutationVariables>(InsertMoneyRecordDocument, options);
      }
export type InsertMoneyRecordMutationHookResult = ReturnType<typeof useInsertMoneyRecordMutation>;
export type InsertMoneyRecordMutationResult = Apollo.MutationResult<InsertMoneyRecordMutation>;
export type InsertMoneyRecordMutationOptions = Apollo.BaseMutationOptions<InsertMoneyRecordMutation, InsertMoneyRecordMutationVariables>;
export const UpdateMoneyRecordDocument = gql`
    mutation UpdateMoneyRecord($amount: Int, $date: timestamptz, $payer_id: uuid, $title: String, $_eq: uuid) {
  update_money_records(
    _set: {amount: $amount, date: $date, payer_id: $payer_id, title: $title}
    where: {id: {_eq: $_eq}}
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
export type UpdateMoneyRecordMutationFn = Apollo.MutationFunction<UpdateMoneyRecordMutation, UpdateMoneyRecordMutationVariables>;

/**
 * __useUpdateMoneyRecordMutation__
 *
 * To run a mutation, you first call `useUpdateMoneyRecordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMoneyRecordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMoneyRecordMutation, { data, loading, error }] = useUpdateMoneyRecordMutation({
 *   variables: {
 *      amount: // value for 'amount'
 *      date: // value for 'date'
 *      payer_id: // value for 'payer_id'
 *      title: // value for 'title'
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useUpdateMoneyRecordMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMoneyRecordMutation, UpdateMoneyRecordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMoneyRecordMutation, UpdateMoneyRecordMutationVariables>(UpdateMoneyRecordDocument, options);
      }
export type UpdateMoneyRecordMutationHookResult = ReturnType<typeof useUpdateMoneyRecordMutation>;
export type UpdateMoneyRecordMutationResult = Apollo.MutationResult<UpdateMoneyRecordMutation>;
export type UpdateMoneyRecordMutationOptions = Apollo.BaseMutationOptions<UpdateMoneyRecordMutation, UpdateMoneyRecordMutationVariables>;
export const DeleteMoneyRecordDocument = gql`
    mutation DeleteMoneyRecord($_eq: uuid!) {
  delete_money_records(where: {id: {_eq: $_eq}}) {
    returning {
      id
      payer_id
    }
  }
}
    `;
export type DeleteMoneyRecordMutationFn = Apollo.MutationFunction<DeleteMoneyRecordMutation, DeleteMoneyRecordMutationVariables>;

/**
 * __useDeleteMoneyRecordMutation__
 *
 * To run a mutation, you first call `useDeleteMoneyRecordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMoneyRecordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMoneyRecordMutation, { data, loading, error }] = useDeleteMoneyRecordMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useDeleteMoneyRecordMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMoneyRecordMutation, DeleteMoneyRecordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMoneyRecordMutation, DeleteMoneyRecordMutationVariables>(DeleteMoneyRecordDocument, options);
      }
export type DeleteMoneyRecordMutationHookResult = ReturnType<typeof useDeleteMoneyRecordMutation>;
export type DeleteMoneyRecordMutationResult = Apollo.MutationResult<DeleteMoneyRecordMutation>;
export type DeleteMoneyRecordMutationOptions = Apollo.BaseMutationOptions<DeleteMoneyRecordMutation, DeleteMoneyRecordMutationVariables>;
export const UserDocument = gql`
    query User {
  user {
    name
    id
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const InsertUserDocument = gql`
    mutation InsertUser($name: String!) {
  insert_user(objects: {name: $name}) {
    returning {
      id
      name
    }
  }
}
    `;
export type InsertUserMutationFn = Apollo.MutationFunction<InsertUserMutation, InsertUserMutationVariables>;

/**
 * __useInsertUserMutation__
 *
 * To run a mutation, you first call `useInsertUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserMutation, { data, loading, error }] = useInsertUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useInsertUserMutation(baseOptions?: Apollo.MutationHookOptions<InsertUserMutation, InsertUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertUserMutation, InsertUserMutationVariables>(InsertUserDocument, options);
      }
export type InsertUserMutationHookResult = ReturnType<typeof useInsertUserMutation>;
export type InsertUserMutationResult = Apollo.MutationResult<InsertUserMutation>;
export type InsertUserMutationOptions = Apollo.BaseMutationOptions<InsertUserMutation, InsertUserMutationVariables>;
export const MyMutationDocument = gql`
    mutation MyMutation($_eq: uuid) {
  delete_user(where: {id: {_eq: $_eq}}) {
    returning {
      id
      name
    }
  }
}
    `;
export type MyMutationMutationFn = Apollo.MutationFunction<MyMutationMutation, MyMutationMutationVariables>;

/**
 * __useMyMutationMutation__
 *
 * To run a mutation, you first call `useMyMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMyMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [myMutationMutation, { data, loading, error }] = useMyMutationMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useMyMutationMutation(baseOptions?: Apollo.MutationHookOptions<MyMutationMutation, MyMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MyMutationMutation, MyMutationMutationVariables>(MyMutationDocument, options);
      }
export type MyMutationMutationHookResult = ReturnType<typeof useMyMutationMutation>;
export type MyMutationMutationResult = Apollo.MutationResult<MyMutationMutation>;
export type MyMutationMutationOptions = Apollo.BaseMutationOptions<MyMutationMutation, MyMutationMutationVariables>;