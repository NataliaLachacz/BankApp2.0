import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  name: any;
  numeric: any;
  uuid: any;
}



/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export interface StringComparisonExp {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
}

/** columns and relationships of "accounts" */
export interface Accounts {
  __typename?: 'accounts';
  accountNumber: Scalars['String'];
  balance: Scalars['numeric'];
  /** An object relationship */
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['uuid']>;
  uuid: Scalars['uuid'];
}

/** aggregated selection of "accounts" */
export interface AccountsAggregate {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<AccountsAggregateFields>;
  nodes: Array<Accounts>;
}

/** aggregate fields of "accounts" */
export interface AccountsAggregateFields {
  __typename?: 'accounts_aggregate_fields';
  avg?: Maybe<AccountsAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<AccountsMaxFields>;
  min?: Maybe<AccountsMinFields>;
  stddev?: Maybe<AccountsStddevFields>;
  stddev_pop?: Maybe<AccountsStddevPopFields>;
  stddev_samp?: Maybe<AccountsStddevSampFields>;
  sum?: Maybe<AccountsSumFields>;
  var_pop?: Maybe<AccountsVarPopFields>;
  var_samp?: Maybe<AccountsVarSampFields>;
  variance?: Maybe<AccountsVarianceFields>;
}


/** aggregate fields of "accounts" */
export interface AccountsAggregateFieldsCountArgs {
  columns?: Maybe<Array<AccountsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "accounts" */
export interface AccountsAggregateOrderBy {
  avg?: Maybe<AccountsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<AccountsMaxOrderBy>;
  min?: Maybe<AccountsMinOrderBy>;
  stddev?: Maybe<AccountsStddevOrderBy>;
  stddev_pop?: Maybe<AccountsStddevPopOrderBy>;
  stddev_samp?: Maybe<AccountsStddevSampOrderBy>;
  sum?: Maybe<AccountsSumOrderBy>;
  var_pop?: Maybe<AccountsVarPopOrderBy>;
  var_samp?: Maybe<AccountsVarSampOrderBy>;
  variance?: Maybe<AccountsVarianceOrderBy>;
}

/** input type for inserting array relation for remote table "accounts" */
export interface AccountsArrRelInsertInput {
  data: Array<AccountsInsertInput>;
  on_conflict?: Maybe<AccountsOnConflict>;
}

/** aggregate avg on columns */
export interface AccountsAvgFields {
  __typename?: 'accounts_avg_fields';
  balance?: Maybe<Scalars['Float']>;
}

/** order by avg() on columns of table "accounts" */
export interface AccountsAvgOrderBy {
  balance?: Maybe<OrderBy>;
}

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export interface AccountsBoolExp {
  _and?: Maybe<Array<Maybe<AccountsBoolExp>>>;
  _not?: Maybe<AccountsBoolExp>;
  _or?: Maybe<Array<Maybe<AccountsBoolExp>>>;
  accountNumber?: Maybe<StringComparisonExp>;
  balance?: Maybe<NumericComparisonExp>;
  user?: Maybe<UsersBoolExp>;
  userId?: Maybe<UuidComparisonExp>;
  uuid?: Maybe<UuidComparisonExp>;
}

/** unique or primary key constraints on table "accounts" */
export enum AccountsConstraint {
  /** unique or primary key constraint */
  AccountsAccountNumberKey = 'accounts_accountNumber_key',
  /** unique or primary key constraint */
  AccountsPkey = 'accounts_pkey'
}

/** input type for incrementing integer column in table "accounts" */
export interface AccountsIncInput {
  balance?: Maybe<Scalars['numeric']>;
}

/** input type for inserting data into table "accounts" */
export interface AccountsInsertInput {
  accountNumber?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['numeric']>;
  user?: Maybe<UsersObjRelInsertInput>;
  userId?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** aggregate max on columns */
export interface AccountsMaxFields {
  __typename?: 'accounts_max_fields';
  accountNumber?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['numeric']>;
  userId?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** order by max() on columns of table "accounts" */
export interface AccountsMaxOrderBy {
  accountNumber?: Maybe<OrderBy>;
  balance?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
}

/** aggregate min on columns */
export interface AccountsMinFields {
  __typename?: 'accounts_min_fields';
  accountNumber?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['numeric']>;
  userId?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** order by min() on columns of table "accounts" */
export interface AccountsMinOrderBy {
  accountNumber?: Maybe<OrderBy>;
  balance?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
}

/** response of any mutation on the table "accounts" */
export interface AccountsMutationResponse {
  __typename?: 'accounts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Accounts>;
}

/** input type for inserting object relation for remote table "accounts" */
export interface AccountsObjRelInsertInput {
  data: AccountsInsertInput;
  on_conflict?: Maybe<AccountsOnConflict>;
}

/** on conflict condition type for table "accounts" */
export interface AccountsOnConflict {
  constraint: AccountsConstraint;
  update_columns: Array<AccountsUpdateColumn>;
  where?: Maybe<AccountsBoolExp>;
}

/** ordering options when selecting data from "accounts" */
export interface AccountsOrderBy {
  accountNumber?: Maybe<OrderBy>;
  balance?: Maybe<OrderBy>;
  user?: Maybe<UsersOrderBy>;
  userId?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
}

/** primary key columns input for table: "accounts" */
export interface AccountsPkColumnsInput {
  uuid: Scalars['uuid'];
}

/** select columns of table "accounts" */
export enum AccountsSelectColumn {
  /** column name */
  AccountNumber = 'accountNumber',
  /** column name */
  Balance = 'balance',
  /** column name */
  UserId = 'userId',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "accounts" */
export interface AccountsSetInput {
  accountNumber?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['numeric']>;
  userId?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** aggregate stddev on columns */
export interface AccountsStddevFields {
  __typename?: 'accounts_stddev_fields';
  balance?: Maybe<Scalars['Float']>;
}

/** order by stddev() on columns of table "accounts" */
export interface AccountsStddevOrderBy {
  balance?: Maybe<OrderBy>;
}

/** aggregate stddev_pop on columns */
export interface AccountsStddevPopFields {
  __typename?: 'accounts_stddev_pop_fields';
  balance?: Maybe<Scalars['Float']>;
}

/** order by stddev_pop() on columns of table "accounts" */
export interface AccountsStddevPopOrderBy {
  balance?: Maybe<OrderBy>;
}

/** aggregate stddev_samp on columns */
export interface AccountsStddevSampFields {
  __typename?: 'accounts_stddev_samp_fields';
  balance?: Maybe<Scalars['Float']>;
}

/** order by stddev_samp() on columns of table "accounts" */
export interface AccountsStddevSampOrderBy {
  balance?: Maybe<OrderBy>;
}

/** aggregate sum on columns */
export interface AccountsSumFields {
  __typename?: 'accounts_sum_fields';
  balance?: Maybe<Scalars['numeric']>;
}

/** order by sum() on columns of table "accounts" */
export interface AccountsSumOrderBy {
  balance?: Maybe<OrderBy>;
}

/** update columns of table "accounts" */
export enum AccountsUpdateColumn {
  /** column name */
  AccountNumber = 'accountNumber',
  /** column name */
  Balance = 'balance',
  /** column name */
  UserId = 'userId',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export interface AccountsVarPopFields {
  __typename?: 'accounts_var_pop_fields';
  balance?: Maybe<Scalars['Float']>;
}

/** order by var_pop() on columns of table "accounts" */
export interface AccountsVarPopOrderBy {
  balance?: Maybe<OrderBy>;
}

/** aggregate var_samp on columns */
export interface AccountsVarSampFields {
  __typename?: 'accounts_var_samp_fields';
  balance?: Maybe<Scalars['Float']>;
}

/** order by var_samp() on columns of table "accounts" */
export interface AccountsVarSampOrderBy {
  balance?: Maybe<OrderBy>;
}

/** aggregate variance on columns */
export interface AccountsVarianceFields {
  __typename?: 'accounts_variance_fields';
  balance?: Maybe<Scalars['Float']>;
}

/** order by variance() on columns of table "accounts" */
export interface AccountsVarianceOrderBy {
  balance?: Maybe<OrderBy>;
}


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export interface DateComparisonExp {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
}

/** mutation root */
export interface MutationRoot {
  __typename?: 'mutation_root';
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<AccountsMutationResponse>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "transfers" */
  delete_transfers?: Maybe<TransfersMutationResponse>;
  /** delete single row from the table: "transfers" */
  delete_transfers_by_pk?: Maybe<Transfers>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<AccountsMutationResponse>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "transfers" */
  insert_transfers?: Maybe<TransfersMutationResponse>;
  /** insert a single row into the table: "transfers" */
  insert_transfers_one?: Maybe<Transfers>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<AccountsMutationResponse>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update data of the table: "transfers" */
  update_transfers?: Maybe<TransfersMutationResponse>;
  /** update single row of the table: "transfers" */
  update_transfers_by_pk?: Maybe<Transfers>;
  /** update data of the table: "users" */
  update_users?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
}


/** mutation root */
export interface MutationRootDeleteAccountsArgs {
  where: AccountsBoolExp;
}


/** mutation root */
export interface MutationRootDeleteAccountsByPkArgs {
  uuid: Scalars['uuid'];
}


/** mutation root */
export interface MutationRootDeleteTransfersArgs {
  where: TransfersBoolExp;
}


/** mutation root */
export interface MutationRootDeleteTransfersByPkArgs {
  uid: Scalars['uuid'];
}


/** mutation root */
export interface MutationRootDeleteUsersArgs {
  where: UsersBoolExp;
}


/** mutation root */
export interface MutationRootDeleteUsersByPkArgs {
  uuid: Scalars['uuid'];
}


/** mutation root */
export interface MutationRootInsertAccountsArgs {
  objects: Array<AccountsInsertInput>;
  on_conflict?: Maybe<AccountsOnConflict>;
}


/** mutation root */
export interface MutationRootInsertAccountsOneArgs {
  object: AccountsInsertInput;
  on_conflict?: Maybe<AccountsOnConflict>;
}


/** mutation root */
export interface MutationRootInsertTransfersArgs {
  objects: Array<TransfersInsertInput>;
  on_conflict?: Maybe<TransfersOnConflict>;
}


/** mutation root */
export interface MutationRootInsertTransfersOneArgs {
  object: TransfersInsertInput;
  on_conflict?: Maybe<TransfersOnConflict>;
}


/** mutation root */
export interface MutationRootInsertUsersArgs {
  objects: Array<UsersInsertInput>;
  on_conflict?: Maybe<UsersOnConflict>;
}


/** mutation root */
export interface MutationRootInsertUsersOneArgs {
  object: UsersInsertInput;
  on_conflict?: Maybe<UsersOnConflict>;
}


/** mutation root */
export interface MutationRootUpdateAccountsArgs {
  _inc?: Maybe<AccountsIncInput>;
  _set?: Maybe<AccountsSetInput>;
  where: AccountsBoolExp;
}


/** mutation root */
export interface MutationRootUpdateAccountsByPkArgs {
  _inc?: Maybe<AccountsIncInput>;
  _set?: Maybe<AccountsSetInput>;
  pk_columns: AccountsPkColumnsInput;
}


/** mutation root */
export interface MutationRootUpdateTransfersArgs {
  _inc?: Maybe<TransfersIncInput>;
  _set?: Maybe<TransfersSetInput>;
  where: TransfersBoolExp;
}


/** mutation root */
export interface MutationRootUpdateTransfersByPkArgs {
  _inc?: Maybe<TransfersIncInput>;
  _set?: Maybe<TransfersSetInput>;
  pk_columns: TransfersPkColumnsInput;
}


/** mutation root */
export interface MutationRootUpdateUsersArgs {
  _set?: Maybe<UsersSetInput>;
  where: UsersBoolExp;
}


/** mutation root */
export interface MutationRootUpdateUsersByPkArgs {
  _set?: Maybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
}


/** expression to compare columns of type name. All fields are combined with logical 'AND'. */
export interface NameComparisonExp {
  _eq?: Maybe<Scalars['name']>;
  _gt?: Maybe<Scalars['name']>;
  _gte?: Maybe<Scalars['name']>;
  _in?: Maybe<Array<Scalars['name']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['name']>;
  _lte?: Maybe<Scalars['name']>;
  _neq?: Maybe<Scalars['name']>;
  _nin?: Maybe<Array<Scalars['name']>>;
}


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export interface NumericComparisonExp {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
}

/** column ordering options */
export enum OrderBy {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export interface QueryRoot {
  __typename?: 'query_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: AccountsAggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "transfers" */
  transfers: Array<Transfers>;
  /** fetch aggregated fields from the table: "transfers" */
  transfers_aggregate: TransfersAggregate;
  /** fetch data from the table: "transfers" using primary key columns */
  transfers_by_pk?: Maybe<Transfers>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
}


/** query root */
export interface QueryRootAccountsArgs {
  distinct_on?: Maybe<Array<AccountsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AccountsOrderBy>>;
  where?: Maybe<AccountsBoolExp>;
}


/** query root */
export interface QueryRootAccountsAggregateArgs {
  distinct_on?: Maybe<Array<AccountsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AccountsOrderBy>>;
  where?: Maybe<AccountsBoolExp>;
}


/** query root */
export interface QueryRootAccountsByPkArgs {
  uuid: Scalars['uuid'];
}


/** query root */
export interface QueryRootTransfersArgs {
  distinct_on?: Maybe<Array<TransfersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TransfersOrderBy>>;
  where?: Maybe<TransfersBoolExp>;
}


/** query root */
export interface QueryRootTransfersAggregateArgs {
  distinct_on?: Maybe<Array<TransfersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TransfersOrderBy>>;
  where?: Maybe<TransfersBoolExp>;
}


/** query root */
export interface QueryRootTransfersByPkArgs {
  uid: Scalars['uuid'];
}


/** query root */
export interface QueryRootUsersArgs {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
}


/** query root */
export interface QueryRootUsersAggregateArgs {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
}


/** query root */
export interface QueryRootUsersByPkArgs {
  uuid: Scalars['uuid'];
}

/** subscription root */
export interface SubscriptionRoot {
  __typename?: 'subscription_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: AccountsAggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "transfers" */
  transfers: Array<Transfers>;
  /** fetch aggregated fields from the table: "transfers" */
  transfers_aggregate: TransfersAggregate;
  /** fetch data from the table: "transfers" using primary key columns */
  transfers_by_pk?: Maybe<Transfers>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
}


/** subscription root */
export interface SubscriptionRootAccountsArgs {
  distinct_on?: Maybe<Array<AccountsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AccountsOrderBy>>;
  where?: Maybe<AccountsBoolExp>;
}


/** subscription root */
export interface SubscriptionRootAccountsAggregateArgs {
  distinct_on?: Maybe<Array<AccountsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AccountsOrderBy>>;
  where?: Maybe<AccountsBoolExp>;
}


/** subscription root */
export interface SubscriptionRootAccountsByPkArgs {
  uuid: Scalars['uuid'];
}


/** subscription root */
export interface SubscriptionRootTransfersArgs {
  distinct_on?: Maybe<Array<TransfersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TransfersOrderBy>>;
  where?: Maybe<TransfersBoolExp>;
}


/** subscription root */
export interface SubscriptionRootTransfersAggregateArgs {
  distinct_on?: Maybe<Array<TransfersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TransfersOrderBy>>;
  where?: Maybe<TransfersBoolExp>;
}


/** subscription root */
export interface SubscriptionRootTransfersByPkArgs {
  uid: Scalars['uuid'];
}


/** subscription root */
export interface SubscriptionRootUsersArgs {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
}


/** subscription root */
export interface SubscriptionRootUsersAggregateArgs {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
}


/** subscription root */
export interface SubscriptionRootUsersByPkArgs {
  uuid: Scalars['uuid'];
}

/** columns and relationships of "transfers" */
export interface Transfers {
  __typename?: 'transfers';
  /** An object relationship */
  account: Accounts;
  accountNumber: Scalars['String'];
  amount: Scalars['numeric'];
  date: Scalars['date'];
  name: Scalars['name'];
  senderAccountNumber: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  uid: Scalars['uuid'];
}

/** aggregated selection of "transfers" */
export interface TransfersAggregate {
  __typename?: 'transfers_aggregate';
  aggregate?: Maybe<TransfersAggregateFields>;
  nodes: Array<Transfers>;
}

/** aggregate fields of "transfers" */
export interface TransfersAggregateFields {
  __typename?: 'transfers_aggregate_fields';
  avg?: Maybe<TransfersAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<TransfersMaxFields>;
  min?: Maybe<TransfersMinFields>;
  stddev?: Maybe<TransfersStddevFields>;
  stddev_pop?: Maybe<TransfersStddevPopFields>;
  stddev_samp?: Maybe<TransfersStddevSampFields>;
  sum?: Maybe<TransfersSumFields>;
  var_pop?: Maybe<TransfersVarPopFields>;
  var_samp?: Maybe<TransfersVarSampFields>;
  variance?: Maybe<TransfersVarianceFields>;
}


/** aggregate fields of "transfers" */
export interface TransfersAggregateFieldsCountArgs {
  columns?: Maybe<Array<TransfersSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "transfers" */
export interface TransfersAggregateOrderBy {
  avg?: Maybe<TransfersAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<TransfersMaxOrderBy>;
  min?: Maybe<TransfersMinOrderBy>;
  stddev?: Maybe<TransfersStddevOrderBy>;
  stddev_pop?: Maybe<TransfersStddevPopOrderBy>;
  stddev_samp?: Maybe<TransfersStddevSampOrderBy>;
  sum?: Maybe<TransfersSumOrderBy>;
  var_pop?: Maybe<TransfersVarPopOrderBy>;
  var_samp?: Maybe<TransfersVarSampOrderBy>;
  variance?: Maybe<TransfersVarianceOrderBy>;
}

/** input type for inserting array relation for remote table "transfers" */
export interface TransfersArrRelInsertInput {
  data: Array<TransfersInsertInput>;
  on_conflict?: Maybe<TransfersOnConflict>;
}

/** aggregate avg on columns */
export interface TransfersAvgFields {
  __typename?: 'transfers_avg_fields';
  amount?: Maybe<Scalars['Float']>;
}

/** order by avg() on columns of table "transfers" */
export interface TransfersAvgOrderBy {
  amount?: Maybe<OrderBy>;
}

/** Boolean expression to filter rows from the table "transfers". All fields are combined with a logical 'AND'. */
export interface TransfersBoolExp {
  _and?: Maybe<Array<Maybe<TransfersBoolExp>>>;
  _not?: Maybe<TransfersBoolExp>;
  _or?: Maybe<Array<Maybe<TransfersBoolExp>>>;
  account?: Maybe<AccountsBoolExp>;
  accountNumber?: Maybe<StringComparisonExp>;
  amount?: Maybe<NumericComparisonExp>;
  date?: Maybe<DateComparisonExp>;
  name?: Maybe<NameComparisonExp>;
  senderAccountNumber?: Maybe<StringComparisonExp>;
  title?: Maybe<StringComparisonExp>;
  type?: Maybe<StringComparisonExp>;
  uid?: Maybe<UuidComparisonExp>;
}

/** unique or primary key constraints on table "transfers" */
export enum TransfersConstraint {
  /** unique or primary key constraint */
  TransfersPkey = 'transfers_pkey'
}

/** input type for incrementing integer column in table "transfers" */
export interface TransfersIncInput {
  amount?: Maybe<Scalars['numeric']>;
}

/** input type for inserting data into table "transfers" */
export interface TransfersInsertInput {
  account?: Maybe<AccountsObjRelInsertInput>;
  accountNumber?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['numeric']>;
  date?: Maybe<Scalars['date']>;
  name?: Maybe<Scalars['name']>;
  senderAccountNumber?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
}

/** aggregate max on columns */
export interface TransfersMaxFields {
  __typename?: 'transfers_max_fields';
  accountNumber?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['numeric']>;
  date?: Maybe<Scalars['date']>;
  senderAccountNumber?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
}

/** order by max() on columns of table "transfers" */
export interface TransfersMaxOrderBy {
  accountNumber?: Maybe<OrderBy>;
  amount?: Maybe<OrderBy>;
  date?: Maybe<OrderBy>;
  senderAccountNumber?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  type?: Maybe<OrderBy>;
  uid?: Maybe<OrderBy>;
}

/** aggregate min on columns */
export interface TransfersMinFields {
  __typename?: 'transfers_min_fields';
  accountNumber?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['numeric']>;
  date?: Maybe<Scalars['date']>;
  senderAccountNumber?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
}

/** order by min() on columns of table "transfers" */
export interface TransfersMinOrderBy {
  accountNumber?: Maybe<OrderBy>;
  amount?: Maybe<OrderBy>;
  date?: Maybe<OrderBy>;
  senderAccountNumber?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  type?: Maybe<OrderBy>;
  uid?: Maybe<OrderBy>;
}

/** response of any mutation on the table "transfers" */
export interface TransfersMutationResponse {
  __typename?: 'transfers_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Transfers>;
}

/** input type for inserting object relation for remote table "transfers" */
export interface TransfersObjRelInsertInput {
  data: TransfersInsertInput;
  on_conflict?: Maybe<TransfersOnConflict>;
}

/** on conflict condition type for table "transfers" */
export interface TransfersOnConflict {
  constraint: TransfersConstraint;
  update_columns: Array<TransfersUpdateColumn>;
  where?: Maybe<TransfersBoolExp>;
}

/** ordering options when selecting data from "transfers" */
export interface TransfersOrderBy {
  account?: Maybe<AccountsOrderBy>;
  accountNumber?: Maybe<OrderBy>;
  amount?: Maybe<OrderBy>;
  date?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  senderAccountNumber?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  type?: Maybe<OrderBy>;
  uid?: Maybe<OrderBy>;
}

/** primary key columns input for table: "transfers" */
export interface TransfersPkColumnsInput {
  uid: Scalars['uuid'];
}

/** select columns of table "transfers" */
export enum TransfersSelectColumn {
  /** column name */
  AccountNumber = 'accountNumber',
  /** column name */
  Amount = 'amount',
  /** column name */
  Date = 'date',
  /** column name */
  Name = 'name',
  /** column name */
  SenderAccountNumber = 'senderAccountNumber',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  Uid = 'uid'
}

/** input type for updating data in table "transfers" */
export interface TransfersSetInput {
  accountNumber?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['numeric']>;
  date?: Maybe<Scalars['date']>;
  name?: Maybe<Scalars['name']>;
  senderAccountNumber?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
}

/** aggregate stddev on columns */
export interface TransfersStddevFields {
  __typename?: 'transfers_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
}

/** order by stddev() on columns of table "transfers" */
export interface TransfersStddevOrderBy {
  amount?: Maybe<OrderBy>;
}

/** aggregate stddev_pop on columns */
export interface TransfersStddevPopFields {
  __typename?: 'transfers_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
}

/** order by stddev_pop() on columns of table "transfers" */
export interface TransfersStddevPopOrderBy {
  amount?: Maybe<OrderBy>;
}

/** aggregate stddev_samp on columns */
export interface TransfersStddevSampFields {
  __typename?: 'transfers_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
}

/** order by stddev_samp() on columns of table "transfers" */
export interface TransfersStddevSampOrderBy {
  amount?: Maybe<OrderBy>;
}

/** aggregate sum on columns */
export interface TransfersSumFields {
  __typename?: 'transfers_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
}

/** order by sum() on columns of table "transfers" */
export interface TransfersSumOrderBy {
  amount?: Maybe<OrderBy>;
}

/** update columns of table "transfers" */
export enum TransfersUpdateColumn {
  /** column name */
  AccountNumber = 'accountNumber',
  /** column name */
  Amount = 'amount',
  /** column name */
  Date = 'date',
  /** column name */
  Name = 'name',
  /** column name */
  SenderAccountNumber = 'senderAccountNumber',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  Uid = 'uid'
}

/** aggregate var_pop on columns */
export interface TransfersVarPopFields {
  __typename?: 'transfers_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
}

/** order by var_pop() on columns of table "transfers" */
export interface TransfersVarPopOrderBy {
  amount?: Maybe<OrderBy>;
}

/** aggregate var_samp on columns */
export interface TransfersVarSampFields {
  __typename?: 'transfers_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
}

/** order by var_samp() on columns of table "transfers" */
export interface TransfersVarSampOrderBy {
  amount?: Maybe<OrderBy>;
}

/** aggregate variance on columns */
export interface TransfersVarianceFields {
  __typename?: 'transfers_variance_fields';
  amount?: Maybe<Scalars['Float']>;
}

/** order by variance() on columns of table "transfers" */
export interface TransfersVarianceOrderBy {
  amount?: Maybe<OrderBy>;
}

/** columns and relationships of "users" */
export interface Users {
  __typename?: 'users';
  email: Scalars['String'];
  fullName: Scalars['name'];
  uuid: Scalars['uuid'];
}

/** aggregated selection of "users" */
export interface UsersAggregate {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
}

/** aggregate fields of "users" */
export interface UsersAggregateFields {
  __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
}


/** aggregate fields of "users" */
export interface UsersAggregateFieldsCountArgs {
  columns?: Maybe<Array<UsersSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "users" */
export interface UsersAggregateOrderBy {
  count?: Maybe<OrderBy>;
  max?: Maybe<UsersMaxOrderBy>;
  min?: Maybe<UsersMinOrderBy>;
}

/** input type for inserting array relation for remote table "users" */
export interface UsersArrRelInsertInput {
  data: Array<UsersInsertInput>;
  on_conflict?: Maybe<UsersOnConflict>;
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export interface UsersBoolExp {
  _and?: Maybe<Array<Maybe<UsersBoolExp>>>;
  _not?: Maybe<UsersBoolExp>;
  _or?: Maybe<Array<Maybe<UsersBoolExp>>>;
  email?: Maybe<StringComparisonExp>;
  fullName?: Maybe<NameComparisonExp>;
  uuid?: Maybe<UuidComparisonExp>;
}

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export interface UsersInsertInput {
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['name']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** aggregate max on columns */
export interface UsersMaxFields {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** order by max() on columns of table "users" */
export interface UsersMaxOrderBy {
  email?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
}

/** aggregate min on columns */
export interface UsersMinFields {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** order by min() on columns of table "users" */
export interface UsersMinOrderBy {
  email?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
}

/** response of any mutation on the table "users" */
export interface UsersMutationResponse {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
}

/** input type for inserting object relation for remote table "users" */
export interface UsersObjRelInsertInput {
  data: UsersInsertInput;
  on_conflict?: Maybe<UsersOnConflict>;
}

/** on conflict condition type for table "users" */
export interface UsersOnConflict {
  constraint: UsersConstraint;
  update_columns: Array<UsersUpdateColumn>;
  where?: Maybe<UsersBoolExp>;
}

/** ordering options when selecting data from "users" */
export interface UsersOrderBy {
  email?: Maybe<OrderBy>;
  fullName?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
}

/** primary key columns input for table: "users" */
export interface UsersPkColumnsInput {
  uuid: Scalars['uuid'];
}

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  Email = 'email',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "users" */
export interface UsersSetInput {
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['name']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  Email = 'email',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Uuid = 'uuid'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export interface UuidComparisonExp {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
}

export type TransfersQueryVariables = Exact<{ [key: string]: never; }>;


export type TransfersQuery = (
  { __typename?: 'query_root' }
  & { transfers: Array<(
    { __typename?: 'transfers' }
    & Pick<Transfers, 'amount' | 'date' | 'name' | 'senderAccountNumber' | 'title' | 'type'>
  )> }
);

export type AddTransferMutationVariables = Exact<{
  accountNumber: Scalars['String'];
  amount: Scalars['numeric'];
  date: Scalars['date'];
  name: Scalars['name'];
  senderAccountNumber: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
}>;


export type AddTransferMutation = (
  { __typename?: 'mutation_root' }
  & { insert_transfers?: Maybe<(
    { __typename?: 'transfers_mutation_response' }
    & { returning: Array<(
      { __typename?: 'transfers' }
      & Pick<Transfers, 'accountNumber' | 'amount' | 'date' | 'name' | 'senderAccountNumber' | 'title' | 'type'>
      & { account: (
        { __typename?: 'accounts' }
        & Pick<Accounts, 'balance'>
      ) }
    )> }
  )> }
);

export const TransfersDocument = gql`
    query Transfers {
  transfers {
    amount
    date
    name
    senderAccountNumber
    title
    type
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TransfersGQL extends Apollo.Query<TransfersQuery, TransfersQueryVariables> {
    document = TransfersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddTransferDocument = gql`
    mutation AddTransfer($accountNumber: String!, $amount: numeric!, $date: date!, $name: name!, $senderAccountNumber: String!, $title: String!, $type: String!) {
  insert_transfers(
    objects: {accountNumber: $accountNumber, amount: $amount, date: $date, name: $name, senderAccountNumber: $senderAccountNumber, title: $title, type: $type}
  ) {
    returning {
      accountNumber
      amount
      date
      name
      senderAccountNumber
      title
      type
      account {
        balance
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddTransferGQL extends Apollo.Mutation<AddTransferMutation, AddTransferMutationVariables> {
    document = AddTransferDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }