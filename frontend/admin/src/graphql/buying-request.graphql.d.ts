/* 5bfcab11ca88945c08a2bb5cdf30cce69cae1727
 * This file is automatically generated by graphql-let. */

import * as Types from "graphql-let/__generated__/__types__";
import * as Apollo from '@apollo/client';
export declare type BuyingRequestsQueryVariables = Types.Exact<{
  companyId: Types.Scalars['Int'];
  input: Types.FetchBrInput;
}>;
export declare type BuyingRequestsQuery = {
  __typename?: 'Query';
  adminBuyingRequests: {
    __typename?: 'BuyingRequestsResponse';
    data: Array<Types.Maybe<{
      __typename?: 'BuyingRequest';
      id: string;
      name: string;
      slug: string;
      productName: string;
      endDate: any;
      minBudget: any;
      maxBudget: any;
      minOrder: number;
      unit: string;
      status: string;
      createdAt: any;
      updatedAt: any;
      location: string;
      description?: Types.Maybe<string>;
      biddersLimit?: Types.Maybe<number>;
      industry: {
        __typename?: 'Industry';
        id?: Types.Maybe<string>;
        name: string;
      };
      categories: Array<{
        __typename?: 'Category';
        id?: Types.Maybe<string>;
        name: string;
      }>;
      gallery?: Types.Maybe<Array<Types.Maybe<{
        __typename?: 'File';
        location?: Types.Maybe<string>;
        path?: Types.Maybe<string>;
      }>>>;
      createdBy: {
        __typename?: 'User';
        id?: Types.Maybe<number>;
        firstName?: Types.Maybe<string>;
        lastName?: Types.Maybe<string>;
        email?: Types.Maybe<string>;
      };
      projects?: Types.Maybe<Array<Types.Maybe<{
        __typename?: 'Project';
        id: number;
        name: string;
      }>>>;
      allowedCompany?: Types.Maybe<{
        __typename?: 'AllowedCompany';
        minSupplierExperience?: Types.Maybe<number>;
        minSupplierRating?: Types.Maybe<number>;
        minSuplierSells?: Types.Maybe<number>;
      }>;
    }>>;
    pagination: {
      __typename?: 'Pagination';
      dataCount: number;
      hasMore: boolean;
    };
  };
};
export declare type BuyingRequestPartsFragment = {
  __typename?: 'BuyingRequest';
  id: string;
  name: string;
  slug: string;
  productName: string;
  endDate: any;
  minBudget: any;
  maxBudget: any;
  minOrder: number;
  unit: string;
  status: string;
  createdAt: any;
  updatedAt: any;
  location: string;
  description?: Types.Maybe<string>;
  biddersLimit?: Types.Maybe<number>;
  industry: {
    __typename?: 'Industry';
    id?: Types.Maybe<string>;
    name: string;
  };
  categories: Array<{
    __typename?: 'Category';
    id?: Types.Maybe<string>;
    name: string;
  }>;
  gallery?: Types.Maybe<Array<Types.Maybe<{
    __typename?: 'File';
    location?: Types.Maybe<string>;
    path?: Types.Maybe<string>;
  }>>>;
  createdBy: {
    __typename?: 'User';
    id?: Types.Maybe<number>;
    firstName?: Types.Maybe<string>;
    lastName?: Types.Maybe<string>;
    email?: Types.Maybe<string>;
  };
  projects?: Types.Maybe<Array<Types.Maybe<{
    __typename?: 'Project';
    id: number;
    name: string;
  }>>>;
  allowedCompany?: Types.Maybe<{
    __typename?: 'AllowedCompany';
    minSupplierExperience?: Types.Maybe<number>;
    minSupplierRating?: Types.Maybe<number>;
    minSuplierSells?: Types.Maybe<number>;
  }>;
};
export declare type PaginationPartsFragment = {
  __typename?: 'Pagination';
  dataCount: number;
  hasMore: boolean;
};
export declare type BuyingRequestBySlugQueryVariables = Types.Exact<{
  slug: Types.Scalars['String'];
}>;
export declare type BuyingRequestBySlugQuery = {
  __typename?: 'Query';
  buyingRequestBySlug: {
    __typename?: 'BuyingRequest';
    id: string;
    name: string;
    slug: string;
    productName: string;
    endDate: any;
    minBudget: any;
    maxBudget: any;
    minOrder: number;
    unit: string;
    status: string;
    createdAt: any;
    updatedAt: any;
    location: string;
    description?: Types.Maybe<string>;
    biddersLimit?: Types.Maybe<number>;
    industry: {
      __typename?: 'Industry';
      id?: Types.Maybe<string>;
      name: string;
    };
    categories: Array<{
      __typename?: 'Category';
      id?: Types.Maybe<string>;
      name: string;
    }>;
    gallery?: Types.Maybe<Array<Types.Maybe<{
      __typename?: 'File';
      location?: Types.Maybe<string>;
      path?: Types.Maybe<string>;
    }>>>;
    createdBy: {
      __typename?: 'User';
      id?: Types.Maybe<number>;
      firstName?: Types.Maybe<string>;
      lastName?: Types.Maybe<string>;
      email?: Types.Maybe<string>;
    };
    projects?: Types.Maybe<Array<Types.Maybe<{
      __typename?: 'Project';
      id: number;
      name: string;
    }>>>;
    allowedCompany?: Types.Maybe<{
      __typename?: 'AllowedCompany';
      minSupplierExperience?: Types.Maybe<number>;
      minSupplierRating?: Types.Maybe<number>;
      minSuplierSells?: Types.Maybe<number>;
    }>;
  };
};
export declare type BuyingRequestQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;
export declare type BuyingRequestQuery = {
  __typename?: 'Query';
  buyingRequest: {
    __typename?: 'BuyingRequest';
    id: string;
    name: string;
    slug: string;
    productName: string;
    endDate: any;
    minBudget: any;
    maxBudget: any;
    minOrder: number;
    unit: string;
    status: string;
    createdAt: any;
    updatedAt: any;
    location: string;
    description?: Types.Maybe<string>;
    biddersLimit?: Types.Maybe<number>;
    industry: {
      __typename?: 'Industry';
      id?: Types.Maybe<string>;
      name: string;
    };
    categories: Array<{
      __typename?: 'Category';
      id?: Types.Maybe<string>;
      name: string;
    }>;
    gallery?: Types.Maybe<Array<Types.Maybe<{
      __typename?: 'File';
      location?: Types.Maybe<string>;
      path?: Types.Maybe<string>;
    }>>>;
    createdBy: {
      __typename?: 'User';
      id?: Types.Maybe<number>;
      firstName?: Types.Maybe<string>;
      lastName?: Types.Maybe<string>;
      email?: Types.Maybe<string>;
    };
    projects?: Types.Maybe<Array<Types.Maybe<{
      __typename?: 'Project';
      id: number;
      name: string;
    }>>>;
    allowedCompany?: Types.Maybe<{
      __typename?: 'AllowedCompany';
      minSupplierExperience?: Types.Maybe<number>;
      minSupplierRating?: Types.Maybe<number>;
      minSuplierSells?: Types.Maybe<number>;
    }>;
  };
};
export declare type GetBuyingRequestsByIdsQueryVariables = Types.Exact<{
  ids: Array<Types.Maybe<Types.Scalars['Int']>> | Types.Maybe<Types.Scalars['Int']>;
}>;
export declare type GetBuyingRequestsByIdsQuery = {
  __typename?: 'Query';
  getBuyingRequestsByIds: Array<Types.Maybe<{
    __typename?: 'BuyingRequest';
    id: string;
    name: string;
    slug: string;
    productName: string;
    endDate: any;
    minBudget: any;
    maxBudget: any;
    minOrder: number;
    unit: string;
    status: string;
    createdAt: any;
    updatedAt: any;
    location: string;
    description?: Types.Maybe<string>;
    biddersLimit?: Types.Maybe<number>;
    industry: {
      __typename?: 'Industry';
      id?: Types.Maybe<string>;
      name: string;
    };
    categories: Array<{
      __typename?: 'Category';
      id?: Types.Maybe<string>;
      name: string;
    }>;
    gallery?: Types.Maybe<Array<Types.Maybe<{
      __typename?: 'File';
      location?: Types.Maybe<string>;
      path?: Types.Maybe<string>;
    }>>>;
    createdBy: {
      __typename?: 'User';
      id?: Types.Maybe<number>;
      firstName?: Types.Maybe<string>;
      lastName?: Types.Maybe<string>;
      email?: Types.Maybe<string>;
    };
    projects?: Types.Maybe<Array<Types.Maybe<{
      __typename?: 'Project';
      id: number;
      name: string;
    }>>>;
    allowedCompany?: Types.Maybe<{
      __typename?: 'AllowedCompany';
      minSupplierExperience?: Types.Maybe<number>;
      minSupplierRating?: Types.Maybe<number>;
      minSuplierSells?: Types.Maybe<number>;
    }>;
  }>>;
};
export declare type CreateBuyingRequestMutationVariables = Types.Exact<{
  input?: Types.Maybe<Types.CreateBuyingRequestInput>;
}>;
export declare type CreateBuyingRequestMutation = {
  __typename?: 'Mutation';
  createBuyingRequest: {
    __typename?: 'Response';
    success?: Types.Maybe<boolean>;
    message?: Types.Maybe<string>;
  };
};
export declare type UpdateBuyingRequestMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
  newValue?: Types.Maybe<Types.UpdateBuyingRequestInput>;
}>;
export declare type UpdateBuyingRequestMutation = {
  __typename?: 'Mutation';
  updateBuyingRequest: {
    __typename?: 'Response';
    success?: Types.Maybe<boolean>;
    message?: Types.Maybe<string>;
  };
};
export declare type DeleteBuyingRequestMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;
export declare type DeleteBuyingRequestMutation = {
  __typename?: 'Mutation';
  deleteBuyingRequest: {
    __typename?: 'Response';
    success?: Types.Maybe<boolean>;
    message?: Types.Maybe<string>;
  };
};
export declare type DeleteBuyingRequestsMutationVariables = Types.Exact<{
  ids: Array<Types.Scalars['Int']> | Types.Scalars['Int'];
}>;
export declare type DeleteBuyingRequestsMutation = {
  __typename?: 'Mutation';
  deleteBuyingRequests: {
    __typename?: 'Response';
    success?: Types.Maybe<boolean>;
    message?: Types.Maybe<string>;
  };
};
export declare const BuyingRequestPartsFragmentDoc: Apollo.DocumentNode;
export declare const PaginationPartsFragmentDoc: Apollo.DocumentNode;
export declare const BuyingRequestsDocument: Apollo.DocumentNode;
/**
 * __useBuyingRequestsQuery__
 *
 * To run a query within a React component, call `useBuyingRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBuyingRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBuyingRequestsQuery({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      input: // value for 'input'
 *   },
 * });
 */

