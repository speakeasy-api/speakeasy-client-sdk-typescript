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
import { artifactsGetBlob } from "../funcs/artifactsGetBlob.js";
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

export type ArtifactsGetBlobQueryData = ReadableStream<Uint8Array>;

/**
 * Get blob for a particular digest
 */
export function useArtifactsGetBlob(
  request: operations.GetBlobRequest,
  options?: QueryHookOptions<ArtifactsGetBlobQueryData>,
): UseQueryResult<ArtifactsGetBlobQueryData, Error> {
  const client = useSpeakeasyContext();
  return useQuery({
    ...buildArtifactsGetBlobQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get blob for a particular digest
 */
export function useArtifactsGetBlobSuspense(
  request: operations.GetBlobRequest,
  options?: SuspenseQueryHookOptions<ArtifactsGetBlobQueryData>,
): UseSuspenseQueryResult<ArtifactsGetBlobQueryData, Error> {
  const client = useSpeakeasyContext();
  return useSuspenseQuery({
    ...buildArtifactsGetBlobQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchArtifactsGetBlob(
  queryClient: QueryClient,
  client$: SpeakeasyCore,
  request: operations.GetBlobRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildArtifactsGetBlobQuery(
      client$,
      request,
    ),
  });
}

export function setArtifactsGetBlobData(
  client: QueryClient,
  queryKeyBase: [
    organizationSlug: string,
    workspaceSlug: string,
    namespaceName: string,
    digest: string,
  ],
  data: ArtifactsGetBlobQueryData,
): ArtifactsGetBlobQueryData | undefined {
  const key = queryKeyArtifactsGetBlob(...queryKeyBase);

  return client.setQueryData<ArtifactsGetBlobQueryData>(key, data);
}

export function invalidateArtifactsGetBlob(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      organizationSlug: string,
      workspaceSlug: string,
      namespaceName: string,
      digest: string,
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-api/speakeasy-client-sdk-typescript",
      "Artifacts",
      "getBlob",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllArtifactsGetBlob(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-api/speakeasy-client-sdk-typescript",
      "Artifacts",
      "getBlob",
    ],
  });
}

export function buildArtifactsGetBlobQuery(
  client$: SpeakeasyCore,
  request: operations.GetBlobRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<ArtifactsGetBlobQueryData>;
} {
  return {
    queryKey: queryKeyArtifactsGetBlob(
      request.organizationSlug,
      request.workspaceSlug,
      request.namespaceName,
      request.digest,
    ),
    queryFn: async function artifactsGetBlobQueryFn(
      ctx,
    ): Promise<ArtifactsGetBlobQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(artifactsGetBlob(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyArtifactsGetBlob(
  organizationSlug: string,
  workspaceSlug: string,
  namespaceName: string,
  digest: string,
): QueryKey {
  return [
    "@speakeasy-api/speakeasy-client-sdk-typescript",
    "Artifacts",
    "getBlob",
    organizationSlug,
    workspaceSlug,
    namespaceName,
    digest,
  ];
}
