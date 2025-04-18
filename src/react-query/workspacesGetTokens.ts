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
import { workspacesGetTokens } from "../funcs/workspacesGetTokens.js";
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

export type WorkspacesGetTokensQueryData = Array<shared.WorkspaceToken>;

/**
 * Get tokens for a particular workspace
 */
export function useWorkspacesGetTokens(
  request: operations.GetWorkspaceTokensRequest,
  options?: QueryHookOptions<WorkspacesGetTokensQueryData>,
): UseQueryResult<WorkspacesGetTokensQueryData, Error> {
  const client = useSpeakeasyContext();
  return useQuery({
    ...buildWorkspacesGetTokensQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get tokens for a particular workspace
 */
export function useWorkspacesGetTokensSuspense(
  request: operations.GetWorkspaceTokensRequest,
  options?: SuspenseQueryHookOptions<WorkspacesGetTokensQueryData>,
): UseSuspenseQueryResult<WorkspacesGetTokensQueryData, Error> {
  const client = useSpeakeasyContext();
  return useSuspenseQuery({
    ...buildWorkspacesGetTokensQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchWorkspacesGetTokens(
  queryClient: QueryClient,
  client$: SpeakeasyCore,
  request: operations.GetWorkspaceTokensRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildWorkspacesGetTokensQuery(
      client$,
      request,
    ),
  });
}

export function setWorkspacesGetTokensData(
  client: QueryClient,
  queryKeyBase: [workspaceId: string | undefined],
  data: WorkspacesGetTokensQueryData,
): WorkspacesGetTokensQueryData | undefined {
  const key = queryKeyWorkspacesGetTokens(...queryKeyBase);

  return client.setQueryData<WorkspacesGetTokensQueryData>(key, data);
}

export function invalidateWorkspacesGetTokens(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<[workspaceId: string | undefined]>,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-api/speakeasy-client-sdk-typescript",
      "Workspaces",
      "getTokens",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllWorkspacesGetTokens(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-api/speakeasy-client-sdk-typescript",
      "Workspaces",
      "getTokens",
    ],
  });
}

export function buildWorkspacesGetTokensQuery(
  client$: SpeakeasyCore,
  request: operations.GetWorkspaceTokensRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<WorkspacesGetTokensQueryData>;
} {
  return {
    queryKey: queryKeyWorkspacesGetTokens(request.workspaceId),
    queryFn: async function workspacesGetTokensQueryFn(
      ctx,
    ): Promise<WorkspacesGetTokensQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(workspacesGetTokens(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyWorkspacesGetTokens(
  workspaceId: string | undefined,
): QueryKey {
  return [
    "@speakeasy-api/speakeasy-client-sdk-typescript",
    "Workspaces",
    "getTokens",
    workspaceId,
  ];
}
