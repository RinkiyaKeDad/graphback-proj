/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  GraphbackObjectID: string;
};

export type CreateTodoInput = {
  _id?: Maybe<Scalars['GraphbackObjectID']>;
  title: Scalars['String'];
};


export type GraphbackObjectIdInput = {
  ne?: Maybe<Scalars['GraphbackObjectID']>;
  eq?: Maybe<Scalars['GraphbackObjectID']>;
  le?: Maybe<Scalars['GraphbackObjectID']>;
  lt?: Maybe<Scalars['GraphbackObjectID']>;
  ge?: Maybe<Scalars['GraphbackObjectID']>;
  gt?: Maybe<Scalars['GraphbackObjectID']>;
  in?: Maybe<Array<Scalars['GraphbackObjectID']>>;
  between?: Maybe<Array<Scalars['GraphbackObjectID']>>;
};

export type MutateTodoInput = {
  _id: Scalars['GraphbackObjectID'];
  title?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo?: Maybe<Todo>;
  updateTodo?: Maybe<Todo>;
  deleteTodo?: Maybe<Todo>;
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationUpdateTodoArgs = {
  input: MutateTodoInput;
};


export type MutationDeleteTodoArgs = {
  input: MutateTodoInput;
};

export type OrderByInput = {
  field: Scalars['String'];
  order?: Maybe<SortDirectionEnum>;
};

export type PageRequest = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

/** @model */
export type Query = {
  __typename?: 'Query';
  getDraftTodos?: Maybe<Array<Maybe<Todo>>>;
  getTodo?: Maybe<Todo>;
  findTodos: TodoResultList;
};


/** @model */
export type QueryGetTodoArgs = {
  id: Scalars['GraphbackObjectID'];
};


/** @model */
export type QueryFindTodosArgs = {
  filter?: Maybe<TodoFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};

export enum SortDirectionEnum {
  Desc = 'DESC',
  Asc = 'ASC'
}

export type StringInput = {
  ne?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newTodo: Todo;
  updatedTodo: Todo;
  deletedTodo: Todo;
};


export type SubscriptionNewTodoArgs = {
  filter?: Maybe<TodoSubscriptionFilter>;
};


export type SubscriptionUpdatedTodoArgs = {
  filter?: Maybe<TodoSubscriptionFilter>;
};


export type SubscriptionDeletedTodoArgs = {
  filter?: Maybe<TodoSubscriptionFilter>;
};

/** @model */
export type Todo = {
  __typename?: 'Todo';
  _id: Scalars['GraphbackObjectID'];
  title: Scalars['String'];
};

export type TodoFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  title?: Maybe<StringInput>;
  and?: Maybe<Array<TodoFilter>>;
  or?: Maybe<Array<TodoFilter>>;
  not?: Maybe<TodoFilter>;
};

export type TodoResultList = {
  __typename?: 'TodoResultList';
  items: Array<Maybe<Todo>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type TodoSubscriptionFilter = {
  and?: Maybe<Array<TodoSubscriptionFilter>>;
  or?: Maybe<Array<TodoSubscriptionFilter>>;
  not?: Maybe<TodoSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  title?: Maybe<StringInput>;
};
