/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  InvalidateQueryFilters,
  QueryClient,
  QueryFunctionContext,
  QueryKey,
  useQuery,
  UseQueryResult,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { SpeakeasyCore } from "../core.js";
import { codeSamplesGet } from "../funcs/codeSamplesGet.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../sdk/models/operations/index.js";
import * as shared from "../sdk/models/shared/index.js";
import { unwrapAsync } from "../sdk/types/fp.js";
import { useSpeakeasyContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type CodeSamplesGetQueryData = shared.UsageSnippets;

/**
 * Retrieve usage snippets
 *
 * @remarks
 * Retrieve usage snippets from an OpenAPI document stored in the registry. Supports filtering by language and operation ID.
 */
export function useCodeSamplesGet(
  request: operations.GetCodeSamplesRequest,
  options?: QueryHookOptions<CodeSamplesGetQueryData>,
): UseQueryResult<CodeSamplesGetQueryData, Error> {
  const client = useSpeakeasyContext();
  return useQuery({
    ...buildCodeSamplesGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Retrieve usage snippets
 *
 * @remarks
 * Retrieve usage snippets from an OpenAPI document stored in the registry. Supports filtering by language and operation ID.
 */
export function useCodeSamplesGetSuspense(
  request: operations.GetCodeSamplesRequest,
  options?: SuspenseQueryHookOptions<CodeSamplesGetQueryData>,
): UseSuspenseQueryResult<CodeSamplesGetQueryData, Error> {
  const client = useSpeakeasyContext();
  return useSuspenseQuery({
    ...buildCodeSamplesGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchCodeSamplesGet(
  queryClient: QueryClient,
  client$: SpeakeasyCore,
  request: operations.GetCodeSamplesRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildCodeSamplesGetQuery(
      client$,
      request,
    ),
  });
}

export function setCodeSamplesGetData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      registryUrl: string;
      operationIds?: Array<string> | undefined;
      methodPaths?: Array<operations.MethodPaths> | undefined;
      languages?: Array<string> | undefined;
    },
  ],
  data: CodeSamplesGetQueryData,
): CodeSamplesGetQueryData | undefined {
  const key = queryKeyCodeSamplesGet(...queryKeyBase);

  return client.setQueryData<CodeSamplesGetQueryData>(key, data);
}

export function invalidateCodeSamplesGet(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: {
      registryUrl: string;
      operationIds?: Array<string> | undefined;
      methodPaths?: Array<operations.MethodPaths> | undefined;
      languages?: Array<string> | undefined;
    }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-api/speakeasy-client-sdk-typescript",
      "CodeSamples",
      "get",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllCodeSamplesGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-api/speakeasy-client-sdk-typescript",
      "CodeSamples",
      "get",
    ],
  });
}

export function buildCodeSamplesGetQuery(
  client$: SpeakeasyCore,
  request: operations.GetCodeSamplesRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<CodeSamplesGetQueryData>;
} {
  return {
    queryKey: queryKeyCodeSamplesGet({
      registryUrl: request.registryUrl,
      operationIds: request.operationIds,
      methodPaths: request.methodPaths,
      languages: request.languages,
    }),
    queryFn: async function codeSamplesGetQueryFn(
      ctx,
    ): Promise<CodeSamplesGetQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(codeSamplesGet(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyCodeSamplesGet(
  parameters: {
    registryUrl: string;
    operationIds?: Array<string> | undefined;
    methodPaths?: Array<operations.MethodPaths> | undefined;
    languages?: Array<string> | undefined;
  },
): QueryKey {
  return [
    "@speakeasy-api/speakeasy-client-sdk-typescript",
    "CodeSamples",
    "get",
    parameters,
  ];
}
