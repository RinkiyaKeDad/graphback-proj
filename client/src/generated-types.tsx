/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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

export type TodoFieldsFragment = (
  { __typename?: 'Todo' }
  & Pick<Todo, '_id' | 'title'>
);

export type TodoExpandedFieldsFragment = (
  { __typename?: 'Todo' }
  & Pick<Todo, '_id' | 'title'>
);

export type FindTodosQueryVariables = Exact<{
  filter?: Maybe<TodoFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
}>;


export type FindTodosQuery = (
  { __typename?: 'Query' }
  & { findTodos: (
    { __typename?: 'TodoResultList' }
    & Pick<TodoResultList, 'offset' | 'limit' | 'count'>
    & { items: Array<Maybe<(
      { __typename?: 'Todo' }
      & TodoExpandedFieldsFragment
    )>> }
  ) }
);

export type GetTodoQueryVariables = Exact<{
  id: Scalars['GraphbackObjectID'];
}>;


export type GetTodoQuery = (
  { __typename?: 'Query' }
  & { getTodo?: Maybe<(
    { __typename?: 'Todo' }
    & TodoExpandedFieldsFragment
  )> }
);

export type CreateTodoMutationVariables = Exact<{
  input: CreateTodoInput;
}>;


export type CreateTodoMutation = (
  { __typename?: 'Mutation' }
  & { createTodo?: Maybe<(
    { __typename?: 'Todo' }
    & TodoFieldsFragment
  )> }
);

export type UpdateTodoMutationVariables = Exact<{
  input: MutateTodoInput;
}>;


export type UpdateTodoMutation = (
  { __typename?: 'Mutation' }
  & { updateTodo?: Maybe<(
    { __typename?: 'Todo' }
    & TodoFieldsFragment
  )> }
);

export type DeleteTodoMutationVariables = Exact<{
  input: MutateTodoInput;
}>;


export type DeleteTodoMutation = (
  { __typename?: 'Mutation' }
  & { deleteTodo?: Maybe<(
    { __typename?: 'Todo' }
    & TodoFieldsFragment
  )> }
);

export type NewTodoSubscriptionVariables = Exact<{
  filter?: Maybe<TodoSubscriptionFilter>;
}>;


export type NewTodoSubscription = (
  { __typename?: 'Subscription' }
  & { newTodo: (
    { __typename?: 'Todo' }
    & TodoFieldsFragment
  ) }
);

export type UpdatedTodoSubscriptionVariables = Exact<{
  filter?: Maybe<TodoSubscriptionFilter>;
}>;


export type UpdatedTodoSubscription = (
  { __typename?: 'Subscription' }
  & { updatedTodo: (
    { __typename?: 'Todo' }
    & TodoFieldsFragment
  ) }
);

export type DeletedTodoSubscriptionVariables = Exact<{
  filter?: Maybe<TodoSubscriptionFilter>;
}>;


export type DeletedTodoSubscription = (
  { __typename?: 'Subscription' }
  & { deletedTodo: (
    { __typename?: 'Todo' }
    & TodoFieldsFragment
  ) }
);

export const TodoFieldsFragmentDoc = gql`
    fragment TodoFields on Todo {
  _id
  title
}
    `;
export const TodoExpandedFieldsFragmentDoc = gql`
    fragment TodoExpandedFields on Todo {
  _id
  title
}
    `;
export const FindTodosDocument = gql`
    query findTodos($filter: TodoFilter, $page: PageRequest, $orderBy: OrderByInput) {
  findTodos(filter: $filter, page: $page, orderBy: $orderBy) {
    items {
      ...TodoExpandedFields
    }
    offset
    limit
    count
  }
}
    ${TodoExpandedFieldsFragmentDoc}`;