export declare function useBuyingRequestsQuery(baseOptions: Apollo.QueryHookOptions<BuyingRequestsQuery, BuyingRequestsQueryVariables>): Apollo.QueryResult<BuyingRequestsQuery, Types.Exact<{
  companyId: number;
  input: Types.FetchBrInput;
}>>;
export declare function useBuyingRequestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BuyingRequestsQuery, BuyingRequestsQueryVariables>): Apollo.QueryTuple<BuyingRequestsQuery, Types.Exact<{
  companyId: number;
  input: Types.FetchBrInput;
}>>;
export declare type BuyingRequestsQueryHookResult = ReturnType<typeof useBuyingRequestsQuery>;
export declare type BuyingRequestsLazyQueryHookResult = ReturnType<typeof useBuyingRequestsLazyQuery>;
export declare type BuyingRequestsQueryResult = Apollo.QueryResult<BuyingRequestsQuery, BuyingRequestsQueryVariables>;
export declare const BuyingRequestBySlugDocument: Apollo.DocumentNode;
/**
 * __useBuyingRequestBySlugQuery__
 *
 * To run a query within a React component, call `useBuyingRequestBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useBuyingRequestBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBuyingRequestBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */

export declare function useBuyingRequestBySlugQuery(baseOptions: Apollo.QueryHookOptions<BuyingRequestBySlugQuery, BuyingRequestBySlugQueryVariables>): Apollo.QueryResult<BuyingRequestBySlugQuery, Types.Exact<{
  slug: string;
}>>;
export declare function useBuyingRequestBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BuyingRequestBySlugQuery, BuyingRequestBySlugQueryVariables>): Apollo.QueryTuple<BuyingRequestBySlugQuery, Types.Exact<{
  slug: string;
}>>;
export declare type BuyingRequestBySlugQueryHookResult = ReturnType<typeof useBuyingRequestBySlugQuery>;
export declare type BuyingRequestBySlugLazyQueryHookResult = ReturnType<typeof useBuyingRequestBySlugLazyQuery>;
export declare type BuyingRequestBySlugQueryResult = Apollo.QueryResult<BuyingRequestBySlugQuery, BuyingRequestBySlugQueryVariables>;
export declare const BuyingRequestDocument: Apollo.DocumentNode;
/**
 * __useBuyingRequestQuery__
 *
 * To run a query within a React component, call `useBuyingRequestQuery` and pass it any options that fit your needs.
 * When your component renders, `useBuyingRequestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBuyingRequestQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */

