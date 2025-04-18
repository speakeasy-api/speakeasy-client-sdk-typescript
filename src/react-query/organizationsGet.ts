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
import { organizationsGet } from "../funcs/organizationsGet.js";
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

export type OrganizationsGetQueryData = shared.Organization;

/**
 * Get organization
 *
 * @remarks
 * Get information about a particular organization.
 */
export function useOrganizationsGet(
  request: operations.GetOrganizationRequest,
  options?: QueryHookOptions<OrganizationsGetQueryData>,
): UseQueryResult<OrganizationsGetQueryData, Error> {
  const client = useSpeakeasyContext();
  return useQuery({
    ...buildOrganizationsGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get organization
 *
 * @remarks
 * Get information about a particular organization.
 */
export function useOrganizationsGetSuspense(
  request: operations.GetOrganizationRequest,
  options?: SuspenseQueryHookOptions<OrganizationsGetQueryData>,
): UseSuspenseQueryResult<OrganizationsGetQueryData, Error> {
  const client = useSpeakeasyContext();
  return useSuspenseQuery({
    ...buildOrganizationsGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchOrganizationsGet(
  queryClient: QueryClient,
  client$: SpeakeasyCore,
  request: operations.GetOrganizationRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildOrganizationsGetQuery(
      client$,
      request,
    ),
  });
}

export function setOrganizationsGetData(
  client: QueryClient,
  queryKeyBase: [organizationID: string],
  data: OrganizationsGetQueryData,
): OrganizationsGetQueryData | undefined {
  const key = queryKeyOrganizationsGet(...queryKeyBase);

  return client.setQueryData<OrganizationsGetQueryData>(key, data);
}

export function invalidateOrganizationsGet(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<[organizationID: string]>,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-api/speakeasy-client-sdk-typescript",
      "Organizations",
      "get",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllOrganizationsGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-api/speakeasy-client-sdk-typescript",
      "Organizations",
      "get",
    ],
  });
}

export function buildOrganizationsGetQuery(
  client$: SpeakeasyCore,
  request: operations.GetOrganizationRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<OrganizationsGetQueryData>;
} {
  return {
    queryKey: queryKeyOrganizationsGet(request.organizationID),
    queryFn: async function organizationsGetQueryFn(
      ctx,
    ): Promise<OrganizationsGetQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(organizationsGet(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyOrganizationsGet(organizationID: string): QueryKey {
  return [
    "@speakeasy-api/speakeasy-client-sdk-typescript",
    "Organizations",
    "get",
    organizationID,
  ];
}
