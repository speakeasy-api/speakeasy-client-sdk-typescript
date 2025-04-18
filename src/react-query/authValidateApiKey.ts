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
import { authValidateApiKey } from "../funcs/authValidateApiKey.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as shared from "../sdk/models/shared/index.js";
import { unwrapAsync } from "../sdk/types/fp.js";
import { useSpeakeasyContext } from "./_context.js";
import { QueryHookOptions, SuspenseQueryHookOptions } from "./_types.js";

export type AuthValidateApiKeyQueryData = shared.ApiKeyDetails;

/**
 * Validate the current api key.
 */
export function useAuthValidateApiKey(
  options?: QueryHookOptions<AuthValidateApiKeyQueryData>,
): UseQueryResult<AuthValidateApiKeyQueryData, Error> {
  const client = useSpeakeasyContext();
  return useQuery({
    ...buildAuthValidateApiKeyQuery(
      client,
      options,
    ),
    ...options,
  });
}

/**
 * Validate the current api key.
 */
export function useAuthValidateApiKeySuspense(
  options?: SuspenseQueryHookOptions<AuthValidateApiKeyQueryData>,
): UseSuspenseQueryResult<AuthValidateApiKeyQueryData, Error> {
  const client = useSpeakeasyContext();
  return useSuspenseQuery({
    ...buildAuthValidateApiKeyQuery(
      client,
      options,
    ),
    ...options,
  });
}

export function prefetchAuthValidateApiKey(
  queryClient: QueryClient,
  client$: SpeakeasyCore,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildAuthValidateApiKeyQuery(
      client$,
    ),
  });
}

export function setAuthValidateApiKeyData(
  client: QueryClient,
  data: AuthValidateApiKeyQueryData,
): AuthValidateApiKeyQueryData | undefined {
  const key = queryKeyAuthValidateApiKey();

  return client.setQueryData<AuthValidateApiKeyQueryData>(key, data);
}

export function invalidateAllAuthValidateApiKey(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-api/speakeasy-client-sdk-typescript",
      "Auth",
      "validateApiKey",
    ],
  });
}

export function buildAuthValidateApiKeyQuery(
  client$: SpeakeasyCore,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<AuthValidateApiKeyQueryData>;
} {
  return {
    queryKey: queryKeyAuthValidateApiKey(),
    queryFn: async function authValidateApiKeyQueryFn(
      ctx,
    ): Promise<AuthValidateApiKeyQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(authValidateApiKey(
        client$,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyAuthValidateApiKey(): QueryKey {
  return [
    "@speakeasy-api/speakeasy-client-sdk-typescript",
    "Auth",
    "validateApiKey",
  ];
}