export declare function useBuyingRequestQuery(baseOptions: Apollo.QueryHookOptions<BuyingRequestQuery, BuyingRequestQueryVariables>): Apollo.QueryResult<BuyingRequestQuery, Types.Exact<{
  id: number;
}>>;
export declare function useBuyingRequestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BuyingRequestQuery, BuyingRequestQueryVariables>): Apollo.QueryTuple<BuyingRequestQuery, Types.Exact<{
  id: number;
}>>;
export declare type BuyingRequestQueryHookResult = ReturnType<typeof useBuyingRequestQuery>;
export declare type BuyingRequestLazyQueryHookResult = ReturnType<typeof useBuyingRequestLazyQuery>;
export declare type BuyingRequestQueryResult = Apollo.QueryResult<BuyingRequestQuery, BuyingRequestQueryVariables>;
export declare const GetBuyingRequestsByIdsDocument: Apollo.DocumentNode;
/**
 * __useGetBuyingRequestsByIdsQuery__
 *
 * To run a query within a React component, call `useGetBuyingRequestsByIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBuyingRequestsByIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBuyingRequestsByIdsQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */

export declare function useGetBuyingRequestsByIdsQuery(baseOptions: Apollo.QueryHookOptions<GetBuyingRequestsByIdsQuery, GetBuyingRequestsByIdsQueryVariables>): Apollo.QueryResult<GetBuyingRequestsByIdsQuery, Types.Exact<{
  ids: Types.Maybe<number> | Types.Maybe<number>[];
}>>;
export declare function useGetBuyingRequestsByIdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBuyingRequestsByIdsQuery, GetBuyingRequestsByIdsQueryVariables>): Apollo.QueryTuple<GetBuyingRequestsByIdsQuery, Types.Exact<{
  ids: Types.Maybe<number> | Types.Maybe<number>[];
}>>;
export declare type GetBuyingRequestsByIdsQueryHookResult = ReturnType<typeof useGetBuyingRequestsByIdsQuery>;
export declare type GetBuyingRequestsByIdsLazyQueryHookResult = ReturnType<typeof useGetBuyingRequestsByIdsLazyQuery>;
export declare type GetBuyingRequestsByIdsQueryResult = Apollo.QueryResult<GetBuyingRequestsByIdsQuery, GetBuyingRequestsByIdsQueryVariables>;
export declare const CreateBuyingRequestDocument: Apollo.DocumentNode;
export declare type CreateBuyingRequestMutationFn = Apollo.MutationFunction<CreateBuyingRequestMutation, CreateBuyingRequestMutationVariables>;
/**
 * __useCreateBuyingRequestMutation__
 *
 * To run a mutation, you first call `useCreateBuyingRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBuyingRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBuyingRequestMutation, { data, loading, error }] = useCreateBuyingRequestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */

