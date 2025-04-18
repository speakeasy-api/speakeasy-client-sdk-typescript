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
import { eventsGetTargetsDeprecated } from "../funcs/eventsGetTargetsDeprecated.js";
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

export type EventsGetTargetsDeprecatedQueryData = Array<shared.TargetSDK>;

/**
 * Load targets for a particular workspace
 */
export function useEventsGetTargetsDeprecated(
  request: operations.GetWorkspaceTargetsDeprecatedRequest,
  options?: QueryHookOptions<EventsGetTargetsDeprecatedQueryData>,
): UseQueryResult<EventsGetTargetsDeprecatedQueryData, Error> {
  const client = useSpeakeasyContext();
  return useQuery({
    ...buildEventsGetTargetsDeprecatedQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Load targets for a particular workspace
 */
export function useEventsGetTargetsDeprecatedSuspense(
  request: operations.GetWorkspaceTargetsDeprecatedRequest,
  options?: SuspenseQueryHookOptions<EventsGetTargetsDeprecatedQueryData>,
): UseSuspenseQueryResult<EventsGetTargetsDeprecatedQueryData, Error> {
  const client = useSpeakeasyContext();
  return useSuspenseQuery({
    ...buildEventsGetTargetsDeprecatedQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchEventsGetTargetsDeprecated(
  queryClient: QueryClient,
  client$: SpeakeasyCore,
  request: operations.GetWorkspaceTargetsDeprecatedRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildEventsGetTargetsDeprecatedQuery(
      client$,
      request,
    ),
  });
}

export function setEventsGetTargetsDeprecatedData(
  client: QueryClient,
  queryKeyBase: [
    workspaceId: string | undefined,
    parameters: { afterLastEventCreatedAt?: Date | undefined },
  ],
  data: EventsGetTargetsDeprecatedQueryData,
): EventsGetTargetsDeprecatedQueryData | undefined {
  const key = queryKeyEventsGetTargetsDeprecated(...queryKeyBase);

  return client.setQueryData<EventsGetTargetsDeprecatedQueryData>(key, data);
}

export function invalidateEventsGetTargetsDeprecated(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      workspaceId: string | undefined,
      parameters: { afterLastEventCreatedAt?: Date | undefined },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-api/speakeasy-client-sdk-typescript",
      "Events",
      "getTargetsDeprecated",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllEventsGetTargetsDeprecated(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-api/speakeasy-client-sdk-typescript",
      "Events",
      "getTargetsDeprecated",
    ],
  });
}

export function buildEventsGetTargetsDeprecatedQuery(
  client$: SpeakeasyCore,
  request: operations.GetWorkspaceTargetsDeprecatedRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<EventsGetTargetsDeprecatedQueryData>;
} {
  return {
    queryKey: queryKeyEventsGetTargetsDeprecated(request.workspaceId, {
      afterLastEventCreatedAt: request.afterLastEventCreatedAt,
    }),
    queryFn: async function eventsGetTargetsDeprecatedQueryFn(
      ctx,
    ): Promise<EventsGetTargetsDeprecatedQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(eventsGetTargetsDeprecated(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyEventsGetTargetsDeprecated(
  workspaceId: string | undefined,
  parameters: { afterLastEventCreatedAt?: Date | undefined },
): QueryKey {
  return [
    "@speakeasy-api/speakeasy-client-sdk-typescript",
    "Events",
    "getTargetsDeprecated",
    workspaceId,
    parameters,
  ];
}
