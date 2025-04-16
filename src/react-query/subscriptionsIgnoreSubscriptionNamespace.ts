/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { SpeakeasyCore } from "../core.js";
import { subscriptionsIgnoreSubscriptionNamespace } from "../funcs/subscriptionsIgnoreSubscriptionNamespace.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../sdk/models/operations/index.js";
import { unwrapAsync } from "../sdk/types/fp.js";
import { useSpeakeasyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type SubscriptionsIgnoreSubscriptionNamespaceMutationVariables = {
  request: operations.IgnoreSubscriptionNamespaceRequest;
  options?: RequestOptions;
};

export type SubscriptionsIgnoreSubscriptionNamespaceMutationData = void;

/**
 * Ignored a namespace for a subscription
 */
export function useSubscriptionsIgnoreSubscriptionNamespaceMutation(
  options?: MutationHookOptions<
    SubscriptionsIgnoreSubscriptionNamespaceMutationData,
    Error,
    SubscriptionsIgnoreSubscriptionNamespaceMutationVariables
  >,
): UseMutationResult<
  SubscriptionsIgnoreSubscriptionNamespaceMutationData,
  Error,
  SubscriptionsIgnoreSubscriptionNamespaceMutationVariables
> {
  const client = useSpeakeasyContext();
  return useMutation({
    ...buildSubscriptionsIgnoreSubscriptionNamespaceMutation(client, options),
    ...options,
  });
}

export function mutationKeySubscriptionsIgnoreSubscriptionNamespace(): MutationKey {
  return [
    "@speakeasy-api/speakeasy-client-sdk-typescript",
    "Subscriptions",
    "ignoreSubscriptionNamespace",
  ];
}

export function buildSubscriptionsIgnoreSubscriptionNamespaceMutation(
  client$: SpeakeasyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: SubscriptionsIgnoreSubscriptionNamespaceMutationVariables,
  ) => Promise<SubscriptionsIgnoreSubscriptionNamespaceMutationData>;
} {
  return {
    mutationKey: mutationKeySubscriptionsIgnoreSubscriptionNamespace(),
    mutationFn: function subscriptionsIgnoreSubscriptionNamespaceMutationFn({
      request,
      options,
    }): Promise<SubscriptionsIgnoreSubscriptionNamespaceMutationData> {
      const mergedOptions = {
        ...hookOptions,
        ...options,
        fetchOptions: {
          ...hookOptions?.fetchOptions,
          ...options?.fetchOptions,
          signal: combineSignals(
            hookOptions?.fetchOptions?.signal,
            options?.fetchOptions?.signal,
          ),
        },
      };
      return unwrapAsync(subscriptionsIgnoreSubscriptionNamespace(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
