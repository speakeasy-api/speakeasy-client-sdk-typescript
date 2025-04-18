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
import { reportsGetChangesReportSignedUrl } from "../funcs/reportsGetChangesReportSignedUrl.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../sdk/models/operations/index.js";
import { unwrapAsync } from "../sdk/types/fp.js";
import { useSpeakeasyContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type ReportsGetChangesReportSignedUrlQueryData =
  operations.GetChangesReportSignedUrlSignedAccess;

/**
 * Get the signed access url for the change reports for a particular document.
 */
export function useReportsGetChangesReportSignedUrl(
  request: operations.GetChangesReportSignedUrlRequest,
  options?: QueryHookOptions<ReportsGetChangesReportSignedUrlQueryData>,
): UseQueryResult<ReportsGetChangesReportSignedUrlQueryData, Error> {
  const client = useSpeakeasyContext();
  return useQuery({
    ...buildReportsGetChangesReportSignedUrlQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get the signed access url for the change reports for a particular document.
 */
export function useReportsGetChangesReportSignedUrlSuspense(
  request: operations.GetChangesReportSignedUrlRequest,
  options?: SuspenseQueryHookOptions<ReportsGetChangesReportSignedUrlQueryData>,
): UseSuspenseQueryResult<ReportsGetChangesReportSignedUrlQueryData, Error> {
  const client = useSpeakeasyContext();
  return useSuspenseQuery({
    ...buildReportsGetChangesReportSignedUrlQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchReportsGetChangesReportSignedUrl(
  queryClient: QueryClient,
  client$: SpeakeasyCore,
  request: operations.GetChangesReportSignedUrlRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildReportsGetChangesReportSignedUrlQuery(
      client$,
      request,
    ),
  });
}

export function setReportsGetChangesReportSignedUrlData(
  client: QueryClient,
  queryKeyBase: [documentChecksum: string],
  data: ReportsGetChangesReportSignedUrlQueryData,
): ReportsGetChangesReportSignedUrlQueryData | undefined {
  const key = queryKeyReportsGetChangesReportSignedUrl(...queryKeyBase);

  return client.setQueryData<ReportsGetChangesReportSignedUrlQueryData>(
    key,
    data,
  );
}

export function invalidateReportsGetChangesReportSignedUrl(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<[documentChecksum: string]>,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-api/speakeasy-client-sdk-typescript",
      "Reports",
      "getChangesReportSignedUrl",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllReportsGetChangesReportSignedUrl(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-api/speakeasy-client-sdk-typescript",
      "Reports",
      "getChangesReportSignedUrl",
    ],
  });
}

export function buildReportsGetChangesReportSignedUrlQuery(
  client$: SpeakeasyCore,
  request: operations.GetChangesReportSignedUrlRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<ReportsGetChangesReportSignedUrlQueryData>;
} {
  return {
    queryKey: queryKeyReportsGetChangesReportSignedUrl(
      request.documentChecksum,
    ),
    queryFn: async function reportsGetChangesReportSignedUrlQueryFn(
      ctx,
    ): Promise<ReportsGetChangesReportSignedUrlQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(reportsGetChangesReportSignedUrl(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyReportsGetChangesReportSignedUrl(
  documentChecksum: string,
): QueryKey {
  return [
    "@speakeasy-api/speakeasy-client-sdk-typescript",
    "Reports",
    "getChangesReportSignedUrl",
    documentChecksum,
  ];
}
