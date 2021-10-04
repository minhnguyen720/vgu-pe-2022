/* 9db454a7e57885e18440f0fe69a97541fa775fe2
 * This file is automatically generated by graphql-let. */

import * as Types from "graphql-let/__generated__/__types__";
import * as Apollo from '@apollo/client';
export declare type ProductNamesQueryVariables = Types.Exact<{
  [key: string]: never;
}>;
export declare type ProductNamesQuery = {
  __typename?: 'Query';
  productNames?: Types.Maybe<Array<Types.Maybe<{
    __typename?: 'ProductName';
    name?: Types.Maybe<string>;
    searchedCount?: Types.Maybe<number>;
  }>>>;
};
export declare const ProductNamesDocument: Apollo.DocumentNode;
/**
 * __useProductNamesQuery__
 *
 * To run a query within a React component, call `useProductNamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductNamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductNamesQuery({
 *   variables: {
 *   },
 * });
 */

export declare function useProductNamesQuery(baseOptions?: Apollo.QueryHookOptions<ProductNamesQuery, ProductNamesQueryVariables>): Apollo.QueryResult<ProductNamesQuery, Types.Exact<{
  [key: string]: never;
}>>;
export declare function useProductNamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductNamesQuery, ProductNamesQueryVariables>): Apollo.QueryTuple<ProductNamesQuery, Types.Exact<{
  [key: string]: never;
}>>;
export declare type ProductNamesQueryHookResult = ReturnType<typeof useProductNamesQuery>;
export declare type ProductNamesLazyQueryHookResult = ReturnType<typeof useProductNamesLazyQuery>;
export declare type ProductNamesQueryResult = Apollo.QueryResult<ProductNamesQuery, ProductNamesQueryVariables>;