export declare function useCreateBuyingRequestMutation(baseOptions?: Apollo.MutationHookOptions<CreateBuyingRequestMutation, CreateBuyingRequestMutationVariables>): Apollo.MutationTuple<CreateBuyingRequestMutation, Types.Exact<{
  input?: Types.Maybe<Types.CreateBuyingRequestInput> | undefined;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export declare type CreateBuyingRequestMutationHookResult = ReturnType<typeof useCreateBuyingRequestMutation>;
export declare type CreateBuyingRequestMutationResult = Apollo.MutationResult<CreateBuyingRequestMutation>;
export declare type CreateBuyingRequestMutationOptions = Apollo.BaseMutationOptions<CreateBuyingRequestMutation, CreateBuyingRequestMutationVariables>;
export declare const UpdateBuyingRequestDocument: Apollo.DocumentNode;
export declare type UpdateBuyingRequestMutationFn = Apollo.MutationFunction<UpdateBuyingRequestMutation, UpdateBuyingRequestMutationVariables>;
/**
 * __useUpdateBuyingRequestMutation__
 *
 * To run a mutation, you first call `useUpdateBuyingRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBuyingRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBuyingRequestMutation, { data, loading, error }] = useUpdateBuyingRequestMutation({
 *   variables: {
 *      id: // value for 'id'
 *      newValue: // value for 'newValue'
 *   },
 * });
 */

export declare function useUpdateBuyingRequestMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBuyingRequestMutation, UpdateBuyingRequestMutationVariables>): Apollo.MutationTuple<UpdateBuyingRequestMutation, Types.Exact<{
  id: number;
  newValue?: Types.Maybe<Types.UpdateBuyingRequestInput> | undefined;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export declare type UpdateBuyingRequestMutationHookResult = ReturnType<typeof useUpdateBuyingRequestMutation>;
export declare type UpdateBuyingRequestMutationResult = Apollo.MutationResult<UpdateBuyingRequestMutation>;
export declare type UpdateBuyingRequestMutationOptions = Apollo.BaseMutationOptions<UpdateBuyingRequestMutation, UpdateBuyingRequestMutationVariables>;
export declare const DeleteBuyingRequestDocument: Apollo.DocumentNode;
export declare type DeleteBuyingRequestMutationFn = Apollo.MutationFunction<DeleteBuyingRequestMutation, DeleteBuyingRequestMutationVariables>;
/**
 * __useDeleteBuyingRequestMutation__
 *
 * To run a mutation, you first call `useDeleteBuyingRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBuyingRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBuyingRequestMutation, { data, loading, error }] = useDeleteBuyingRequestMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */

export declare function useDeleteBuyingRequestMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBuyingRequestMutation, DeleteBuyingRequestMutationVariables>): Apollo.MutationTuple<DeleteBuyingRequestMutation, Types.Exact<{
  id: number;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export declare type DeleteBuyingRequestMutationHookResult = ReturnType<typeof useDeleteBuyingRequestMutation>;
export declare type DeleteBuyingRequestMutationResult = Apollo.MutationResult<DeleteBuyingRequestMutation>;
export declare type DeleteBuyingRequestMutationOptions = Apollo.BaseMutationOptions<DeleteBuyingRequestMutation, DeleteBuyingRequestMutationVariables>;
export declare const DeleteBuyingRequestsDocument: Apollo.DocumentNode;
export declare type DeleteBuyingRequestsMutationFn = Apollo.MutationFunction<DeleteBuyingRequestsMutation, DeleteBuyingRequestsMutationVariables>;
/**
 * __useDeleteBuyingRequestsMutation__
 *
 * To run a mutation, you first call `useDeleteBuyingRequestsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBuyingRequestsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBuyingRequestsMutation, { data, loading, error }] = useDeleteBuyingRequestsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */

export declare function useDeleteBuyingRequestsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBuyingRequestsMutation, DeleteBuyingRequestsMutationVariables>): Apollo.MutationTuple<DeleteBuyingRequestsMutation, Types.Exact<{
  ids: number | number[];
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export declare type DeleteBuyingRequestsMutationHookResult = ReturnType<typeof useDeleteBuyingRequestsMutation>;
export declare type DeleteBuyingRequestsMutationResult = Apollo.MutationResult<DeleteBuyingRequestsMutation>;
export declare type DeleteBuyingRequestsMutationOptions = Apollo.BaseMutationOptions<DeleteBuyingRequestsMutation, DeleteBuyingRequestsMutationVariables>;