/**
 * __useFindTodosQuery__
 *
 * To run a query within a React component, call `useFindTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTodosQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFindTodosQuery(baseOptions?: Apollo.QueryHookOptions<FindTodosQuery, FindTodosQueryVariables>) {
        return Apollo.useQuery<FindTodosQuery, FindTodosQueryVariables>(FindTodosDocument, baseOptions);
      }
export function useFindTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTodosQuery, FindTodosQueryVariables>) {
          return Apollo.useLazyQuery<FindTodosQuery, FindTodosQueryVariables>(FindTodosDocument, baseOptions);
        }
export type FindTodosQueryHookResult = ReturnType<typeof useFindTodosQuery>;
export type FindTodosLazyQueryHookResult = ReturnType<typeof useFindTodosLazyQuery>;
export type FindTodosQueryResult = Apollo.QueryResult<FindTodosQuery, FindTodosQueryVariables>;
export const GetTodoDocument = gql`
    query getTodo($id: GraphbackObjectID!) {
  getTodo(id: $id) {
    ...TodoExpandedFields
  }
}
    ${TodoExpandedFieldsFragmentDoc}`;

/**
 * __useGetTodoQuery__
 *
 * To run a query within a React component, call `useGetTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTodoQuery(baseOptions?: Apollo.QueryHookOptions<GetTodoQuery, GetTodoQueryVariables>) {
        return Apollo.useQuery<GetTodoQuery, GetTodoQueryVariables>(GetTodoDocument, baseOptions);
      }
export function useGetTodoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodoQuery, GetTodoQueryVariables>) {
          return Apollo.useLazyQuery<GetTodoQuery, GetTodoQueryVariables>(GetTodoDocument, baseOptions);
        }
export type GetTodoQueryHookResult = ReturnType<typeof useGetTodoQuery>;
export type GetTodoLazyQueryHookResult = ReturnType<typeof useGetTodoLazyQuery>;
export type GetTodoQueryResult = Apollo.QueryResult<GetTodoQuery, GetTodoQueryVariables>;
export const CreateTodoDocument = gql`
    mutation createTodo($input: CreateTodoInput!) {
  createTodo(input: $input) {
    ...TodoFields
  }
}
    ${TodoFieldsFragmentDoc}`;
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, baseOptions);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation updateTodo($input: MutateTodoInput!) {
  updateTodo(input: $input) {
    ...TodoFields
  }
}
    ${TodoFieldsFragmentDoc}`;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, baseOptions);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation deleteTodo($input: MutateTodoInput!) {
  deleteTodo(input: $input) {
    ...TodoFields
  }
}
    ${TodoFieldsFragmentDoc}`;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, baseOptions);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const NewTodoDocument = gql`
    subscription newTodo($filter: TodoSubscriptionFilter) {
  newTodo(filter: $filter) {
    ...TodoFields
  }
}
    ${TodoFieldsFragmentDoc}`;

/**
 * __useNewTodoSubscription__
 *
 * To run a query within a React component, call `useNewTodoSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewTodoSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewTodoSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useNewTodoSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewTodoSubscription, NewTodoSubscriptionVariables>) {
        return Apollo.useSubscription<NewTodoSubscription, NewTodoSubscriptionVariables>(NewTodoDocument, baseOptions);
      }
export type NewTodoSubscriptionHookResult = ReturnType<typeof useNewTodoSubscription>;
export type NewTodoSubscriptionResult = Apollo.SubscriptionResult<NewTodoSubscription>;
export const UpdatedTodoDocument = gql`
    subscription updatedTodo($filter: TodoSubscriptionFilter) {
  updatedTodo(filter: $filter) {
    ...TodoFields
  }
}
    ${TodoFieldsFragmentDoc}`;

/**
 * __useUpdatedTodoSubscription__
 *
 * To run a query within a React component, call `useUpdatedTodoSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatedTodoSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatedTodoSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUpdatedTodoSubscription(baseOptions?: Apollo.SubscriptionHookOptions<UpdatedTodoSubscription, UpdatedTodoSubscriptionVariables>) {
        return Apollo.useSubscription<UpdatedTodoSubscription, UpdatedTodoSubscriptionVariables>(UpdatedTodoDocument, baseOptions);
      }
export type UpdatedTodoSubscriptionHookResult = ReturnType<typeof useUpdatedTodoSubscription>;
export type UpdatedTodoSubscriptionResult = Apollo.SubscriptionResult<UpdatedTodoSubscription>;
export const DeletedTodoDocument = gql`
    subscription deletedTodo($filter: TodoSubscriptionFilter) {
  deletedTodo(filter: $filter) {
    ...TodoFields
  }
}
    ${TodoFieldsFragmentDoc}`;

/**
 * __useDeletedTodoSubscription__
 *
 * To run a query within a React component, call `useDeletedTodoSubscription` and pass it any options that fit your needs.
 * When your component renders, `useDeletedTodoSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeletedTodoSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useDeletedTodoSubscription(baseOptions?: Apollo.SubscriptionHookOptions<DeletedTodoSubscription, DeletedTodoSubscriptionVariables>) {
        return Apollo.useSubscription<DeletedTodoSubscription, DeletedTodoSubscriptionVariables>(DeletedTodoDocument, baseOptions);
      }
export type DeletedTodoSubscriptionHookResult = ReturnType<typeof useDeletedTodoSubscription>;
export type DeletedTodoSubscriptionResult = Apollo.SubscriptionResult<DeletedTodoSubscription>;